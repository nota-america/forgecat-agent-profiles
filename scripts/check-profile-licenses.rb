#!/usr/bin/env ruby

require "optparse"
require "digest"
require "pathname"
require "strscan"
require "yaml"

ROOT = Pathname(ENV.fetch("FORGECAT_ROOT", Pathname(__dir__).parent.expand_path.to_s)).expand_path
EXCEPTIONS_PATH = ROOT.join("config/license-policy-exceptions.yml")
LICENSE_FILE_PATTERN = /\A(?:licen[cs]e|copying)(?:\..*)?\z/i
SPDX_LICENSE_IDS = %w[Apache-2.0 CC-BY-SA-4.0 MIT MIT-0].freeze
SPDX_EXCEPTION_IDS = %w[Classpath-exception-2.0 LLVM-exception].freeze
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
  evidence_sha256 = row.fetch("evidence_sha256")
  row.fetch("rules").each do |rule|
    key = [profile, rule]
    abort "Duplicate license exception: #{profile} #{rule}" if exceptions.key?(key)
    exceptions[key] = {reason: reason, evidence_sha256: evidence_sha256}
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
    target << "#{profile} [#{rule}] #{message} (exception: #{exceptions[key][:reason]})"
  else
    errors << "#{profile} [#{rule}] #{message}"
  end
end

exceptions.each do |(profile, rule), details|
  next unless MANUAL_EXCEPTION_RULES.include?(rule)

  used_exceptions[[profile, rule]] = true
  target = options[:strict] ? errors : warnings
  target << "#{profile} [#{rule}] manual review required (exception: #{details[:reason]})"
end

evidence_digest = lambda do |package_dir|
  paths = Dir.glob(package_dir.join("**/*"), File::FNM_DOTMATCH).select do |path|
    next false unless File.file?(path)
    basename = File.basename(path)
    %w[profile.yml README.md].include?(basename) || basename.match?(LICENSE_FILE_PATTERN) || basename.match?(/\Anotice(?:\..*)?\z/i)
  end.sort
  digest = Digest::SHA256.new
  paths.each do |path|
    digest << Pathname(path).relative_path_from(package_dir).to_s << "\0" << File.binread(path) << "\0"
  end
  digest.hexdigest
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

valid_spdx_expression = lambda do |expression|
  scanner = StringScanner.new(expression)
  tokens = []
  until scanner.eos?
    scanner.skip(/\s+/)
    break if scanner.eos?
    token = scanner.scan(/\(|\)|AND\b|OR\b|WITH\b|LicenseRef-[A-Za-z0-9.+-]+|[A-Za-z0-9][A-Za-z0-9.+-]*/)
    break tokens = nil unless token
    tokens << token
  end

  parse_factor = nil
  parse_expression = nil
  index = 0
  parse_factor = lambda do
    if tokens&.[](index) == "("
      index += 1
      return false unless parse_expression.call
      return false unless tokens[index] == ")"
      index += 1
      true
    elsif SPDX_LICENSE_IDS.include?(tokens&.[](index)) || tokens&.[](index)&.start_with?("LicenseRef-")
      index += 1
      if tokens[index] == "WITH"
        index += 1
        return false unless SPDX_EXCEPTION_IDS.include?(tokens[index])
        index += 1
      end
      true
    else
      false
    end
  end
  parse_expression = lambda do
    return false unless parse_factor.call
    while %w[AND OR].include?(tokens[index])
      index += 1
      return false unless parse_factor.call
    end
    true
  end

  tokens && !tokens.empty? && parse_expression.call && index == tokens.length
end

external_terms_pointer = lambda do |text|
  text.bytesize < 2_000 && text.match?(%r{https?://}) && text.match?(/governed by .* terms/i) &&
    !text.match?(/permission is hereby granted|apache license|creative commons/i)
end

restricted_license = lambda do |license, text|
  explicit_restrictions = text.match?(/ADDITIONAL RESTRICTIONS/i) &&
    text.match?(/Distribute, sublicense, or transfer/i)
  custom_all_rights = (license.include?("LicenseRef-") || !valid_spdx_expression.call(license)) &&
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

  expected_evidence = exceptions.each_with_object([]) do |((exception_profile, _rule), details), values|
    values << details[:evidence_sha256] if exception_profile == profile
  end.uniq
  if expected_evidence.any? && expected_evidence != [evidence_digest.call(package_dir)]
    errors << "#{profile} [exception-evidence] legal evidence changed; review and refresh the pinned exception digest"
  end

  record.call(profile, "source-attribution", "repository must be a GitHub URL") unless
    repository.match?(%r{\Ahttps://github\.com/[^/]+/[^/]+})

  source_root = repository.sub(%r{/tree/.*\z}, "")
  record.call(profile, "source-attribution", "README does not link to #{source_root}") unless
    !source_root.empty? && readme.include?(source_root)

  record.call(profile, "modification-note", "README is missing '## Conversion and modifications'") unless
    readme.include?("## Conversion and modifications")

  unless valid_spdx_expression.call(license) && !UNRESOLVED_LICENSES.include?(license)
    record.call(profile, "license-spdx", "license is not a usable SPDX expression: #{license.inspect}")
  end

  if license.include?("LicenseRef-")
    record.call(profile, "custom-license-review", "custom license terms require explicit review")
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
  if external_terms_pointer.call(license_text)
    record.call(profile, "external-terms-pointer", "included file points to mutable external terms instead of preserving the terms")
  end
  copyright_lines = license_text.lines.grep(/copyright|©/i).reject do |line|
    line.match?(/\[yyyy\]|\[name of copyright owner\]/i)
  end
  record.call(profile, "copyright-notice", "included license has no concrete copyright notice") if
    copyright_lines.empty?

  detected = detect_license.call(license_text)
  if detected && valid_spdx_expression.call(license) && license != detected
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
