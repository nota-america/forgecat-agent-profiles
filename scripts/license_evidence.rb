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
    "upstream" => /^-?[ \t]*\*{0,2}upstream\*{0,2}:[ \t]*(\S.*)$/i,
    "scope" => /^-?[ \t]*\*{0,2}scope\*{0,2}:[ \t]*(\S.*)$/i,
    "exceptions" => /^-?[ \t]*\*{0,2}exceptions\*{0,2}:[ \t]*(\S.*)$/i
  }.freeze

  # Provenance has to name one revision, so an abbreviated SHA will not do: a
  # short prefix can grow ambiguous as the upstream gains commits, and it cannot
  # be compared against a match receipt.
  FULL_SHA = /[0-9a-f]{40}/.freeze
  PINNED_URL = %r{\Ahttps://\S+/(?:tree|blob|raw)/#{FULL_SHA}/\S+\z}.freeze
  PINNED_REPOSITORY = %r{/(?:tree|blob)/(#{FULL_SHA})(?:/|\z)}.freeze

  module_function

  # Only the for-forgecat package is what the registry tarballs and installs.
  # A license file that sits in for-claude/ or at the profile root travels with
  # the repository but not with the artifact users receive, so it cannot stand
  # as evidence for what was distributed.
  def package_dir(profile_dir)
    File.join(profile_dir, "for-forgecat")
  end

  def license_file(profile_dir)
    Dir.glob(File.join(package_dir(profile_dir), "**", "LICENSE*"), File::FNM_CASEFOLD)
       .reject { |path| File.basename(path) == "LICENSE-SOURCE.md" }
       .min
  end

  def license_source_path(profile_dir)
    File.join(package_dir(profile_dir), "LICENSE-SOURCE.md")
  end

  # Returns the reasons the note is unusable, empty when it holds up.
  def license_source_problems(path)
    return ["is missing"] unless File.exist?(path)

    text = File.read(path, encoding: "UTF-8")
    problems = []
    upstream = nil

    REQUIRED_SOURCE_FIELDS.each do |field, pattern|
      value = text[pattern, 1]
      if value.nil?
        problems << "has no `#{field}:` line"
      elsif field == "upstream"
        upstream = value.strip
      end
    end

    # Check the captured value rather than the document: a pinned link anywhere
    # else in the note says nothing about where these terms were read from.
    if upstream
      link = upstream[%r{https://\S+}]
      if link.nil?
        problems << "`upstream:` has no URL"
      elsif !link.match?(PINNED_URL)
        problems << "`upstream:` must link a path pinned to a full 40-character commit — #{link}"
      end
    end

    problems << "quotes no upstream terms (indent them as a `>` block)" unless text.match?(/^[ \t]*>[ \t]*\S/)
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

    lines[1, closing].any? { |line| line.match?(/^license:[ \t]*\S/) }
  rescue ArgumentError, Errno::EISDIR
    false
  end

  def frontmatter_file(profile_dir)
    Dir.glob(File.join(package_dir(profile_dir), "**", "*.md")).sort.find { |path| frontmatter_license?(path) }
  end

  # profile-path <TAB> commit <TAB> optional note. Written by the matcher once a
  # profile's files have been compared against a specific upstream revision.
  def receipts(path)
    return {} unless File.exist?(path)

    pairs = File.readlines(path, chomp: true).map do |line|
      next if line.empty? || line.start_with?("#")

      profile, commit, = line.split("\t")
      [profile, commit] if profile && commit&.match?(/\A#{FULL_SHA}\z/)
    end
    pairs.compact.to_h
  end

  def pinned_commit(url)
    url.to_s[PINNED_REPOSITORY, 1]
  end

  # [kind, path] with kind one of license-file, license-source, frontmatter, none.
  def classify(profile_dir)
    file = license_file(profile_dir)
    return ["license-file", file] if file

    note = license_source_path(profile_dir)
    return ["license-source", note] if license_source?(note)

    frontmatter = frontmatter_file(profile_dir)
    return ["frontmatter", frontmatter] if frontmatter

    ["none", nil]
  end
end
