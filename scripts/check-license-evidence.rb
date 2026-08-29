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

SPDX_IDENTIFIERS = Set.new(%w[
  Apache-2.0
  BSD-2-Clause
  BSD-3-Clause
  CC-BY-4.0
  CC-BY-SA-4.0
  CC0-1.0
  GPL-3.0-only
  ISC
  MIT
  MIT-0
  MPL-2.0
  Unlicense
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

def spdx?(license)
  SPDX_IDENTIFIERS.include?(license) || license.start_with?("LicenseRef-")
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
  elsif !spdx?(license) && !legacy
    errors << "#{name}: `license: #{license}` is not an SPDX identifier (use LicenseRef-* for custom terms)"
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
  elsif receipts.key?(name) && receipts[name] != LicenseEvidence.pinned_commit(repository)
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
