---
name: humanize-redo
description: 가장 최근 윤문 결과를 2차로 다시 다듬는다 — 특정 카테고리·문단·강도 조정도 가능. humanize-korean heavy 경로를 기존 run_id에 재실행해 잔존 finding을 처리한다. 트리거 — "/humanize-redo".
argument-hint: "[조정 지시 — 예: \"번역투만 다시\" \"이 문단만\" \"강도 낮춰\"]"
disable-model-invocation: true
---

# /humanize-redo — 2차 윤문 / 부분 재실행

cwd 기준 가장 최근 `_workspace/{run_id}/`를 찾아 `humanize-korean` 스킬의 heavy 경로를 재호출한다.

## 사용자 지시
$ARGUMENTS

## 동작
1. `Glob`으로 `_workspace/YYYY-MM-DD-*/final.md`(또는 `01_input.txt`)를 매칭해 최신 `run_id` 식별. 없으면 "이전 실행이 없습니다. `/humanize`로 시작하세요" 안내 후 종료.
2. 사용자 지시 파싱:
   - **카테고리 지정**("번역투만", "관용구만", "이모지만") → 해당 카테고리 finding만 재윤문
   - **문단 지정**("이 문단만", "두 번째 문단만") → 해당 범위 finding만
   - **강도 조정**("강도 낮춰"·"보수적으로" → S1만, "강도 높여" → S1+S2+S3)
   - **롤백 요청**("이 변경 되돌려줘") → `humanize-finalizer`에 원문 대조와 해당 edit 롤백을 지시
   - 지시 없음·"2차 윤문해줘" → 잔존 finding 전체 대상 round 2
3. 기존 `final.md`를 새 입력으로 삼고 사용자 지시를 진단 범위에 반영해 heavy P1(진단)부터 재실행.
4. 이전 `final.md`는 `final_prev.md`로 백업하고, 새 결과는 동일한 `final.md` 계약으로 저장.
5. `humanize-finalizer`와 `verify_gates.py`까지 실행해 변경 비교와 신규 등급을 보고.

## 루프 한도
최대 round 3. 그 이상 미해결이면 `hold_and_report`로 사람 검토 권고.

## 참고
- 풀 파이프라인 신규 실행은 `/humanize`.
- 분류 체계: `{{ref:humanizeRuntime}}/references/ai-tell-taxonomy.md`
