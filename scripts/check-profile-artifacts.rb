#!/usr/bin/env ruby
# frozen_string_literal: true

require "yaml"
require "set"
require "English"

ROOT = File.expand_path("..", __dir__)
PROFILE_GLOB = File.join(ROOT, "profiles/**/for-forgecat/profile.yml")

KNOWN_PLATFORMS = Set.new(%w[claude-code cursor codex openclaw hermes]).freeze

PROJECT_PLATFORM_ARTIFACTS = {
  "claude-code" => "for-claude",
  "cursor" => "for-cursor",
  "codex" => "for-codex"
}.freeze

# READMEs we author, and therefore have to keep true. `for-<platform>/` holds
# artifacts captured from a real install (see CONTRIBUTING "Platform
# Compatibility"), so those copies legitimately describe the version that was
# installed rather than the one in the manifest — checking them would ask a
# receipt to change after the fact.
AUTHORED_READMES = {
  "README.md" => :optional,
  "for-forgecat/README.md" => :required
}.freeze

# `| Field | Value |` rows in the README "Details" table that restate a
# manifest field. render-readme.py writes them straight from profile.yml, so a
# disagreement means one of the two was edited alone.
#
# Only License so far. The neighbouring `| Version |` row would be the obvious
# second entry, but 180 of the 193 manifests carry no `version:` key at all, so
# the rule would cover 13 profiles and read as if it covered every one.
DETAILS_ROWS = {
  "License" => "license"
}.freeze

def fail_with(errors)
  return if errors.empty?

  warn "Profile artifact check failed:"
  errors.each { |error| warn "- #{error}" }
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

  changed = Set.new

  manifest_paths.each do |manifest|
    root = relative(profile_root(manifest))
    files.each do |file|
      next unless file == relative(manifest) || file.start_with?("#{root}/")

      changed << manifest
      break
    end
  end

  changed.to_a.sort
end

def details_row(text, field)
  match = text.match(/^\|\s*#{Regexp.escape(field)}\s*\|\s*(.*?)\s*\|\s*$/)
  match && match[1]
end

# Some READMEs wrap the value in backticks and some do not; both are honest
# renderings of the same string, so compare the string itself.
def unwrap(value)
  value.strip.sub(/\A`(.*)`\z/, '\1').strip
end

def read_utf8(path)
  File.read(path, encoding: "UTF-8")
end

def readme_row_errors(manifest_path, profile)
  root = profile_root(manifest_path)
  errors = []

  AUTHORED_READMES.each do |readme, presence|
    path = File.join(root, readme)
    unless File.exist?(path)
      next unless presence == :required

      errors << "#{relative(manifest_path)} has no #{relative(path)} to describe the package"
      next
    end

    text = read_utf8(path)

    DETAILS_ROWS.each do |field, key|
      expected = profile[key]
      next if expected.nil? || expected.to_s.strip.empty?

      expected = expected.to_s.strip
      actual = details_row(text, field)

      if actual.nil?
        next unless presence == :required

        errors << "#{relative(path)} has no `| #{field} |` row, so it cannot agree with #{key}: #{expected.inspect}"
        next
      end

      actual = unwrap(actual)
      next if actual == expected

      errors << "#{relative(path)} says #{field} #{actual.inspect} but #{relative(manifest_path)} declares #{key}: #{expected.inspect} — re-render the README instead of editing one side"
    end
  end

  errors
end

range = nil
if ARGV[0] == "--changed-only"
  range = ARGV[1] || abort("Usage: ruby scripts/check-profile-artifacts.rb --changed-only <git-range>")
elsif ARGV.any?
  abort("Usage: ruby scripts/check-profile-artifacts.rb [--changed-only <git-range>]")
end

manifest_paths = Dir.glob(PROFILE_GLOB).sort
manifest_paths = changed_profile_manifests(range, manifest_paths) if range

if manifest_paths.empty?
  puts "No profiles to check"
  exit 0
end

errors = []

manifest_paths.each do |manifest_path|
  profile = YAML.load_file(manifest_path)
  platforms = profile.dig("compatibility", "platforms") || {}
  tested = Array(platforms["tested"])
  partial = Array(platforms["partial"])
  root = profile_root(manifest_path)

  unknown = (tested + partial).uniq - KNOWN_PLATFORMS.to_a
  unknown.each do |platform|
    errors << "#{relative(manifest_path)} uses unknown platform #{platform.inspect}"
  end

  overlap = tested & partial
  overlap.each do |platform|
    errors << "#{relative(manifest_path)} lists #{platform.inspect} in both tested and partial"
  end

  tested.each do |platform|
    artifact_dir = PROJECT_PLATFORM_ARTIFACTS[platform]
    next unless artifact_dir

    artifact_path = File.join(root, artifact_dir)
    unless Dir.exist?(artifact_path)
      errors << "#{relative(manifest_path)} marks #{platform.inspect} tested but is missing #{relative(artifact_path)}/"
      next
    end

    if Dir.empty?(artifact_path)
      errors << "#{relative(manifest_path)} marks #{platform.inspect} tested but #{relative(artifact_path)}/ is empty"
    end
  end

  errors.concat(readme_row_errors(manifest_path, profile))
end

fail_with(errors)

puts "Profile artifact check passed"
puts "profiles=#{manifest_paths.length}"
