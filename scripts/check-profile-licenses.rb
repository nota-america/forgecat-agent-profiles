#!/usr/bin/env ruby

require "optparse"
require "pathname"
require "yaml"

ROOT = Pathname(__dir__).parent.expand_path
EXCEPTIONS_PATH = ROOT.join("config/license-policy-exceptions.yml")
LICENSE_FILE_PATTERN = /\A(?:licen[cs]e|copying)(?:\..*)?\z/i
SPDX_ATOM = /(?:[A-Za-z0-9][A-Za-z0-9.+-]*|LicenseRef-[A-Za-z0-9.+-]+)/
SPDX_EXPRESSION = /\A#{SPDX_ATOM}(?:\s+(?:AND|OR|WITH)\s+#{SPDX_ATOM})*\z/
UNRESOLVED_LICENSES = ["", "None", "Unknown", "NOASSERTION"].freeze
MANUAL_EXCEPTION_RULES = ["source-license-postdates-profile"].freeze

options = { strict: false }
OptionParser.new do |parser|
  parser.on("--strict", "Treat approved policy exceptions as errors") do
    options[:strict] = true
  end
end.parse!

exception_data = File.exist?(EXCEPTIONS_PATH) ? YAML.load_file(EXCEPTIONS_PATH) : {}
exception_rows = exception_data.fetch("exceptions", [])
exceptions = {}
exception_rows.each do |row|
  profile = row.fetch("profile")
  reason = row.fetch("reason")
  row.fetch("rules").each do |rule|
    key = [profile, rule]
    abort "Duplicate license exception: #{profile} #{rule}" if exceptions.key?(key)
    exceptions[key] = reason
  end
end

used_exceptions = {}
errors = []
warnings = []

record = lambda do |profile, rule, message|
  key = [profile, rule]
  if exceptions.key?(key)
    used_exceptions[key] = true
    target = options[:strict] ? errors : warnings
    target << "#{profile} [#{rule}] #{message} (exception: #{exceptions[key]})"
  else
    errors << "#{profile} [#{rule}] #{message}"
  end
end

exceptions.each do |(profile, rule), reason|
  next unless MANUAL_EXCEPTION_RULES.include?(rule)

  used_exceptions[[profile, rule]] = true
  target = options[:strict] ? errors : warnings
  target << "#{profile} [#{rule}] manual review required (exception: #{reason})"
end

detect_license = lambda do |text|
  if text.include?("MIT No Attribution") || text.match?(/MIT-0/i)
    "MIT-0"
  elsif text.include?("Apache License") && text.include?("Version 2.0")
    "Apache-2.0"
  elsif text.include?("Permission is hereby granted, free of charge")
    "MIT"
  elsif text.match?(/Attribution-ShareAlike 4\.0|CC BY-SA 4\.0/i)
    "CC-BY-SA-4.0"
  end
end

restricted_license = lambda do |license, text|
  explicit_restrictions = text.match?(/ADDITIONAL RESTRICTIONS/i) &&
    text.match?(/Distribute, sublicense, or transfer/i)
  custom_all_rights = !license.match?(SPDX_EXPRESSION) &&
    text.match?(/All rights reserved/i)
  explicit_restrictions || custom_all_rights
end

manifest_paths = Dir.glob(ROOT.join("profiles/**/for-forgecat/profile.yml")).sort

manifest_paths.each do |manifest_path|
  manifest = YAML.load_file(manifest_path) || {}
  profile = manifest.fetch("name", manifest_path.sub("#{ROOT}/", ""))
  package_dir = Pathname(manifest_path).dirname
  readme_path = package_dir.join("README.md")
  readme = File.exist?(readme_path) ? File.read(readme_path, encoding: "UTF-8") : ""
  repository = manifest.fetch("repository", "").to_s
  license = manifest.fetch("license", "").to_s.strip

  record.call(profile, "source-attribution", "repository must be a GitHub URL") unless
    repository.match?(%r{\Ahttps://github\.com/[^/]+/[^/]+})

  source_root = repository.sub(%r{/tree/.*\z}, "")
  record.call(profile, "source-attribution", "README does not link to #{source_root}") unless
    !source_root.empty? && readme.include?(source_root)

  record.call(profile, "modification-note", "README is missing '## Conversion and modifications'") unless
    readme.include?("## Conversion and modifications")

  unless license.match?(SPDX_EXPRESSION) && !UNRESOLVED_LICENSES.include?(license)
    record.call(profile, "license-spdx", "license is not a usable SPDX expression: #{license.inspect}")
  end

  if manifest.fetch("visibility", "public") == "public" && UNRESOLVED_LICENSES.include?(license)
    record.call(profile, "public-license", "public profile has unresolved license #{license.inspect}")
  end

  license_files = Dir.glob(package_dir.join("**/*"), File::FNM_DOTMATCH).select do |path|
    File.file?(path) && File.basename(path).match?(LICENSE_FILE_PATTERN)
  end

  if license_files.empty?
    record.call(profile, "license-file", "shipping package does not contain a LICENSE or COPYING file")
    next
  end

  relative_license_paths = license_files.map do |path|
    Pathname(path).relative_path_from(package_dir).to_s
  end
  unless relative_license_paths.any? { |path| readme.include?(path) }
    record.call(profile, "license-readme-link", "README does not link to an included license file")
  end

  license_text = license_files.map { |path| File.read(path, encoding: "UTF-8", invalid: :replace, undef: :replace) }.join("\n")
  copyright_lines = license_text.lines.grep(/copyright|©/i).reject do |line|
    line.match?(/\[yyyy\]|\[name of copyright owner\]/i)
  end
  record.call(profile, "copyright-notice", "included license has no concrete copyright notice") if
    copyright_lines.empty?

  detected = detect_license.call(license_text)
  if detected && license.match?(SPDX_EXPRESSION) && license != detected
    record.call(profile, "license-content", "manifest says #{license}, included license appears to be #{detected}")
  end

  if manifest.fetch("visibility", "public") == "public" && restricted_license.call(license, license_text)
    record.call(profile, "restricted-license", "public package contains redistribution-restricted terms")
  end
end

unused = exceptions.keys.reject { |key| used_exceptions[key] }
unused.each do |profile, rule|
  errors << "#{profile} [#{rule}] stale exception no longer matches an audit finding"
end

warnings.each { |warning| warn "WARN: #{warning}" }
errors.each { |error| warn "ERROR: #{error}" }

puts "License policy check: profiles=#{manifest_paths.size}, warnings=#{warnings.size}, errors=#{errors.size}"
exit(errors.empty? ? 0 : 1)
