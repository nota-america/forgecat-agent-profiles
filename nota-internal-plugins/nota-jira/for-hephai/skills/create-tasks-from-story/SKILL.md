---
name: create-tasks-from-story
description: Jira 스토리 티켓을 분석하여 하위 작업(Task) 티켓 자동 생성. "스토리에서 태스크 만들어줘" 요청에 사용.
---

# 스토리에서 작업 티켓 자동 생성

## 개요
Jira 스토리 티켓을 분석하여 하위 작업(Task) 티켓들을 자동으로 생성합니다.
PM이 스토리를 작성한 후 이 스킬을 실행하면, AI가 스토리 내용을 분석하고 적절한 작업 단위로 분해하여 Task 티켓을 생성합니다.

## 사용법
```
/jira:create-tasks-from-story <스토리_티켓_키_또는_URL>
```

예시:
```
/jira:create-tasks-from-story NPP02-2034
/jira:create-tasks-from-story https://nota-dev.atlassian.net/browse/NPP02-2034
```

## 인터랙티브 설정
옵션을 명시하지 않으면 `AskUserQuestion` 도구를 통해 TUI로 선택할 수 있습니다.

**프롬프트되는 항목:**
| 항목 | 선택지 예시 |
|------|------------|
| 담당자 | 팀원 목록에서 선택 또는 "미지정" |
| 스프린트 | "현재 스프린트", "다음 스프린트", "미지정" |
| 에픽 | "스토리의 에픽 상속", 직접 입력 |

**고급 사용 (옵션 직접 지정):**
```
/jira:create-tasks-from-story NPP02-2034 --assignee "Byeongman Lee" --sprint current
```

| 옵션 | 설명 | 기본값 |
|------|------|--------|
| `--assignee` | 담당자 이름 | 미지정 |
| `--sprint` | 스프린트 (`current` 또는 스프린트명) | 미지정 |
| `--epic` | 에픽 키 (스토리의 에픽 상속) | 스토리의 에픽 |

## 기본 설정
- **cloudId**: `nota-dev.atlassian.net`
- **projectKey**: 스토리와 동일한 프로젝트

## 환경변수 설정 (자동 링크 연결용)
Issue Link 자동 연결을 위해 환경변수를 설정해주세요:

```bash
# ~/.zshrc 또는 ~/.bashrc에 추가
export JIRA_EMAIL="your-email@nota.ai"
export JIRA_API_TOKEN="your-api-token"
```

API 토큰은 [Atlassian API 토큰 관리](https://id.atlassian.com/manage-profile/security/api-tokens)에서 생성할 수 있습니다.

환경변수가 설정되지 않으면 링크 연결은 수동으로 안내됩니다.

## 실행 단계

### 0단계: 인터랙티브 설정 (옵션 미지정 시)
옵션이 지정되지 않은 경우, 스토리 분석 후 `AskUserQuestion` 도구로 필요한 정보를 수집합니다.

### 1단계: 스토리 정보 가져오기
- `mcp__atlassian__getJiraIssue` 도구로 스토리 티켓 정보 조회
- 가져올 정보: summary, description, assignee, labels, sprint, epic

### 2단계: 스토리 내용 분석
스토리의 Description을 분석하여 다음을 파악합니다:
- **목표(Goal)**: 스토리가 달성하려는 것
- **범위(Scope)**: 포함/제외 사항
- **완료 조건(Acceptance Criteria)**: 체크리스트 항목들
- **관련 모듈**: 관련 시스템 모듈
- **참여자**: 언급된 담당자들

### 3단계: 작업 티켓 목록 생성

**⚠️ 추론 금지 원칙 (중요):**
- **Acceptance Criteria에 명시된 항목만** 작업으로 생성한다
- 스토리에 없는 내용을 추론하여 작업을 만들지 않는다
- 불확실한 경우, 작업을 생성하지 말고 사용자에게 확인을 요청한다

**작업 분해 원칙:**
- Acceptance Criteria 1개 = 작업 1개 (1:1 매핑 기본)
- 관련된 AC는 하나의 티켓으로 통합 가능
- 하나의 작업은 1-3일 내 완료 가능한 크기
- 명확한 완료 기준이 있어야 함
- 독립적으로 테스트/검증 가능해야 함

**작업 제목 형식:**
```
[SWE] {작업 내용}
```

### 4단계: 사용자 확인
생성할 작업 티켓 목록을 테이블 형태로 보여주고 사용자 확인을 받습니다.

### 5단계: 작업 티켓 생성 및 내용 작성

**⚠️ 중요: 2단계로 생성해야 함**

**5-1. 티켓 생성** (`mcp__atlassian__createJiraIssue`)
```
- cloudId: "nota-dev.atlassian.net"
- projectKey: 스토리와 동일한 프로젝트
- issueTypeName: "작업"
- summary: 작업 제목
- assignee_account_id: 담당자 ID
- additional_fields:
  - parent: 에픽 키
  - labels: ["software-engineering"]
  - customfield_10020: 스프린트 ID
```

**5-2. 내용 작성** (`mcp__atlassian__editJiraIssue`)
```
- cloudId: "nota-dev.atlassian.net"
- issueIdOrKey: 생성된 티켓 키
- fields:
  - description: 작업 템플릿 형식으로 작성
```

**작업 티켓 Description 템플릿:**
```markdown
## 🧩 Task의 이유 (Why)

* {스토리 목표에서 이 작업이 필요한 이유}

## 🛠 작업 설명 (What)

* {구체적인 구현 내용}
    * {세부 항목 1}
    * {세부 항목 2}

## ✅ 완료 조건 (Acceptance Criteria)

* [ ] {조건 1}
* [ ] {조건 2}

## ➕ 특이사항

* 참여자: {담당자}
* Module: {관련 모듈}
* 관련 스토리: {스토리_티켓_키}
```

### 6단계: 스토리와 링크 연결

**환경변수가 설정된 경우:**
```bash
AUTH=$(echo -n "$JIRA_EMAIL:$JIRA_API_TOKEN" | base64)

for TASK in {생성된_티켓_키_목록}; do
  curl -s -X POST \
    "https://nota-dev.atlassian.net/rest/api/3/issueLink" \
    -H "Authorization: Basic $AUTH" \
    -H "Content-Type: application/json" \
    -d "{
      \"type\": { \"name\": \"Blocks\" },
      \"outwardIssue\": { \"key\": \"{스토리_키}\" },
      \"inwardIssue\": { \"key\": \"$TASK\" }
    }"
done
```

**환경변수가 없는 경우:** 수동 연결 안내

### 7단계: 결과 보고
```markdown
## ✅ 작업 티켓 생성 완료

**스토리:** NPP02-2034 - 스토리 제목

| 티켓 | 제목 | 스토리 연결 |
|------|------|------------|
| NPP02-2065 | [SWE] 작업 1 | ✅ |
| NPP02-2066 | [SWE] 작업 2 | ✅ |
```

## 주의사항
- 스토리 Description이 충분히 상세하지 않으면 작업 분해가 어려울 수 있습니다
- 생성 전 반드시 사용자 확인을 거칩니다
- **티켓 생성 후 반드시 editJiraIssue로 description을 적용해야 합니다**
- 링크 자동 연결을 위해서는 `JIRA_EMAIL`, `JIRA_API_TOKEN` 환경변수가 필요합니다

## 관련 도구
- `mcp__atlassian__getJiraIssue`: 스토리 정보 조회
- `mcp__atlassian__createJiraIssue`: Task 티켓 생성
- `mcp__atlassian__editJiraIssue`: 티켓 내용 수정 (description 적용)
- `mcp__atlassian__lookupJiraAccountId`: 담당자 ID 조회

$ARGUMENTS 에서 스토리 키와 옵션을 파싱하여 실행하세요.
