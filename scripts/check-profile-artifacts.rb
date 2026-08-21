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
end

fail_with(errors)

puts "Profile artifact check passed"
puts "profiles=#{manifest_paths.length}"
