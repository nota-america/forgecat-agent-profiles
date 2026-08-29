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

ROOT = File.expand_path("..", __dir__)
PROFILE_GLOB = File.join(ROOT, "profiles/**/for-forgecat/profile.yml")
BASELINE_LIST = File.join(ROOT, "scripts/license-baseline.txt")

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
  !url[%r{/(?:tree|blob)/[0-9a-f]{7,40}(?:/|$)}].nil?
end

def evidence?(profile_dir, package_dir)
  return true if Dir.glob(File.join(profile_dir, "**", "LICENSE*"), File::FNM_CASEFOLD).any?
  return true if File.exist?(File.join(profile_dir, "LICENSE-SOURCE.md"))

  Dir.glob(File.join(package_dir, "**", "*.md")).any? do |path|
    File.foreach(path, encoding: "UTF-8").first(20).any? { |line| line.start_with?("license:") }
  end
end

baseline = Set.new(File.exist?(BASELINE_LIST) ? File.readlines(BASELINE_LIST, chomp: true).reject(&:empty?) : [])

manifest_paths = Dir.glob(PROFILE_GLOB).sort

range = nil
if ARGV.first == "--changed-only"
  range = ARGV[1]
  abort "Usage: check-license-evidence.rb [--changed-only <range>]" if range.nil? || range.empty?
  manifest_paths = changed_profile_manifests(range, manifest_paths)
end

if manifest_paths.empty?
  puts "License evidence check: no profiles touched."
  exit 0
end

errors = []

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
    errors << "#{name}: `repository` must pin an exact commit, not a branch — #{repository}"
  end

  unless evidence?(profile_root(manifest_path), File.dirname(manifest_path))
    errors << "#{name}: ships no license evidence (upstream LICENSE file, LICENSE-SOURCE.md, or frontmatter `license:`)"
  end
end

fail_with(errors)
puts "License evidence check passed for #{manifest_paths.length} profile(s)."
