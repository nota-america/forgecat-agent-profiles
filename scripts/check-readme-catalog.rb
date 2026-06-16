#!/usr/bin/env ruby
# frozen_string_literal: true

require "set"

ROOT = File.expand_path("..", __dir__)
README = File.join(ROOT, "README.md")

def fail_with(errors)
  return if errors.empty?

  warn "README catalog check failed:"
  errors.each { |error| warn "- #{error}" }
  exit 1
end

def read(path)
  File.read(path)
rescue Errno::ENOENT
  abort "Missing required file: #{path}"
end

manifest_paths = Dir.glob(File.join(ROOT, "profiles/**/for-forgecat/profile.yml")).sort
profile_count = manifest_paths.length

collection_counts = Hash.new(0)
manifest_paths.each do |path|
  relative = path.delete_prefix("#{ROOT}/")
  segments = relative.split("/")
  next unless segments[0] == "profiles" && segments.length >= 4

  collection = "#{segments[1]}/#{segments[2]}"
  collection_counts[collection] += 1
end

readme = read(README)
errors = []

expected_summary = "Total: #{profile_count} profiles across #{collection_counts.length} collections."
errors << "expected README summary #{expected_summary.inspect}" unless readme.include?(expected_summary)

expected_profile_badge = "profiles-#{profile_count}-blue"
errors << "expected profile badge to include #{expected_profile_badge.inspect}" unless readme.include?(expected_profile_badge)

expected_collection_badge = "collections-#{collection_counts.length}-blue"
errors << "expected collection badge to include #{expected_collection_badge.inspect}" unless readme.include?(expected_collection_badge)

rows = {}
readme.each_line do |line|
  match = line.match(%r{\|\s*\[([^\]]+)\]\(\./profiles/([^)]+)\)\s*\|\s*(\d+)\s*\|})
  next unless match

  label = match[1]
  path = match[2]
  count = match[3].to_i
  errors << "collection row label #{label.inspect} does not match path #{path.inspect}" unless label == path
  rows[path] = count
end

expected_collections = collection_counts.keys.to_set
actual_collections = rows.keys.to_set

(expected_collections - actual_collections).sort.each do |collection|
  errors << "missing README collection row for #{collection}"
end

(actual_collections - expected_collections).sort.each do |collection|
  errors << "README has stale collection row for #{collection}"
end

collection_counts.sort.each do |collection, expected_count|
  actual_count = rows[collection]
  next if actual_count == expected_count

  errors << "README collection #{collection} count is #{actual_count.inspect}, expected #{expected_count}"
end

readme.scan(/\]\((\.\/[^)#]+)(?:#[^)]+)?\)/).flatten.uniq.sort.each do |relative_link|
  path = File.join(ROOT, relative_link.delete_prefix("./"))
  errors << "README local link target does not exist: #{relative_link}" unless File.exist?(path)
end

fail_with(errors)

puts "README catalog check passed"
puts "profiles=#{profile_count}"
puts "collections=#{collection_counts.length}"
