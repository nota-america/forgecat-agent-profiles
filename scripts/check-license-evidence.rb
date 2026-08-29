#!/usr/bin/env ruby
# frozen_string_literal: true

# Gates license provenance on profiles a pull request adds or changes.
#
# The existing catalog predates these rules, so the check only runs against the
# manifests touched by the diff. Everything already on main stays in the audit
# table (scripts/license-audit.rb) as a baseline instead of failing CI.
#
# A touched profile must:
#   - declare an SPDX identifier (or a LicenseRef-* for custom terms)
#   - point `repository` at an exact commit, not a moving branch
#   - carry a match receipt confirming its files against that commit
#   - redistribute the evidence: an upstream LICENSE file, a LICENSE-SOURCE.md
#     quoting the upstream terms and their scope, or a shipped file whose
#     frontmatter carries the upstream author's own `license:` line
#
# Profiles listed in scripts/license-baseline.txt shipped before the pin and
# evidence rules existed. They are held to the license-string rule only, so the
# baseline can be repaired one profile at a time instead of having every fix
# blocked by the gaps it is meant to close. Drop a profile from that list once
# it carries a pinned source and its evidence.

require "set"
require "English"
require_relative "license_evidence"

ROOT = File.expand_path("..", __dir__)
PROFILE_GLOB = File.join(ROOT, "profiles/**/for-forgecat/profile.yml")
BASELINE_LIST = File.join(ROOT, "scripts/license-baseline.txt")
RECEIPTS = File.join(ROOT, "scripts/license-matches.tsv")

# Licences a new profile may declare without a human deciding first. The list is
# deliberately short: everything here lets ForgeCat copy the files into the
# registry and hand them to users if the notices travel along, which is all the
# gate can verify on its own.
AUTO_ALLOWED = Set.new(%w[
  0BSD
  Apache-2.0
  BSD-2-Clause
  BSD-3-Clause
  CC0-1.0
  ISC
  MIT
  MIT-0
  Unlicense
]).freeze

# Recognised, but each carries an obligation that depends on what the profile
# does rather than on what it declares — share-alike on a converted package,
# attribution terms, or bespoke wording. They need a person, so the gate names
# them instead of guessing.
NEEDS_REVIEW = Set.new(%w[
  AGPL-3.0-only
  AGPL-3.0-or-later
  CC-BY-4.0
  CC-BY-NC-4.0
  CC-BY-ND-4.0
  CC-BY-SA-4.0
  GPL-2.0-only
  GPL-3.0-only
  GPL-3.0-or-later
  LGPL-3.0-only
  MPL-2.0
]).freeze

def fail_with(errors)
  return if errors.empty?

  warn "License evidence check failed:"
  errors.each { |error| warn "- #{error}" }
  warn "See CONTRIBUTING.md \"License and Attribution\"."
  exit 1
end

def profile_root(manifest_path)
  File.expand_path("..", File.dirname(manifest_path))
end

def relative(path)
  path.delete_prefix("#{ROOT}/")
end

def changed_files(range)
  command = ["git", "diff", "--name-only", range]
  output = IO.popen(command, chdir: ROOT, &:read)
  abort "Failed to run #{command.join(" ")}" unless $CHILD_STATUS.success?

  output.lines.map(&:strip).reject(&:empty?)
end

def changed_profile_manifests(range, manifest_paths)
  files = changed_files(range)
  return [] if files.empty?

  manifest_paths.select do |manifest|
    root = "#{relative(profile_root(manifest))}/"
    files.any? { |file| file.start_with?(root) }
  end
end

def field(manifest, name)
  manifest[/^#{name}:[ \t]*(.+)$/, 1]&.strip
end

# LicenseRef-* is how a custom licence is named, not a reason to accept one.
# Until a review receipt exists to point at, a new custom declaration needs the
# same human decision as the copyleft identifiers.
def license_problem(license)
  return nil if AUTO_ALLOWED.include?(license)

  if NEEDS_REVIEW.include?(license)
    "`license: #{license}` needs review before a new profile can ship it — open an issue with the redistribution terms"
  elsif license.start_with?("LicenseRef-")
    "`license: #{license}` is a custom licence and needs review before a new profile can ship it"
  else
    "`license: #{license}` is not on the accepted list (#{AUTO_ALLOWED.to_a.join(", ")})"
  end
end

def pinned?(url)
  !LicenseEvidence.pinned_commit(url).nil?
end

# Additions to the baseline list would exempt a profile from the pin and evidence
# rules, so a PR could clear the gate by naming itself. Removals are how the
# baseline shrinks and stay allowed.
def baseline_diff(range)
  command = ["git", "show", "#{range.split("..").first}:scripts/license-baseline.txt"]
  before = IO.popen(command, chdir: ROOT, err: File::NULL, &:read)
  return [[], []] unless $CHILD_STATUS.success?

  previous = before.lines.map(&:strip).reject(&:empty?)
  current = File.readlines(BASELINE_LIST, chomp: true).reject(&:empty?)
  [current - previous, previous - current]
end

receipts = LicenseEvidence.receipts(RECEIPTS)
baseline = Set.new(File.exist?(BASELINE_LIST) ? File.readlines(BASELINE_LIST, chomp: true).reject(&:empty?) : [])

manifest_paths = Dir.glob(PROFILE_GLOB).sort

range = nil
if ARGV.first == "--changed-only"
  range = ARGV[1]
  abort "Usage: check-license-evidence.rb [--changed-only <range>]" if range.nil? || range.empty?
  manifest_paths = changed_profile_manifests(range, manifest_paths)
end

errors = []

unless range.nil?
  added, removed = baseline_diff(range)
  added.each do |entry|
    errors << "#{entry}: added to scripts/license-baseline.txt — the baseline may only shrink"
  end
  # An entry that only exists because this diff added it grants no exemption, so
  # the profile is still held to the full rules below.
  baseline -= added

  # Removing an entry is how a profile graduates, and a PR that only edits the
  # list would otherwise touch no profile path and be checked against nothing.
  graduating = removed.map { |entry| File.join(ROOT, entry, "for-forgecat/profile.yml") }.select { |path| File.exist?(path) }
  manifest_paths = (manifest_paths + graduating).uniq.sort
end

if manifest_paths.empty?
  fail_with(errors)
  puts "License evidence check: no profiles touched."
  exit 0
end

manifest_paths.each do |manifest_path|
  manifest = File.read(manifest_path, encoding: "UTF-8")
  name = relative(profile_root(manifest_path))

  license = field(manifest, "license")
  legacy = baseline.include?(name)

  if license.nil? || license.empty?
    errors << "#{name}: missing `license`"
  elsif %w[Unknown None].include?(license)
    errors << "#{name}: `license: #{license}` cannot be published — resolve the upstream terms first"
  elsif !legacy && (problem = license_problem(license))
    errors << "#{name}: #{problem}"
  end

  # The sixteen baseline profiles that spell their terms out in prose ship the
  # upstream license file alongside them, so they are the best-evidenced entries
  # in the catalog. Rewriting them into an SPDX identifier we picked would lose
  # that, not improve it.
  next if legacy

  repository = field(manifest, "repository")
  if repository.nil? || repository.empty?
    errors << "#{name}: missing `repository`"
  elsif !pinned?(repository)
    errors << "#{name}: `repository` must pin a full 40-character commit, not a branch or short SHA — #{repository}"
  elsif !receipts.key?(name)
    errors << "#{name}: no match receipt in scripts/license-matches.tsv — run the matcher and record the revision its files were confirmed against"
  elsif receipts[name] != LicenseEvidence.pinned_commit(repository)
    errors << "#{name}: `repository` pins #{LicenseEvidence.pinned_commit(repository)} but the match receipt records #{receipts[name]}"
  end

  kind, = LicenseEvidence.classify(profile_root(manifest_path))
  if kind == "none"
    note = LicenseEvidence.license_source_path(profile_root(manifest_path))
    if File.exist?(note)
      LicenseEvidence.license_source_problems(note).each do |problem|
        errors << "#{name}: for-forgecat/LICENSE-SOURCE.md #{problem}"
      end
    else
      errors << "#{name}: for-forgecat/ ships no license evidence (upstream LICENSE file, LICENSE-SOURCE.md, or upstream frontmatter `license:`)"
    end
  end
end

fail_with(errors)
puts "License evidence check passed for #{manifest_paths.length} profile(s)."
