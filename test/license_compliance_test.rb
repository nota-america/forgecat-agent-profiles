# frozen_string_literal: true

require "fileutils"
require "minitest/autorun"
require "open3"
require "tmpdir"

ROOT = File.expand_path("..", __dir__)
LICENSE_CHECK = File.join(ROOT, "scripts/check-profile-licenses.rb")
NOTICE_GENERATOR = File.join(ROOT, "scripts/generate-third-party-notices.rb")
ARTIFACT_CHECK = File.join(ROOT, "scripts/check-profile-artifacts.rb")
TEST_GIT = ENV.fetch("FORGECAT_GIT", "git")

class LicenseComplianceTest < Minitest::Test
  def with_repo
    Dir.mktmpdir("forgecat-license-test") do |root|
      FileUtils.mkdir_p(File.join(root, "config"))
      File.write(File.join(root, "config/license-policy-exceptions.yml"), "exceptions: []\n")
      yield root
    end
  end

  def write_profile(root, license: "MIT", readme: nil)
    package = File.join(root, "profiles/example/for-forgecat")
    FileUtils.mkdir_p(package)
    File.write(File.join(package, "profile.yml"), <<~YAML)
      name: "@forgecat/example"
      version: "0.1.0"
      description: "fixture"
      repository: "https://github.com/example/source"
      license: "#{license}"
      visibility: "public"
      compatibility:
        platforms:
          tested: [codex]
    YAML
    File.write(File.join(package, "README.md"), readme || <<~MARKDOWN)
      # Example
      Source: https://github.com/example/source
      | Original commit | abcdef1234567 |
      ## Conversion and modifications
      Converted into a ForgeCat profile.
      [LICENSE](LICENSE)
    MARKDOWN
    package
  end

  def run_script(script, root, *args)
    Open3.capture3({"FORGECAT_ROOT" => root, "FORGECAT_GIT" => TEST_GIT}, "ruby", script, *args)
  end

  def test_invalid_spdx_identifier_is_rejected
    with_repo do |root|
      package = write_profile(root, license: "Banana")
      File.write(File.join(package, "LICENSE"), "Copyright 2026 Example\nPermission is hereby granted, free of charge\n")

      _stdout, stderr, status = run_script(LICENSE_CHECK, root)

      refute status.success?
      assert_includes stderr, "license-spdx"
    end
  end

  def test_notice_distinguishes_external_pointer_and_reads_plain_commit
    with_repo do |root|
      package = write_profile(root, license: "LicenseRef-Example-Terms")
      File.write(File.join(package, "LICENSE"), "Use is governed by Example Terms at https://example.com/terms/.\n")

      _stdout, stderr, status = run_script(NOTICE_GENERATOR, root)
      assert status.success?, stderr
      notice = File.read(File.join(root, "THIRD_PARTY_NOTICES.md"))
      assert_includes notice, "Profiles with an included license text: 0"
      assert_includes notice, "External terms pointer:"
      assert_includes notice, "abcdef1234567"
    end
  end

  def test_custom_all_rights_reserved_terms_require_review_and_are_restricted
    with_repo do |root|
      package = write_profile(root, license: "LicenseRef-Example-Terms")
      File.write(File.join(package, "LICENSE"), "Copyright 2026 Example. All rights reserved.\n")

      _stdout, stderr, status = run_script(LICENSE_CHECK, root)

      refute status.success?
      assert_includes stderr, "custom-license-review"
      assert_includes stderr, "restricted-license"
    end
  end

  def test_exception_digest_must_match_current_legal_evidence
    with_repo do |root|
      write_profile(root)
      File.write(File.join(root, "config/license-policy-exceptions.yml"), <<~YAML)
        exceptions:
          - profile: "@forgecat/example"
            rules: [license-file]
            reason: "fixture"
            evidence_sha256: "stale"
      YAML

      _stdout, stderr, status = run_script(LICENSE_CHECK, root)

      refute status.success?
      assert_includes stderr, "exception-evidence"
    end
  end

  def test_native_readme_deletion_is_not_artifact_neutral
    with_repo do |root|
      package = write_profile(root)
      FileUtils.mkdir_p(File.join(root, "profiles/example/for-codex"))
      native_readme = File.join(root, "profiles/example/for-codex/README.md")
      File.write(native_readme, "installed artifact\n")
      git(root, "init")
      git(root, "config", "user.email", "test@example.com")
      git(root, "config", "user.name", "Test")
      git(root, "add", ".")
      git(root, "commit", "-m", "fixture")
      File.delete(native_readme)
      git(root, "add", "-u")
      git(root, "commit", "-m", "delete artifact")

      _stdout, stderr, status = run_script(ARTIFACT_CHECK, root, "--changed-only", "HEAD^..HEAD")

      refute status.success?
      assert_includes stderr, "for-codex/"
    end
  end

  private

  def git(root, *args)
    _stdout, stderr, status = Open3.capture3(TEST_GIT, "-C", root, *args)
    assert status.success?, stderr
  end
end
