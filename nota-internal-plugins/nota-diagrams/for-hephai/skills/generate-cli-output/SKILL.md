---
name: generate-cli-output
description: CLI 코드 변경사항을 분석하여 Rich SVG로 터미널 출력 미리보기 생성. PR에 Before/After 비교 첨부.
---

# CLI 출력 미리보기 생성

## 개요
CLI 코드 변경사항을 분석하여, 변경된 명령어의 예상 터미널 출력을 Rich SVG로 생성합니다.
PR 본문에 Before/After 비교로 첨부하여 리뷰어가 코드 실행 없이 UX 변화를 확인할 수 있습니다.

## 사용법
```
/diagrams:generate-cli-output
/diagrams:generate-cli-output --base dev
/diagrams:generate-cli-output --command "project create"
```

| 옵션 | 설명 | 기본값 |
|------|------|--------|
| `--base` | 비교 대상 브랜치 | dev |
| `--command` | 특정 명령어만 생성 | 변경된 명령어 자동 감지 |

## 파일 관리 규칙

**고정 파일명 덮어쓰기 방식:**
- 저장 경로: `docs/cli-output/{command}.svg`
- 명령어당 하나의 SVG만 유지 (항상 최신 After 버전)
- PR이 머지되면 기본 브랜치의 SVG가 최신 상태로 갱신됨

## 실행 단계

### 1단계: 변경된 CLI 명령어 식별
- `git diff <base-branch>...HEAD --name-only`로 변경 파일 확인
- CLI command 파일 패턴에 해당하는 파일 필터링
- 변경된 명령어 도메인 식별

### 2단계: 변경 내용 분석
변경된 command 파일을 읽고 출력 포맷 변경, 성공/에러 메시지 변경 등을 파악

### 3단계: SVG 생성 스크립트 작성
변경된 출력을 재현하는 Python 스크립트를 작성합니다.

**핵심 패턴:**
```python
from rich.console import Console
from rich.panel import Panel
from rich.text import Text

def generate_svg(title: str, render_fn, output_path: str) -> None:
    console = Console(record=True, width=80)
    render_fn(console)
    svg = console.export_svg(title=title)
    with open(output_path, "w") as f:
        f.write(svg)
```

### 4단계: SVG 실행 및 저장
```bash
mkdir -p docs/cli-output
python /tmp/generate_cli_output.py
```

### 5단계: PR 본문에 Before/After 삽입

**Before/After 비교:**
```markdown
## 🖥 CLI Output

<table>
<tr><th>Before</th><th>After</th></tr>
<tr>
<td>

![before](https://github.com/{owner}/{repo}/blob/dev/docs/cli-output/{command}.svg?raw=true)

</td>
<td>

![after](https://github.com/{owner}/{repo}/blob/{commit_sha}/docs/cli-output/{command}.svg?raw=true)

</td>
</tr>
</table>
```

## 주의사항
- **CLI 변경이 있을 때만 생성**
- **실제 실행 없이 재현**: command 파일의 출력 함수를 분석해서 Rich로 재현
- **Console width 80 고정**: 일관된 출력 너비 유지

$ARGUMENTS 가 있으면 해당 옵션을 파싱하여 실행하세요.
