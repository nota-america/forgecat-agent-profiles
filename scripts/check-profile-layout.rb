#!/usr/bin/env ruby
# frozen_string_literal: true

require "pathname"
require "uri"
require "yaml"

ROOT = Pathname.new(__dir__).parent
PROFILES_ROOT = ROOT.join("profiles")

def source_owner_and_repository(repository_url)
  uri = URI(repository_url)
  path_parts = uri.path.sub(%r{\A/}, "").sub(/\.git\z/, "").split("/")

  unless uri.host&.end_with?("github.com") && path_parts.length >= 2
    raise ArgumentError, "repository must be a GitHub URL with owner/repository"
  end

  path_parts.first(2).map(&:downcase)
rescue URI::InvalidURIError
  raise ArgumentError, "repository must be a valid URL"
end

errors = []
manifests = Dir.glob(PROFILES_ROOT.join("**/for-forgecat/profile.yml")).sort

manifests.each do |manifest_path|
  manifest = YAML.load_file(manifest_path)
  repository = manifest["repository"].to_s.strip

  if repository.empty?
    errors << "#{Pathname.new(manifest_path).relative_path_from(ROOT)}: missing repository"
    next
  end

  owner, repository_name = source_owner_and_repository(repository)
  expected_prefix = Pathname.new("profiles").join(owner, repository_name).to_s
  actual_profile_path = Pathname.new(manifest_path)
                                .dirname
                                .parent
                                .relative_path_from(ROOT)
                                .to_s

  next if actual_profile_path == expected_prefix ||
          actual_profile_path.start_with?("#{expected_prefix}/")

  errors << "#{actual_profile_path}: expected to live under #{expected_prefix}"
rescue ArgumentError => e
  errors << "#{Pathname.new(manifest_path).relative_path_from(ROOT)}: #{e.message}"
end

if errors.empty?
  puts "Profile layout OK: #{manifests.length} manifests checked"
else
  warn "Profile layout check failed:"
  errors.each { |error| warn "  - #{error}" }
  exit 1
end
