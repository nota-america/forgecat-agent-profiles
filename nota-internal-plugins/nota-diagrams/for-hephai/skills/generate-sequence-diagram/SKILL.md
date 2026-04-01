---
name: generate-sequence-diagram
description: 코드 변경사항을 분석하여 Mermaid 시퀀스 다이어그램 자동 생성. PR 본문이나 문서화에 활용.
---

# 시퀀스 다이어그램 생성

## 개요
코드 변경사항을 분석하여 Mermaid 시퀀스 다이어그램을 자동 생성합니다.
PR 본문에 첨부하거나 독립적으로 문서화에 활용할 수 있습니다.

## 사용법
```
/diagrams:generate-sequence-diagram
/diagrams:generate-sequence-diagram --base dev
/diagrams:generate-sequence-diagram --path src/api/export
```

| 옵션 | 설명 | 기본값 |
|------|------|--------|
| `--base` | 비교 대상 브랜치 | dev |
| `--path` | 특정 경로만 분석 | 전체 변경 파일 |
| `--style` | 다이어그램 스타일 (`sequence`, `flowchart`, `both`) | sequence |

## 실행 단계

### 1단계: 변경사항 파악
- `git diff <base-branch>...HEAD --name-only`로 변경된 파일 목록 확인
- 변경된 파일들을 읽어 클래스, 함수, 메서드 식별
- 변경 유형 분류: 신규 추가 / 수정 / 삭제

### 2단계: 모듈 매핑 및 진입점 식별

변경된 각 파일을 모듈에 매핑하고 진입점을 식별합니다.

**진입점 우선순위:**
1. CLI Command - CLI 명령어의 시작점
2. Backend API Endpoint - REST API 요청의 시작점
3. Frontend Component - 사용자 인터랙션 시작점
4. Event Listener / Message Consumer - 이벤트 기반 처리의 시작점
5. Public Method - 위에 해당하지 않으면 변경된 public 메서드

### 3단계: 호출 체인 추적
진입점에서 시작하여 모듈 간 호출 관계를 추적:
- 모듈 간 호출 관계 파악
- 외부 시스템 호출 확인

**추적 범위 제한:**
- getter/setter, toString, 로깅 등 유틸리티 호출은 제외
- 동일 모듈 내부의 private 호출 체인은 요약
- 변경되지 않은 코드의 내부 구현은 단일 호출로 축약

### 4단계: 다이어그램 생성

**화살표 규칙:**
| 화살표 | 의미 |
|--------|------|
| `->>` | 동기 요청 |
| `-->>` | 동기 응답 |
| `--)` | 비동기 메시지 (fire-and-forget) |
| `--x` | 실패 응답 |

**조건부 흐름:**
- 에러 핸들링이 핵심 변경이면 `alt/else` 블록으로 표현
- 반복 처리가 핵심이면 `loop` 블록으로 표현
- 선택적 처리는 `opt` 블록으로 표현

**복잡도 관리:**
- participant가 8개를 초과하면 기능 단위로 다이어그램 분리

### 5단계: 출력 형식

```markdown
## 🔀 시퀀스 다이어그램

> 변경된 코드의 주요 흐름을 나타냅니다.
```

### 6단계: 검증
- Mermaid 문법이 올바른지 확인
- 실제 코드의 호출 관계와 일치하는지 대조
- GitHub에서 렌더링 가능한 형식인지 확인

## 주의사항
- **모듈 간 상호작용 중심**: 동일 모듈 내부 호출보다 모듈 간 메시지 흐름에 집중
- **단순 변경은 생략**: 설정 변경, 리팩토링, 주석 추가 등은 다이어그램 불필요
- **정확성 우선**: 추측으로 호출 관계를 만들지 않고, 코드에서 확인된 관계만 표현

$ARGUMENTS 가 있으면 해당 옵션을 파싱하여 실행하세요.
