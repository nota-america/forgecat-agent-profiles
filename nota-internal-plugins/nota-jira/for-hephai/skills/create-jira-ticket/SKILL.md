---
name: create-jira-ticket
description: Jira 티켓(스토리/작업) 생성. "티켓 만들어줘", "Jira 이슈 생성" 요청에 사용.
---

# Jira 티켓 생성

## 개요
내용이 잘 드러내는 제목, 내용을 갖춘 잘 구조화된 Jira 티켓을 만들어. 사용자가 언급한 내용만을 기반으로 작성하고, 파일 변경사항이나 코드베이스는 참고하지 마.

**티켓 타입**: 사용자가 "스토리 티켓" 또는 "작업 티켓"을 지정하면 해당 타입에 맞는 템플릿으로 작성. 지정하지 않으면 내용에 따라 적절한 타입 선택.

## 사용법
```
/jira:create-jira-ticket <설명>
```

예시:
```
/jira:create-jira-ticket workspace init 명령어 구현
/jira:create-jira-ticket 작업 티켓: np run 명령어 구현
/jira:create-jira-ticket 스토리 티켓: 사용자가 실험 결과를 확인할 수 있다
```

## 인터랙티브 설정
옵션을 명시하지 않으면 `AskUserQuestion` 도구를 통해 TUI로 선택할 수 있습니다.

**프롬프트되는 항목:**
| 항목 | 선택지 예시 |
|------|------------|
| 담당자 | 팀원 목록에서 선택 또는 "미지정" |
| 스프린트 | "현재 스프린트", "다음 스프린트", "미지정" |
| 에픽 | 최근 에픽 목록에서 선택 또는 "미지정" |

**고급 사용 (옵션 직접 지정):**
자동화나 반복 작업 시 옵션을 직접 지정할 수 있습니다.
```
/jira:create-jira-ticket np run 구현 --assignee "Byeongman Lee" --sprint current
```

| 옵션 | 설명 | 기본값 |
|------|------|--------|
| `--project` | 프로젝트 키 | NPP02 |
| `--assignee` | 담당자 이름 | 미지정 |
| `--sprint` | 스프린트 (`current` 또는 스프린트명) | 미지정 |
| `--epic` | 에픽 키 | 미지정 |

## 기본 설정
- **cloudId**: `nota-dev.atlassian.net`
- **projectKey**: `NPP02` (NetsPresso V2.0)

## 실행 단계

### 0단계: 인터랙티브 설정 (옵션 미지정 시)
옵션이 지정되지 않은 경우, `AskUserQuestion` 도구로 필요한 정보를 수집합니다:

```
AskUserQuestion:
- questions:
  - question: "담당자를 선택해주세요"
    header: "담당자"
    options:
      - label: "Byeongman Lee"
        description: "백엔드/CLI 담당"
      - label: "미지정"
        description: "나중에 지정"
    multiSelect: false
  - question: "스프린트를 선택해주세요"
    header: "스프린트"
    options:
      - label: "현재 스프린트"
        description: "진행 중인 스프린트에 추가"
      - label: "다음 스프린트"
        description: "다음 스프린트에 추가"
      - label: "미지정"
        description: "백로그에 추가"
    multiSelect: false
```

### 1단계: 티켓 타입 결정
- 사용자가 지정한 타입 확인 (스토리 또는 작업)
- 지정되지 않았다면 내용 성격에 따라 결정
- 스토리: 사용자 관점, 비즈니스 가치 중심
- 작업: 기술 구현, 코드/시스템 레벨 중심

### 2단계: 사용자 요구사항 분석
- 사용자가 언급한 문제점 또는 요구사항 파악
- 작업의 범위와 영향도 확인
- 관련 이해관계자 식별
- 파일이나 코드 변경사항은 참고하지 않음

### 3단계: 티켓 내용 작성
해당 타입의 템플릿에 맞게 내용 작성

### 4단계: 사용자 확인
작성된 티켓 내용을 보여주고 확인을 받습니다:

```markdown
## 생성할 티켓 미리보기

**타입:** 작업 (Task)
**제목:** [SWE] np workspace init 명령어로 CLI workspace 초기화

**내용:**
## 🧩 Task의 이유 (Why)
...

위 내용으로 티켓을 생성할까요? (수정이 필요하면 말씀해주세요)
```

### 5단계: 티켓 생성 (MCP 호출)

**⚠️ 중요: 2단계로 생성해야 함**

Jira MCP의 `createJiraIssue`에서 description이 제대로 적용되지 않는 이슈가 있어,
티켓 생성 후 `editJiraIssue`로 description을 별도 적용해야 합니다.

**5-1. 담당자 ID 조회** (담당자 지정 시)
```
mcp__atlassian__lookupJiraAccountId
- cloudId: "nota-dev.atlassian.net"
- searchString: "{담당자 이름}"
```

**5-2. 티켓 생성**
```
mcp__atlassian__createJiraIssue
- cloudId: "nota-dev.atlassian.net"
- projectKey: "NPP02" (또는 지정된 프로젝트)
- issueTypeName: "작업" 또는 "스토리"
- summary: "{티켓 제목}"
- assignee_account_id: "{담당자 ID}" (선택)
- additional_fields:
  - parent: "{에픽 키}" (선택)
  - labels: ["software-engineering"]
  - customfield_10020: {스프린트 ID} (선택)
```

**5-3. 내용 작성**
```
mcp__atlassian__editJiraIssue
- cloudId: "nota-dev.atlassian.net"
- issueIdOrKey: "{생성된 티켓 키}"
- fields:
  - description: "{템플릿에 맞게 작성된 내용}"
```

### 6단계: 결과 보고
```markdown
## ✅ 티켓 생성 완료

| 항목 | 값 |
|------|-----|
| 티켓 | NPP02-XXXX |
| 제목 | [SWE] np workspace init 명령어로 CLI workspace 초기화 |
| 타입 | 작업 |
| 담당자 | Byeongman Lee |
| 링크 | [바로가기](https://nota-dev.atlassian.net/browse/NPP02-XXXX) |
```

---

## Jira 티켓 템플릿

### 1. 작업(Task) 템플릿

**📌 Task의 제목 작성 방법:**
```
[SWE] {대상} + {상세 조건 or 목적}
```
예: `[SWE] np workspace init 명령어로 CLI workspace 초기화`

**Description 템플릿:**
```markdown
## 🧩 Task의 이유 (Why)

* {에러 처리를 명확히 로깅하여 디버깅 효율성을 높이기 위해}

## 🛠 작업 설명 (What)

* {어떤 작업을 코드/시스템 레벨에서 수행해야 하는지 명확하게}
    * {내부 흐름, 처리 조건, 예외사항 등 포함}
    * {기존의 401 Unauthorized 응답 외에 error_code, error_message 필드 포함하도록 응답 JSON 구조 개선}

## ✅ 완료 조건 (Acceptance Criteria)

* [ ] {로그에 실행 성공/실패가 출력됨}
* [ ] {예외 발생 시 명확한 에러 메시지 포함됨}

## ➕ 특이사항

* 참여자: {담당자}
* Module: {관련 모듈}
* {비밀번호 최소 길이는 8자 이상}
```

---

### 2. 스토리(Story) 템플릿

**📌 Story의 제목 작성 방법:**
```
[SWE] 사용자는 {기능}을 {목적}할 수 있다.
```
예: `[SWE] 사용자는 이메일 주소와 비밀번호를 입력하여 로그인할 수 있어야 한다`

**Description 템플릿:**
```markdown
## 🎯 Goal

* {스토리가 달성하려는 목표}

## 📋 Background

* {간단한 문제 배경 / 왜 필요한가?}
* {유저가 00기능을 사용하는데에 걸리는 시간이 오래걸려 불편을 겪는 CS가 많습니다.}

## 📝 Description

* **참여자**: {담당자}
* **Module**: {관련 모듈}
* **주요 작업**
    * {작업 1}
    * {작업 2}

## ✅ Acceptance Criteria

* [ ] {사용자는 이메일/비밀번호로 로그인할 수 있다}
* [ ] {잘못된 정보 입력 시 오류 메시지가 보인다}
* [ ] {로그인 성공 시 토큰 발급 및 리다이렉트 처리}
```

---

## 주의사항
- 사용자가 언급한 내용만을 기반으로 작성
- 파일 변경사항이나 코드베이스는 참고하지 않음
- 생성 전 반드시 사용자 확인을 거침
- **티켓 생성 후 반드시 editJiraIssue로 description을 적용해야 함**
- 모든 항목이 명확하게 작성되었는지 확인

## 관련 도구
- `mcp__atlassian__createJiraIssue`: 티켓 생성
- `mcp__atlassian__editJiraIssue`: 티켓 내용 수정 (description 적용)
- `mcp__atlassian__lookupJiraAccountId`: 담당자 ID 조회
- `mcp__atlassian__getVisibleJiraProjects`: 프로젝트 정보 확인

$ARGUMENTS 에서 설명과 옵션을 파싱하여 실행하세요.
