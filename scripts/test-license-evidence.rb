#!/usr/bin/env ruby
# frozen_string_literal: true

# Regression tests for the license evidence rules.
#
# Each case here is a bypass that the gate accepted at some point during review:
# a note that named a license without sourcing it, a metadata table standing in
# for upstream frontmatter, a pin that disagreed with its own match receipt.
# They are cheap to re-break and expensive to notice, so they are pinned down.

require "tmpdir"
require "fileutils"
require_relative "license_evidence"

FAILURES = []

def check(description)
  result = yield
  FAILURES << description unless result
  puts "#{result ? "ok  " : "FAIL"} #{description}"
end

def profile(dir, files)
  files.each do |path, content|
    full = File.join(dir, path)
    FileUtils.mkdir_p(File.dirname(full))
    File.write(full, content)
  end
  dir
end

PINNED = "https://github.com/o/r/blob/d02fd24f151f5133650eaa78e7da3cac2cedd72f/LICENSE"
SHA = "d02fd24f151f5133650eaa78e7da3cac2cedd72f"

GOOD_NOTE = <<~NOTE
  upstream: #{PINNED}
  scope: skills/example
  exceptions: none

  > MIT License
  > Copyright (c) 2025 Example
NOTE

Dir.mktmpdir do |tmp|
  check "a well-formed LICENSE-SOURCE.md is accepted" do
    dir = profile(File.join(tmp, "good"), { "for-forgecat/LICENSE-SOURCE.md" => GOOD_NOTE })
    LicenseEvidence.classify(dir).first == "license-source"
  end

  check "an empty LICENSE-SOURCE.md is refused" do
    dir = profile(File.join(tmp, "empty"), { "for-forgecat/LICENSE-SOURCE.md" => "" })
    LicenseEvidence.classify(dir).first == "none"
  end

  check "a pinned link elsewhere does not rescue a branch `upstream:`" do
    note = "upstream: https://github.com/o/r/blob/main/LICENSE\nscope: all\nexceptions: none\n\n" \
           "> MIT License\n> see also #{PINNED}\n"
    dir = profile(File.join(tmp, "decoy"), { "for-forgecat/LICENSE-SOURCE.md" => note })
    LicenseEvidence.classify(dir).first == "none"
  end

  check "a short SHA is not a pin" do
    note = GOOD_NOTE.sub(SHA, SHA[0, 12])
    dir = profile(File.join(tmp, "short"), { "for-forgecat/LICENSE-SOURCE.md" => note })
    LicenseEvidence.classify(dir).first == "none"
  end

  check "upstream frontmatter counts as evidence" do
    dir = profile(File.join(tmp, "fm"), { "for-forgecat/skills/x/SKILL.md" => "---\nname: x\nlicense: MIT\n---\n\nbody\n" })
    LicenseEvidence.classify(dir).first == "frontmatter"
  end

  check "a profile's own metadata table is not evidence" do
    dir = profile(File.join(tmp, "table"), { "for-forgecat/README.md" => "# P\n\n| License | MIT |\n" })
    LicenseEvidence.classify(dir).first == "none"
  end

  check "a `license:` line in prose is not frontmatter" do
    dir = profile(File.join(tmp, "prose"), { "for-forgecat/README.md" => "# P\n\nlicense: MIT\n" })
    LicenseEvidence.classify(dir).first == "none"
  end

  check "a license file outside for-forgecat/ is not shipped evidence" do
    dir = profile(File.join(tmp, "outside"), { "for-claude/LICENSE" => "MIT License\n", "for-forgecat/profile.yml" => "" })
    LicenseEvidence.classify(dir).first == "none"
  end

  check "a license file inside for-forgecat/ is shipped evidence" do
    dir = profile(File.join(tmp, "inside"), { "for-forgecat/LICENSE" => "MIT License\n" })
    LicenseEvidence.classify(dir).first == "license-file"
  end

  check "a full-SHA repository URL yields its commit" do
    LicenseEvidence.pinned_commit("https://github.com/o/r/tree/#{SHA}/skills") == SHA
  end

  check "a short-SHA repository URL is not pinned" do
    LicenseEvidence.pinned_commit("https://github.com/o/r/tree/#{SHA[0, 7]}/skills").nil?
  end

  check "a branch repository URL is not pinned" do
    LicenseEvidence.pinned_commit("https://github.com/o/r/tree/main/skills").nil?
  end

  check "a receipt with a short SHA is ignored" do
    path = File.join(tmp, "short.tsv")
    File.write(path, "profiles/o/r\t#{SHA[0, 12]}\n")
    LicenseEvidence.receipts(path).empty?
  end

  check "a well-formed receipt is read" do
    path = File.join(tmp, "good.tsv")
    File.write(path, "# comment\n\nprofiles/o/r\t#{SHA}\tmatched 12 files\n")
    LicenseEvidence.receipts(path) == { "profiles/o/r" => SHA }
  end
end

if FAILURES.empty?
  puts "\nAll license evidence tests passed."
else
  warn "\n#{FAILURES.length} test(s) failed:"
  FAILURES.each { |name| warn "- #{name}" }
  exit 1
end
