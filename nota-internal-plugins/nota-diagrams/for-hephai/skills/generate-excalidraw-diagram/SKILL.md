---
name: generate-excalidraw-diagram
description: 코드베이스를 분석하여 Excalidraw 아키텍처 다이어그램(.excalidraw) 생성.
---

# Excalidraw 아키텍처 다이어그램 생성

## 개요
코드베이스를 분석하여 `.excalidraw` 파일로 아키텍처 다이어그램을 생성합니다.
excalidraw.com 또는 VS Code Excalidraw 확장에서 열 수 있습니다.

## 사용법
```
/generate-excalidraw-diagram
/generate-excalidraw-diagram --path src/composer
/generate-excalidraw-diagram --output docs/architecture/pipeline.excalidraw
```

| 옵션 | 설명 | 기본값 |
|------|------|--------|
| `--path` | 특정 경로만 분석 | 전체 프로젝트 |
| `--output` | 출력 파일 경로 | `docs/architecture/system-architecture.excalidraw` |
| `--layout` | 레이아웃 (`vertical`, `horizontal`, `hub`) | vertical |

---

## 핵심 규칙

### 1. Diamond 사용 금지

Diamond 화살표 연결이 raw JSON에서 깨짐. 스타일이 있는 rectangle로 대체:

| 의미 | Rectangle 스타일 |
|------|-----------------|
| Orchestrator/Hub | Coral (`#ffa8a8`/`#c92a2a`) + strokeWidth: 3 |
| Decision Point | Orange (`#ffd8a8`/`#e8590c`) + dashed stroke |

### 2. 라벨은 반드시 TWO 엘리먼트

`label` 속성은 raw JSON에서 동작하지 않음. 반드시 shape + text 2개 생성:

```json
// 1. Shape에 boundElements 참조
{
  "id": "my-box",
  "type": "rectangle",
  "boundElements": [{ "type": "text", "id": "my-box-text" }]
}

// 2. 별도 text 엘리먼트에 containerId
{
  "id": "my-box-text",
  "type": "text",
  "containerId": "my-box",
  "text": "My Label"
}
```

### 3. Elbow Arrow는 3개 속성 필수

90도 꺾임 (곡선 아님):

```json
{
  "type": "arrow",
  "roughness": 0,
  "roundness": null,
  "elbowed": true
}
```

### 4. Arrow Edge 계산

| Edge | 공식 |
|------|------|
| Top | `(x + width/2, y)` |
| Bottom | `(x + width/2, y + height)` |
| Left | `(x, y + height/2)` |
| Right | `(x + width, y + height/2)` |

**상세 Arrow 라우팅:** `excalidraw-references/arrows.md` 참고

---

## 모듈별 색상 팔레트

### SDK 모듈

| 모듈 | Background | Stroke | 용도 |
|------|------------|--------|------|
| **CLI** | `#a5d8ff` | `#1971c2` | 사용자 명령어 진입점 |
| **Composer** | `#d0bfff` | `#7048e8` | 최적화 파이프라인 오케스트레이션 |
| **ScenarioManager** | `#ffec99` | `#f08c00` | run.yaml 시나리오 파싱/빌드 |
| **ResultManager** | `#b2f2bb` | `#2f9e44` | 결과 관리 및 리포팅 |
| **Validator** | `#ffd8a8` | `#e8590c` | run.yaml 설정 검증 |
| **DataGenerator** | `#99e9f2` | `#0c8599` | 캘리브레이션 데이터셋 생성 |
| **Extractor** | `#e599f7` | `#9c36b5` | 모델 구조/그래프 추출 |
| **Config** | `#dee2e6` | `#495057` | 디바이스/런타임 설정 관리 |

### 확장 모듈 (향후)

| 모듈 | Background | Stroke |
|------|------------|--------|
| **Backend** | `#d0bfff` | `#7048e8` |
| **Frontend** | `#a5d8ff` | `#1971c2` |

### 외부 시스템

| 시스템 | Background | Stroke | 타입 |
|--------|------------|--------|------|
| **User** | `#e7f5ff` | `#1971c2` | ellipse |
| **FileSystem** | `#ffec99` | `#f08c00` | rectangle |
| **HuggingFaceHub** | `#ffc9c9` | `#e03131` | rectangle |
| **MQTT** | `#fff3bf` | `#fab005` | rectangle |

**추가 팔레트 (AWS, Azure, GCP, K8s):** `excalidraw-references/colors.md` 참고

---

## 워크플로우

### 1단계: 코드베이스 분석

모듈과 컴포넌트를 탐색:

| 탐색 대상 | 확인할 것 |
|-----------|----------|
| SDK 모듈 | `src/cli/`, `src/composer/`, `src/scenario_manager/`, `src/result_manager/` 등 |
| 서비스 클래스 | `**/service/*.py`, `**/*_service.py` |
| DTO | `**/dto/*.py` - 모듈 간 데이터 흐름 |
| 설정 | `src/config/`, `*.yaml` |
| 외부 연동 | HTTP 호출, MQTT, HuggingFace Hub 사용 |

**도구 활용:**
- `Glob` -> `**/service/*.py`, `**/command.py`, `**/entity.py`
- `Grep` -> `import`, `from src.`, 모듈 간 의존 관계
- `Read` -> README, 설정 파일, 진입점

### 2단계: 레이아웃 계획

**수직 흐름 (기본 - SDK 파이프라인에 적합):**
```
Row 1: User (y: 100)
Row 2: CLI (y: 230)
Row 3: Validator / ScenarioManager (y: 380)
Row 4: Composer (y: 530)
Row 5: Extractor / DataGenerator / Config (y: 680)
Row 6: ResultManager / FileSystem (y: 830)

Columns: x = 100, 300, 500, 700, 900
Element size: 160-200px x 80-90px
```

**기타 패턴:** `excalidraw-references/examples.md` 참고

### 3단계: 엘리먼트 생성

각 컴포넌트에 대해:
1. 고유 `id`로 shape 생성
2. `boundElements`에 text 참조 추가
3. `containerId`가 있는 text 엘리먼트 생성
4. 모듈별 색상 팔레트 적용

**JSON 포맷 상세:** `excalidraw-references/json-format.md` 참고

### 4단계: 연결선 추가

각 관계에 대해:
1. 소스 edge 포인트 계산
2. elbow 경로 계획 (겹침 방지)
3. `points` 배열로 arrow 생성
4. 대상 타입에 맞는 stroke 색상

**Arrow 패턴 상세:** `excalidraw-references/arrows.md` 참고

### 5단계: 그룹핑 (선택)

논리적 그룹:
- 큰 투명 rectangle에 `strokeStyle: "dashed"`
- 좌측 상단에 standalone text 라벨

### 6단계: 검증 및 저장

저장 전 검증 실행. `docs/architecture/` 또는 사용자 지정 경로에 저장.

**검증 체크리스트:** `excalidraw-references/validation.md` 참고

---

## Quick Arrow Reference

**직선 아래:**
```json
{ "points": [[0, 0], [0, 110]], "x": 590, "y": 290 }
```

**L자형 (왼쪽 후 아래):**
```json
{ "points": [[0, 0], [-325, 0], [-325, 125]], "x": 525, "y": 420 }
```

**U턴 (콜백):**
```json
{ "points": [[0, 0], [50, 0], [50, -125], [20, -125]], "x": 710, "y": 440 }
```

**같은 edge에서 여러 arrow** - 위치 분산:
```
5개: 20%, 35%, 50%, 65%, 80% (edge 너비 기준)
```

---

## 엘리먼트 타입

| Type | 용도 |
|------|------|
| `rectangle` | 모듈, 서비스, 데이터베이스, 컨테이너 |
| `ellipse` | User, 외부 시스템, 시작/종료점 |
| `text` | shape 내 라벨, 타이틀, 주석 |
| `arrow` | 데이터 흐름, 연결, 의존성 |
| `line` | 그룹 경계, 구분선 |

---

## 검증 체크리스트

파일 저장 전:
- [ ] 라벨이 있는 모든 shape에 boundElements + text 엘리먼트
- [ ] text 엘리먼트의 containerId가 shape과 일치
- [ ] 다중 포인트 arrow에 `elbowed: true`, `roundness: null`
- [ ] Arrow x,y가 소스 shape edge에서 시작
- [ ] Arrow 최종 point가 대상 edge에 도달
- [ ] Diamond shape 없음
- [ ] 중복 ID 없음

**상세 검증:** `excalidraw-references/validation.md` 참고

---

## 출력

- **위치:** `docs/architecture/` 또는 사용자 지정 경로
- **파일명:** 서술적, 예: `system-architecture.excalidraw`, `pipeline-flow.excalidraw`
- **확인:** https://excalidraw.com 또는 VS Code Excalidraw 확장에서 열기

## 참조 파일

| 파일 | 내용 |
|------|------|
| `excalidraw-references/json-format.md` | 엘리먼트 타입, 필수 속성, text 바인딩 |
| `excalidraw-references/arrows.md` | 라우팅 알고리즘, 패턴, 바인딩, 분산 |
| `excalidraw-references/colors.md` | 기본, AWS, Azure, GCP, K8s 팔레트 |
| `excalidraw-references/examples.md` | 전체 JSON 예시, 레이아웃 패턴 |
| `excalidraw-references/validation.md` | 체크리스트, 검증 알고리즘, 버그 수정 |
