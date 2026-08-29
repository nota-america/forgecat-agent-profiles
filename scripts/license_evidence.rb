# frozen_string_literal: true

# Shared rules for what counts as license evidence shipped with a profile.
# check-license-evidence.rb enforces them on touched profiles and
# license-audit.rb reports them for the whole catalog, so both have to agree on
# what "evidence" means.

module LicenseEvidence
  # LICENSE-SOURCE.md exists for upstreams that declare their terms somewhere
  # other than a license file. It has to carry enough to re-check the claim
  # without it: where the terms were read from at a fixed revision, what they
  # cover, and what they do not. A file that only names a license is the same
  # unsourced assertion as the manifest field.
  REQUIRED_SOURCE_FIELDS = {
    "upstream" => /^-?\s*\*{0,2}upstream\*{0,2}:\s*(\S.*)$/i,
    "scope" => /^-?\s*\*{0,2}scope\*{0,2}:\s*(\S.*)$/i,
    "exceptions" => /^-?\s*\*{0,2}exceptions\*{0,2}:\s*(\S.*)$/i
  }.freeze

  PINNED_URL = %r{https://\S*/(?:tree|blob|raw)/[0-9a-f]{7,40}/\S+}.freeze

  module_function

  def license_file(profile_dir)
    Dir.glob(File.join(profile_dir, "**", "LICENSE*"), File::FNM_CASEFOLD)
       .reject { |path| File.basename(path) == "LICENSE-SOURCE.md" }
       .min
  end

  # Returns the reasons the note is unusable, empty when it holds up.
  def license_source_problems(path)
    return ["missing"] unless File.exist?(path)

    text = File.read(path, encoding: "UTF-8")
    problems = REQUIRED_SOURCE_FIELDS.map do |field, pattern|
      "no `#{field}:` line" unless text.match?(pattern)
    end.compact
    problems << "`upstream:` must link a pinned upstream path" unless text.match?(PINNED_URL)
    problems << "no quoted upstream terms (indent them as a `>` block)" unless text.match?(/^\s*>\s*\S/)
    problems
  end

  def license_source?(path)
    license_source_problems(path).empty?
  end

  # Only a real YAML frontmatter block counts. A `license:` line anywhere else in
  # a document is prose — often the profile restating its own manifest field,
  # which is the claim rather than evidence for it.
  def frontmatter_license?(path)
    lines = File.foreach(path, encoding: "UTF-8").first(64) || []
    return false unless lines.first&.chomp == "---"

    closing = lines[1..]&.index { |line| %w[--- ...].include?(line.chomp) }
    return false if closing.nil?

    lines[1, closing].any? { |line| line.match?(/^license:\s*\S/) }
  rescue ArgumentError, Errno::EISDIR
    false
  end

  def frontmatter_file(package_dir)
    Dir.glob(File.join(package_dir, "**", "*.md")).sort.find { |path| frontmatter_license?(path) }
  end

  # [kind, path] with kind one of license-file, license-source, frontmatter, none.
  def classify(profile_dir, package_dir)
    file = license_file(profile_dir)
    return ["license-file", file] if file

    note = File.join(profile_dir, "LICENSE-SOURCE.md")
    return ["license-source", note] if license_source?(note)

    frontmatter = frontmatter_file(package_dir)
    return ["frontmatter", frontmatter] if frontmatter

    ["none", nil]
  end
end
