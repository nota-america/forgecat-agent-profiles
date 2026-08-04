/**
 * Derived from epoko77-ai/design-diversity (MIT).
 * Source references: catalog.json plus each PPT pack prompt.md and tokens.json.
 * Generated for slides-grab issue #86 from upstream snapshot 2026-05-24.
 */

export const DESIGN_DIVERSITY_SOURCE = Object.freeze({
  name: 'Design Diversity',
  repo: 'epoko77-ai/design-diversity',
  url: 'https://github.com/epoko77-ai/design-diversity',
  previewUrl: 'https://design-diversity.vercel.app',
  references: ['catalog.json', 'design-packs/*/prompt.md', 'design-packs/*/tokens.json'],
  license: 'MIT',
  citation: 'PPT pack metadata, tokens, and prompt summaries derived from epoko77-ai/design-diversity.',
});

export const RAW_DESIGN_DIVERSITY_STYLES = [
  {
    "number": "DD01",
    "title": "컨설팅 정밀그리드",
    "mood": "mono · minimal-sans · strict-grid · dense · none",
    "bestFor": "design-diversity standard · consulting-grid",
    "id": "ppt-consulting-precision-grid",
    "background": [
      "Bg: `#FFFFFF`",
      "Surface: `#F4F5F7`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#FFFFFF"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#F4F5F7"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#1A1A1A"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#6B7280"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#0B5FFF"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#D1D5DB"
      },
      {
        "role": "chart",
        "label": "#C9CDD3",
        "hex": "#C9CDD3"
      },
      {
        "role": "chart",
        "label": "#9CA3AF",
        "hex": "#9CA3AF"
      },
      {
        "role": "chart",
        "label": "#E5E7EB",
        "hex": "#E5E7EB"
      }
    ],
    "fonts": [
      "display: **Arial**, 24pt, weight 700, tracking -0.01em, leading 1.15, fallback Helvetica, Liberation Sans, Pretendard",
      "kicker: **Arial**, 11pt, weight 700, tracking 0.08em",
      "body: **Arial**, 16pt, weight 400, leading 1.3",
      "kpi: **Arial**, 40pt, weight 700",
      "caption: **Arial**, 9pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.6in",
      "spacing.margin_y: 0.5in",
      "spacing.gutter: 0.15in",
      "slide.size: 13.33x7.5in",
      "slide.grid_columns: 12",
      "slide.header_band: 0.5-1.4in",
      "slide.hairline: 1px #D1D5DB",
      "slide.source_caption: fixed bottom-right",
      "slide.transition: cut | fade 0.2s",
      "shape.radius: 0px",
      "shape.border: 1px solid #D1D5DB",
      "shape.accent_border: 4px solid #0B5FFF",
      "shape.shadow: none"
    ],
    "signature": [
      "12열 모듈러 그리드 위 무채색 본문과 단일 강조색의 헤어라인 보더 데이터 박스, 액션 타이틀 헤더의 컨설팅 보고서 정형.",
      "한눈에 알아보는 단서: (1) 모든 슬라이드 상단에 액션 타이틀(완결된 문장형 메시지) + 그 아래 헤어라인 룰 1px, (2) 본문은 회색 계열만, 강조는 단 1개 색을 데이터 박스 보더·KPI 숫자에만, (3) 우하단에 항상 출처 캡션. 장식은 없고 정렬 정밀도가 전부다.",
      "diagram.language: hairline square nodes + 0.75pt straight connectors + circular number badges, accent #0B5FFF only on active element",
      "diagram.node.shape: square (radius 0)",
      "diagram.node.size: 2.1in x 0.9in",
      "diagram.node.border: 1px solid #D1D5DB",
      "diagram.node.fill: #F4F5F7",
      "diagram.node.active_border: 4px left #0B5FFF",
      "diagram.connector.stroke: 0.75pt #1A1A1A straight",
      "diagram.connector.arrowhead: 4px triangle"
    ],
    "avoid": [
      "강조색 2개 이상 쓰기, 텍스트에 컬러 입히기 — 강조는 `#0B5FFF` 하나, 데이터/KPI에만.",
      "둥근 모서리 박스, 그림자, 그라디언트.",
      "**아마추어 차트 회귀 금지:** 3D·입체 막대, 원근·기울임, 막대/조각 그림자·광택·베벨, 무지개·계열별 색칠, 격자선 과다, 차트 테두리 박스, 배경 채움, 범례 박스(계열 4개 미만일 때), 잘린 y축·확대 축척(0에서 시작 안 함), 둥근 막대, div 블록 막대. 막대는 전부 회색 + 강조 1개만 `#0B5FFF`.",
      "모든 요소 중앙 정렬 — 본문은 전부 좌측 정렬.",
      "이모지 불릿·클립아트·스톡 아이콘·장식 도형.",
      "출처 캡션 누락. 데이터를 쓰면 출처는 의무.",
      "슬라이드를 6줄 넘는 글로 채우기."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD02",
    "title": "Keynote 미니멀 풀블리드",
    "mood": "mono · minimal-sans · full-bleed · airy · subtle",
    "bestFor": "design-diversity standard · keynote-minimal",
    "id": "ppt-keynote-minimal-fullbleed",
    "background": [
      "Bg: `#FFFFFF`",
      "Surface: `none`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#FFFFFF"
      },
      {
        "role": "bg alt",
        "label": "bg alt",
        "hex": "#000000"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#1D1D1F"
      },
      {
        "role": "text on dark",
        "label": "text on dark",
        "hex": "#FFFFFF"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#86868B"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#0071E3"
      }
    ],
    "fonts": [
      "display: **Helvetica Neue**, 54pt, weight 700, tracking -0.02em, leading 1.1, fallback Arial, Inter, Pretendard",
      "body: **Helvetica Neue**, 36pt, weight 400, leading 1.2",
      "label: **Helvetica Neue**, 18pt, weight 400",
      "caption: **Helvetica Neue**, 13pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.safe_x: 1.2in",
      "spacing.safe_y: 1.0in",
      "spacing.text_area_max: 33%",
      "slide.size: 13.33x7.5in",
      "slide.image_treatment: full-bleed single photo, margin 0",
      "slide.max_text_blocks: 1",
      "slide.max_chars_kr: 40",
      "slide.transition: dissolve 0.5s",
      "shape.radius: 0px",
      "shape.border: none",
      "shape.shadow: none",
      "shape.image_overlay: #000000 0-40%"
    ],
    "signature": [
      "풀블리드 사진 또는 단색 배경에 한 줄 문장만, 압도적 여백의 한 장 한 메시지 극단적 절제.",
      "한눈에 알아보는 단서: (1) 슬라이드의 텍스트가 화면 면적의 1/3 이하, 나머지는 빈 공간 또는 풀블리드 이미지, (2) 한 슬라이드에 문장 한 줄 또는 단어 한 개, 불릿 절대 없음, (3) 사진은 가장자리까지 꽉 차고(여백 0) 텍스트가 그 위에 얹힌다. 비움이 디자인이다.",
      "diagram.language: no boxes — text is the node; 1pt hairline connectors with dot endpoints; numbers as plain 24pt text; accent #0071E3 on one element only",
      "diagram.node.shape: none (text only)",
      "diagram.node.text: 36pt Regular word",
      "diagram.node.border: none",
      "diagram.node.fill: none",
      "diagram.connector.stroke: 1pt #86868B hairline straight",
      "diagram.connector.endpoint: 6px filled dot (no arrowhead)",
      "diagram.connector.curve: none"
    ],
    "avoid": [
      "불릿 리스트 — 절대 금지. 항목이 여럿이면 슬라이드를 쪼갠다.",
      "슬라이드를 글로 채우기. 텍스트가 화면 1/3 넘으면 실패.",
      "박스·카드·보더·그림자·둥근 모서리.",
      "한 슬라이드에 텍스트 블록 2개 이상, 이미지 2개 이상.",
      "그라디언트 배경, 무지개색, 이모지, 클립아트, 스톡 아이콘.",
      "배경색을 흰/검 외 다른 색으로.",
      "**아마추어 차트 회귀 금지:** 3D·입체 차트, 원근·기울임, 그림자·광택·베벨, 무지개·계열별 색칠, 격자선, 차트 테두리 박스, 배경 채움, 범례, 잘린 y축·확대 축척, 둥근 막대, 파이·도넛, div 블록 막대. 데이터는 빅 넘버 1개를 1순위로, 차트는 요소를 모두 비운 단색 단일 차트만."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD03",
    "title": "에디토리얼 매거진",
    "mood": "mono · serif-editorial · asymmetric · balanced · none",
    "bestFor": "design-diversity standard · editorial-magazine",
    "id": "ppt-editorial-magazine",
    "background": [
      "Bg: `#FBFAF7`",
      "Surface: `#FBFAF7`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#FBFAF7"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#FBFAF7"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#1C1B19"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#8A8782"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#A8312A"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#C9C5BC"
      }
    ],
    "fonts": [
      "display: **Playfair Display**, 40pt, weight 700, tracking -0.01em, leading 1.1, fallback Georgia, Noto Serif KR",
      "subhead: **Playfair Display**, 22pt, weight 400",
      "body: **Source Serif Pro**, 17pt, weight 400, leading 1.45, fallback Georgia, Noto Serif KR",
      "dropcap: **Playfair Display**, 54pt, weight 700",
      "kicker: **Arial**, 11pt, weight 700, tracking 0.12em, fallback Helvetica, Pretendard",
      "caption: **Arial**, 10pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.7in",
      "spacing.margin_y: 0.6in",
      "spacing.column_gap: 0.3in",
      "spacing.column_ratio: 5:7",
      "slide.size: 13.33x7.5in",
      "slide.columns: 2 (5:7 asymmetric) or 3",
      "slide.photo: full-cut rectangular, fills column edge-to-edge",
      "slide.pull_quote: 24pt italic + vermilion quote mark",
      "slide.transition: fade 0.4s",
      "shape.radius: 0px",
      "shape.border: none",
      "shape.rule: 0.5pt #C9C5BC",
      "shape.shadow: none"
    ],
    "signature": [
      "스프레드 단위 다단 칼럼 그리드, 큰 세리프 헤드라인과 드롭캡, 잡지 활자 부속의 출판물 위계.",
      "한눈에 알아보는 단서: (1) 본문이 2~3단 칼럼으로 흐르고 단의 폭이 서로 다른 비대칭 구성, (2) 세리프 헤드라인이 크고 첫 문단에 드롭캡(대문자 3줄 높이), (3) 풀컷 사진이 한쪽 단을 통째로 점유하고 본문이 그 옆을 감싼다. 슬라이드가 아니라 펼침면처럼 보인다.",
      "diagram.language: square hairline nodes (no fill) + 0.5pt ink connectors + serif number badges, spot color #A8312A on one element only",
      "diagram.node.shape: square (radius 0)",
      "diagram.node.size: 2.0in x 0.85in",
      "diagram.node.border: 0.5pt #C9C5BC hairline",
      "diagram.node.fill: none (#FBFAF7 page)",
      "diagram.node.highlight_border: 1pt #A8312A",
      "diagram.connector.stroke: 0.5pt #1C1B19 ink straight",
      "diagram.connector.arrowhead: 5px triangle"
    ],
    "avoid": [
      "산세리프로 헤드라인·본문 쓰기 — 세리프가 정체성. 산세리프는 키커·캡션에만.",
      "좌우 대칭 중앙 정렬 레이아웃 — 칼럼 폭은 의도적으로 비대칭.",
      "둥근 모서리, 그림자, 카드 박스, 그라디언트.",
      "불릿 리스트로 본문 채우기 — 본문은 칼럼으로 흐르는 산문.",
      "스팟 컬러 2개 이상, 텍스트 본문에 컬러.",
      "이모지·클립아트·스톡 아이콘.",
      "**아마추어 차트 회귀 금지:** 3D·입체 차트, 원근·기울임, 그림자·광택·베벨, 무지개·계열별 색칠, 격자선, 차트 테두리 박스, 배경 채움, 범례 박스, 잘린 y축·확대 축척, 둥근 막대, div 블록 막대. 데이터는 잉크 블랙 단색 + 버밀리언 강조 1개, 값 레이블은 본문 세리프, 캡션은 Arial Italic."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD04",
    "title": "네오브루탈리즘",
    "mood": "vivid-primary · heavy-display · block-grid · dense · snappy",
    "bestFor": "design-diversity standard · neo-brutalism",
    "id": "ppt-neo-brutalism",
    "background": [
      "Bg: `#FFFFFF`",
      "Surface: `#FFFFFF`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#FFFFFF"
      },
      {
        "role": "bg alt",
        "label": "bg alt",
        "hex": "#FFE14D"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#FFFFFF"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#0A0A0A"
      },
      {
        "role": "accent 1",
        "label": "accent 1",
        "hex": "#FF5A36"
      },
      {
        "role": "accent 2",
        "label": "accent 2",
        "hex": "#FFE14D"
      },
      {
        "role": "accent 3",
        "label": "accent 3",
        "hex": "#2D5BFF"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#0A0A0A"
      }
    ],
    "fonts": [
      "display: **Archivo Black**, 48pt, weight 900, tracking -0.02em, leading 1.0, fallback Arial Black, Pretendard",
      "subhead: **Archivo Black**, 24pt, weight 800",
      "body: **Arial**, 18pt, weight 700, leading 1.25, fallback Helvetica, Pretendard",
      "badge: **Archivo Black**, 14pt, weight 900",
      "caption: **Arial**, 12pt, weight 700"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.5in",
      "spacing.block_layout: intentionally misaligned",
      "slide.size: 13.33x7.5in",
      "slide.block_grid: True",
      "slide.max_colors_per_slide: 3",
      "slide.transition: cut | push 0.1s",
      "shape.radius: 0px",
      "shape.border: 4-6px solid #0A0A0A",
      "shape.shadow: 8px 8px 0 #0A0A0A",
      "shape.rotation: -3deg to +3deg"
    ],
    "signature": [
      "두꺼운 검정 보더와 하드 섀도, 원색 블록의 거친 충돌, 거대 굵은 산세리프의 의도적 비대칭.",
      "한눈에 알아보는 단서: (1) 모든 박스에 4px 이상 검정 보더 + 오른쪽-아래로 오프셋된 하드 섀도(블러 0, 불투명 100%), (2) 채도 100%에 가까운 원색 블록이 그라디언트 없이 평면으로 충돌, (3) 거대한 굵은 산세리프가 의도적으로 비뚤게·비대칭으로 배치. 부드러움이 전혀 없다.",
      "diagram.language: square nodes + 5px black border + flat primary fill + 8px hard shadow; 6px black connectors with 16px angular arrowhead; square black number badges; primary-color clash, max 3 per diagram",
      "diagram.node.shape: square (radius 0)",
      "diagram.node.size: 2.4in x 1.1in",
      "diagram.node.border: 5px solid #0A0A0A",
      "diagram.node.fill: flat primary",
      "diagram.node.shadow: 8px 8px 0 #0A0A0A",
      "diagram.node.rotation: -3deg to +3deg",
      "diagram.connector.stroke: 6px solid #0A0A0A straight"
    ],
    "avoid": [
      "둥근 모서리 — 절대 금지, 전부 직각.",
      "부드러운 확산 그림자, 그라디언트, 반투명, 블러.",
      "파스텔·저채도 색. 원색은 채도 그대로.",
      "모든 블록을 가지런히 정렬 — 의도적으로 어긋나게.",
      "가는 폰트, 얇은 본문 — 본문도 700 이상.",
      "이모지·클립아트·부드러운 일러스트.",
      "**아마추어 차트 회귀 금지:** 3D·입체 막대, 원근·기울임, 부드러운 확산 그림자·블러·광택·베벨(하드 섀도만 허용), 그라디언트·반투명 채움, 무지개·계열별 색칠, 격자선, 범례 박스, 잘린 y축·확대 축척, 둥근 막대, 곡선 보간 라인, div 블록 막대. 막대는 5px 검정 보더 + 평면 원색 + 하드 섀도만."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD05",
    "title": "글래스모피즘",
    "mood": "gradient · minimal-sans · centered · airy · subtle",
    "bestFor": "design-diversity standard · glassmorphism",
    "id": "ppt-glassmorphism",
    "background": [
      "Bg asset: rasterized PNG mesh generated with Sharp from #7B5BFF, #3FA9FF, #FF6FB5, #48E1C8; CSS fallback #7B5BFF",
      "Surface: `rgba(255,255,255,0.55)`"
    ],
    "colors": [
      {
        "role": "text",
        "label": "text",
        "hex": "#1A1A2E"
      },
      {
        "role": "text on dark",
        "label": "text on dark",
        "hex": "#FFFFFF"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#3A3A52"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#FFFFFF"
      },
      {
        "role": "chart",
        "label": "#6E7090",
        "hex": "#6E7090"
      }
    ],
    "fonts": [
      "display: **SF Pro Display**, 40pt, weight 600, tracking -0.01em, leading 1.15, fallback Inter, Pretendard",
      "subhead: **SF Pro Display**, 22pt, weight 500",
      "body: **SF Pro Display**, 18pt, weight 400, leading 1.4",
      "label: **SF Pro Display**, 13pt, weight 500, tracking 0.04em",
      "caption: **SF Pro Display**, 11pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 1.0in",
      "spacing.panel_padding: 0.4in",
      "spacing.panel_gap: 0.25in",
      "spacing.panel_overlap: 0.2-0.4in",
      "slide.size: 13.33x7.5in",
      "slide.background: full-bleed rasterized 4-stop mesh PNG asset; never implement as CSS gradient",
      "slide.panels_per_slide: 1-3, slightly overlapping",
      "slide.transition: fade 0.4s + scale 0.97->1.0",
      "shape.radius: 24px",
      "shape.border: 1.5px solid rgba(255,255,255,0.65)",
      "shape.shadow: 0 8px 32px rgba(0,0,0,0.22)",
      "shape.panel_fill_opacity: 0.55",
      "shape.min_contrast: WCAG 4.5:1 (body text on panel)"
    ],
    "signature": [
      "rasterized PNG/Sharp 다색 메시 배경 asset 또는 flat-token fallback 위 부유하는 반투명 프로스티드 글래스 패널, 하이라이트 보더의 깊이감.",
      "한눈에 알아보는 단서: (1) 콘텐츠가 반투명(불투명도 15~25%) 흰 패널 안에 담기고 패널 너머로 rasterized PNG/Sharp 다색 메시 배경 asset 또는 flat-token fallback이 흐릿하게 비친다, (2) 패널 가장자리에 1px 밝은 하이라이트 보더, (3) 배경은 채도 높은 rasterized PNG/Sharp 다색 메시 asset 또는 flat-token fallback. 모든 패널이 유리처럼 떠 있고 CSS gradient는 금지한다.",
      "diagram.language: inside glass panel only; rounded nodes (12px) with 12% alpha chip fill; 1.5pt solid connectors; circular number badges; highlight = panel-text-color solid 100%, never alpha on text/connectors/badges",
      "diagram.node.shape: rounded square 12px radius",
      "diagram.node.size: 2.0in x 0.9in",
      "diagram.node.fill: panel-text-color 12% alpha chip",
      "diagram.node.border: 1px panel-text-color 30% alpha",
      "diagram.node.highlight: chip 22% alpha + solid 100% border",
      "diagram.connector.stroke: 1.5pt panel-text-color solid straight",
      "diagram.connector.arrowhead: 6px triangle"
    ],
    "avoid": [
      "**패널 불투명도를 55% 미만으로 내리기** — 텍스트가 메시 배경에 묻혀 판독 불가가 된다. 글래스 정체성은 블러와 보더로 살리고, 채움은 55%+ 유지.",
      "**텍스트에 알파(불투명도)를 걸어 흐리게 만들기** — 위계는 크기·굵기로만. 본문은 항상 솔리드 색(라이트=`#1A1A2E`, 다크=`#FFFFFF`).",
      "**밝은 라이트 패널 위에 흰 텍스트 / 어두운 다크 패널 위에 잉크 텍스트** — 패널 변형에 맞는 텍스트 색을 반드시 짝지어 4.5:1 대비를 확보.",
      "rasterized PNG/Sharp 다색 메시 배경 asset 위에 패널·칩 없이 텍스트를 직접 올리기.",
      "직각 모서리 — 모든 패널 크게 둥글게(24px).",
      "단색 배경 — 배경은 항상 rasterized PNG/Sharp 다색 메시 asset 또는 flat-token fallback.",
      "진한 그림자, 하드 섀도, 이모지·클립아트·스톡 아이콘.",
      "배경 rasterized PNG/Sharp 메시 asset을 보라-핑크 2색만 쓰기 금지 — 4정점(보라/스카이/핑크/민트) 모두 사용하고 flat-token fallback을 제공.",
      "**아마추어 차트 회귀 금지:** 3D·입체 차트, 원근·기울임, 막대 그림자·광택·베벨, 무지개·계열별 색칠, 격자선 과다, 차트 테두리 박스, 차트 배경 채움, 범례 박스, 잘린 y축·확대 축척, 다중 도넛, 파이 조각 5개 이상, div 블록 막대. 데이터 도형에 반투명 알파를 걸어 흐리게 만들지 않는다(솔리드 100%). 차트는 메시 배경 위 직접 금지 — 반드시 패널 안."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD06",
    "title": "한국 정책보고서 네이비",
    "mood": "dark · minimal-sans · strict-grid · balanced · none",
    "bestFor": "design-diversity standard · korea-policy",
    "id": "ppt-korea-policy-navy",
    "background": [
      "Bg: `#FFFFFF`",
      "Surface: `#E8F1FB`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#FFFFFF"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#E8F1FB"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#1A1A1A"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#5C6470"
      },
      {
        "role": "navy",
        "label": "navy",
        "hex": "#0B2C5C"
      },
      {
        "role": "accent 1",
        "label": "accent 1",
        "hex": "#1B66C9"
      },
      {
        "role": "accent 2",
        "label": "accent 2",
        "hex": "#E03B3B"
      },
      {
        "role": "accent 3",
        "label": "accent 3",
        "hex": "#1F9D57"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#C5D2E3"
      }
    ],
    "fonts": [
      "chapter_no: **Pretendard**, 14pt, weight 700, tracking 0.06em",
      "display: **Pretendard**, 26pt, weight 700, tracking -0.02em, fallback Noto Sans KR, Malgun Gothic",
      "heading: **Pretendard**, 20pt, weight 700",
      "body: **Pretendard**, 17pt, weight 400, leading 1.5",
      "callout: **Pretendard**, 16pt, weight 500",
      "chip: **Pretendard**, 16pt, weight 700",
      "caption: **Pretendard**, 10pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.7in",
      "spacing.content_top: 0.4in",
      "spacing.margin_bottom: 0.5in",
      "spacing.grid_columns: 12",
      "spacing.chip_gap: 0.25in",
      "slide.size: 13.33x7.5in",
      "slide.header_band: 0-0.9in navy #0B2C5C, exactly 12% of canvas height",
      "slide.number_chip: 0.45in square, KRDS blue #1B66C9 fill, white digit",
      "slide.chapter_chip: navy #0B2C5C fill, header-bar top-left",
      "slide.callout_boxes.info: #E8F1FB fill + 4px left #1B66C9 border",
      "slide.callout_boxes.summary: #E8F1FB fill + 0.04in top/bottom #0B2C5C border + navy '요약' label chip",
      "slide.callout_boxes.warning: #FFFFFF fill + 4px left #E03B3B border",
      "slide.chart.data.positive: #1F9D57",
      "slide.chart.data.negative: #E03B3B",
      "slide.chart.data.neutral: #1B66C9"
    ],
    "signature": [
      "네이비 헤더바와 굵은 한국어 고딕 타이틀, 좌측 번호 섹션, 정렬된 박스 본문의 한국 공공 보고서 정형.",
      "한눈에 알아보는 단서: (1) 슬라이드 상단 12% 높이의 네이비 헤더바에 흰 타이틀, (2) 본문 섹션마다 좌측에 번호 칩(①②③ 또는 01·02·03), (3) 본문은 KRDS 파랑 헤어라인으로 구획된 정돈된 박스. 공식 문서의 단정함이 핵심.",
      "diagram.language: node radius 2px, connector 1.75pt right-angle arrow (6px triangle head, no curves), step/level number 0.45in square chip #1B66C9 fill white 16pt Bold, emphasis via semantic color up #1F9D57 / down #E03B3B",
      "diagram.process_flow: right-angle rect nodes 0.85in tall, white fill + 1px #C5D2E3 border, 0.45in number chip top-left, 1.75pt #1B66C9 connectors; active step #E8F1FB fill + 4px left #1B66C9 border; 4-5 horizontal steps",
      "diagram.timeline: horizontal 1pt #C5D2E3 axis, 0.18in square milestone markers #1B66C9, current marker #0B2C5C + '현재' 11pt Bold navy chip, dates 12pt #5C6470 below / events 14pt above, risk milestone #E03B3B",
      "diagram.comparison: 2-3 columns, navy #0B2C5C header band 0.4in white 16pt Bold, body rows alternate #E8F1FB / white, 1px #C5D2E3 vertical hairline between columns, win marker up #1F9D57 / down #E03B3B",
      "diagram.matrix_2x2: 0.75pt #C5D2E3 cross axis, 12pt #5C6470 axis labels at 4 ends, no quadrant fill, data points 0.3in circle bubbles #1B66C9 fill (top-right quadrant items #0B2C5C), quadrant title 14pt Bold #0B2C5C top-left of cell",
      "diagram.hierarchy_funnel: org-chart: right-angle rect nodes + 1.75pt #1B66C9 vertical right-angle connectors, level chip 0.45in (roman I/II/III allowed); funnel = 4 trapezoid tiers narrowing downward, #1B66C9 lightness steps, tier name + value 16pt Bold",
      "diagram.kpi_card: white fill + 1px #C5D2E3 border radius 2px, 4px left status border (positive #1F9D57 / risk #E03B3B / neutral #1B66C9), 32pt Bold #0B2C5C value, 13pt #5C6470 label, delta up #1F9D57 / down #E03B3B 14pt Bold + arrow, padding 0.2in",
      "diagram.render: SVG precise, no div blocks"
    ],
    "avoid": [
      "**네이비 단색만으로 슬라이드를 채우기** — baseline의 평면 네이비와 구별이 안 된다. 포인트 컬러(레드/그린)와 정보 틴트(`#E8F1FB`)를 의미에 맞게 반드시 운용한다.",
      "헤더바 비율을 12%(0.9in)에서 벗어나기 — 모든 본문·차트 슬라이드에서 정확히 고정.",
      "한글 폰트를 Pretendard·Noto Sans KR 외로 — 폰트 깨짐 방지를 위해 반드시 한글 지원 폰트.",
      "헤더바·장 번호·절 번호 위계를 생략하기 — 정부보고서식 다단 번호 위계는 필수.",
      "레드/그린을 장식용으로 칠하기 — 오직 지표의 방향성(위험↓ / 긍정↑)에만.",
      "둥근 카드, 그림자, 그라디언트.",
      "**아마추어 차트 회귀 금지:** 3D·입체 막대, 막대/조각 그림자, 무지개·장식용 색칠(색은 방향성 인코딩 전용), 격자선 과다(헤어라인 1~2개만), 차트 테두리 박스, 잘린 y축(0에서 시작 안 함), 출처 누락.",
      "이모지 불릿·클립아트. 불릿은 KRDS 블루 사각 마커만.",
      "본문을 7줄 넘게 채우기. 한국어는 줄당 글자 수가 많으니 줄 수를 엄격히 제한."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD07",
    "title": "다크모드 테크",
    "mood": "dark · mono · asymmetric · balanced · snappy",
    "bestFor": "design-diversity standard · dark-tech",
    "id": "ppt-dark-tech",
    "background": [
      "Bg: `#0C0D10`",
      "Surface: `#16181D`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#0C0D10"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#16181D"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#E4E6EB"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#8A8F9A"
      },
      {
        "role": "accent 1",
        "label": "accent 1",
        "hex": "#3DF5E0"
      },
      {
        "role": "accent 2",
        "label": "accent 2",
        "hex": "#9D7BFF"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#2A2D35"
      }
    ],
    "fonts": [
      "display: **Space Grotesk**, 38pt, weight 700, tracking -0.01em, leading 1.15, fallback Arial, Pretendard",
      "subhead: **Space Grotesk**, 20pt, weight 500",
      "body: **Space Grotesk**, 17pt, weight 400, leading 1.4",
      "mono_label: **JetBrains Mono**, 13pt, weight 400, tracking 0.05em, fallback Consolas, D2Coding",
      "kpi: **Space Grotesk**, 44pt, weight 700",
      "caption: **JetBrains Mono**, 11pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.6in",
      "spacing.grid: asymmetric, large+small blocks",
      "slide.size: 13.33x7.5in",
      "slide.background: charcoal #0C0D10 + optional 0.5in grid lines",
      "slide.kicker: mono, e.g. // SECTION 02",
      "slide.chart.data: #3DF5E0, #9D7BFF",
      "slide.chart.neutral_bar: #3A3D45",
      "slide.chart.line: 2pt solid + 0 0 8px same-color glow, straight segments, 10% alpha area fade",
      "slide.chart.bar: flat fill (no gradient), 1px neon top edge, radius 2px",
      "slide.chart.axis: x baseline 0.75pt #2A2D35, y-axis omitted",
      "slide.chart.gridline: 1-2 horizontal only, 0.75pt #2A2D35, no glow",
      "slide.chart.value_label: JetBrains Mono 13pt, series color, direct on bar/vertex",
      "slide.chart.axis_label: JetBrains Mono 11pt #8A8F9A",
      "slide.chart.bar_gap_ratio: bar:gap = 3:2",
      "slide.chart.baseline: 0 (no truncated y-axis)"
    ],
    "signature": [
      "차콜 배경에 네온 시안·바이올렛 강조와 발광 라인, 모노스페이스 라벨의 사이버틱한 테크 컨퍼런스 톤.",
      "한눈에 알아보는 단서: (1) 배경이 거의 검정인 차콜 단색, 모든 텍스트가 밝게 떠 있다, (2) 모노스페이스 폰트로 쓰인 라벨·메타데이터(`// 01`, `[ DATA ]` 식), (3) 네온 시안/바이올렛 1px 라인이 미세하게 발광하며 박스와 차트를 구획. 사이버·터미널 분위기.",
      "diagram.language: code-block nodes #16181D + 1px border radius 4px; active/emphasis node 1px neon cyan border + 0 0 8px glow; connectors 1.5pt straight segments (no curves) + thin sharp arrowhead; all numbers/labels JetBrains Mono (// 01, [STEP]); accents cyan/violet 2 colors only",
      "diagram.process_flow: code-block nodes 0.8in tall #16181D + 1px #2A2D35 border 4px radius, mono step number // 01 13pt cyan top-left, 1.5pt #3DF5E0 straight connectors + sharp arrowhead (no glow on lines), active node 1px cyan border + 0 0 8px glow, 4-5 horizontal steps",
      "diagram.timeline: horizontal 0.75pt #2A2D35 axis, glowing dot milestones #3DF5E0 + 0 0 6px, current milestone violet #9D7BFF glow + mono [ NOW ] 13pt, dates JetBrains Mono 11pt #8A8F9A below / events 17pt above",
      "diagram.comparison: 2-3 code-block columns #16181D + 1px #2A2D35, mono header [ OPTION A ] 13pt cyan, winning column 1px cyan border + glow, row hairline 0.75pt #2A2D35, win/lose mono glyph cyan / #8A8F9A",
      "diagram.matrix_2x2: 1px #2A2D35 cross axis over fine grid bg, mono 11pt #8A8F9A axis labels, no quadrant fill, data points 0.28in glowing circle #3DF5E0 + 0 0 8px (top-right items violet #9D7BFF), quadrant title mono 13pt cyan",
      "diagram.hierarchy_funnel: hierarchy = code-block nodes + 1.5pt #3DF5E0 vertical straight connectors; funnel = 4 tiers narrowing downward 4px radius, #16181D fill + 1px neon cyan top-edge glow (stronger deeper), tier name + cyan KPI value + glow",
      "diagram.kpi_card: code-block surface #16181D + 1px #2A2D35 radius 4px, emphasis card 1px neon border + 0 0 12px glow, mono kicker // METRIC 13pt, 44pt Bold cyan #3DF5E0 value + glow, delta cyan(up)/violet(down) mono 13pt + arrow, padding 0.2in",
      "diagram.render: SVG precise, no div blocks"
    ],
    "avoid": [
      "밝은 배경 — 배경은 반드시 차콜 다크.",
      "강조색 3개 이상 — 시안·바이올렛 2개만.",
      "부드러운 확산 그림자 — 깊이는 네온 글로우로.",
      "둥근 큰 모서리(8px 초과), 파스텔 색, 그라디언트 배경.",
      "이모지·클립아트·스톡 아이콘.",
      "모노 라벨 없이 일반 산세리프로만 라벨링 — 메타 라벨·차트 수치 라벨은 모노 필수.",
      "**아마추어 차트 회귀 금지:** 3D·입체 차트, 부드러운 확산 그림자(깊이는 네온 글로우로), 무지개·계열별 색칠(시안·바이올렛 2색만), 막대 CSS gradient 사용, 격자선 과다·격자선 발광, 차트 테두리 박스, 잘린 y축. 차트 수치 라벨을 일반 산세리프로 쓰기."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD08",
    "title": "핸드드로운 스케치",
    "mood": "earth · mixed · asymmetric · balanced · playful",
    "bestFor": "design-diversity standard · hand-drawn",
    "id": "ppt-hand-drawn-sketch",
    "background": [
      "Bg: `#F4ECDC`",
      "Surface: `#F4ECDC`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#F4ECDC"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#F4ECDC"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#2B2724"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#7A7268"
      },
      {
        "role": "accent 1",
        "label": "accent 1",
        "hex": "#E8654A"
      },
      {
        "role": "accent 2",
        "label": "accent 2",
        "hex": "#E0A92E"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#CFC4AC"
      }
    ],
    "fonts": [
      "display: **Caveat**, 40pt, weight 700, fallback Comic Sans MS, Pretendard",
      "subhead: **Caveat**, 24pt, weight 700",
      "body: **Pretendard**, 17pt, weight 400, leading 1.45, fallback Noto Sans KR",
      "label: **Caveat**, 16pt, weight 700",
      "caption: **Pretendard**, 12pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.6in",
      "spacing.layout: asymmetric, hand-placed",
      "slide.size: 13.33x7.5in",
      "slide.background: cream paper texture #F4ECDC",
      "slide.transition: fade 0.3s | light wipe",
      "shape.radius: 6px",
      "shape.border: 2.5px wobble path, +/-1.5px amplitude",
      "shape.box_rotation: -2.5deg to +2.5deg",
      "shape.double_line_offset: 0.8px",
      "shape.stroke_taper: 3px start -> 1.5px end, overshoot 4px",
      "shape.fill: diagonal hatch 2px lines, 6px gap, 30deg",
      "shape.shadow: rough pencil shading / offset double line"
    ],
    "signature": [
      "손그림 테두리와 거친 펜 스트로크 화살표·말풍선, 크림색 종이 질감의 비격식 워크숍 톤.",
      "한눈에 알아보는 단서: (1) 모든 박스 테두리가 자로 그은 직선이 아니라 손으로 그린 듯 미세하게 흔들리는 선, (2) 화살표·밑줄·동그라미가 거친 펜 스트로크로 그려져 강조를 표시, (3) 크림색 종이 질감 배경. 손으로 그린 워크숍 보드 느낌.",
      "diagram.language: all node borders 2.5px +/-1.5px wobble path #2B2724, nodes random rotation -2.5deg to +2.5deg, connectors variable-width pen stroke 3px->1.5px + 4px overshoot, step numbers in hand-drawn circle with Caveat handwriting, emphasis via coral/mustard hatch/circle 2 colors only; no smooth digital shapes",
      "diagram.process_flow: wobble rect nodes 0.85in tall white fill, -2deg~+2deg rotation, 2.5px pen border, hand-drawn circle step number Caveat 16pt, tapering pen arrows 3px->1.5px between (wobble path, overshoot 4px), current node coral #E8654A diagonal hatch fill, 4 horizontal steps",
      "diagram.timeline: horizontal axis +/-1.5px wobble 2.5px pen path #2B2724, small hand-drawn circle milestones, current = coral rough circle + speech bubble Caveat label, dates Caveat 14pt below / events 16pt above, dotted hand-drawn lines between",
      "diagram.comparison: 2-3 wobble boxes offset (-2deg~+2deg rotation), Caveat 24pt headers, hand-drawn VS or pen arrow between, winning box mustard #E0A92E hatch + rough circle, hand-drawn check/x pictograms",
      "diagram.matrix_2x2: cross axis = two +/-1.5px wobble 2.5px pen paths, Caveat 14pt axis labels, no quadrant fill, data points small hand-drawn circles, top-right quadrant items wrapped in coral rough circle + bubble annotation",
      "diagram.hierarchy_funnel: hierarchy = wobble rect nodes + hand-drawn vertical pen arrows (overshoot); funnel = 4 trapezoid tiers narrowing downward (wobble border), diagonal hatch fill ink->coral progression, Caveat tier name + value",
      "diagram.kpi_card: wobble box 2.5px pen border -2deg~+2deg rotation (emphasis = 0.8px offset double line), Caveat 36pt #2B2724 value, 14pt label, hand-drawn delta arrow + coral(down)/mustard(up emphasis) circle, key value coral rough underline",
      "diagram.render: SVG precise paths, no div blocks"
    ],
    "avoid": [
      "자로 그은 듯 완벽한 직선·정원·정사각 — 모든 선은 미세하게 흔들려야 함.",
      "솔리드 평면 채움 — 강조는 해칭으로.",
      "차가운 무채색 배경 — 배경은 크림색 종이.",
      "마커 색 3개 이상, 깔끔한 디지털 그림자, 그라디언트.",
      "매끈한 스톡 아이콘·클립아트·이모지 — 아이콘은 손그림 픽토그램.",
      "모든 박스를 가지런히 정렬·무회전.",
      "**아마추어 차트 회귀 금지:** 3D·입체 차트, 그림자, 무지개·계열별 색칠, 격자선, 차트 테두리 박스, 범례 박스, 잘린 y축. 매끈한 직선 축·솔리드 평면 채움 막대 — 축은 흔들리는 경로, 채움은 해칭, 값 라벨은 손글씨."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD09",
    "title": "데이터 인포그래픽 헤비",
    "mood": "vivid-primary · minimal-sans · block-grid · dense · subtle",
    "bestFor": "design-diversity standard · data-infographic",
    "id": "ppt-data-infographic-heavy",
    "background": [
      "Bg: `#F7F8FA`",
      "Surface: `#FFFFFF`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#F7F8FA"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#FFFFFF"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#1E2229"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#6E7480"
      },
      {
        "role": "accent 1",
        "label": "accent 1",
        "hex": "#2563EB"
      },
      {
        "role": "accent 2",
        "label": "accent 2",
        "hex": "#0EA5A4"
      },
      {
        "role": "accent 3",
        "label": "accent 3",
        "hex": "#F59E0B"
      },
      {
        "role": "accent 4",
        "label": "accent 4",
        "hex": "#EF4444"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#E2E5EA"
      },
      {
        "role": "delta up",
        "label": "delta up",
        "hex": "#16A34A"
      },
      {
        "role": "delta down",
        "label": "delta down",
        "hex": "#DC2626"
      }
    ],
    "fonts": [
      "display: **Inter**, 24pt, weight 700, tracking -0.01em, fallback Arial, Pretendard",
      "card_header: **Inter**, 13pt, weight 600, tracking 0.03em",
      "kpi: **Inter**, 40pt, weight 700",
      "delta: **Inter**, 14pt, weight 600",
      "body: **Inter**, 13pt, weight 400, leading 1.35",
      "caption: **Inter**, 10pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.5in",
      "spacing.margin_y: 0.45in",
      "spacing.card_gap: 0.15in",
      "spacing.card_padding: 0.18in",
      "slide.size: 13.33x7.5in",
      "slide.grid: 12-column dashboard, 4-8 modules per slide",
      "slide.main_module: 2x2 cells, secondary 1x1",
      "slide.chart.data: #2563EB, #0EA5A4, #F59E0B, #EF4444",
      "slide.chart.deemphasis_bar: #C7D2E8",
      "slide.chart.delta.up: #16A34A",
      "slide.chart.delta.down: #DC2626",
      "slide.chart.encoding: categorical — series mapped to 4-color palette in order; single-series uses #2563EB with 1 emphasis bar, rest deemphasized #C7D2E8",
      "slide.chart.axis: x baseline 0.75pt #6E7480, y-axis omitted",
      "slide.chart.gridline: 2-3 horizontal only, 0.5pt #E2E5EA (0/mid/max)",
      "slide.chart.value_label: Inter 12pt Semibold, series color, tabular, direct on bar/vertex/slice"
    ],
    "signature": [
      "차트·KPI 카드·아이콘 통계가 빽빽한 대시보드형 레이아웃, F자 동선의 정보 밀도가 정체성.",
      "한눈에 알아보는 단서: (1) 한 슬라이드에 차트/KPI 카드가 4~8개 모듈로 빽빽이 들어찬 대시보드, (2) 주 지표 숫자는 보조 텍스트의 2~3배 크기, (3) 색이 데이터 인코딩에 종속(카테고리=색). F자 동선으로 좌상단부터 읽힌다.",
      "diagram.language: all nodes/cards white surface + 1px #E2E5EA border + 0 1px 3px 6% shadow radius 6px, connectors 1.5pt right-angle line + small triangle arrowhead #6E7480, step/level number 0.32in circle badge (data-color fill, white digit 13pt Semibold), emphasis via data 4-color in order, deemphasis #C7D2E8",
      "diagram.process_flow: card nodes 0.8in tall white + 1px #E2E5EA border 6px radius, 0.32in circle number badge top-left, 1.5pt #6E7480 right-angle connectors + triangle head, active node 3px left data-color #2563EB bar, 4-6 horizontal steps + 13pt caption under each",
      "diagram.timeline: horizontal 1pt #E2E5EA axis, 0.16in circle markers data-color, current #2563EB fill circle + 12pt Semibold label, dates 10pt #6E7480 below / events 13pt above, progress as #2563EB 12% alpha area",
      "diagram.comparison: 2-3 column cards, 13pt uppercase card header #6E7480, item label (left) + value (right), winning item data-color #2563EB / losing #6E7480, 1px #E2E5EA column hairline, inline mini-bar 1in + 12pt Semibold value",
      "diagram.matrix_2x2: 0.5pt #E2E5EA cross axis, 10pt #6E7480 axis labels at 4 ends, no quadrant fill, data points 0.24-0.4in bubbles (size = 3rd variable, color = data 4-color category) + 10pt label, top-right quadrant #2563EB 6% fill",
      "diagram.hierarchy_funnel: funnel primary = 4-5 right-angle trapezoid tiers narrowing downward, single data-color lightness steps or #2563EB solid, tier name 13pt + 24pt Bold value + 14pt Semibold conversion delta; hierarchy = card nodes + 1.5pt vertical right-angle connectors",
      "diagram.kpi_card: white card 1px #E2E5EA border 6px radius + 0 1px 3px 6% shadow, 2px line icon (data-color) + 13pt uppercase header top-left, 40pt Bold data-color KPI, 14pt Semibold delta (up triangle #16A34A / down triangle #DC2626), 1.2in sparkline bottom-right, padding 0.18in",
      "diagram.render: SVG precise, no div blocks"
    ],
    "avoid": [
      "슬라이드에 모듈 1~2개만 — 밀도가 정체성, 4개 이상 채운다.",
      "데이터 색을 4색 초과로, 장식 목적 컬러 추가.",
      "둥근 큰 모서리(8px 초과), 그라디언트 배경.",
      "이모지·클립아트. 아이콘은 라인 아이콘만.",
      "KPI 숫자를 본문 크기로 — 주 지표는 반드시 크게(40pt).",
      "**아마추어 차트 회귀 금지:** 3D·입체 막대·입체 도넛, 막대/조각 그림자·베벨, 무지개·계열별 난색 색칠(데이터 4색만 순서대로), 막대 CSS gradient 사용, 격자선 과다(2~3개만)·범례 박스, 차트 테두리 박스·플롯 배경 채움, 잘린 y축(0 기준선 필수), 값 레이블을 일반 텍스트 크기로 키우기, 출처 누락. 도넛 조각 4개 이상·다중 도넛 금지."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD10",
    "title": "모노크롬 리스크",
    "mood": "mono · heavy-display · strict-grid · balanced · none",
    "bestFor": "design-diversity standard · monochrome-serious",
    "id": "ppt-monochrome-risk",
    "background": [
      "Bg: `#FFFFFF`",
      "Surface: `#E6E6E6`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#FFFFFF"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#E6E6E6"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#0A0A0A"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#767676"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#0A0A0A"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#0A0A0A"
      },
      {
        "role": "gray scale 1",
        "label": "gray scale 1",
        "hex": "#0A0A0A"
      },
      {
        "role": "gray scale 2",
        "label": "gray scale 2",
        "hex": "#3D3D3D"
      },
      {
        "role": "gray scale 3",
        "label": "gray scale 3",
        "hex": "#767676"
      },
      {
        "role": "gray scale 4",
        "label": "gray scale 4",
        "hex": "#B0B0B0"
      },
      {
        "role": "gray scale 5",
        "label": "gray scale 5",
        "hex": "#E6E6E6"
      }
    ],
    "fonts": [
      "display: **Helvetica Neue**, 44pt, weight 700, tracking -0.02em, leading 1.05, fallback Arial Black, Pretendard",
      "subhead: **Helvetica Neue**, 22pt, weight 700",
      "body: **Helvetica Neue**, 17pt, weight 400, leading 1.4, fallback Arial, Pretendard",
      "label: **Helvetica Neue**, 12pt, weight 700, tracking 0.10em",
      "caption: **Helvetica Neue**, 10pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.7in",
      "spacing.margin_y: 0.55in",
      "slide.size: 13.33x7.5in",
      "slide.emphasis: black-fill block + white text (inversion only, no color)",
      "slide.chart.data.emphasis: #0A0A0A",
      "slide.chart.data.deemphasis: #B0B0B0",
      "slide.chart.data.secondary: #767676",
      "slide.chart.encoding: grayscale luminance — 1 emphasis bar ink black, rest light gray; max 2 gray steps per chart; 2nd series via 45deg hatch pattern",
      "slide.chart.pattern: diagonal hatch #0A0A0A 1px lines, 5px gap, 45deg",
      "slide.chart.axis: x baseline 1pt solid #0A0A0A, y-axis omitted",
      "slide.chart.gridline: 1 only, 0.5pt #E6E6E6 (max value)",
      "slide.chart.value_label: Helvetica Neue 14pt Bold #0A0A0A, tabular, direct on bar/vertex",
      "slide.chart.category_label: 12pt Bold uppercase #3D3D3D, under bar",
      "slide.chart.bar_gap_ratio: bar:gap = 3:2",
      "slide.chart.bar_radius: 0px"
    ],
    "signature": [
      "순수 흑백 단계만, 굵은 경고 헤드라인과 두꺼운 룰 라인 구획의 의도적으로 엄숙한 리스크 보고 톤.",
      "한눈에 알아보는 단서: (1) 어떤 슬라이드에도 색이 한 점도 없음 — 흑·백·회색 5단계만, (2) 거대하고 굵은 산세리프 헤드라인이 경고문처럼 단호하게, (3) 2~4px 두꺼운 검정 룰 라인이 영역을 가른다. 위험 보고서·감사 보고서의 엄숙함.",
      "diagram.language: all nodes right-angle 0px, borders 2px or 4px #0A0A0A rule line, connectors 2pt right-angle solid + sharp triangle arrowhead #0A0A0A (no curves), step/level number 0.4in square (black fill, white 12pt Bold uppercase label), emphasis via black-fill inversion (white text) only — zero color",
      "diagram.process_flow: right-angle rect nodes 0.85in tall, white fill + 2px #0A0A0A border 0px radius, 0.4in black square number chip top-left (white digit), 2pt #0A0A0A right-angle connectors + sharp triangle head, active/risk node black #0A0A0A fill + white text inversion, 4-5 horizontal steps",
      "diagram.timeline: horizontal 2px #0A0A0A rule axis, 0.16in square markers #0A0A0A, current = black-fill square + 12pt Bold uppercase label, dates 12pt Bold uppercase #3D3D3D below / events 17pt above, risk milestone = triangle pictogram (warn by shape not color)",
      "diagram.comparison: 2-3 columns split by 4px #0A0A0A vertical rule, 22pt Bold uppercase column header + 3px rule under, winning column black-fill inversion / losing white, 2px rule between rows, win/lose check/x triangle pictogram (shape not color)",
      "diagram.matrix_2x2: cross axis = two 2px #0A0A0A rule lines, 12pt Bold uppercase axis labels, no quadrant fill, data points 0.28in square #0A0A0A fill, top-right quadrant filled #E6E6E6 pale, quadrant title 12pt Bold uppercase top-left",
      "diagram.hierarchy_funnel: hierarchy = right-angle rect nodes + 2pt #0A0A0A vertical right-angle connectors, level chip 0.4in black square; funnel = 4 right-angle trapezoid tiers narrowing downward, gray luminance (pale->ink, max 2-3 steps) or black-fill/45deg-hatch alternating, tier name 14pt Bold + value",
      "diagram.kpi_card: right-angle box 2px #0A0A0A border 0px radius, emphasis card black-fill + white text inversion, 36pt Bold #0A0A0A value (white on inverted), 12pt Bold uppercase label above, delta = up/down triangle glyph + luminance step (shape/luminance not color), 2px rule between cards",
      "diagram.render: SVG precise, no div blocks"
    ],
    "avoid": [
      "어떤 색이라도 사용 — 흑·백·회색 5단계 외 절대 금지(빨강 경고색조차 금지, 강조는 흑백 반전·명도 대비로). 차트 막대·선·도넛도 회색 명도만.",
      "둥근 모서리, 그림자, 그라디언트.",
      "가는 헤드라인 — 헤드라인은 반드시 Bold 이상, 단호하게.",
      "부드럽고 친근한 톤, 이모지, 클립아트, 일러스트.",
      "본문을 6줄 넘게 채우기.",
      "룰 라인 없이 여백만으로 구획 — 구획은 두꺼운 룰로 명시.",
      "**아마추어 차트 회귀 금지:** 3D·입체 막대·입체 도넛, 막대/조각 그림자·베벨, 색 사용(무채색 명도만), 막대 CSS gradient 사용, 회색 3단계 이상 동시 사용(혼탁), 격자선 과다(1개만)·범례 박스, 차트 테두리 박스·플롯 배경 채움, 잘린 y축(0 기준선 필수), 둥근 막대(직각 0px), 값 레이블 누락·출처 누락."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD11",
    "title": "90s 멤피스 레트로",
    "mood": "vivid-primary · heavy-display · asymmetric · dense · playful",
    "bestFor": "design-diversity standard · memphis-retro",
    "id": "ppt-memphis-retro-90s",
    "background": [
      "Bg: `#F4ECD8`",
      "Surface: `#1A1A1A`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#F4ECD8"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#1A1A1A"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#1A1A1A"
      },
      {
        "role": "text on dark",
        "label": "text on dark",
        "hex": "#F4ECD8"
      },
      {
        "role": "accent 1",
        "label": "accent 1",
        "hex": "#FF3B7F"
      },
      {
        "role": "accent 2",
        "label": "accent 2",
        "hex": "#00B5C9"
      },
      {
        "role": "accent 3",
        "label": "accent 3",
        "hex": "#FFC400"
      },
      {
        "role": "accent 4",
        "label": "accent 4",
        "hex": "#7C4DFF"
      },
      {
        "role": "accent 5",
        "label": "accent 5",
        "hex": "#FF5722"
      },
      {
        "role": "chart 1",
        "label": "chart 1",
        "hex": "#FF3B7F"
      },
      {
        "role": "chart 2",
        "label": "chart 2",
        "hex": "#00B5C9"
      },
      {
        "role": "chart 3",
        "label": "chart 3",
        "hex": "#FFC400"
      },
      {
        "role": "chart 4",
        "label": "chart 4",
        "hex": "#7C4DFF"
      },
      {
        "role": "chart 5",
        "label": "chart 5",
        "hex": "#FF5722"
      },
      {
        "role": "chart emphasis",
        "label": "chart emphasis",
        "hex": "#FF3B7F"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#1A1A1A"
      }
    ],
    "fonts": [
      "display: **Archivo Black**, 54pt, weight 900, tracking -0.01em, fallback Pretendard ExtraBold, sans-serif",
      "heading: **Archivo Black**, 40pt, weight 900, tracking -0.01em, fallback Pretendard ExtraBold, sans-serif",
      "body: **Poppins SemiBold**, 26pt, weight 600, leading 1.3, fallback Pretendard SemiBold, sans-serif",
      "caption: **Poppins**, 16pt, weight 500, tracking 0.08em, fallback Pretendard, sans-serif"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.7in",
      "spacing.margin_y: 0.6in",
      "spacing.grid_columns: 6",
      "spacing.grid_offset: 0.3in",
      "slide.ratio: 16:9",
      "slide.size: 13.33x7.5in",
      "slide.transition: push",
      "slide.transition_duration: 0.3s",
      "slide.title_rotation: 1-3deg",
      "slide.body_lines_max: 6",
      "shape.radius: 0px",
      "shape.border: 3pt solid #1A1A1A",
      "shape.shadow: 6pt 6pt 0 #1A1A1A",
      "shape.decor_shapes: circle, half-circle, triangle, wave, stair-bar"
    ],
    "signature": [
      "지그재그·도트·테라조 패턴과 비정형 기하 도형, 원색 충돌의 80~90s 포스트모던 무질서.",
      "1980~90년대 멤피스 그룹의 포스트모던 키치를 슬라이드로 옮긴다. 채도 100%에 가까운 원색 블록이 충돌하고, 지그재그·도트·테라조 패턴 조각과 비정형 기하 도형(반원·삼각형·물결)이 슬라이드 가장자리에 부유하듯 흩뿌려진다. 모든 요소가 비대칭으로 어긋나 있고 정렬을 의도적으로 거부한다 — 한눈에 \"명랑한 무질서\"로 식별된다.",
      "diagram.render: svg",
      "diagram.node_shape: square radius 0 / full-circle / half-circle",
      "diagram.node_border: 3pt solid #1A1A1A",
      "diagram.node_fill: color.chart cycle, flat",
      "diagram.node_shadow: 6pt 6pt 0 #1A1A1A (blur 0)",
      "diagram.step_badge: 0.5in circle, color.chart fill + 3pt #1A1A1A border, Archivo Black 24pt",
      "diagram.connector: 4pt #1A1A1A chevron / elbow-arrow",
      "diagram.emphasis: #FF3B7F (one node only)"
    ],
    "avoid": [
      "그라디언트·확산 그림자·둥근 카드(중간 라운드) 금지.",
      "모든 요소를 그리드에 반듯하게 정렬하지 말 것 — 비대칭이 정체성이다.",
      "무채색 회색 톤으로 색을 죽이지 말 것. 파스텔로 채도를 낮추지 말 것.",
      "슬라이드마다 동일 레이아웃·동일 도형 배치 반복 금지.",
      "이모지 불릿·스톡 아이콘·클립아트 금지. 장식은 기하 도형·패턴으로만.",
      "슬라이드를 텍스트로 가득 채우지 말 것.",
      "**차트 금지사항(아마추어 회귀 차단):** 3D·원근·입체 막대 금지. 확산(soft·블러) 그림자 금지 — 하드 오프셋 섀도만. 격자선(grid line) 금지. 범례 박스 금지 — 직접 레이블링만. 잘린 y축(0에서 시작하지 않는 축) 금지 — 막대 비례 왜곡. div·표 셀로 대충 그린 막대 금지 — SVG 정밀 렌더. 무지개색을 의미 없이 칠하지 말 것(원색 충돌은 멤피스 정체성이지만, 비교 차트에서 강조 막대는 1개로 명확히)."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD12",
    "title": "미니멀 모노 노트",
    "mood": "mono · mono · centered · airy · none",
    "bestFor": "design-diversity standard · minimal-mono-note",
    "id": "ppt-minimal-mono-note",
    "background": [
      "Bg: `#FFFFFF`",
      "Surface: `#FFFFFF`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#FFFFFF"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#FFFFFF"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#111111"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#8A8A8A"
      },
      {
        "role": "chart",
        "label": "chart",
        "hex": "#111111"
      },
      {
        "role": "chart emphasis",
        "label": "chart emphasis",
        "hex": "#111111"
      },
      {
        "role": "chart muted",
        "label": "chart muted",
        "hex": "#8A8A8A"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#111111"
      }
    ],
    "fonts": [
      "display: **JetBrains Mono**, 36pt, weight 500, tracking 0, fallback D2Coding, Sarasa Mono K, monospace",
      "heading: **JetBrains Mono**, 28pt, weight 500, tracking 0, fallback D2Coding, Sarasa Mono K, monospace",
      "body: **JetBrains Mono**, 22pt, weight 400, leading 1.55, fallback D2Coding, Sarasa Mono K, monospace",
      "caption: **JetBrains Mono**, 14pt, weight 400, leading 1.4, fallback D2Coding, Sarasa Mono K, monospace"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 1.4in",
      "spacing.margin_y: 1.1in",
      "spacing.grid_columns: 1",
      "spacing.content_width: 60%",
      "slide.ratio: 16:9",
      "slide.size: 13.33x7.5in",
      "slide.transition: none",
      "slide.body_lines_max: 8",
      "slide.bullet: -",
      "slide.page_number: 01 / NN",
      "shape.radius: 0px",
      "shape.border: none",
      "shape.divider: 1pt solid #111111",
      "shape.shadow: none"
    ],
    "signature": [
      "넓은 여백의 화이트 지면에 모노스페이스 폰트만, 잉크 블랙 하나의 정적인 타자기 노트 미감.",
      "극단적 절제. 순백 지면에 모노스페이스 폰트로만 쓰인 텍스트, 색은 잉크 블랙 하나뿐. 장식은 1pt 헤어라인 디바이더 하나로 끝낸다. 모든 텍스트는 좌측 정렬, 정적이고 차분한 \"연구 노트\" 미감 — 슬라이드라기보다 타이핑한 메모처럼 보인다.",
      "diagram.render: svg",
      "diagram.node_shape: square radius 0, no fill, 1pt #111111 outline",
      "diagram.node_emphasis: 1.5pt #111111 outline (one node only, no color/fill)",
      "diagram.connector: 1pt solid #111111 line + mono '>' glyph",
      "diagram.step_number: JetBrains Mono 14pt '01'..'0n', no badge shape",
      "diagram.label: JetBrains Mono lowercase, default tracking",
      "diagram.process: horizontal 4-6 step, node 1.8in x 0.8in, gap 0.5in",
      "diagram.timeline: horizontal 1pt #111111 axis, 2pt dot milestones, now = 1pt vertical tick + 'now' label"
    ],
    "avoid": [
      "색·강조색 추가 금지. 보라·파랑 등 어떤 유채색도 금지.",
      "박스·카드·보더·그림자·면 채움 금지.",
      "산세리프·세리프 폰트 혼입 금지 — 모노스페이스 단일 패밀리만.",
      "중앙 정렬 금지(슬라이드 번호 제외). 모든 텍스트 좌측 정렬.",
      "다단 레이아웃·아이콘·이모지·일러스트 금지.",
      "여백을 콘텐츠로 채우려 하지 말 것 — 빈 우측 여백이 정체성이다.",
      "**차트 금지사항(아마추어 회귀 차단):** 3D·그림자·입체 막대 금지. 색 채움 금지 — 막대·선은 단색 잉크 또는 윤곽선만. 격자선 금지. 범례 박스 금지. 무지개 색조 금지(색 자체가 0개). 잘린 y축 금지. 데이터 영역 배경 채움·테두리 박스 금지. 막대를 div·표 셀로 그리지 말 것 — SVG 정밀 렌더."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD13",
    "title": "보태니컬 오가닉",
    "mood": "earth · serif-editorial · asymmetric · airy · subtle",
    "bestFor": "design-diversity standard · botanical-organic",
    "id": "ppt-botanical-organic",
    "background": [
      "Bg: `#F2EAD9`",
      "Surface: `#E5D9C3`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#F2EAD9"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#E5D9C3"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#3A352C"
      },
      {
        "role": "accent 1",
        "label": "accent 1",
        "hex": "#B5654A"
      },
      {
        "role": "accent 2",
        "label": "accent 2",
        "hex": "#7C8B5A"
      },
      {
        "role": "accent 3",
        "label": "accent 3",
        "hex": "#C99A5B"
      },
      {
        "role": "chart 1",
        "label": "chart 1",
        "hex": "#B5654A"
      },
      {
        "role": "chart 2",
        "label": "chart 2",
        "hex": "#7C8B5A"
      },
      {
        "role": "chart 3",
        "label": "chart 3",
        "hex": "#C99A5B"
      },
      {
        "role": "chart emphasis",
        "label": "chart emphasis",
        "hex": "#B5654A"
      },
      {
        "role": "chart base",
        "label": "chart base",
        "hex": "#7C8B5A"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#7C8B5A"
      },
      {
        "role": "diagram",
        "label": "#A4AE86",
        "hex": "#A4AE86"
      }
    ],
    "fonts": [
      "display: **Cormorant Garamond**, 48pt, weight 500, tracking 0, fallback Noto Serif KR, serif",
      "heading: **Cormorant Garamond**, 34pt, weight 500, tracking 0, fallback Noto Serif KR, serif",
      "body: **Noto Sans KR**, 24pt, weight 400, leading 1.5, fallback sans-serif",
      "caption: **Cormorant Garamond**, 18pt, weight 500, fallback Noto Serif KR, serif"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 1.0in",
      "spacing.margin_y: 0.9in",
      "spacing.grid_columns: 8",
      "slide.ratio: 16:9",
      "slide.size: 13.33x7.5in",
      "slide.transition: fade",
      "slide.transition_duration: 0.5s",
      "slide.body_lines_max: 7",
      "shape.radius: organic-blob",
      "shape.border: 1.5pt solid #7C8B5A",
      "shape.shadow: 0 8pt 24pt rgba(58,53,44,0.10)",
      "shape.texture: linen-grain 6-10% opacity",
      "shape.decor: leaf, stem, wave-band, organic-blob"
    ],
    "signature": [
      "베이지·테라코타·모스그린 어스 톤과 손그림 식물 일러스트, 유기적 곡선의 자연·웰니스 톤.",
      "어스 톤 자연주의. 베이지·테라코타·모스그린의 따뜻한 흙빛 팔레트 위에 손그림 식물 일러스트(잎·줄기·가지)와 유기적 곡선 형태가 흐른다. 종이·린넨 질감 배경, 부드러운 세리프 헤드라인, 직선·직각을 피하고 곡선으로만 구획한다 — 한눈에 \"따뜻하고 자연스러운 손맛\"으로 식별된다.",
      "diagram.render: svg",
      "diagram.node_shape: organic blob / non-uniform curved (no circle, no right-angle)",
      "diagram.node_fill: color.chart earth, or moss tone-step #A4AE86 / #7C8B5A",
      "diagram.node_shadow: 0 8pt 24pt rgba(58,53,44,0.10) soft only",
      "diagram.connector: 1.5pt #7C8B5A curved line + leaf-shaped arrowhead",
      "diagram.step_badge: 0.55in organic circle, #C99A5B fill, Cormorant Garamond 22pt #3A352C",
      "diagram.emphasis: #B5654A (one node only)",
      "diagram.process: 4-5 step along gentle curve, node 1.8in x 1.0in, leaf illustration between steps"
    ],
    "avoid": [
      "순수 원색·네온·메시 그라디언트 금지. 채도 높은 색 금지.",
      "잉크 블랙(#000) 텍스트 금지 — 웜 브라운으로.",
      "직각 보더 박스·하드 섀도·둥근 모서리 카드(균일 라운드) 금지.",
      "직선만으로 구획하지 말 것 — 곡선·유기 형태가 정체성이다.",
      "스톡 아이콘·이모지·기하 도형 장식 금지. 장식은 식물 일러스트·유기 곡선으로만.",
      "슬라이드를 가득 채우지 말 것 — 숨 쉬는 여백 유지.",
      "**차트 금지사항(아마추어 회귀 차단):** 3D·입체 막대·드롭 그림자 금지. 하드 섀도 금지. 격자선 금지. 범례 박스 금지 — 직접 레이블링만. 무지개색·순수 채도 원색 금지 — 어스 톤만. 잘린 y축 금지. 데이터 영역 테두리 박스 금지. div·표 셀 막대 금지 — SVG 정밀 렌더."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD14",
    "title": "비비드 그라디언트 퓨처",
    "mood": "gradient · heavy-display · full-bleed · balanced · snappy",
    "bestFor": "design-diversity standard · vivid-gradient-future",
    "id": "ppt-vivid-gradient-future",
    "background": [
      "Bg asset: rasterized PNG/Sharp mesh-gradient image; flat fallback #3A1C71; no CSS gradients",
      "Surface: `rgba(255,255,255,0.12)`"
    ],
    "colors": [
      {
        "role": "mesh vertices 1",
        "label": "mesh vertices 1",
        "hex": "#3A1C71"
      },
      {
        "role": "mesh vertices 2",
        "label": "mesh vertices 2",
        "hex": "#D11D8E"
      },
      {
        "role": "mesh vertices 3",
        "label": "mesh vertices 3",
        "hex": "#2563EB"
      },
      {
        "role": "mesh vertices 4",
        "label": "mesh vertices 4",
        "hex": "#06B6D4"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#FFFFFF"
      },
      {
        "role": "text accent",
        "label": "text accent",
        "hex": "#7DF9FF"
      },
      {
        "role": "accent 1",
        "label": "accent 1",
        "hex": "#D11D8E"
      },
      {
        "role": "accent 2",
        "label": "accent 2",
        "hex": "#2563EB"
      },
      {
        "role": "accent 3",
        "label": "accent 3",
        "hex": "#06B6D4"
      },
      {
        "role": "chart 1",
        "label": "chart 1",
        "hex": "#D11D8E"
      },
      {
        "role": "chart 2",
        "label": "chart 2",
        "hex": "#2563EB"
      },
      {
        "role": "chart 3",
        "label": "chart 3",
        "hex": "#06B6D4"
      },
      {
        "role": "chart emphasis",
        "label": "chart emphasis",
        "hex": "#7DF9FF"
      }
    ],
    "fonts": [
      "display: **Space Grotesk**, 52pt, weight 700, tracking -0.02em, fallback Pretendard ExtraBold, sans-serif",
      "heading: **Space Grotesk**, 38pt, weight 700, tracking -0.02em, fallback Pretendard ExtraBold, sans-serif",
      "body: **Inter**, 25pt, weight 400, leading 1.4, fallback Pretendard, sans-serif",
      "caption: **Space Grotesk**, 16pt, weight 500, tracking 0.1em, fallback Pretendard, sans-serif",
      "metric: **Space Grotesk**, 88pt, weight 700, fallback Pretendard ExtraBold, sans-serif"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.9in",
      "spacing.margin_y: 0.8in",
      "spacing.grid_columns: 12",
      "slide.ratio: 16:9",
      "slide.size: 13.33x7.5in",
      "slide.transition: morph",
      "slide.transition_duration: 0.6s",
      "slide.body_lines_max: 6",
      "slide.cards_max: 3",
      "shape.radius: 20pt",
      "shape.border: 1pt solid rgba(255,255,255,0.30)",
      "shape.shadow: 0 0 40pt rgba(209,29,142,0.35)",
      "shape.glow: 32pt outer-glow",
      "shape.decor: sphere-3d, ribbon, fluid-blob, glow-curve"
    ],
    "signature": [
      "채도 높은 다색 메시 효과를 rasterized PNG/Sharp 배경 asset 또는 flat-token fallback으로 채우고 발광 곡선·추상 3D가 부유하는 미래 비전 톤.",
      "미래지향 AI/테크 비전 톤. 채도 높은 다색 메시 효과를 rasterized PNG/Sharp 배경 asset 또는 flat-token fallback으로 슬라이드 배경 전면에 풀블리드로 채우고, 발광 곡선과 추상 3D 형태(구·리본·매끄러운 블롭)가 그 위에 부유한다. 굵은 기하 산세리프가 rasterized/SVG asset 또는 flat-token fallback 위에서 또렷이 외친다 — 한눈에 \"차세대 테크 키노트\"로 식별된다.",
      "diagram.render: svg",
      "diagram.node_shape: glass card radius 20pt, rgba(255,255,255,0.12) fill + 1pt rgba(255,255,255,0.30) border",
      "diagram.connector: vertex-color 2.5pt stroke + outer-glow blur 12pt 40%, glowing arrowhead",
      "diagram.step_badge: 0.55in circle, vertex-color fill + outer-glow, Space Grotesk Bold 24pt #FFFFFF",
      "diagram.emphasis: #7DF9FF glow (one node/line only)",
      "diagram.process: horizontal 4-5 step, node 1.9in x 1.0in glass card",
      "diagram.timeline: horizontal 2.5pt vertex-color glow axis, glow-dot milestones (4pt core + 8pt halo), now = #7DF9FF dot + glass label card",
      "diagram.comparison: 2-3 col glass cards radius 20pt, vertex-color glow halo per col, 38pt header + glow underline, 1pt white hairline divider"
    ],
    "avoid": [
      "디폴트 보라-핑크 2색 그라디언트 금지 — 지정된 4정점 메시 hex만.",
      "무채색·플랫 단색 배경 금지. 배경은 항상 rasterized PNG/Sharp 메시 asset 또는 flat-token fallback으로 구현.",
      "검정 보더·검정 하드 섀도 금지 — 글로우만.",
      "각진 직각 카드 금지 — 모서리 반경 20pt 유지.",
      "슬라이드마다 동일 rasterized PNG/Sharp 메시 배경 asset 반복 금지.",
      "이모지·클립아트·플랫 2D 아이콘 금지. 장식은 3D 형태·발광 곡선으로만.",
      "**차트 금지사항(아마추어 회귀 차단):** 3D 원근 막대·입체 파이 금지(3D처럼 보여도 실제 3D 차트 위젯 금지 — 깊이는 글로우로만). 검정 하드 섀도 금지. 격자선 금지. 범례 박스 금지. 무지개색 다계열 금지 — 지정 정점색만. 잘린 y축 금지. 데이터 영역 테두리 박스 금지. div·표 셀 막대 금지 — SVG 정밀 렌더."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD15",
    "title": "프린트-퍼스트 뉴스페이퍼",
    "mood": "mono · serif-editorial · block-grid · dense · none",
    "bestFor": "design-diversity standard · newspaper-print",
    "id": "ppt-print-first-newspaper",
    "background": [
      "Bg: `#F4F1E8`",
      "Surface: `#F4F1E8`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#F4F1E8"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#F4F1E8"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#1C1B17"
      },
      {
        "role": "text body",
        "label": "text body",
        "hex": "#2E2C26"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#A8231B"
      },
      {
        "role": "chart 1",
        "label": "chart 1",
        "hex": "#1C1B17"
      },
      {
        "role": "chart 2",
        "label": "chart 2",
        "hex": "#A8231B"
      },
      {
        "role": "chart 3",
        "label": "chart 3",
        "hex": "#8E8B82"
      },
      {
        "role": "chart emphasis",
        "label": "chart emphasis",
        "hex": "#A8231B"
      },
      {
        "role": "chart base",
        "label": "chart base",
        "hex": "#1C1B17"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#1C1B17"
      }
    ],
    "fonts": [
      "display: **Playfair Display**, 56pt, weight 900, tracking -0.01em, fallback Noto Serif KR ExtraBold, serif",
      "heading: **Playfair Display**, 36pt, weight 900, tracking -0.01em, fallback Noto Serif KR ExtraBold, serif",
      "deck: **Playfair Display**, 22pt, weight 400, fallback Noto Serif KR, serif",
      "body: **Noto Serif KR**, 20pt, weight 400, leading 1.4, fallback serif",
      "caption: **Inter**, 13pt, weight 500, tracking 0.12em, fallback Pretendard, sans-serif"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.6in",
      "spacing.margin_y: 0.5in",
      "spacing.columns: 3-4",
      "spacing.column_gap: 0.25in",
      "slide.ratio: 16:9",
      "slide.size: 13.33x7.5in",
      "slide.transition: none",
      "shape.radius: 0px",
      "shape.border: none",
      "shape.rule_hairline: 0.5pt solid #1C1B17",
      "shape.rule_section: 2pt solid #1C1B17",
      "shape.shadow: none",
      "shape.texture: paper-grain 5% opacity",
      "shape.image: grayscale + halftone-dots",
      "shape.dropcap: 3-line serif"
    ],
    "signature": [
      "다단 칼럼과 굵은 세리프 마스트헤드, 가는 룰 라인 구획의 뉴스프린트 신문 지면 정형.",
      "신문 1면을 슬라이드에 옮긴다. 다단 칼럼 그리드, 굵은 세리프 마스트헤드 헤드라인, 가는 룰 라인으로 기사를 구획한다. 뉴스프린트 크림 톤 지면에 잉크 블랙, 데이트라인·바이라인·킥커 같은 신문 활자 부속이 그대로 살아 있다 — 한눈에 \"인쇄된 신문\"으로 식별된다.",
      "diagram.render: svg",
      "diagram.node_shape: square radius 0, 0.5pt rule #1C1B17 outline, no color fill",
      "diagram.node_emphasis: #A8231B 0.5pt outline or red kicker label (one node only)",
      "diagram.connector: 0.5pt solid #1C1B17 line + angular arrowhead",
      "diagram.step_number: kicker Inter 13pt uppercase 0.12em 'STEP 0n', no badge shape",
      "diagram.label: Noto Serif KR 18pt",
      "diagram.process: horizontal 4-5 step, node 1.8in x 0.9in, gap 0.3in",
      "diagram.timeline: horizontal 2pt #1C1B17 section-rule axis, 0.5pt rule vertical-tick milestones, now = #A8231B tick + red kicker"
    ],
    "avoid": [
      "그라디언트·컬러 면 채움·둥근 모서리 박스·그림자 금지.",
      "빨강 외 다른 색 추가 금지. 빨강을 본문 텍스트에 쓰지 말 것.",
      "산세리프 헤드라인 금지 — 헤드라인은 세리프. 산세리프는 메타 활자에만.",
      "단일 컬럼·중앙 정렬 레이아웃 금지 — 다단 칼럼이 정체성이다.",
      "이모지·아이콘·일러스트·클립아트 금지. 시각 요소는 흑백 하프톤 사진뿐.",
      "슬라이드를 듬성듬성 비우지 말 것 — 신문답게 칼럼을 채운다.",
      "**차트 금지사항(아마추어 회귀 차단):** 3D·입체 막대·그림자 금지(인쇄 잉크는 평면). 격자선 금지. 범례 박스 금지 — 직접 레이블링만. 무지개색·컬러 채움 금지 — 잉크 단색조. 둥근 막대 금지(각진 막대만). 잘린 y축 금지. 데이터 영역 테두리 박스 금지. div·표 셀 막대 금지 — SVG 정밀 렌더."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD16",
    "title": "스위스 에디토리얼 볼드",
    "mood": "vivid-primary · heavy-display · strict-grid · balanced · snappy",
    "bestFor": "design-diversity standard · swiss-editorial-bold",
    "id": "ppt-swiss-editorial-bold",
    "background": [
      "Bg: `#F2F0EB`",
      "Surface: `#111111`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#F2F0EB"
      },
      {
        "role": "bg invert",
        "label": "bg invert",
        "hex": "#111111"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#111111"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#111111"
      },
      {
        "role": "text invert",
        "label": "text invert",
        "hex": "#F2F0EB"
      },
      {
        "role": "accent 1",
        "label": "accent 1",
        "hex": "#FF4A1C"
      },
      {
        "role": "accent 2",
        "label": "accent 2",
        "hex": "#0047FF"
      },
      {
        "role": "chart 1",
        "label": "chart 1",
        "hex": "#111111"
      },
      {
        "role": "chart 2",
        "label": "chart 2",
        "hex": "#F2F0EB"
      },
      {
        "role": "chart emphasis 1",
        "label": "chart emphasis 1",
        "hex": "#FF4A1C"
      },
      {
        "role": "chart emphasis 2",
        "label": "chart emphasis 2",
        "hex": "#0047FF"
      },
      {
        "role": "chart base",
        "label": "chart base",
        "hex": "#111111"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#111111"
      }
    ],
    "fonts": [
      "display: **Archivo Black**, 130pt, weight 900, tracking -0.03em, fallback Pretendard ExtraBold, sans-serif",
      "heading: **Archivo Black**, 44pt, weight 900, tracking -0.02em, fallback Pretendard ExtraBold, sans-serif",
      "body: **Inter**, 24pt, weight 400, leading 1.35, fallback Pretendard, sans-serif",
      "caption: **Inter**, 14pt, weight 500, tracking 0.08em, fallback Pretendard, sans-serif"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.7in",
      "spacing.margin_y: 0.6in",
      "spacing.grid_columns: 12",
      "slide.ratio: 16:9",
      "slide.size: 13.33x7.5in",
      "slide.transition: push",
      "slide.transition_duration: 0.25s",
      "slide.body_lines_max: 6",
      "slide.spot_color_per_slide: 1",
      "shape.radius: 0px",
      "shape.border: 1pt-3pt solid #111111",
      "shape.shadow: none",
      "shape.decor: rect-color-block, rule-line, cropped-giant-type"
    ],
    "signature": [
      "정밀 그리드 위에 거대한 압축 디스플레이 활자를 일러스트처럼 쓰는 의도된 혼돈의 편집 디자인.",
      "스위스 그리드의 엄정함 위에 거대한 활자의 폭발. 정밀 12열 그리드에 거대한 압축(condensed) 디스플레이 활자를 늘이고·잘라 타이포그래픽 일러스트 그 자체로 쓴다. 흑백 기반에 강한 스팟 컬러 한둘, \"질서 위의 의도된 혼돈\" — 한눈에 Bloomberg Businessweek 계열 에디토리얼로 식별된다.",
      "diagram.render: svg",
      "diagram.node_shape: rectangle",
      "diagram.node_radius: 0px",
      "diagram.node_size: 2.4x0.9in",
      "diagram.connector: 3pt solid rule #111111",
      "diagram.arrowhead: filled-triangle 0.18in",
      "diagram.number_badge: 0.36in square, achromatic fill, Archivo Black 20pt invert numeral",
      "diagram.emphasis: spot color, 1 per slide"
    ],
    "avoid": [
      "그라디언트·그림자·곡선 도형·둥근 모서리 금지.",
      "스팟 컬러를 2색 동시에 한 슬라이드에 쓰지 말 것 — 슬라이드당 1색.",
      "활자를 얌전히 작게 쓰지 말 것 — 거대 활자가 정체성이다.",
      "콘텐츠를 그리드에서 임의로 어긋나게 두지 말 것(거대 활자 crop 제외).",
      "이모지·아이콘·클립아트·일러스트 금지. 시각 요소는 활자·블록·룰 라인.",
      "중앙 정렬 본문 금지 — 좌측 정렬·비대칭.",
      "**차트 금지사항(아마추어 회귀 차단):** 3D·입체 막대·원근 파이 금지. 그림자(하드·소프트 모두) 금지. 격자선 금지. 범례 박스 금지 — 직접 레이블링만. 무지개색·스팟 컬러 다색 동시 사용 금지(슬라이드당 1색). 둥근 막대 금지. 잘린 y축 금지. 데이터 영역 테두리 박스 금지. div·표 셀 막대 금지 — SVG 정밀 렌더."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD17",
    "title": "바우하우스 지오메트릭",
    "mood": "vivid-primary · heavy-display · asymmetric · balanced · none",
    "bestFor": "design-diversity standard · bauhaus-geometric",
    "id": "ppt-bauhaus-geometric",
    "background": [
      "Bg: `#F0EDE4`",
      "Surface: `#FFFFFF`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#F0EDE4"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#FFFFFF"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#1A1A1A"
      },
      {
        "role": "accent 1",
        "label": "accent 1",
        "hex": "#D62828"
      },
      {
        "role": "accent 2",
        "label": "accent 2",
        "hex": "#F4C20D"
      },
      {
        "role": "accent 3",
        "label": "accent 3",
        "hex": "#1D4ED8"
      },
      {
        "role": "chart 1",
        "label": "chart 1",
        "hex": "#D62828"
      },
      {
        "role": "chart 2",
        "label": "chart 2",
        "hex": "#F4C20D"
      },
      {
        "role": "chart 3",
        "label": "chart 3",
        "hex": "#1D4ED8"
      },
      {
        "role": "chart emphasis",
        "label": "chart emphasis",
        "hex": "#D62828"
      },
      {
        "role": "chart base",
        "label": "chart base",
        "hex": "#1A1A1A"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#1A1A1A"
      }
    ],
    "fonts": [
      "display: **Futura**, 50pt, weight 800, tracking 0, fallback Pretendard ExtraBold, sans-serif",
      "heading: **Futura**, 36pt, weight 800, tracking 0, fallback Pretendard ExtraBold, sans-serif",
      "body: **Inter**, 24pt, weight 400, leading 1.4, fallback Pretendard, sans-serif",
      "caption: **Inter**, 15pt, weight 500, tracking 0.1em, fallback Pretendard, sans-serif"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.7in",
      "spacing.margin_y: 0.6in",
      "spacing.composition: geometric-diagonal",
      "slide.ratio: 16:9",
      "slide.size: 13.33x7.5in",
      "slide.transition: none",
      "slide.shape_transition: wipe 0.3s",
      "slide.body_lines_max: 6",
      "shape.radius: 0px-or-full",
      "shape.border: 2pt solid #1A1A1A",
      "shape.shadow: none",
      "shape.primitives: circle, triangle, square, half-circle, quarter-circle",
      "shape.rotation: 0/45/90deg only"
    ],
    "signature": [
      "원·삼각형·사각형 기본 도형과 빨강·노랑·파랑 삼원색, 비대칭 균형의 기능주의 기하 구성.",
      "1920년대 바우하우스 조형 원리를 슬라이드로 옮긴다. 원·삼각형·사각형의 순수 기본 도형, 빨강·노랑·파랑 삼원색에 검정·흰색만. form follows function의 기하 구성 — 도형이 겹치고 대각으로 가로지르며 비대칭 균형을 이룬다. 한눈에 \"체계적 기하 추상\"으로 식별된다(멤피스의 무작위 키치와 정반대로 질서 있다).",
      "diagram.render: svg",
      "diagram.node_shape: circle | square | triangle (primitives only)",
      "diagram.node_size: 1.4in (circle dia / square side)",
      "diagram.node_fill: color.chart primaries flat, some 2pt #1A1A1A outline",
      "diagram.connector: 2pt solid #1A1A1A straight, 0/45/90deg only",
      "diagram.arrowhead: equilateral-triangle 0.18in",
      "diagram.number_badge: 0.4in circle, #1A1A1A fill, Futura 18pt white numeral",
      "diagram.emphasis: #D62828 fixed"
    ],
    "avoid": [
      "삼원색·검정·흰색 외 색 금지. 그라디언트·중간색·파스텔 금지.",
      "자유 곡선·블롭·물결 도형 금지 — 원·삼각형·사각형 순수 도형만.",
      "도형을 임의 각도로 기울이지 말 것 — 0/90/45도 정렬만(멤피스와 차별점).",
      "그림자·둥근 모서리 카드 금지.",
      "이모지·스톡 아이콘·일러스트 금지. 모든 시각 요소는 기본 도형 구성.",
      "슬라이드를 텍스트로 가득 채우지 말 것 — 도형 구성에 공간을 내준다.",
      "**차트 금지사항(아마추어 회귀 차단):** 3D·입체 막대·원근 파이 금지. 그림자(하드·소프트 모두) 금지. 격자선 금지. 범례 박스 금지 — 직접 레이블링만. 삼원색 외 색·중간색·파스텔 금지. 둥근 막대 금지(직각만). 잘린 y축 금지. 데이터 영역 테두리 박스 금지. div·표 셀 막대 금지 — SVG 정밀 렌더."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD18",
    "title": "익스프레시브 머티리얼",
    "mood": "vivid-primary · mixed · block-grid · balanced · playful",
    "bestFor": "design-diversity standard · expressive-material",
    "id": "ppt-expressive-material",
    "background": [
      "Bg: `#FEF7FF`",
      "Surface: `#F3EDF7`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#FEF7FF"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#F3EDF7"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#1D1B20"
      },
      {
        "role": "accent 1",
        "label": "accent 1",
        "hex": "#6750A4"
      },
      {
        "role": "accent 2",
        "label": "accent 2",
        "hex": "#7D5260"
      },
      {
        "role": "accent 3",
        "label": "accent 3",
        "hex": "#386A20"
      },
      {
        "role": "accent 4",
        "label": "accent 4",
        "hex": "#B3261E"
      },
      {
        "role": "chart 1",
        "label": "chart 1",
        "hex": "#6750A4"
      },
      {
        "role": "chart 2",
        "label": "chart 2",
        "hex": "#7D5260"
      },
      {
        "role": "chart 3",
        "label": "chart 3",
        "hex": "#386A20"
      },
      {
        "role": "chart 4",
        "label": "chart 4",
        "hex": "#B3261E"
      },
      {
        "role": "chart emphasis",
        "label": "chart emphasis",
        "hex": "#B3261E"
      },
      {
        "role": "chart base",
        "label": "chart base",
        "hex": "#6750A4"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#CAC4D0"
      }
    ],
    "fonts": [
      "display: **Roboto Flex**, 56pt, weight 800, fallback Pretendard ExtraBold, sans-serif",
      "headline: **Roboto Flex**, 38pt, weight 700, fallback Pretendard ExtraBold, sans-serif",
      "title: **Roboto Flex**, 28pt, weight 600, fallback Pretendard SemiBold, sans-serif",
      "body: **Roboto Flex**, 23pt, weight 400, leading 1.45, fallback Pretendard, sans-serif",
      "label: **Roboto Flex**, 15pt, weight 600, tracking 0.06em, fallback Pretendard, sans-serif"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.8in",
      "spacing.margin_y: 0.7in",
      "spacing.grid_columns: 12",
      "spacing.card_gap: 0.2in",
      "slide.ratio: 16:9",
      "slide.size: 13.33x7.5in",
      "slide.transition: morph",
      "slide.transition_duration: 0.4s",
      "slide.body_lines_max: 7",
      "shape.radius: 28pt",
      "shape.card_bar_radius: 8pt",
      "shape.border: 1pt solid #CAC4D0",
      "shape.shadow: 0 4pt 16pt rgba(29,27,32,0.12)",
      "shape.decor: morph-shape-7-12-gon, petal, pebble, blob",
      "shape.icons: Material Symbols rounded"
    ],
    "signature": [
      "Material 3 Expressive의 대담한 색과 가변 폰트 변주, 큰 둥근 형태와 명랑한 모션의 5단계 타입 스케일.",
      "Google Material 3 Expressive를 슬라이드로 옮긴다. 대담한 토널 색 조합, 가변 폰트의 굵기·폭을 변주한 역동적 타이포, 크고 둥근 모핑 셰이프(꽃잎·자갈·물방울형)와 명랑한 모션. 5단계 타입 스케일이 또렷한 위계를 만든다 — 한눈에 \"표현적이고 통통한 머티리얼\"로 식별된다.",
      "diagram.render: svg",
      "diagram.node_shape: 28pt rounded tonal container card",
      "diagram.node_radius: 28pt",
      "diagram.node_size: 2.5x1.0in",
      "diagram.node_shadow: 0 4pt 16pt rgba(29,27,32,0.12)",
      "diagram.connector: 3pt tonal round-cap line",
      "diagram.arrowhead: rounded-triangle",
      "diagram.number_badge: 0.44in circle, tonal fill, title 28pt white numeral"
    ],
    "avoid": [
      "그라디언트·메시 그라디언트 금지 — 토널 단색 면만.",
      "각진 직각 카드·모서리 반경 0 금지 — 28pt 큰 라운드 유지.",
      "토널 시스템 밖 임의 채도 원색 금지.",
      "검정 하드 섀도 금지 — 부드러운 elevation 그림자만.",
      "이모지·클립아트 금지. 아이콘은 Material Symbols 라운드만.",
      "5단계 타입 스케일을 무시하고 임의 크기 쓰지 말 것 — 위계는 스케일로.",
      "**차트 금지사항(아마추어 회귀 차단):** 3D·입체 막대·원근 파이 금지. 검정 하드 섀도 금지(부드러운 elevation만). 격자선 금지. 범례 박스 금지 — 직접 레이블링만. 토널 시스템 밖 무지개 채도 원색 금지. 잘린 y축 금지. 데이터 영역 테두리 박스 금지. div·표 셀 막대 금지 — SVG 정밀 렌더."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD19",
    "title": "럭셔리 에디토리얼 세리프",
    "mood": "mono · serif-editorial · centered · airy · subtle",
    "bestFor": "design-diversity standard · luxury-serif",
    "id": "ppt-luxury-editorial-serif",
    "background": [
      "Bg: `#FAF8F3`",
      "Surface: `#FAF8F3`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#FAF8F3"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#FAF8F3"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#1A1814"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#8C887E"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#A8884E"
      },
      {
        "role": "chart 1",
        "label": "chart 1",
        "hex": "#1A1814"
      },
      {
        "role": "chart 2",
        "label": "chart 2",
        "hex": "#A8884E"
      },
      {
        "role": "chart emphasis",
        "label": "chart emphasis",
        "hex": "#A8884E"
      },
      {
        "role": "chart base",
        "label": "chart base",
        "hex": "#1A1814"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#A8884E"
      }
    ],
    "fonts": [
      "display: **Playfair Display**, 52pt, weight 400, tracking 0, fallback Noto Serif KR, serif",
      "heading: **Playfair Display**, 34pt, weight 400, tracking 0, fallback Noto Serif KR, serif",
      "body: **Noto Serif KR**, 22pt, weight 300, leading 1.6, fallback serif",
      "caption: **Inter**, 13pt, weight 400, tracking 0.22em, fallback Pretendard, sans-serif"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 1.5in",
      "spacing.margin_y: 1.2in",
      "spacing.grid_columns: 1",
      "spacing.content_width: 55%",
      "slide.ratio: 16:9",
      "slide.size: 13.33x7.5in",
      "slide.transition: fade",
      "slide.transition_duration: 0.6s",
      "slide.body_lines_max: 6",
      "slide.content_area_max: 40%",
      "shape.radius: 0px",
      "shape.border: none",
      "shape.rule_line: 0.5pt solid #A8884E",
      "shape.shadow: none",
      "shape.texture: paper-grain max 4% opacity"
    ],
    "signature": [
      "넓은 여백의 오프화이트 지면에 가는 하이콘트라스트 디드로 세리프, 절제된 골드 한 점의 우아한 톤.",
      "패션 하우스풍 절제된 럭셔리. 넓은 여백의 오프화이트 지면에 가는 하이콘트라스트 디드로(Didone) 세리프, 넉넉한 자간의 소문자 캡션. 무채색 팔레트에 절제된 골드 한 점. 정적이고 우아하며 비어 있다 — 한눈에 \"고급 매거진·럭셔리 브랜드 룩북\"으로 식별된다.",
      "diagram.render: svg",
      "diagram.node_shape: none (no box) — hairline rule + type alignment",
      "diagram.rule_weight: 0.5pt",
      "diagram.connector: 0.5pt #1A1814 hairline straight, no/thin arrowhead",
      "diagram.number: Playfair Display Regular 36pt thin serif numeral, no badge, + 0.3in gold rule",
      "diagram.emphasis: #A8884E gold, minimal area",
      "diagram.label: Inter 13pt uppercase tracking 0.22em #8C887E",
      "diagram.process: 4-5 step boxless horizontal, 36pt serif numeral + 0.6in gold rule + 22pt heading, 0.5pt connector"
    ],
    "avoid": [
      "헤드라인을 굵게(Bold) 쓰지 말 것 — 가는 디드로 세리프가 정체성이다.",
      "골드 외 색 추가 금지. 그라디언트·컬러 면 채움 금지.",
      "박스·카드·보더·그림자 금지.",
      "산세리프 헤드라인 금지(산세리프는 캡션 활자에만).",
      "콘텐츠로 슬라이드를 채우지 말 것 — 광활한 여백이 정체성이다.",
      "이모지·아이콘·일러스트·클립아트 금지.",
      "자간 좁은 캡션 금지 — 캡션 트래킹 0.22em 유지.",
      "**차트 금지사항(아마추어 회귀 차단):** 3D·입체·원근 차트 금지. 그림자(하드·소프트 모두) 금지. 격자선 금지 — 헤어라인 라인 차트엔 격자선 자체가 이질적이다. 범례 박스 금지 — 직접 레이블링만. 골드 외 색·무지개 다색 라인 금지. 굵은 라인(2pt 초과) 금지 — 헤어라인 0.75pt만. 면적 채움(area fill) 금지 — 면을 칠하지 않는다. 막대 차트·도넛·파이 금지 — 럭셔리 팩은 라인 차트 또는 거대 세리프 수치만. 잘린 y축 금지. 데이터 영역 테두리 박스 금지. div·표 셀 막대 금지 — SVG 정밀 렌더."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD20",
    "title": "스타트업 피치 컬러풀",
    "mood": "vivid-primary · mixed · centered · balanced · playful",
    "bestFor": "design-diversity standard · startup-pitch",
    "id": "ppt-startup-pitch-colorful",
    "background": [
      "Bg: `#FFFFFF`",
      "Surface: `#F4F6FF`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#FFFFFF"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#F4F6FF"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#15161B"
      },
      {
        "role": "accent 1",
        "label": "accent 1",
        "hex": "#5B5BFF"
      },
      {
        "role": "accent 2",
        "label": "accent 2",
        "hex": "#FF5C8A"
      },
      {
        "role": "accent 3",
        "label": "accent 3",
        "hex": "#FFB020"
      },
      {
        "role": "accent 4",
        "label": "accent 4",
        "hex": "#15C39A"
      },
      {
        "role": "accent 5",
        "label": "accent 5",
        "hex": "#9B5BFF"
      },
      {
        "role": "chart 1",
        "label": "chart 1",
        "hex": "#5B5BFF"
      },
      {
        "role": "chart 2",
        "label": "chart 2",
        "hex": "#FF5C8A"
      },
      {
        "role": "chart 3",
        "label": "chart 3",
        "hex": "#FFB020"
      },
      {
        "role": "chart 4",
        "label": "chart 4",
        "hex": "#15C39A"
      },
      {
        "role": "chart emphasis",
        "label": "chart emphasis",
        "hex": "#FF5C8A"
      },
      {
        "role": "chart base",
        "label": "chart base",
        "hex": "#5B5BFF"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#E5E7F0"
      }
    ],
    "fonts": [
      "display: **Poppins ExtraBold**, 50pt, weight 800, fallback Pretendard ExtraBold, sans-serif",
      "metric: **Poppins ExtraBold**, 96pt, weight 800, fallback Pretendard ExtraBold, sans-serif",
      "heading: **Poppins Bold**, 36pt, weight 700, fallback Pretendard ExtraBold, sans-serif",
      "body: **Inter**, 23pt, weight 400, leading 1.45, fallback Pretendard, sans-serif",
      "label: **Poppins SemiBold**, 16pt, weight 600, fallback Pretendard SemiBold, sans-serif"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.85in",
      "spacing.margin_y: 0.75in",
      "spacing.grid_columns: 12",
      "spacing.card_gap: 0.25in",
      "slide.ratio: 16:9",
      "slide.size: 13.33x7.5in",
      "slide.transition: push",
      "slide.transition_duration: 0.35s",
      "slide.body_lines_max: 6",
      "slide.colors_per_slide_min: 2",
      "shape.radius: 24pt",
      "shape.pill_radius: 999pt",
      "shape.card_bar_radius: 10pt",
      "shape.border: 1.5pt solid #E5E7F0",
      "shape.shadow: 0 6pt 24pt rgba(91,91,255,0.14)"
    ],
    "signature": [
      "채도 높은 4~5색 팔레트와 둥근 키워드 배지, 거대 숫자 메트릭이 지배하는 데모데이 에너지.",
      "밝고 친근한 투자 피치 덱. 밝은 화이트 배경에 채도 높은 4~5색 팔레트, 크고 둥근 키워드 배지(pill)와 둥근 카드. 거대한 숫자 메트릭이 슬라이드를 지배하고, 친근한 산세리프와 굵은 디스플레이가 섞인다 — 한눈에 \"에너지 넘치는 스타트업 피치\"로 식별된다.",
      "diagram.render: svg",
      "diagram.node_shape: 24pt rounded card",
      "diagram.node_radius: 24pt",
      "diagram.node_size: 2.4x1.0in",
      "diagram.node_shadow: 0 6pt 24pt rgba(91,91,255,0.14)",
      "diagram.connector: 3pt round-cap palette line",
      "diagram.arrowhead: rounded-triangle",
      "diagram.number_badge: 0.44in circle or 999pt pill, palette fill, Poppins SemiBold 16pt white"
    ],
    "avoid": [
      "그라디언트·메시 그라디언트 금지 — 채도 높은 단색 플랫만.",
      "검정 하드 섀도·각진 직각 카드 금지 — 24pt 라운드 카드 + 부드러운 컬러 섀도.",
      "무채색만으로 슬라이드를 만들지 말 것 — 매 슬라이드 컬러 2색 이상.",
      "거대 메트릭 슬라이드를 텍스트로 채우지 말 것 — 숫자가 주인공.",
      "이모지·클립아트·스톡 일러스트 금지. 아이콘은 단색 라인/채움만.",
      "세리프·압축 디스플레이 폰트 혼입 금지 — 친근한 산세리프 유지.",
      "**차트 금지사항(아마추어 회귀 차단):** 3D·입체 막대·원근 파이 금지. 검정 하드 섀도 금지(부드러운 컬러 틴트 섀도만, 차트 막대엔 섀도 없음). 격자선 금지. 범례 박스 금지 — 직접 레이블링만. 5색 팔레트를 한 차트에 무지개로 다 칠하지 말 것 — 비교 차트는 단색 + 강조 1. 잘린 y축 금지. 데이터 영역 테두리 박스 금지. 파이 5조각+·다중 도넛 금지. div·표 셀 막대 금지 — SVG 정밀 렌더."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD21",
    "title": "Precision Fintech Deck",
    "mood": "pastel · minimal-sans · asymmetric · airy · subtle",
    "bestFor": "design-diversity standard · precision-fintech",
    "id": "ppt-precision-fintech-deck",
    "background": [
      "Bg: `#FFFFFF`",
      "Surface: `#F6F9FC`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#FFFFFF"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#F6F9FC"
      },
      {
        "role": "surface alt",
        "label": "surface alt",
        "hex": "#EBF0F6"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#0A2540"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#5C6B7E"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#5A55E0"
      },
      {
        "role": "accent light",
        "label": "accent light",
        "hex": "#7C78F0"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#E3E8EE"
      },
      {
        "role": "chart",
        "label": "#A9A6F2",
        "hex": "#A9A6F2"
      },
      {
        "role": "chart",
        "label": "#C2CBD6",
        "hex": "#C2CBD6"
      }
    ],
    "fonts": [
      "display: **Inter**, 54pt, weight 700, tracking -0.025em, leading 1.05, fallback Helvetica Neue, Arial, Pretendard",
      "title: **Inter**, 32pt, weight 600, tracking -0.015em, leading 1.15",
      "kicker: **Inter**, 12pt, weight 600, tracking 0.06em",
      "body: **Inter**, 18pt, weight 400, leading 1.45",
      "card_header: **Inter**, 15pt, weight 600",
      "kpi: **Inter**, 46pt, weight 700, tracking -0.02em",
      "caption: **Inter**, 10pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.75in",
      "spacing.margin_y: 0.6in",
      "spacing.gutter: 0.18in",
      "slide.size: 13.33x7.5in",
      "slide.grid_columns: 12",
      "slide.layout: asymmetric 7:5 alternating",
      "slide.header_band: 0.6-1.7in",
      "slide.source_caption: fixed bottom-right",
      "slide.transition: fade 0.25s | slide-up 8px 0.2s ease-out",
      "shape.radius: 8px",
      "shape.border: none (use surface step instead)",
      "shape.hairline: 1px #E3E8EE",
      "shape.shadow: 0 2px 8px rgba(10,37,64,0.06) (CTA only)"
    ],
    "signature": [
      "푸른 회색 면 위 단일 인디고-바이올렛 강조색이 CTA·핵심 수치·차트를 모두 책임지는 절제된 핀테크 덱. 헤어라인 그리드와 면적 그래프의 에디토리얼 밀도.",
      "한눈에 알아보는 단서: (1) 거의 흰색에 가까운 푸른 회색 `#F6F9FC` 면이 순백 배경 위에 잔잔한 단차를 만든다 — 보더가 아니라 면의 명도차로 구획한다, (2) 강조색은 인디고-바이올렛 `#5A55E0` 단 하나, 텍스트는 깊은 네이비 `#0A2540`, (3) 디스플레이 타이포를 음수 자간으로 타이트하게 좁혀 '에디토리얼 밀도'를 내고 콘텐츠는 비대칭 좌측 정렬로 앉힌다. 그림자 거의 없고, 차트는 헤어라인까지 지운 부드러운 면적 그래프다.",
      "diagram.language: 8px-radius pill nodes, #F6F9FC fill no border, 1.5pt #5A55E0 hairline connectors, circular number badges, 1 highlight only",
      "diagram.node: pill radius 8px, fill #F6F9FC, no border, 2.0in x 0.85in process node",
      "diagram.number_badge: circle dia 0.3in, #5A55E0 fill, white 13pt SemiBold",
      "diagram.connector: 1.5pt #5A55E0 line, 6px triangle arrowhead, node gap 0.4in",
      "diagram.process: horizontal 3-5 steps, active step #5A55E0 fill white text",
      "diagram.timeline: horizontal, 0.75pt #E3E8EE baseline, milestone 10px circle white-fill #5A55E0-stroke 2pt, current 14px #5A55E0 fill",
      "diagram.comparison: 2-3 cols, #F6F9FC cards radius 8px, header row #EBF0F6, recommended col header #5A55E0 white",
      "diagram.matrix: 2x2, 0.75pt #E3E8EE axes, no quadrant fill, points 0.5in pill #A9A6F2, 1 highlight #5A55E0"
    ],
    "avoid": [
      "강조색 2개 이상 쓰기, 본문 텍스트에 컬러 입히기 — 강조는 `#5A55E0` 하나, CTA·KPI·차트 주계열에만.",
      "보더로 카드를 가르기 — 구획은 `#F6F9FC` 면 단차로. 헤어라인은 차트 축 등 최소한만.",
      "진한 그림자·다중 그림자·네온 글로우. 그라디언트는 동일 hue 2스톱만 허용, 무지개 그라디언트 금지.",
      "**아마추어 차트 회귀 금지:** 3D·입체 막대, 막대/면적 그림자·광택, 무지개 계열색, 격자선 과다, 차트 테두리 박스, 범례 박스(계열 3개 미만일 때), 잘린 y축, div 블록 막대.",
      "모든 요소 중앙 정렬 — 본문은 좌측 정렬, 슬라이드별 7:5 비대칭 유지.",
      "이모지 불릿·클립아트·채움 아이콘·스톡 사진 남발.",
      "슬라이드를 7줄 넘는 글로 채우기."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD22",
    "title": "Engineered Dark Deck",
    "mood": "dark · minimal-sans · centered · airy · snappy",
    "bestFor": "design-diversity standard · engineered-dark",
    "id": "ppt-engineered-dark-deck",
    "background": [
      "Bg: `#0E0E11`",
      "Surface: `#16161A`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#0E0E11"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#16161A"
      },
      {
        "role": "surface bar",
        "label": "surface bar",
        "hex": "#2E2E36"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#9CA3AF"
      },
      {
        "role": "text strong",
        "label": "text strong",
        "hex": "#F4F4F5"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#6B7280"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#8B7BF0"
      },
      {
        "role": "accent teal",
        "label": "accent teal",
        "hex": "#3FB8C4"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#26262C"
      }
    ],
    "fonts": [
      "display: **Inter**, 50pt, weight 600, tracking -0.02em, leading 1.1, fallback Helvetica Neue, Arial, Pretendard",
      "title: **Inter**, 30pt, weight 600, tracking -0.015em, leading 1.15",
      "kicker: **Inter**, 11pt, weight 500, tracking 0.08em",
      "body: **Inter**, 17pt, weight 400, leading 1.5",
      "card_header: **Inter**, 14pt, weight 600",
      "kpi: **Inter**, 44pt, weight 600, tracking -0.015em",
      "mono: **JetBrains Mono**, 12pt, weight 400, fallback IBM Plex Mono, monospace",
      "caption: **Inter**, 10pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.8in",
      "spacing.margin_y: 0.65in",
      "spacing.gutter: 0.16in",
      "slide.size: 13.33x7.5in",
      "slide.grid_columns: 12",
      "slide.layout: centered axis",
      "slide.header_band: 0.65-1.8in",
      "slide.source_caption: fixed bottom-right",
      "slide.transition: fade 0.12-0.18s | slide-up 6px 0.15s ease-out",
      "shape.radius: 6px",
      "shape.border: 1px solid #26262C",
      "shape.shadow: none",
      "shape.glow: radial #8B7BF0->#3FB8C4, center 18% -> edge 0%, 1 per slide"
    ],
    "signature": [
      "차콜 배경에 미세 라디얼 글로우 한 점, 중립 산세리프와 헤어라인 보더, 120~180ms 마이크로 모션의 정밀한 다크 SaaS 덱.",
      "한눈에 알아보는 단서: (1) 거의 검정 `#0E0E11` 배경에 슬라이드당 단 1개의 추상 라디얼 글로우(보라-청록)가 코너 한 곳에서 은은히 퍼진다, (2) 모든 카드·섹션은 1px 헤어라인 `#26262C` 보더로 나뉘고 면 채움은 거의 안 한다, (3) 콘텐츠는 중앙 정렬 축에 정연히 쌓이고, 본문은 눈부심을 낮춘 저채도 회색 `#9CA3AF`. 차트 데이터는 어둠 속에서 발광하듯 떠 보인다.",
      "diagram.language: 6px-radius nodes, no fill or #16161A, 1px #26262C hairline border, 1.25pt #8B7BF0 connectors with single outer glow, mono step numbers, 1 highlight border #8B7BF0 1.5px",
      "diagram.node: rect radius 6px, 1px #26262C border no fill, 2.0in x 0.85in process node",
      "diagram.number_badge: mono 12pt JetBrains Mono #8B7BF0, format 01/02",
      "diagram.connector: 1.25pt #8B7BF0 line, 5px arrowhead, outer glow blur 2px single layer",
      "diagram.process: horizontal 3-5 steps, active step border #8B7BF0 1.5px",
      "diagram.timeline: horizontal, 0.75pt #26262C baseline, milestone 6px square #0E0E11-fill #8B7BF0-stroke 1.5pt, current #8B7BF0 fill + glow",
      "diagram.comparison: 2-3 cols, 1px #26262C hairline border cards radius 6px no fill, recommended col border #8B7BF0 1.5px + corner glow",
      "diagram.matrix: 2x2, 0.75pt #26262C axes, no quadrant fill, points 0.45in circle no-fill 1px #26262C, 1 highlight #8B7BF0 fill + glow"
    ],
    "avoid": [
      "강조색 2개 이상 쓰기(청록은 차트 보조 계열에만 허용, 텍스트엔 금지) — 강조는 `#8B7BF0` 하나.",
      "라이트 모드로 회귀하기, 흰 배경 카드. 글로우를 2개 이상 깔거나 글로우로 형태(구·로고) 만들기.",
      "그림자, 진한 네온 남발, 텍스처·노이즈 오버레이.",
      "**아마추어 차트 회귀 금지:** 3D·입체 막대, 무지개 계열색, 격자선 과다, 차트 테두리 박스, 범례 박스(계열 3개 미만), 잘린 y축, div 블록 막대, 라인 글로우 여러 겹.",
      "모든 텍스트 줄을 중앙 정렬 — 블록은 중앙 배치하되 본문 줄 자체는 좌측 정렬.",
      "이모지 불릿·클립아트·채움 아이콘.",
      "슬라이드를 6줄 넘는 글로 채우기."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD23",
    "title": "Warm Hospitality Deck",
    "mood": "earth · minimal-sans · full-bleed · airy · playful",
    "bestFor": "design-diversity standard · warm-hospitality",
    "id": "ppt-warm-hospitality-deck",
    "background": [
      "Bg: `#FFFFFF`",
      "Surface: `#FBF7F4`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#FFFFFF"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#FBF7F4"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#2B2B2E"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#79767A"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#F4625F"
      },
      {
        "role": "accent tint",
        "label": "accent tint",
        "hex": "#FBD9D7"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#EDE8E4"
      }
    ],
    "fonts": [
      "display: **Poppins**, 52pt, weight 600, tracking -0.01em, leading 1.1, fallback Quicksand, Nunito Sans, Pretendard",
      "title: **Poppins**, 32pt, weight 600, tracking -0.005em, leading 1.2",
      "kicker: **Poppins**, 12pt, weight 600, tracking 0.06em",
      "body: **Poppins**, 18pt, weight 400, leading 1.5",
      "card_header: **Poppins**, 16pt, weight 500",
      "kpi: **Poppins**, 48pt, weight 600",
      "caption: **Poppins**, 10pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.7in",
      "spacing.margin_y: 0.6in",
      "spacing.gutter: 0.18in",
      "slide.size: 13.33x7.5in",
      "slide.grid_columns: 12",
      "slide.layout: full-bleed photo half",
      "slide.header_band: 0.6-1.7in",
      "slide.source_caption: fixed bottom-right",
      "slide.transition: slide-up + bounce 0.3s ease-out-back overshoot<=6% | photo zoom 1.0->1.03 0.4s",
      "shape.radius: 20px",
      "shape.border: none",
      "shape.hairline: 1px #EDE8E4",
      "shape.shadow: 0 8px 24px rgba(43,43,46,0.08) (photo/card, optional)"
    ],
    "signature": [
      "흰 캔버스에 단일 산호-레드 강조와 둥근 터미널 휴머니스트 산세리프, 풀블리드 라운드 코너 사진의 환대 미감 덱.",
      "한눈에 알아보는 단서: (1) 순백 배경에 따뜻한 산호-레드 `#F4625F` 하나가 CTA·평점 점·핵심 지표를 모두 연결한다, (2) 사진은 풀블리드에 가까운 큰 면적 + 일관된 라운드 코너 20px, (3) 둥근 터미널의 지오메트릭 휴머니스트 산세리프와 넉넉한 여백, 부드럽게 튀어오르는 경쾌한 전환. 친근하지만 구조는 또렷하다.",
      "diagram.language: 20px-radius rounded card nodes, #FBF7F4 fill no border, 2px #F4625F rounded-cap connectors, coral circular number dots, 1 highlight #F4625F fill",
      "diagram.node: rounded card radius 20px, fill #FBF7F4, no border, 2.1in x 0.95in process node",
      "diagram.number_badge: coral circle dot dia 0.34in, #F4625F fill, white 14pt SemiBold",
      "diagram.connector: 2px #F4625F rounded-cap line, 7px rounded arrowhead, node gap 0.4in",
      "diagram.process: horizontal 3-5 steps, current step #F4625F fill white text",
      "diagram.timeline: horizontal, 2px #EDE8E4 rounded-cap baseline, milestone 12px coral dot white-fill #F4625F-stroke 2.5pt, current 16px #F4625F fill",
      "diagram.comparison: 2-3 cols, #FBF7F4 rounded cards radius 20px, recommended col header #F4625F white, rating shown as coral dots",
      "diagram.matrix: 2x2, 2px #EDE8E4 rounded-cap axes, no quadrant fill, points 0.55in #FBD9D7 circle, 1 highlight #F4625F"
    ],
    "avoid": [
      "강조색 2개 이상 쓰기, 본문 텍스트에 산호 입히기 — 강조는 `#F4625F` 하나, CTA·평점·KPI·차트 주계열에만.",
      "각진 모서리(반경 0). 사진을 직각으로 자르기 — 모든 사진·카드는 20px 라운드.",
      "진한 그림자·다중 그림자·그라디언트(산호 그라디언트 포함).",
      "**아마추어 차트 회귀 금지:** 3D·입체 막대, 막대 그림자·광택, 무지개 계열색, 격자선(이 팩은 그리드라인 0개), 차트 테두리 박스, 범례 박스(계열 2개 이하일 때), 잘린 y축, div 블록 막대.",
      "이모지 불릿(산호 도트로 대체)·클립아트·채움 아이콘.",
      "슬라이드를 6줄 넘는 글로 채우기, 사진 없이 글만 가득한 슬라이드."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD24",
    "title": "Monochrome Infrastructure Deck",
    "mood": "mono · mixed · strict-grid · balanced · subtle",
    "bestFor": "design-diversity standard · mono-infrastructure",
    "id": "ppt-monochrome-infrastructure-deck",
    "background": [
      "Bg: `#FFFFFF`",
      "Surface: `#F2F2F2`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#FFFFFF"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#F2F2F2"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#000000"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#666666"
      },
      {
        "role": "text disabled",
        "label": "text disabled",
        "hex": "#999999"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#000000"
      }
    ],
    "fonts": [
      "display: **Geist**, 48pt, weight 700, tracking -0.02em, leading 1.1, fallback Inter, Helvetica, Pretendard",
      "title: **Geist**, 30pt, weight 600, tracking -0.01em, leading 1.2",
      "kicker: **Geist Mono**, 11pt, weight 400, tracking 0.04em, fallback IBM Plex Mono, JetBrains Mono",
      "body: **Geist**, 17pt, weight 400, leading 1.45",
      "card_header: **Geist**, 14pt, weight 600",
      "kpi: **Geist Mono**, 44pt, weight 500",
      "mono: **Geist Mono**, 13pt, weight 400, fallback IBM Plex Mono, JetBrains Mono",
      "caption: **Geist Mono**, 10pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.7in",
      "spacing.margin_y: 0.55in",
      "spacing.gutter: 0.16in",
      "slide.size: 13.33x7.5in",
      "slide.grid_columns: 12",
      "slide.layout: strict modular grid, pixel-aligned",
      "slide.header_band: 0.55-1.6in",
      "slide.header_rule: 1px #000000 full-width under title",
      "slide.source_caption: fixed bottom-right mono",
      "slide.transition: cut | fade 0.1s | element slide-up 4px 0.12s linear",
      "shape.radius: 0px",
      "shape.border: 1px solid #000000",
      "shape.border_emphasis: 3px solid #000000",
      "shape.shadow: none"
    ],
    "signature": [
      "순백·순흑만으로 환원한 인프라 덱 — 산세리프+모노 혼합, 1px 헤어라인 보더, 색이 아닌 굵기 대비로만 강조하는 도면 같은 정밀함.",
      "한눈에 알아보는 단서: (1) 색은 순백 `#FFFFFF`와 순흑 `#000000`, 그리고 회색 2단계뿐 — 어디에도 컬러가 없다, (2) 산세리프 + 모노스페이스 혼합 — 본문·제목은 산세리프, 라벨·캡션·수치는 전부 모노스페이스, (3) 1px 순흑 헤어라인이 모든 카드·표·차트를 도면처럼 가른다. 강조는 색이 아니라 굵기와 보더 두께 대비로만 만든다.",
      "diagram.language: 0px-radius square modules, no fill, 1px #000000 hairline border, 1px #000000 right-angle connectors (no diagonals), mono step numbers, emphasis by 3px border + Bold text (no color)",
      "diagram.node: rect radius 0px, 1px #000000 border no fill, 2.0in x 0.85in process node",
      "diagram.number_badge: mono 13pt Geist Mono #000000, format 01/02",
      "diagram.connector: 1px #000000 straight line, right-angle bends only, 6px outline triangle arrowhead",
      "diagram.process: horizontal 3-5 steps, emphasis step 3px border",
      "diagram.timeline: horizontal, 0.75pt #000000 baseline, milestone 7px square white-fill 1px black border, current solid black fill, 1px ticks",
      "diagram.comparison: 2-3 col table, 1px #000000 border cells, header row #F2F2F2 fill, emphasis col 3px outer border",
      "diagram.matrix: 2x2, 0.75pt #000000 x+y axes, 1px hairline quadrant split no fill, points 9px square white-fill 1px black, 1 highlight solid black fill"
    ],
    "avoid": [
      "**어떤 컬러도 쓰지 않는다.** 강조색·브랜드색·차트 데이터색 전부 금지 — 강조는 굵기·보더 두께 대비로만.",
      "둥근 모서리, 그림자, 그라디언트, 텍스처, 노이즈.",
      "라벨·캡션·수치를 산세리프로 쓰기 — 라벨·캡션·수치는 전부 모노스페이스.",
      "**아마추어 차트 회귀 금지:** 3D·입체 막대, 면적 채움(이 팩 라인은 채움 없음), 무지개·계열별 색칠, 격자선 과다, 범례 박스, 잘린 y축, div 블록 막대, 둥근 막대.",
      "모든 요소 중앙 정렬 — 본문은 좌측 정렬, 그리드 라인에 픽셀 정렬.",
      "이모지 불릿·클립아트·스톡 아이콘·장식 도형.",
      "슬라이드를 7줄 넘는 글로 채우기."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD25",
    "title": "Expressive Soundwave Deck",
    "mood": "gradient · heavy-display · block-grid · balanced · playful",
    "bestFor": "design-diversity standard · expressive-soundwave",
    "id": "ppt-expressive-soundwave-deck",
    "background": [
      "Bg: `#121212`",
      "Surface: `#1E1E1E`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#121212"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#1E1E1E"
      },
      {
        "role": "surface bar",
        "label": "surface bar",
        "hex": "#2E2E2E"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#E8E8E8"
      },
      {
        "role": "text strong",
        "label": "text strong",
        "hex": "#FFFFFF"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#8A8A8A"
      },
      {
        "role": "accent 1",
        "label": "accent 1",
        "hex": "#FF6B4A"
      },
      {
        "role": "accent 2",
        "label": "accent 2",
        "hex": "#7B3FF2"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#3A3A3A"
      },
      {
        "role": "chart",
        "label": "#1FB6C9",
        "hex": "#1FB6C9"
      },
      {
        "role": "chart",
        "label": "#3A6BF0",
        "hex": "#3A6BF0"
      }
    ],
    "fonts": [
      "display: **Archivo**, 84pt, weight 900, tracking -0.03em, leading 0.95, fallback Anton, Helvetica, Pretendard",
      "title: **Archivo**, 48pt, weight 800, tracking -0.02em, leading 1.0",
      "kicker: **Archivo**, 13pt, weight 700, tracking 0.10em",
      "body: **Archivo**, 18pt, weight 400, leading 1.4, fallback Inter",
      "kpi: **Archivo**, 110pt, weight 900, tracking -0.04em",
      "label: **Archivo**, 16pt, weight 700, tracking 0.06em",
      "caption: **Archivo**, 10pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.6in",
      "spacing.margin_y: 0.55in",
      "spacing.gutter: 0.16in",
      "slide.size: 13.33x7.5in",
      "slide.grid_columns: block grid (2-4 large blocks)",
      "slide.layout: block-grid, color blocks interlock",
      "slide.header_band: 0.55-2.2in",
      "slide.source_caption: fixed bottom-right",
      "slide.transition: color block slide-in + bounce 0.35s ease-out-back overshoot<=8% | display type fade-in + slide-up 12px 0.3s",
      "shape.radius: 0px",
      "shape.border: none",
      "shape.shadow: none",
      "shape.color_block: rasterized PNG/Sharp duotone fill asset, edge-to-edge, overlap 10-20% allowed; flat fallback #FF4D00 or #7C3AED for HTML shapes; no CSS gradient"
    ],
    "signature": [
      "다크 캔버스에 활기찬 듀오톤 면 효과를 rasterized PNG/Sharp asset 또는 flat-token fallback으로 깔고 초대형 와이드 디스플레이로 한 슬라이드 한 메시지를 외치는 표현적 덱.",
      "한눈에 알아보는 단서: (1) 거의 검정 `#121212` 배경에 듀오톤 컬러 블록을 rasterized PNG/Sharp asset 또는 flat-token fallback으로 크고 대담하게 깐다, (2) 와이드한 그로테스크 디스플레이를 초대형으로 슬라이드를 꽉 채워 리듬감을 낸다, (3) 큰 숫자 + 짧은 라벨 = 한 슬라이드 한 메시지. 컬러 블록을 겹치고 차트는 채도 높은 rasterized/SVG asset 또는 flat-token fallback이 주인공이다.",
      "diagram.language: 0px-radius square block nodes, emphasis node uses rasterized PNG/Sharp gradient_a asset or flat #FF4D00 fallback / others #1E1E1E, 6pt #FFFFFF thick connectors with large filled arrowhead, 64pt Black oversized step numbers; no CSS gradients",
      "diagram.node: square block radius 0px, #1E1E1E fill, 2.4in x 1.4in process node",
      "diagram.number_badge: 64pt Archivo Black oversized number inside node",
      "diagram.connector: 6pt #FFFFFF thick line, 14px filled triangle arrowhead, block overlap 10-20% allowed",
      "diagram.process: horizontal 3-5 square blocks, key step uses rasterized PNG/Sharp gradient_a asset or flat #FF4D00 fallback; no CSS gradients",
      "diagram.timeline: horizontal, 8pt thick baseline uses rasterized/SVG gradient_a asset or flat #FF4D00 fallback, milestone 18px square #1E1E1E fill, current marker uses the same rasterized/SVG asset; no CSS gradients",
      "diagram.comparison: 2-3 square block cols #1E1E1E, gutter 0.16in no border, winning col uses rasterized PNG/Sharp gradient_a asset or flat #FF4D00 fallback; no CSS gradients",
      "diagram.matrix: 2x2, 1pt #3A3A3A axes, no quadrant fill, points 0.6in square #2E2E2E, 1-2 highlights using rasterized PNG/Sharp gradient_a asset or flat #FF4D00 fallback; no CSS gradients"
    ],
    "avoid": [
      "듀오톤을 무시하고 3색 이상 무지개 효과 쓰기 금지 — rasterized PNG/Sharp 또는 SVG/local asset은 항상 2스톱 듀오톤, 슬라이드당 페어 최대 2개(A·B), HTML은 flat-token fallback.",
      "영감 브랜드의 시그니처 그린을 그대로 쓰기 — 듀오톤은 명시된 코랄→바이올렛 / 청록→블루 페어만.",
      "라이트 모드로 회귀, 흰 배경. 둥근 모서리, 그림자, 텍스처·노이즈.",
      "음파·플레이리스트·재생바 같은 음악 UI 직접 모사.",
      "**아마추어 차트 회귀 금지:** 3D·입체 막대, 막대 그림자·광택·베벨, 무지개 계열색, 격자선(이 팩은 그리드라인 0개), 차트 테두리 박스, 범례 박스, 잘린 y축, div 블록 막대.",
      "슬라이드를 5줄 넘는 글로 채우기 — 큰 숫자 + 짧은 라벨이 원칙.",
      "이모지 불릿·클립아트·스톡 아이콘."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD26",
    "title": "Editorial Product Deck",
    "mood": "earth · serif-editorial · strict-grid · balanced · none",
    "bestFor": "design-diversity standard · editorial-product",
    "id": "ppt-editorial-product-deck",
    "background": [
      "Bg: `#F7F4EE`",
      "Surface: `#FCFAF5`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#F7F4EE"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#FCFAF5"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#1F1B16"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#7A7164"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#B5503A"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#DAD3C4"
      },
      {
        "role": "chart",
        "label": "#C8BFAD",
        "hex": "#C8BFAD"
      },
      {
        "role": "chart",
        "label": "#9B917F",
        "hex": "#9B917F"
      }
    ],
    "fonts": [
      "display: **Source Serif 4**, 44pt, weight 600, tracking -0.01em, leading 1.15, fallback Lora, Georgia, Noto Serif KR",
      "heading: **Source Serif 4**, 30pt, weight 600, tracking -0.005em, leading 1.2, fallback Lora, Georgia, Noto Serif KR",
      "kicker: **Inter**, 11pt, weight 500, tracking 0.10em",
      "body: **Inter**, 18pt, weight 400, leading 1.5, fallback Helvetica, Pretendard",
      "card_header: **Inter**, 15pt, weight 600",
      "kpi: **Source Serif 4**, 40pt, weight 600",
      "caption: **Inter**, 10pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.8in",
      "spacing.margin_y: 0.65in",
      "spacing.gutter: 0.18in",
      "slide.size: 13.33x7.5in",
      "slide.grid_columns: 12",
      "slide.header_band: 0.65-1.7in",
      "slide.hairline: 0.75pt #DAD3C4 (rule left 0.12in #B5503A)",
      "slide.source_caption: fixed bottom-right",
      "slide.transition: cut | fade 0.25s",
      "shape.radius: 4px",
      "shape.border: 0.75pt solid #DAD3C4",
      "shape.shadow: none"
    ],
    "signature": [
      "크림-아이보리 면에 잉크 블랙, 세리프 헤딩+산세리프 본문, 12열 엄격 그리드의 따뜻한 미니멀리즘 프로덕트 덱.",
      "한눈에 알아보는 단서: (1) 배경이 순백이 아니라 따뜻한 크림 `#F7F4EE`, 카드는 그보다 한 톤 밝은 면으로 그림자 없이 단차를 낸다. (2) 헤딩만 세리프(`Source Serif 4`), 본문·라벨·캡션은 전부 산세리프(`Inter`) — 위계가 색이 아니라 서체 대비로 만들어진다. (3) 모든 슬라이드 좌상단에 동일한 섹션 키커 + 0.75pt 룰 라인, 본문은 12열 그리드에 좌측 정렬. 강조는 단 하나의 차분한 테라코타.",
      "diagram.language: hairline document graphic; 0.75pt #DAD3C4 skeleton, no-fill rect nodes, 4px radius, active 1 only #B5503A",
      "diagram.node: #FCFAF5 fill + 0.75pt #DAD3C4 border, 2.0x0.95in, 4px radius, padding 0.18in",
      "diagram.connector: 1.25pt #DAD3C4 solid + thin V arrowhead (0.1in)",
      "diagram.step_badge: 0.34in circle, 0.75pt #DAD3C4 border, no fill, Source Serif 4 14pt; active #B5503A",
      "diagram.process: horizontal, <=5 steps, node gap 0.4in, 15pt Inter Semibold label + 12pt #7A7164 sub",
      "diagram.timeline: horizontal 0.75pt #DAD3C4 axis, 8px circle markers (#FCFAF5 fill, current #B5503A), <=6 markers",
      "diagram.comparison: 2-3 col, 0.75pt #DAD3C4 vertical divider, no col fill, serif italic 'vs'",
      "diagram.matrix: 0.75pt #DAD3C4 cross axes, no quadrant fill, no-fill point circles + highlight #B5503A"
    ],
    "avoid": [
      "배경을 순백 `#FFFFFF`로 쓰기 — 반드시 크림 `#F7F4EE`.",
      "본문에 세리프 쓰기, 헤딩에 산세리프 쓰기 — 헤딩=세리프, 본문=산세리프 고정. 위계를 뒤섞지 말 것.",
      "강조색 2개 이상, 본문 텍스트에 컬러 입히기.",
      "둥근 카드(반경 8px 이상), 그림자, 그라디언트, 글로우.",
      "**아마추어 차트 회귀 금지:** 3D·입체 막대, 막대 그림자·광택·베벨, 무지개·계열별 색칠, 격자선 과다, 차트 테두리 박스, 배경 채움, 범례 박스(계열 4개 미만), 잘린 y축, div 블록 막대.",
      "모든 요소 중앙 정렬 — 본문은 전부 좌측 정렬, 12열 그리드에 스냅.",
      "이모지 불릿·클립아트·스톡 아이콘 남발.",
      "슬라이드를 7줄 넘는 글로 채우기."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD27",
    "title": "Cinematic Keynote Deck",
    "mood": "dark · minimal-sans · full-bleed · balanced · subtle",
    "bestFor": "design-diversity standard · cinematic-keynote",
    "id": "ppt-cinematic-keynote-deck",
    "background": [
      "Bg: `#000000`",
      "Surface: `#0E0E0E`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#000000"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#0E0E0E"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#F5F5F7"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#8A8A8E"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#E8B341"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#262626"
      },
      {
        "role": "chart",
        "label": "#4A4A4E",
        "hex": "#4A4A4E"
      }
    ],
    "fonts": [
      "display: **Inter**, 64pt, weight 300, tracking -0.02em, leading 1.05, fallback Manrope, Helvetica Neue, Pretendard",
      "headline: **Inter**, 40pt, weight 400, tracking -0.015em, leading 1.1",
      "sub: **Inter**, 20pt, weight 400, tracking -0.005em",
      "body: **Inter**, 22pt, weight 400, leading 1.4, fallback Manrope, Pretendard",
      "kpi: **Inter**, 88pt, weight 300",
      "caption: **Inter**, 11pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 1.0in",
      "spacing.margin_y: 0.85in",
      "spacing.visual_gap: 0.5in",
      "slide.size: 13.33x7.5in",
      "slide.grid_columns: stage-centered-axis",
      "slide.visual_coverage: 50-70% of canvas, single key visual",
      "slide.summary_grid: 2x2 or 3x1 KPI cells",
      "slide.transition: crossdissolve 0.4-0.6s | visual scale-in 102->100% 0.5s",
      "shape.radius: 6px",
      "shape.border: 1px solid #262626",
      "shape.shadow: none"
    ],
    "signature": [
      "순흑 무대 위 거대 키 비주얼 한 점과 최소 텍스트, 정연한 균형 리듬과 끝의 서머리 슬라이드를 가진 시네마틱 키노트 덱.",
      "한눈에 알아보는 단서: (1) 배경은 순흑 `#000000`, 슬라이드 대부분이 글자 몇 개와 큰 비주얼 하나로만 구성된다. (2) 디스플레이는 타이트한 자간의 라이트~레귤러 산세리프를 화면 중앙에 크게, 본문 불릿은 거의 없다. (3) 비주얼과 캡션이 정연한 간격으로 한 묶음처럼 떠 있고, 덱 끝에 핵심 수치를 모은 '서머리 슬라이드'가 온다.",
      "diagram.language: dark stage; #262626 hairline skeleton, #0E0E0E nodes + 1px #262626 border, single active element glows #E8B341, 6px radius",
      "diagram.node: #0E0E0E fill + 1px #262626 border, 2.2x0.9in, 6px radius, padding 0.2in",
      "diagram.connector: 1pt #262626 solid + filled triangle arrowhead (0.11in)",
      "diagram.step_badge: 0.4in circle, 1px #262626 border, #0E0E0E fill, Inter 16pt #8A8A8E; active #E8B341",
      "diagram.process: horizontal, <=4 steps, node gap 0.5in, 20pt Inter label + 13pt #8A8A8E sub",
      "diagram.timeline: horizontal 1pt #262626 axis, 9px circle markers (#4A4A4E fill, current #E8B341 + 1.5px #000000 stroke), <=5 markers",
      "diagram.comparison: 2 panels #0E0E0E + 1px #262626, 6px radius, gap 0.5in, 40pt Light 'vs', result panel border #E8B341",
      "diagram.matrix: 1pt #262626 cross axes, no quadrant fill, #4A4A4E point circles + highlight #E8B341 (88pt giant number overlay allowed)"
    ],
    "avoid": [
      "배경을 회색·네이비·CSS gradient로 처리 금지 — 반드시 순흑 `#000000`.",
      "슬라이드를 불릿 리스트로 채우기 — 한 슬라이드 한 메시지, 텍스트 3줄 이하.",
      "강조색 2개 이상, 본문 텍스트에 컬러.",
      "인공 글로우·렌즈플레어·네온 외곽선·과한 그림자.",
      "**아마추어 차트 회귀 금지:** 3D·입체 막대, 막대 그림자·광택·베벨, 무지개·계열별 색칠, 격자선, 차트 테두리 박스, 배경 채움, 범례 박스, 잘린 y축, div 블록 막대, CSS gradient 막대.",
      "클립아트·이모지·스톡 아이콘으로 무대 채우기.",
      "슬라이드마다 같은 레이아웃 반복 — 비주얼 위치(중앙/좌/우/풀블리드)를 슬라이드마다 의도적으로 바꾼다."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD28",
    "title": "Confident Color-Block Deck",
    "mood": "vivid-primary · heavy-display · asymmetric · airy · snappy",
    "bestFor": "design-diversity standard · confident-color-block",
    "id": "ppt-confident-color-block-deck",
    "background": [
      "Bg: `#FFFFFF`",
      "Surface: `#FFFFFF`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#FFFFFF"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#FFFFFF"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#141414"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#6E6E6E"
      },
      {
        "role": "text on block",
        "label": "text on block",
        "hex": "#FFFFFF"
      },
      {
        "role": "accent 1",
        "label": "accent 1",
        "hex": "#F0531C"
      },
      {
        "role": "accent 2",
        "label": "accent 2",
        "hex": "#1D4ED8"
      },
      {
        "role": "accent 3",
        "label": "accent 3",
        "hex": "#1B6E4A"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#E0E0E0"
      },
      {
        "role": "chart",
        "label": "#C9C9C9",
        "hex": "#C9C9C9"
      }
    ],
    "fonts": [
      "display: **Archivo**, 60pt, weight 800, tracking -0.025em, leading 1.0, fallback Space Grotesk, Helvetica, Pretendard",
      "headline: **Archivo**, 38pt, weight 700, tracking -0.015em, leading 1.05",
      "kicker: **Archivo**, 13pt, weight 700, tracking 0.06em",
      "body: **Archivo**, 19pt, weight 400, leading 1.4, fallback Space Grotesk, Pretendard",
      "kpi: **Archivo**, 80pt, weight 800",
      "caption: **Archivo**, 11pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.7in",
      "spacing.margin_y: 0.6in",
      "spacing.block_padding: 0.6in",
      "slide.size: 13.33x7.5in",
      "slide.grid_columns: 12",
      "slide.color_block_coverage: 35-55% of canvas, 1-2 blocks asymmetric",
      "slide.block_patterns: left-column | corner-rect | bottom-half-bleed | diagonal-pair",
      "slide.transition: block slide-in 0.25s ease-out, travel <=15% canvas width; text instant",
      "shape.radius: 0px",
      "shape.border: 1px solid #E0E0E0",
      "shape.shadow: none"
    ],
    "signature": [
      "흰 바탕에 큼직한 솔리드 컬러 블록(슬라이드당 1~2색)을 비대칭으로 깔고 화이트 헤비 산세리프를 얹는 자신감 있는 모던 피치 덱.",
      "한눈에 알아보는 단서: (1) 슬라이드마다 캔버스 면적의 35~55%를 차지하는 솔리드 컬러 블록 1~2개가 비대칭으로 앉아 있다(직사각형, 풀하이트 컬럼, 또는 풀블리드 절반). (2) 컬러 블록 위 텍스트는 화이트, 흰 바탕 위 텍스트는 잉크 블랙 — 그 외 색 텍스트 없음. (3) 굵은 그로테스크 산세리프 헤드라인이 블록 안에 크게 비대칭으로 앉고, 본문은 같은 패밀리 레귤러로 절제된다.",
      "diagram.language: color block; 0px corners, flat solid fill, active node = slide block color rest #C9C9C9, no shadow/gradient",
      "diagram.node: rectangular solid block, 2.3x1.0in, 0px radius, padding 0.22in; active block color rest #C9C9C9",
      "diagram.connector: 3pt #141414 solid + bold solid triangle arrowhead (0.14in)",
      "diagram.step_badge: 0.5in square solid block (slide block color, 0px), Archivo ExtraBold 22pt #FFFFFF; inactive #C9C9C9",
      "diagram.process: horizontal, <=5 steps, node gap 0.35in, 19pt Archivo Bold label, asymmetric",
      "diagram.timeline: horizontal 3pt #141414 bar axis, 0.18in square markers (#C9C9C9, key = block color), <=6 markers",
      "diagram.comparison: 2-3 full-height solid color block columns, 0px gap (color edge = divider), 38pt Bold #FFFFFF header, top-weighted",
      "diagram.matrix: 4 solid quadrant blocks (3x #C9C9C9 + highlight block color, 1px white cross) or 4pt #141414 cross axes, square data points"
    ],
    "avoid": [
      "둥근 모서리(반경 1px 이상) — 모든 도형·블록·이미지 직각.",
      "그림자·그라디언트·글로우·투명 그라디언트 — 컬러 블록은 평면 솔리드.",
      "팔레트 외 색 사용, 슬라이드당 컬러 블록 3색 이상.",
      "컬러 텍스트 — 텍스트는 흰 면 위 잉크 블랙, 블록 위 화이트 둘뿐.",
      "모든 요소 중앙 정렬 — 헤드라인·본문 전부 좌측 정렬, 블록 안에서도 좌측·상하 치우침.",
      "슬라이드마다 같은 컬러 블록 위치 반복 — 4가지 블록 패턴을 의도적으로 교차한다.",
      "**아마추어 차트 회귀 금지:** 3D·입체 막대, 막대 그림자·광택·베벨, 무지개·계열별 색칠, 격자선, 차트 테두리 박스, 배경 채움, 범례 박스, 잘린 y축, div 블록 막대, 둥근 막대, CSS gradient 사용.",
      "이모지 불릿·클립아트·스톡 아이콘."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD29",
    "title": "Strategy Navy Deck",
    "mood": "vivid-primary · mixed · strict-grid · dense · none",
    "bestFor": "design-diversity standard · strategy-navy",
    "id": "ppt-strategy-navy-deck",
    "background": [
      "Bg: `#FFFFFF`",
      "Surface: `#F1F4F9`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#FFFFFF"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#F1F4F9"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#14213D"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#5B6472"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#2563EB"
      },
      {
        "role": "navy",
        "label": "navy",
        "hex": "#14213D"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#C7D0DD"
      },
      {
        "role": "chart",
        "label": "#A8B4C6",
        "hex": "#A8B4C6"
      },
      {
        "role": "chart",
        "label": "#7CA0F0",
        "hex": "#7CA0F0"
      },
      {
        "role": "chart",
        "label": "#E3E8F0",
        "hex": "#E3E8F0"
      }
    ],
    "fonts": [
      "display: **PT Serif**, 26pt, weight 700, tracking -0.01em, leading 1.18, fallback Georgia, Source Serif 4, Noto Serif KR",
      "kicker: **Inter**, 11pt, weight 600, tracking 0.08em",
      "module_header: **Inter**, 14pt, weight 600",
      "body: **Inter**, 15pt, weight 400, leading 1.35, fallback Arial, Pretendard",
      "kpi: **PT Serif**, 42pt, weight 700",
      "caption: **Inter**, 9pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.6in",
      "spacing.margin_y: 0.5in",
      "spacing.gutter: 0.14in",
      "slide.size: 13.33x7.5in",
      "slide.grid_columns: 12",
      "slide.header_band: 0.5-1.45in",
      "slide.hairline: 1px #14213D rule under action title",
      "slide.action_title: conclusion sentence mandatory, not a label",
      "slide.source_caption: fixed bottom-right",
      "slide.transition: cut | fade 0.2s | chart bar build L-to-R 0.3s",
      "shape.radius: 0px",
      "shape.border: 1px solid #C7D0DD",
      "shape.accent_border: 3px solid #2563EB",
      "shape.shadow: none"
    ],
    "signature": [
      "다층 블루 2색 시스템과 세리프 헤딩+산세리프 본문, 12열 그리드 위 액션 타이틀과 근거 모듈의 전략 컨설팅 덱.",
      "한눈에 알아보는 단서: (1) 모든 슬라이드 상단에 \"액션 타이틀\"(완결된 문장형 핵심 메시지) — 단순 라벨이 아니라 그 슬라이드가 증명할 결론. (2) 다크 네이비와 비비드 블루 두 가지 블루 + 회색만으로 위계를 만든다(다른 색 없음). (3) 헤딩은 세리프, 본문·라벨·차트 텍스트는 산세리프 — 혼합 타이포로 '스마트 심플리시티'를 시각화. 12열 그리드에 근거 모듈이 정연하게 정렬된다.",
      "diagram.language: consulting standard; 0px-corner rect boxes, 1px #C7D0DD border, 1.5px arrows, 1 active/key node only #2563EB rest neutral",
      "diagram.node: #F1F4F9 fill + 1px #C7D0DD border + 3px top border (#2563EB active / #C7D0DD inactive), 1.9x0.9in, 0px radius, padding 0.16in",
      "diagram.connector: 1.5px #14213D solid + thin filled triangle arrowhead (0.1in)",
      "diagram.step_badge: 0.32in square, 1px #C7D0DD border, #FFFFFF fill, Inter Semibold 13pt #14213D; active #2563EB fill + #FFFFFF",
      "diagram.process: horizontal, <=5 steps, node gap 0.3in, 14pt Inter Semibold header + 12pt sub, 12-col snap",
      "diagram.timeline: horizontal 1px #C7D0DD axis, 8px circle markers (#FFFFFF + 1.5px #A8B4C6, current #2563EB), <=6 markers, current = 0.75pt #2563EB dashed vertical",
      "diagram.comparison: 2-3 col table, 14pt Inter Semibold header + 1px #C7D0DD rule, 1px vertical dividers, recommended col 3px #2563EB top border, ✓#2563EB/✗#A8B4C6",
      "diagram.matrix: 0.75pt #C7D0DD cross axes (left 6-7 cols), recommended quadrant #F1F4F9 light fill, #A8B4C6 bubbles + highlight #2563EB, right 5-6 cols takeaway"
    ],
    "avoid": [
      "강조색 2개 이상, 블루/회색 외 색 사용 — 위계는 네이비 + 비비드 블루 + 회색 3톤뿐.",
      "액션 타이틀을 단순 라벨(\"매출 현황\")로 — 반드시 결론 문장.",
      "헤딩에 산세리프, 본문에 세리프 — 헤딩=세리프, 본문/차트 텍스트=산세리프 고정.",
      "둥근 모서리 박스, 그림자, 그라디언트.",
      "**아마추어 차트 회귀 절대 금지:** 3D·입체 막대, 원근·기울임, 막대/조각 그림자·광택·베벨, 무지개·계열별 색칠, 격자선 과다, 차트 테두리 박스, 배경 채움, 범례 박스(계열 4개 미만일 때), 잘린 y축·확대 축척(0에서 시작 안 함), 둥근 막대, div 블록 막대, 이중축 혼합, 파이 5조각 이상. 막대는 전부 회청색 + 강조 1개만 `#2563EB`.",
      "모든 요소 중앙 정렬 — 본문·모듈 전부 좌측 정렬, 12열 그리드 스냅.",
      "출처 캡션 누락. 이모지 불릿·클립아트·스톡 아이콘.",
      "슬라이드를 6줄 넘는 글로 채우기."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD30",
    "title": "Heritage Luxury Deck",
    "mood": "earth · serif-editorial · centered · balanced · subtle",
    "bestFor": "design-diversity standard · heritage-luxury",
    "id": "ppt-heritage-luxury-deck",
    "background": [
      "Bg: `#EDE6D6`",
      "Surface: `#F4EFE3`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#EDE6D6"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#F4EFE3"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#3A2E1F"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#8A7C63"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#A8893E"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#A8893E"
      },
      {
        "role": "chart",
        "label": "#C4B79A",
        "hex": "#C4B79A"
      }
    ],
    "fonts": [
      "display: **Playfair Display**, 52pt, weight 400, tracking 0.005em, leading 1.12, fallback Bodoni Moda, Didot, Noto Serif KR",
      "heading: **Playfair Display**, 34pt, weight 400, tracking 0.005em, leading 1.2, fallback Bodoni Moda, Didot, Noto Serif KR",
      "kicker: **EB Garamond**, 11pt, weight 400, tracking 0.18em",
      "body: **EB Garamond**, 17pt, weight 400, leading 1.6, fallback Cormorant, Georgia, Noto Serif KR",
      "kpi: **Playfair Display**, 56pt, weight 400",
      "caption: **EB Garamond**, 10pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 1.2in",
      "spacing.margin_y: 0.9in",
      "spacing.content_max: 8.0in",
      "slide.size: 13.33x7.5in",
      "slide.grid_columns: center-axis symmetric",
      "slide.header_band: 0.9-2.0in",
      "slide.hairline: 0.75pt #A8893E gold rule (kicker rule width 0.6in centered)",
      "slide.alignment: center axis, generous side whitespace",
      "slide.source_caption: fixed bottom-right italic",
      "slide.transition: crossdissolve 0.4-0.5s | text fade-in 0.4s",
      "shape.radius: 0px",
      "shape.border: 0.75pt solid #A8893E",
      "shape.shadow: none"
    ],
    "signature": [
      "세피아-샴페인 톤과 골드 헤어라인, 하이콘트라스트 디돈 세리프를 중앙에 앉힌 헤리티지·럭셔리 IR 덱.",
      "한눈에 알아보는 단서: (1) 배경이 따뜻한 샴페인 `#EDE6D6`, 텍스트는 다크 브라운 `#3A2E1F` — 흑백이 아닌 세피아 세계. (2) 하이콘트라스트 디돈 계열 세리프 디스플레이가 화면 중앙에 크게 앉고, 본문은 절제된 휴머니스트 세리프. (3) 모든 슬라이드에 골드 `#A8893E` 헤어라인 한 줄(0.75pt)이 격을 만들고, 중앙 정렬 축 양옆으로 여백을 크게 비운다.",
      "diagram.language: luxury hairline; 0.75pt gold #A8893E hairline skeleton, no/light fill, 0px corners, active 1 only gold, generous side whitespace",
      "diagram.node: no fill or #F4EFE3 + 0.75pt #A8893E hairline border, 1.9x0.95in, 0px radius, padding 0.3in, centered",
      "diagram.connector: 0.75pt #A8893E hairline + thin no-fill V arrowhead (0.09in)",
      "diagram.step_badge: 0.36in circle, 0.75pt #A8893E hairline border, no fill, Playfair Display 16pt #3A2E1F; active #A8893E",
      "diagram.process: horizontal, <=4 steps, node gap 0.5in, centered 17pt EB Garamond label + 11pt #8A7C63 sub",
      "diagram.timeline: horizontal 0.75pt #A8893E hairline axis, 7px circle markers (no fill + 0.75pt #A8893E, current #A8893E fill), <=5 markers",
      "diagram.comparison: 2-3 col center-symmetric, 0.75pt #A8893E vertical hairline, no col fill, kicker + 0.6in gold rule, centered, gold ◆ or italic 'vs'",
      "diagram.matrix: 0.75pt #A8893E hairline cross axes, no quadrant fill, no-fill circle points + highlight #A8893E, generous side margins"
    ],
    "avoid": [
      "배경을 순백 `#FFFFFF`나 회색으로 — 반드시 샴페인 `#EDE6D6`.",
      "텍스트를 순흑 `#000000`으로 — 다크 세피아 브라운 `#3A2E1F`.",
      "강조색 2개 이상, 골드를 큰 면 채움으로 쓰기(헤어라인·세선·작은 수치에만), 본문 텍스트에 컬러.",
      "디스플레이에 산세리프 쓰기 — 디스플레이=디돈 세리프, 본문=휴머니스트 세리프 고정.",
      "둥근 모서리, 그림자, 그라디언트, 글로우.",
      "좌측 정렬로 빽빽하게 — 콘텐츠는 중앙 정렬 축, 양옆 여백을 크게 비운다.",
      "**아마추어 차트 회귀 금지:** 3D·입체 막대, 막대 그림자·광택·베벨, 무지개·계열별 색칠, 격자선, 차트 테두리 박스, 배경 채움, 범례 박스, 잘린 y축, div 블록 막대, 면적 채움 그래프, 굵은 막대.",
      "이모지 불릿·클립아트·스톡 아이콘·특정 명품 브랜드의 모노그램·패턴 재현.",
      "슬라이드를 6줄 넘는 글로 채우기."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD31",
    "title": "Isometric Platform Deck",
    "mood": "mono · minimal-sans · centered · airy · subtle",
    "bestFor": "design-diversity standard · isometric-platform",
    "id": "ppt-isometric-platform-deck",
    "background": [
      "Bg: `#EEF1F5`",
      "Surface: `#FFFFFF`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#EEF1F5"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#FFFFFF"
      },
      {
        "role": "surface alt",
        "label": "surface alt",
        "hex": "#E3E8EF"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#1B2330"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#5C6679"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#3B6FE0"
      },
      {
        "role": "accent top",
        "label": "accent top",
        "hex": "#3B6FE0"
      },
      {
        "role": "accent left",
        "label": "accent left",
        "hex": "#2C53AC"
      },
      {
        "role": "accent right",
        "label": "accent right",
        "hex": "#1E3A7E"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#E3E8EF"
      },
      {
        "role": "hairline",
        "label": "hairline",
        "hex": "#A9B4C4"
      },
      {
        "role": "neutral top",
        "label": "neutral top",
        "hex": "#C6CDD8"
      },
      {
        "role": "neutral left",
        "label": "neutral left",
        "hex": "#AEB7C5"
      },
      {
        "role": "neutral right",
        "label": "neutral right",
        "hex": "#97A1B2"
      }
    ],
    "fonts": [
      "display: **Inter**, 40pt, weight 700, tracking -0.01em, leading 1.15, fallback Arial, Pretendard",
      "title: **Inter**, 28pt, weight 600, tracking -0.01em, fallback Arial, Pretendard",
      "body: **Inter**, 24pt, weight 400, leading 1.3, fallback Arial, Pretendard",
      "label: **Inter**, 16pt, weight 500, leading 1.2, fallback Pretendard",
      "value: **Inter**, 14pt, weight 600",
      "caption: **Inter**, 11pt, weight 400, fallback Pretendard"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.7in",
      "spacing.margin_y: 0.55in",
      "spacing.text_zone: 0-3.5in",
      "spacing.stage_zone: 3.5-7.5in",
      "slide.size: 13.33x7.5in",
      "slide.grid: 12-column, top half text zone / bottom half isometric stage",
      "slide.projection: isometric, axes at +/-30deg from horizontal, parallel (no perspective convergence)",
      "slide.light: single source top-left, face lightness top>left>right",
      "slide.chart.data_top: #3B6FE0",
      "slide.chart.data_left: #2C53AC",
      "slide.chart.data_right: #1E3A7E",
      "slide.chart.deemphasis_top: #C6CDD8",
      "slide.chart.deemphasis_left: #AEB7C5",
      "slide.chart.deemphasis_right: #97A1B2",
      "slide.chart.encoding: single-series isometric cuboid bars; 1 emphasis bar full cobalt 3-face, rest neutral 3-face"
    ],
    "signature": [
      "밝은 쿨그레이 캔버스 위 정사 아이소메트릭 투영의 입체 플랫폼·블록·계단 구조가 콘텐츠를 떠받치고, 코발트 명도 3단계로 입체면을 칠하며 평면 텍스트는 헤어라인 리더선으로 분리하는 입체 다이어그램 키트 덱.",
      "밝은 쿨그레이 캔버스 위에 30°/-30° 정사 아이소메트릭 투영으로 그린 입체 플랫폼·블록·계단 구조가 콘텐츠를 떠받친다. 단일 코발트 강조색의 명도 3단계가 입체면의 윗면·좌면·우면을 칠해 깊이를 만든다. 평면 텍스트는 슬라이드 상단 절반에 정렬되고, 입체 오브제는 0.5pt 헤어라인 리더선으로만 라벨링된다 — 텍스트와 입체물이 한 면에 섞이지 않는 \"평면 텍스트 / 입체 오브제 분리\"가 한눈에 보이는 표식이다.",
      "diagram.language: isometric +/-30deg projection, cobalt 3-step lightness (top/left/right), 0.5pt #A9B4C4 hairline leader lines, plane text separated to top zone",
      "diagram.process_flow: iso cube nodes 0.9in edge, staircase bottom-left to top-right (each +0.4in up +0.6in right), 0.18in iso chevron connectors cobalt-left, 0.34in circle number badge on cube top face (white fill, 16pt Semibold cobalt digit), active node full cobalt 3-face / rest neutral",
      "diagram.timeline: floor iso rail 0.3in band left-to-right, milestones as pin towers 0.6-1.0in iso cuboids with top-face circle badge, date leader labels below rail, current tower full cobalt / others neutral",
      "diagram.comparison: 2-3 iso platform tiers (cuboids), recommended tier raised +0.5in, item label on top face, neutral vs cobalt on sides",
      "diagram.matrix_2x2: iso floor grid 0.5pt #A9B4C4 split into 4 zones, edge labels, data points as floating spheres 0.3-0.5in dia (size=3rd var, cobalt lightness), top-right zone #3B6FE0 12% floor tint",
      "diagram.hierarchy_funnel: stacked iso slabs, width widening (pyramid) or narrowing (funnel) top-to-bottom, cobalt lightness step per slab, level label via right leader line",
      "diagram.kpi_card: floating iso tile 1.6x1.1in (raised 0.3in), 40pt Bold #1B2330 value + 14pt label on top face, delta iso arrow (up=cobalt-top / down=neutral), 3-4 tiles per slide",
      "diagram.divider: large iso staircase bottom-left + giant 72pt Bold #1B2330 section number top-right"
    ],
    "avoid": [
      "**원근 왜곡된 3D 차트 금지.** 막대·도형은 평행선 유지 정사영(아이소메트릭)만. 소실점으로 수렴하는 원근 3D, 회전 베벨, 입체 그림자 드롭 금지 — 막대는 정사영 + 윗면만 강조.",
      "다크 배경 금지 — 캔버스는 항상 라이트 쿨그레이. (korea-policy-navy의 다크 3D 플랫폼과 시각적으로 구별되어야 한다.)",
      "평면 텍스트를 입체면 위에 얹지 말 것 — 텍스트는 상단 평면 존, 라벨은 리더선 끝에만.",
      "강조색 외 색 추가 금지 — 무지개 차트, 다색 입체면 금지. 코발트 1색 + 무채색만.",
      "둥근 모서리 평면 카드, 드롭 섀도, 그라디언트 면 채움 금지.",
      "이모지 불릿·클립아트·스톡 아이콘 금지 — 아이콘은 입체 오브제로.",
      "모든 슬라이드 중앙 정렬 금지 — 텍스트는 좌측 정렬."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD32",
    "title": "MBB Ghost Deck Framework",
    "mood": "mono · minimal-sans · asymmetric · balanced · none",
    "bestFor": "design-diversity standard · mbb-ghost",
    "id": "ppt-mckinsey-ghost-deck",
    "background": [
      "Bg: `#FFFFFF`",
      "Surface: `#FFFFFF`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#FFFFFF"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#FFFFFF"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#1A1A1A"
      },
      {
        "role": "text body",
        "label": "text body",
        "hex": "#3D4350"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#7A828F"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#1F3A5F"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#C9CDD3"
      },
      {
        "role": "neutral bar",
        "label": "neutral bar",
        "hex": "#C9CDD3"
      }
    ],
    "fonts": [
      "action_title: **Inter**, 26pt, weight 600, tracking -0.01em, leading 1.25, fallback Arial, Pretendard",
      "kicker: **Inter**, 13pt, weight 500, tracking 0.04em, fallback Pretendard",
      "body: **Inter**, 18pt, weight 400, leading 1.35, fallback Arial, Pretendard",
      "label: **Inter**, 14pt, weight 500, fallback Pretendard",
      "value: **Inter**, 14pt, weight 600",
      "kpi: **Inter**, 40pt, weight 700",
      "footnote: **Inter**, 10pt, weight 400, fallback Pretendard"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.6in",
      "spacing.margin_top: 0.5in",
      "spacing.margin_bottom: 0.4in",
      "spacing.title_band: 0-1.3in",
      "spacing.body_zone: 1.5-6.9in",
      "slide.size: 13.33x7.5in",
      "slide.grid: 12-column, asymmetric (diagram 2/3 right, text 1/3 left)",
      "slide.chart.data: #1F3A5F, #3D4350, #7A828F",
      "slide.chart.deemphasis_bar: #C9CDD3",
      "slide.chart.encoding: monochrome lightness; 1 emphasis bar/segment in #1F3A5F, rest neutral",
      "slide.chart.waterfall: start/end bars #1F3A5F solid, increase bars #3D4350 solid, decrease bars 45deg hatch on #7A828F, 0.5pt dotted connectors, bar 0.7in / gap 0.25in",
      "slide.chart.marimekko: column width = variable, vertical split = share, neutral lightness, 1 emphasis segment #1F3A5F, 14pt percent label inside",
      "slide.chart.stacked_100: neutral lightness segments, 1 emphasis #1F3A5F, direct label inside",
      "slide.chart.bar: 1 emphasis bar #1F3A5F, rest #C9CDD3, bar:gap = 3:2",
      "slide.chart.axis: x baseline 0.75pt #3D4350 only, y-axis omitted"
    ],
    "signature": [
      "순백 캔버스에 완결된 문장의 액션 타이틀과 슬레이트 그레이 본문, 색 대신 굵기로만 강조하는 MBB식 덱 — 워터폴·메코·2×2를 기본 다이어그램 어휘로 삼는다.",
      "순백 캔버스, 상단을 완결된 문장의 **액션 타이틀** 한 줄이 차지하고 그 아래 작은 키커 라인이 붙는다. 본문은 무채색 슬레이트 그레이 단 한 톤 — 강조는 색이 아니라 굵기와 박스 채움 한 칸으로만 한다. 우하단 출처 각주는 의무. 워터폴·메코(marimekko)·2×2 매트릭스가 기본 다이어그램 어휘다. \"예쁜 슬라이드\"가 아니라 \"스스로 결론을 말하는 슬라이드\"임을 액션 타이틀과 무채색 다이어그램 키트로 즉시 알 수 있다.",
      "diagram.language: 0radius rectangles, monochrome, 1pt filled chevron arrows, 0.32in square number badges, emphasis = #1F3A5F fill 1 box or Bold (not color)",
      "diagram.process_flow: 0radius rect nodes 0.8in tall white + 1pt #C9CDD3 border, 1pt chevron #3D4350 connectors, 0.32in square number badge top-left (#1F3A5F fill, white 14pt Semibold digit), active node 3pt left #1F3A5F bar",
      "diagram.timeline: horizontal 0.75pt #3D4350 baseline, 0.18in diamond milestone markers (neutral, current #1F3A5F fill), hairline bracket phases, dates 10pt below / events 14pt above",
      "diagram.comparison: 2-3 column table, header row #3D4350 fill + white text, 0.75pt #C9CDD3 cell hairlines, check/dash glyphs, winning column header #1F3A5F",
      "diagram.matrix_2x2: BCG-style, 0.75pt #C9CDD3 hairline cross axis no fill, 4 quadrant labels 14pt at corners, label bubbles (dia = 3rd variable, neutral fill, emphasis item #1F3A5F), 14pt label",
      "diagram.hierarchy_pyramid: Minto pyramid principle tree (top conclusion box + branching evidence boxes, 1pt right-angle connectors) OR 3-4 tier pyramid right-angle trapezoids neutral lightness",
      "diagram.kpi_card: borderless card white bg, 40pt Bold #1A1A1A value + 14pt label + triangle delta (up filled Bold / down outline Regular, NO color), 3-4 per slide separated by 0.75pt vertical hairline",
      "diagram.divider: giant 60pt section number left + action-title sentence right"
    ],
    "avoid": [
      "액션 타이틀을 명사구·제목어로 쓰지 말 것 — 반드시 완결된 평서문(\"매출은 신흥시장에서 성장한다\") 한 줄.",
      "색으로 강조하지 말 것 — 강조색은 1색, 차트 막대 1개·박스 1칸·델타에만. 텍스트 강조는 Bold.",
      "무지개 차트·범례 박스 남발·격자선·3D 효과·둥근 모서리·그림자·그라디언트 금지.",
      "클라이언트 실명·MBB(맥킨지·BCG·베인) 회사 로고·실제 컨설팅사 슬라이드 복제 금지. 일반화된 프레임워크만.",
      "출처 각주 누락 금지 — 모든 데이터 슬라이드 우하단 의무.",
      "이모지·클립아트·스톡 아이콘 금지. 슬라이드를 글로 가득 채우기 금지.",
      "모든 슬라이드 중앙 정렬 금지 — 액션 타이틀·본문 좌측 정렬, 다이어그램은 비대칭."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD33",
    "title": "Blueprint Schematic Deck",
    "mood": "dark · mono · strict-grid · dense · none",
    "bestFor": "design-diversity standard · blueprint-schematic",
    "id": "ppt-blueprint-schematic-deck",
    "background": [
      "Bg: `#0E1B3D`",
      "Surface: `#0E1B3D`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#0E1B3D"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#0E1B3D"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#E8EEF7"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#8FA3C8"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#4FC8E8"
      },
      {
        "role": "grid",
        "label": "grid",
        "hex": "#2A4A8C"
      },
      {
        "role": "line",
        "label": "line",
        "hex": "#4FC8E8"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#4FC8E8"
      },
      {
        "role": "hatch",
        "label": "hatch",
        "hex": "#3A5DA0"
      }
    ],
    "fonts": [
      "display: **Inter**, 38pt, weight 300, tracking 0.02em, leading 1.2, fallback Arial, Pretendard",
      "title: **Inter**, 24pt, weight 400, tracking 0.03em, fallback Arial, Pretendard",
      "body: **Inter**, 18pt, weight 300, leading 1.4, fallback Arial, Pretendard",
      "label: **Inter**, 13pt, weight 400, tracking 0.04em, fallback Pretendard",
      "value: **JetBrains Mono**, 14pt, weight 400, fallback IBM Plex Mono, Courier New",
      "kpi: **JetBrains Mono**, 40pt, weight 400, fallback IBM Plex Mono, Courier New",
      "caption: **Inter**, 10pt, weight 400, fallback Pretendard"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.55in",
      "spacing.margin_y: 0.45in",
      "spacing.dot_grid_pitch: 0.4in",
      "slide.size: 13.33x7.5in",
      "slide.grid: full-bleed dot grid 0.4in pitch 0.7px #2A4A8C, all content snaps; outer 0.75pt cyan drawing frame + corner crop marks",
      "slide.title_block: bottom-right 0.75pt cyan box, slide number + title + SHEET XX/XX monospace",
      "slide.chart.data: #4FC8E8",
      "slide.chart.encoding: outline-only bars 0.75pt cyan; 1 emphasis bar #4FC8E8 fill, rest outline only",
      "slide.chart.bar: outline 0.75pt cyan, bar:gap = 3:2",
      "slide.chart.line: 1px cyan polyline, 0.1in hollow circle vertex markers, no area fill (emphasis range cyan 10%)",
      "slide.chart.axis: x baseline 0.75pt cyan, y-axis coordinate ticks (dimension-line style, monospace labels)",
      "slide.chart.gridline: dot grid serves as gridlines, no extra gridlines",
      "slide.chart.value_label: JetBrains Mono 14pt tabular, direct above bar/vertex",
      "slide.chart.baseline: 0 (no truncated y-axis)",
      "slide.chart.legend: none, direct labeling"
    ],
    "signature": [
      "딥 인디고-블루 배경에 1px 시안 도트 그리드를 청사진처럼 노출하고, 치수 보조선·인출선·단면 해치 등 제도 주석을 정보 장식으로 차용하는 라인 드로잉 다이어그램 덱.",
      "딥 인디고-블루 배경에 1px 시안 헤어라인 도트 그리드가 청사진처럼 전면 노출되고, 모든 콘텐츠가 그 격자에 스냅한다. 흰색 가는 산세리프 + 등폭 숫자, 도형은 채움 없는 0.75pt 라인 드로잉이다. 치수 보조선·인출선·45° 단면 해치·노스 애로우·스케일 바를 정보 장식으로 차용해 \"엔지니어링 도면\" 미감을 만든다 — 네온 사이버가 아니라 제도판 위 청사진이다.",
      "diagram.language: no-fill 0.75pt cyan line drawing, right-angle routing connectors, leader-line labels, monospace numerals",
      "diagram.process_flow: no-fill 0.75pt cyan border rect nodes 0.85in tall, right-angle routing connectors + triangle heads, step number in 0.34in circular callout at leader end (14pt mono), active node cyan 12% fill",
      "diagram.timeline: horizontal dimension line with arrow caps + extension lines, milestones marked by extension lines + mono date labels, current marker cyan glow (12% fill circle)",
      "diagram.comparison: 2-column distinguished by 45deg hatch density difference, title-block header per column (0.75pt cyan box + mono code), rows snap to dot grid",
      "diagram.matrix_2x2: coordinate axes with ticks (0.75pt cyan, mono tick labels), data markers as crosshair targets (0.1in cross + small circle), quadrant corner mono codes",
      "diagram.hierarchy: stacked section view, levels distinguished by 45deg hatch density (denser lower), level labels via right leader + mono code",
      "diagram.kpi_card: title-block-style 0.75pt cyan box divided into cells, one cell giant mono value 40pt, another cell 13pt label + mono code, 3-4 per slide",
      "diagram.divider: giant monospace section number + north arrow + scale bar ornament"
    ],
    "avoid": [
      "네온 사이버펑크 톤 금지 — 발광 글로우 남발, 형광 마젠타·퍼플, 디지털 글리치 효과 금지. 이것은 제도판 위 청사진이지 SF UI가 아니다.",
      "도형에 솔리드 면 채움 금지 — 0.75pt 시안 윤곽선만. 강조 1개만 시안 채움 허용.",
      "도트 그리드를 끄지 말 것 — 모든 슬라이드에 전면 노출이 정체성.",
      "둥근 모서리·드롭 섀도·그라디언트 금지.",
      "수치를 일반 산세리프로 쓰지 말 것 — 모든 수치·치수·좌표는 등폭(JetBrains Mono/IBM Plex Mono).",
      "무지개 차트·범례 박스·격자선 과다 금지.",
      "이모지·클립아트·스톡 아이콘 금지 — 아이콘은 라인 드로잉으로."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD34",
    "title": "Editorial Infographic Deck",
    "mood": "vivid-primary · serif-editorial · block-grid · balanced · none",
    "bestFor": "design-diversity standard · editorial-infographic",
    "id": "ppt-editorial-infographic-deck",
    "background": [
      "Bg: `#F6F3EC`",
      "Surface: `#F6F3EC`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#F6F3EC"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#F6F3EC"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#1C1A17"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#6B655B"
      },
      {
        "role": "data ink",
        "label": "data ink",
        "hex": "#33302A"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#B22B1F"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#C8C2B4"
      },
      {
        "role": "rule",
        "label": "rule",
        "hex": "#C8C2B4"
      }
    ],
    "fonts": [
      "display: **Source Serif 4**, 44pt, weight 600, tracking -0.01em, leading 1.12, fallback Spectral, Georgia, Noto Serif KR",
      "headline: **Source Serif 4**, 30pt, weight 600, fallback Spectral, Georgia, Noto Serif KR",
      "body: **Inter**, 18pt, weight 400, leading 1.4, fallback Arial, Pretendard",
      "kicker: **Inter**, 11pt, weight 500, tracking 0.08em, fallback Pretendard",
      "big_number: **Source Serif 4**, 54pt, weight 600, fallback Georgia, Noto Serif KR",
      "value: **Inter**, 13pt, weight 600",
      "footnote: **Source Serif 4**, 10pt, weight 400, fallback Georgia"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.65in",
      "spacing.margin_y: 0.5in",
      "spacing.columns: 2-3 magazine columns + hairline rules",
      "slide.size: 13.33x7.5in",
      "slide.grid: 12-column, 2-3 magazine columns divided by 0.75pt hairline rules",
      "slide.chart.data: #33302A",
      "slide.chart.encoding: ink monochrome bars; 1 emphasis bar #B22B1F, rest #33302A",
      "slide.chart.bar: ink solid #33302A, 1 emphasis #B22B1F, bar:gap = 3:2",
      "slide.chart.line: 1pt ink polyline, no area fill (or ink 8% area), emphasis range #B22B1F",
      "slide.chart.axis: x baseline 0.5pt #C8C2B4, y-axis 1-2 hairline ticks max",
      "slide.chart.gridline: removed (or 1-2 y ticks 0.5pt hairline)",
      "slide.chart.value_label: Inter Semibold 13pt tabular direct; headline-size figures Source Serif 4 54pt",
      "slide.chart.baseline: 0 (no truncated y-axis)",
      "slide.chart.donut: <=3 slices, center serif metric, no rainbow",
      "slide.chart.legend: none, direct labeling"
    ],
    "signature": [
      "오프화이트 지면에 큰 세리프 헤드라인과 가는 룰 라인 구획, 잉크 레드 한 점으로 데이터를 신문·잡지 데이터 저널리즘처럼 읽히는 그래픽으로 조판하는 인포그래픽 덱.",
      "오프화이트 지면 위 큰 세리프 헤드라인 + 산세리프 캡션의 잡지 인포그래픽 미감이다. 데이터를 데이터 저널리즘처럼 \"읽히는 그래픽\"으로 조판한다 — 가는 룰 라인이 지면을 구획하고, 데이터는 잉크빛 단색, 캡션·각주는 세리프, 큰 수치는 본문 활자처럼 짜인다. 강조색은 잉크 레드 한 점뿐. NYT·이코노미스트 그래픽 페이지를 슬라이드로 옮긴 듯한 인쇄물 감각이 표식이다.",
      "diagram.language: serif numbers, thin rule-line division, ink monochrome data, single ink-red point, flow via rule + number hierarchy not connector shapes",
      "diagram.process_flow: dropcap-size serif numbers 36pt Source Serif 4 (ink or ink-red), steps divided by vertical 0.75pt #C8C2B4 rule, no arrow connectors, 13pt serif caption beside each",
      "diagram.timeline: horizontal 0.75pt rule baseline, large serif years 28pt above rule, 0.5pt vertical ticks for events, current year #B22B1F, event labels 13pt below tick",
      "diagram.comparison: 2-3 column with 0.75pt hairline rules between, 11pt serif small-caps headers, winning header #B22B1F, rows divided by rules",
      "diagram.matrix_2x2: table-form 2x2 cells drawn with 0.75pt rule grid (no fill), data points ink-red dots 0.12-0.3in (size = 3rd var), quadrant corner 11pt serif caps labels",
      "diagram.hierarchy: stacked horizontal bands, width proportional to share, 0.5pt rules between, ink lightness steps, 1 emphasis band #B22B1F, serif label inside",
      "diagram.kpi_card: rule-divided cells (no box fill), 54pt serif big number + 11pt caps caption + serif italic source footnote, 3-4 cells separated by 0.75pt vertical rule",
      "diagram.divider: giant serif section number + headline"
    ],
    "avoid": [
      "강조색을 면 채움·배경에 쓰지 말 것 — 잉크 레드는 차트 막대 1개·핵심 수치 1개·드롭캡·인용부호처럼 점(point)으로만.",
      "무지개 차트·범례 박스·3D·격자선 과다 금지.",
      "박스를 솔리드 색으로 채우지 말 것 — 구획은 가는 룰 라인으로. 카드 채움 최소.",
      "둥근 모서리·드롭 섀도·그라디언트 금지.",
      "헤드라인을 산세리프로 쓰지 말 것 — 헤드라인·거대 수치는 세리프, 캡션·본문은 산세리프(혼합이 정체성).",
      "이모지 불릿·클립아트·스톡 아이콘 금지. 슬라이드를 글로 가득 채우기 금지.",
      "모든 슬라이드 중앙 정렬·동일 레이아웃 반복 금지 — 잡지처럼 슬라이드마다 칼럼 수·룰 구획을 달리한다."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD35",
    "title": "Vivid Gradient Infographic Deck",
    "mood": "gradient · heavy-display · block-grid · balanced · playful",
    "bestFor": "design-diversity standard · gradient-infographic",
    "id": "ppt-vivid-gradient-infographic-deck",
    "background": [
      "Bg: `#FBFAFE`",
      "Surface: `#FFFFFF`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#FBFAFE"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#FFFFFF"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#211B33"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#7C7591"
      },
      {
        "role": "accent 1",
        "label": "accent 1",
        "hex": "#7C3AED"
      },
      {
        "role": "accent 2",
        "label": "accent 2",
        "hex": "#FB6F5C"
      },
      {
        "role": "tint violet",
        "label": "tint violet",
        "hex": "#E9E0FB"
      },
      {
        "role": "tint coral",
        "label": "tint coral",
        "hex": "#FDE5E1"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#ECE8F4"
      }
    ],
    "fonts": [
      "display: **Poppins**, 42pt, weight 800, tracking -0.02em, leading 1.1, fallback Plus Jakarta Sans, Arial, Pretendard",
      "title: **Poppins**, 28pt, weight 700, tracking -0.01em, fallback Plus Jakarta Sans, Arial, Pretendard",
      "body: **Poppins**, 20pt, weight 400, leading 1.4, fallback Arial, Pretendard",
      "label: **Poppins**, 14pt, weight 500, fallback Pretendard",
      "kpi: **Poppins**, 44pt, weight 800, fallback Arial, Pretendard",
      "value: **Poppins**, 14pt, weight 600",
      "caption: **Poppins**, 11pt, weight 400, fallback Pretendard"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.7in",
      "spacing.margin_y: 0.55in",
      "spacing.grid: 12-column block grid",
      "slide.size: 13.33x7.5in",
      "slide.grid: 12-column block grid, rounded cards/chips as modules, light canvas (duotone assets never fill background; no CSS gradients)",
      "slide.chart.data_duotone_asset: rasterized #7C3AED-to-#FB6F5C PNG fill; flat fallback #7C3AED for HTML shapes",
      "slide.chart.deemphasis: #E9E0FB",
      "slide.chart.encoding: single duotone scale; 1 emphasis bar uses a rasterized/Sharp full-saturation asset or flat #7C3AED fallback, rest pastel tint #E9E0FB (no rainbow / no per-series color; no CSS gradients)",
      "slide.chart.bar: round-cap (4px top radius), rasterized duotone PNG fill or flat #7C3AED fallback, bar:gap = 3:2",
      "slide.chart.donut: <=3 slices using rasterized duotone arc PNGs or flat token fills, 2px white gap, center metric 32pt + 11pt label",
      "slide.chart.area: 1.5pt duotone line rendered as rasterized PNG asset + flat translucent area fallback (25%->0% alpha)",
      "slide.chart.axis: x baseline 1pt #ECE8F4, y-axis omitted",
      "slide.chart.gridline: removed (or 2 y hairlines #ECE8F4)",
      "slide.chart.value_label: Poppins SemiBold 14pt tabular, direct above bar/vertex",
      "slide.chart.baseline: 0 (no truncated y-axis)"
    ],
    "signature": [
      "밝은 캔버스 위 채도 높은 듀오톤 효과를 rasterized PNG/Sharp 또는 SVG/local asset으로 만든 뒤 둥근 알약 노드·아이콘 칩·KPI 링에 적용하는 VC 피치형 인포그래픽 키트 덱 — HTML 도형은 flat-token fallback을 쓰고 CSS gradient는 금지한다.",
      "밝은 캔버스 위에 채도 높은 듀오톤(바이올렛 → 코랄)을 rasterized PNG/Sharp 또는 SVG/local asset으로 준비해 다이어그램 노드·아이콘 칩·KPI 링에 적용한다. 둥근 알약·원형 노드, 굵은 지오메트릭 산세리프, 부드러운 소프트 섀도가 한 키트로 묶인다 — 모든 HTML 도형은 flat-token fallback을 갖고 CSS gradient는 쓰지 않는다는 점이 표식이다. VC 피치 덱·KPI 대시보드의 활기찬 인포그래픽이되 배경은 라이트로 유지된다.",
      "diagram.language: rounded pills / circular nodes using rasterized PNG/Sharp duotone fills or flat-token fallbacks, 4pt round-cap SVG/local-asset arrows, soft shadow on cards/floating nodes only; no CSS gradients",
      "diagram.process_flow: rounded pill nodes 0.9in tall full-radius (rasterized PNG/Sharp duotone fill or white fill + SVG/local-asset border), 4pt round-cap SVG/local-asset arrow connectors, 0.4in circular rasterized number badge (white 16pt Bold digit), active node full-saturation raster asset / rest white fill + flat-token border fallback; no CSS gradients",
      "diagram.timeline: S-curve 1.5pt rasterized/SVG duotone base line, 0.22in circular rasterized PNG milestone dots or flat-token fallback circles, current dot pulse ring, dates 11pt / events 14pt; no CSS gradients",
      "diagram.comparison: 2-3 rounded cards 16px (white fill + soft shadow), recommended card uses rasterized PNG/Sharp duotone fill asset + 1.08x scale + top SVG/local-asset chip, with flat #7C3AED fallback; no CSS gradients",
      "diagram.matrix_2x2: rounded 2x2 cells 12px, 4 quadrants pastel tint (violet/coral 12%), rasterized PNG/Sharp duotone bubbles 0.3-0.55in or flat-token fallback circles (size = 3rd var) + 14pt label; no CSS gradients",
      "diagram.hierarchy_funnel: rounded funnel 4-5 tier trapezoids narrowing down, rasterized PNG/Sharp tier assets or flat-token fallback lightness shifts per tier (violet-end top, coral-end bottom), 14pt label + conversion value; no CSS gradients",
      "diagram.kpi_card: rounded card 16px white fill + soft shadow, top-left rasterized PNG/Sharp duotone icon chip 0.5in circle (white line icon), 44pt big number (mono color or 1 rasterized/SVG gradient-text asset), bottom-right donut progress ring (rasterized/SVG arc or flat-token fallback), 3-4 per slide; no CSS gradients",
      "diagram.divider: giant rasterized/SVG gradient-text asset section number + large rasterized PNG/Sharp duotone pill background block, with flat-token fallback; no CSS gradients"
    ],
    "avoid": [
      "차트 데이터를 무지개·계열별 다른 색으로 칠하지 말 것 — 데이터 색은 단일 바이올렛→코랄 rasterized/Sharp asset 또는 flat-token fallback 스케일만. 강조는 풀 채도 vs 파스텔 틴트로, CSS gradient는 금지.",
      "배경 CSS gradient 금지 — 캔버스는 라이트(`#FBFAFE`) 유지. 듀오톤 효과는 노드·칩·링·차트 데이터의 rasterized PNG/Sharp 또는 SVG/local asset에만 적용하고 HTML은 flat-token fallback 사용(glassmorphism·vivid-gradient-future와의 분기점).",
      "3D 차트·과한 그림자 차트·격자선 과다·잘린 y축 금지.",
      "소프트 섀도 남발 금지 — 카드·떠 있는 노드에만, 차트 데이터 요소엔 섀도 없음.",
      "rasterized/SVG gradient-text asset은 슬라이드당 1곳(거대 수치 등)만 — 본문·라벨은 무채색, CSS gradient 텍스트 금지.",
      "이모지 불릿·클립아트·의미 없는 스톡 아이콘 금지. 슬라이드를 글로 가득 채우기 금지."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD36",
    "title": "Bold Block Infographic Deck",
    "mood": "vivid-primary · heavy-display · block-grid · dense · none",
    "bestFor": "design-diversity standard · bold-block-infographic",
    "id": "ppt-bold-block-infographic-deck",
    "background": [
      "Bg: `#FFFFFF`",
      "Surface: `#2A2D34`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#FFFFFF"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#2A2D34"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#2A2D34"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#6B6F76"
      },
      {
        "role": "text inverse",
        "label": "text inverse",
        "hex": "#FFFFFF"
      },
      {
        "role": "accent 1",
        "label": "accent 1",
        "hex": "#2A2D34"
      },
      {
        "role": "accent 2",
        "label": "accent 2",
        "hex": "#E8A317"
      },
      {
        "role": "accent 3",
        "label": "accent 3",
        "hex": "#1F8A82"
      },
      {
        "role": "delta up",
        "label": "delta up",
        "hex": "#1F8A82"
      },
      {
        "role": "delta down",
        "label": "delta down",
        "hex": "#C0392B"
      }
    ],
    "fonts": [
      "display: **Archivo**, 32pt, weight 800, tracking -0.02em, fallback Arial Black, Pretendard",
      "block_number: **Archivo**, 64pt, weight 800",
      "section_number: **Archivo**, 200pt, weight 800",
      "card_header: **Inter**, 13pt, weight 700, tracking 0.06em",
      "kpi: **Archivo**, 54pt, weight 800",
      "body: **Inter**, 18pt, weight 400, leading 1.35, fallback Arial, Pretendard",
      "caption: **Inter**, 11pt, weight 600"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.55in",
      "spacing.margin_y: 0.5in",
      "spacing.block_gutter: 0.1in",
      "spacing.grid: 12-column x 6-row module grid",
      "slide.size: 13.33x7.5in",
      "slide.grid: block grid, 3-6 solid color-block modules per slide, asymmetric placement",
      "slide.chart.data: #2A2D34, #E8A317, #1F8A82",
      "slide.chart.emphasis: single-series all #2A2D34 with 1 emphasis bar #E8A317; multi-series charcoal/amber/teal in order, max 3",
      "slide.chart.delta.up: #1F8A82",
      "slide.chart.delta.down: #C0392B",
      "slide.chart.bar: thick flat color-block, bar:gap = 5:2, radius 0px, baseline 0 (no truncated y-axis)",
      "slide.chart.axis: x baseline 2px #2A2D34, y-axis omitted",
      "slide.chart.gridline: none or max-value only 0.5pt #E2E2E3",
      "slide.chart.value_label: Archivo 16pt 700, white inside bar / charcoal outside, tabular",
      "slide.chart.category_label: 11pt 600 #6B6F76 under bar"
    ],
    "signature": [
      "흰 바탕에 차콜·앰버·틸 3색 솔리드 컬러 블록이 노드·구간·셀이 되어 다이어그램 자체를 이루는, 보더 없는 단정한 평면 모더니즘 인포그래픽 덱.",
      "한눈에 알아보는 단서: (1) 색면(차콜·앰버·틸 솔리드 블록)이 장식이 아니라 노드·구간·셀·열 그 자체다, (2) 둥근 모서리가 거의 없는(반경 0~2px) 각진 도형과 두꺼운 지오메트릭 산세리프, (3) 검정 보더·하드 섀도·그라디언트가 전혀 없는 평면 모더니즘. 색블록 위 텍스트는 화이트로 반전된다.",
      "diagram.language: all nodes/cells angular (radius 0-2px) solid color-block cycling charcoal/amber/teal, no border no shadow, white-inverse text on block, numbers 64pt Archivo 800 white inside block, connectors = chevron-notch interlock (no separate arrow line), single emphasis block only amber",
      "diagram.process_flow: 3-6 horizontal full-height color-blocks (1.4in tall) interlocked by 0.22in chevron notch, charcoal/teal alternating, active step amber, 64pt white step number top-left + 16pt white step name, 18pt charcoal caption below",
      "diagram.timeline: color-block band strip joined horizontally (block = phase, width proportional, charcoal/teal alternating, current phase amber), 0.16in angular white square milestone pins + 11pt 600 date, current phase amber + 11pt white NOW",
      "diagram.comparison: 2-3 full-height color-block columns (4.8in tall, charcoal/teal/tint, recommended one amber), 0.7in header band with 13pt 700 uppercase inverse text, rows divided by 0.75pt white hairline, label + value",
      "diagram.matrix_2x2: 4 solid color-block quadrants (charcoal/amber/teal/tint, top-right recommended quadrant amber), 0.08in white gutter between, data points 0.3in white solid circle + 11pt label, axis labels outside 11pt 600 uppercase",
      "diagram.hierarchy_funnel: stacked color-blocks narrowing downward 4-5 tiers (width-varying rectangles, charcoal-to-teal transition), white step name 16pt inside + 54pt Archivo value at right",
      "diagram.kpi_card: solid color-block card (charcoal default, single emphasis amber), no border no shadow, 13pt 700 uppercase white header top-left, 54pt Archivo 800 white KPI center, 13pt white label + angular delta tag (teal up / #C0392B down small solid square + white triangle 11pt)",
      "diagram.toc_divider_quote: TOC = angular charcoal number square 0.5in + 18pt item name left list; divider = giant amber color-block half-screen + 200pt white section number + 32pt white section name; quote = charcoal full-bleed block + 28pt white pull-quote + 0.18in amber left bar"
    ],
    "avoid": [
      "검정 1px 보더·하드 섀도(예: `6px 6px 0`)를 색블록에 두르기 — 이건 네오브루탈리즘이다. 이 팩은 보더·그림자 없는 평면 모더니즘.",
      "둥근 모서리(반경 2px 초과), 그라디언트·베벨·입체 효과.",
      "3색 외 4번째 색 추가, 무지개 차트, 계열별 난색 색칠.",
      "모든 슬라이드 중앙 정렬, 슬라이드마다 같은 레이아웃 반복 — 색블록 배치를 슬라이드마다 비대칭으로 바꾼다.",
      "색블록을 1~2개만 — 밀도가 정체성, 3~6개 모듈.",
      "이모지 불릿·클립아트·스톡 아이콘. 큼직한 스테이트먼트 한 줄로 슬라이드 비우기(이건 confident-color-block — 이 팩은 빽빽한 인포그래픽).",
      "차트 회귀: 3D·입체 막대, 막대 그림자·CSS gradient 사용, 격자선 과다, 범례 박스, 잘린 y축, 파이/다중 도넛."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD37",
    "title": "Prismatic Dark Diagram Deck",
    "mood": "gradient · minimal-sans · full-bleed · balanced · snappy",
    "bestFor": "design-diversity standard · prismatic-dark",
    "id": "ppt-prismatic-dark-deck",
    "background": [
      "Bg: `#0B0E1A`",
      "Surface: `#141A2E`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#0B0E1A"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#141A2E"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#E8EAF0"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#8A90A6"
      },
      {
        "role": "accent 1",
        "label": "accent 1",
        "hex": "#22D3EE"
      },
      {
        "role": "accent 2",
        "label": "accent 2",
        "hex": "#D946EF"
      },
      {
        "role": "accent 3",
        "label": "accent 3",
        "hex": "#FBBF24"
      },
      {
        "role": "prism gradient 1",
        "label": "prism gradient 1",
        "hex": "#22D3EE"
      },
      {
        "role": "prism gradient 2",
        "label": "prism gradient 2",
        "hex": "#D946EF"
      },
      {
        "role": "prism gradient 3",
        "label": "prism gradient 3",
        "hex": "#FBBF24"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#1E2336"
      },
      {
        "role": "delta up",
        "label": "delta up",
        "hex": "#22D3EE"
      },
      {
        "role": "delta down",
        "label": "delta down",
        "hex": "#F87171"
      }
    ],
    "fonts": [
      "display: **Inter**, 30pt, weight 600, tracking -0.01em, fallback Arial, Pretendard",
      "kicker: **JetBrains Mono**, 12pt, weight 500, tracking 0.08em, fallback Consolas",
      "kpi: **Inter**, 48pt, weight 700",
      "node_label: **JetBrains Mono**, 13pt, weight 500",
      "body: **Inter**, 18pt, weight 400, leading 1.4, fallback Arial, Pretendard",
      "caption: **JetBrains Mono**, 11pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.7in",
      "spacing.margin_y: 0.55in",
      "spacing.grid: 12-column, full-bleed background",
      "slide.size: 13.33x7.5in",
      "slide.grid: full-bleed ink-navy-black, 1 glowing diagram + left-aligned text per slide",
      "slide.chart.data: #22D3EE, #D946EF, #FBBF24",
      "slide.chart.emphasis: single-series cyan #22D3EE solid; 1 emphasis bar uses rasterized PNG/Sharp prism fill asset or flat #22D3EE fallback; multi-series cyan/magenta/amber, max 3; no CSS gradients",
      "slide.chart.delta.up: #22D3EE",
      "slide.chart.delta.down: #F87171",
      "slide.chart.glow_control: data line glow weak: blur 4px, rasterized/SVG prism glow at 20% alpha or flat #22D3EE fallback; no glow on value/axis labels; no CSS gradients",
      "slide.chart.axis: x baseline 0.75pt #1E2336, y-axis omitted",
      "slide.chart.gridline: 2-3 horizontal y major, 0.5pt #1E2336 (0/mid/max)",
      "slide.chart.value_label: JetBrains Mono 13pt 500, #E8EAF0, tabular, direct on bar/vertex/slice",
      "slide.chart.category_label: 11pt #8A90A6 under bar",
      "slide.chart.legend: no box; inline color-dot 0.08in + 11pt label above chart"
    ],
    "signature": [
      "잉크 네이비-블랙 배경에 다이어그램 노드·라인이 시안→마젠타→앰버 프리즘 효과를 rasterized/SVG local asset 또는 flat-token fallback으로 발광하는 테크 컨퍼런스 키노트형 다이어그램 키트 덱.",
      "한눈에 알아보는 단서: (1) 잉크 네이비-블랙 배경에 다이어그램 노드는 채움이 거의 투명하고 1px 프리즘 SVG/local-asset 스트로크 윤곽선만 있다, (2) 커넥터 라인이 시안→마젠타→앰버 rasterized/SVG local asset으로 발광하며 끝에 빛 점이 맺힌다, (3) 미디엄 산세리프 + 작은 등폭 라벨. 노드는 칠해진 카드가 아니라 빛으로 그린 윤곽이다. HTML 구현은 flat-token fallback을 포함하고 CSS gradient는 금지한다.",
      "diagram.language: all nodes near-transparent fill rgba(20,26,46,0.20) + 1px SVG/local-asset prism stroke outline radius 8px, connectors = glowing SVG/local-asset prism line 1.5pt + blur 5px glow + endpoint light dot, numbers JetBrains Mono 13pt inside capsule, emphasis = stronger border glow blur 4px->10px; no CSS gradients",
      "diagram.process_flow: 4-6 horizontal transparent-fill capsule nodes (0.8in tall, full-round, 1px SVG/local-asset prism border), glowing SVG/local-asset prism line connectors (left-to-right color transition) + 0.06in endpoint light dot, step number mono 13pt in capsule, active step stronger border glow; no CSS gradients",
      "diagram.timeline: horizontal rasterized/SVG prism beam (3px tall, cyan-left to amber-right + blur 6px glow), milestones 0.18in glowing nodes (transparent fill + SVG/local-asset border + glow), current node stronger glow + 12pt cyan NOW kicker, dates 11pt mono #8A90A6 below; no CSS gradients",
      "diagram.comparison: 2-3 glass panels (rgba(20,26,46,0.60) + 1px SVG/local-asset prism hairline border), recommended panel border glow blur 10px, 12pt mono uppercase kicker top, rows divided 0.5pt #1E2336 hairline, winning item cyan text; no CSS gradients",
      "diagram.matrix_2x2: 1px rasterized/SVG prism cross axis (blur 4px weak glow), 11pt mono #8A90A6 axis labels at 4 ends, glowing dots 0.16-0.32in (rasterized PNG/Sharp prism fill or flat-token fallback, brightness = value), no quadrant fill; no CSS gradients",
      "diagram.hierarchy_funnel: stacked transparent-fill capsules narrowing downward 4-5 tiers (1px SVG/local-asset prism border, rasterized/flat-token color position shifts per tier cyan->amber), 13pt mono label + 48pt rasterized/SVG gradient-text asset value at right; no CSS gradients",
      "diagram.kpi_card: dark glass card rgba(20,26,46,0.60) + 1px SVG/local-asset prism hairline border 8px radius, 12pt mono uppercase header top-left, 48pt Inter 700 rasterized/SVG prism-gradient-text asset KPI, 13pt delta (cyan up / #F87171 down), donut progress ring bottom-right (rasterized/SVG arc or flat-token fallback, track #1E2336); no CSS gradients",
      "diagram.toc_divider_quote: TOC = mono number 01/02 cyan + 18pt item name + right glowing rasterized/SVG prism progress bar; divider = full-bleed ink-navy + giant rasterized/SVG gradient-text asset section number 120pt + 30pt section name + faint SVG/local-asset prism line motif; quote = 0.18in rasterized/SVG glowing left bar + 28pt Inter pull-quote #E8EAF0; no CSS gradients"
    ],
    "avoid": [
      "노드를 솔리드 색으로 채우기 — 채움은 거의 투명, 빛(스트로크·글로우)으로 그린다.",
      "발광 색을 4색 이상 무지개로 늘리기 — 프리즘은 시안·마젠타·앰버 3스톱 1세트뿐.",
      "텍스트·값 라벨에 글로우/블러 — 가독성 파괴. 글로우는 노드 보더·커넥터·차트 라인에만.",
      "그림자·베벨·입체 효과. 빛은 글로우로만.",
      "데이터 라인 글로우를 강하게 — blur 4px·20% 알파로 약하게(정밀도 우선).",
      "모든 슬라이드 중앙 정렬, 균일 레이아웃 반복.",
      "차트 회귀: 3D 차트, 무지개 계열 색칠, 격자선 과다, 범례 박스, 잘린 y축, 파이/다중 도넛.",
      "이모지 불릿·클립아트."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD38",
    "title": "Soft Pastel System Deck",
    "mood": "pastel · minimal-sans · centered · balanced · snappy",
    "bestFor": "design-diversity standard · soft-pastel-system",
    "id": "ppt-soft-pastel-system-deck",
    "background": [
      "Bg: `#FAF7F4`",
      "Surface: `#FFFFFF`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#FAF7F4"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#FFFFFF"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#3A3640"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#8A8492"
      },
      {
        "role": "accent 1",
        "label": "accent 1",
        "hex": "#C9BEEB"
      },
      {
        "role": "accent 2",
        "label": "accent 2",
        "hex": "#A6DAC9"
      },
      {
        "role": "accent 3",
        "label": "accent 3",
        "hex": "#F2C9AE"
      },
      {
        "role": "accent saturated 1",
        "label": "accent saturated 1",
        "hex": "#8B72D9"
      },
      {
        "role": "accent saturated 2",
        "label": "accent saturated 2",
        "hex": "#3FA98C"
      },
      {
        "role": "accent saturated 3",
        "label": "accent saturated 3",
        "hex": "#E08A4E"
      },
      {
        "role": "delta up",
        "label": "delta up",
        "hex": "#3FA98C"
      },
      {
        "role": "delta down",
        "label": "delta down",
        "hex": "#E0746C"
      }
    ],
    "fonts": [
      "display: **Quicksand**, 30pt, weight 700, tracking 0, fallback Verdana, Pretendard",
      "card_header: **Quicksand**, 14pt, weight 600, tracking 0.02em",
      "kpi: **Quicksand**, 46pt, weight 700",
      "node_number: **Quicksand**, 18pt, weight 700",
      "body: **Nunito Sans**, 18pt, weight 400, leading 1.45, fallback Arial, Pretendard",
      "caption: **Nunito Sans**, 11pt, weight 600"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.85in",
      "spacing.margin_y: 0.65in",
      "spacing.card_gap: 0.22in",
      "spacing.card_padding: 0.26in",
      "spacing.grid: 12-column, centered, generous rows",
      "slide.size: 13.33x7.5in",
      "slide.grid: centered hierarchy, 3-5 round card/node modules per slide, body slides allow asymmetry",
      "slide.chart.data: #C9BEEB, #A6DAC9, #F2C9AE",
      "slide.chart.emphasis: single-series lilac #C9BEEB with 1 emphasis bar saturated lilac #8B72D9; multi-series lilac/mint/peach, max 3",
      "slide.chart.delta.up: #3FA98C",
      "slide.chart.delta.down: #E0746C",
      "slide.chart.bar: bar:gap = 3:2, round-cap top radius 8px, baseline 0 (no truncated y-axis)",
      "slide.chart.shadow_control: weak color shadow 0 3px 8px pastel 18% on bars/donut only; no shadow on labels",
      "slide.chart.axis: x baseline 0.75pt #D6CFC7, y-axis omitted",
      "slide.chart.gridline: 2-3 horizontal y major, 0.5pt #EDE8E2"
    ],
    "signature": [
      "오프화이트 캔버스에 라일락·민트·피치 파스텔 3색과 부드러운 멀티 섀도, 통통한 라운드 노드·카드로 다이어그램을 한 키트로 묶는 촉각적 소프트 UI 덱.",
      "한눈에 알아보는 단서: (1) 모든 다이어그램 도형이 통통한 큰 라운드 코너(반경 16~24px) + 라일락·민트·피치 파스텔 채움, (2) 한 줄짜리 하드 섀도가 아닌 부드러운 멀티 레이어 섀도가 도형을 종이처럼 살짝 띄운다, (3) 둥근 휴머니스트 산세리프. 도형이 만지고 싶게 통통하고 따뜻하다.",
      "diagram.language: all nodes/cards plump round (radius 16-24px) + pastel or white fill + soft double shadow, no border, connectors 3pt round-cap line, numbers in floating full-round pastel circle badge (Quicksand 18pt), single emphasis only saturated pastel",
      "diagram.process_flow: 3-6 horizontal plump round-rect nodes (1.1in tall, pastel fill lilac/mint/peach cycling + soft double shadow), 3pt round-cap #D6CFC7 line connectors + small round arrowhead, step number floating full-round white circle badge top-left (0.4in, saturated pastel digit), active step saturated pastel fill",
      "diagram.timeline: thin round base line 3pt #E3DDD6 round cap, milestones puffy circle dots 0.22in (pastel fill + soft shadow), current point saturated pastel + pulse ring 2pt concentric, dates 11pt #8A8492 below / events 14pt above",
      "diagram.comparison: 2-3 round cards (white fill + soft double shadow), recommended card lifted (shadow 0 18px 36px 22% + 0.12in up), 14pt Quicksand 600 header + pastel circle icon chip, rows 0.5pt #EDE8E2 hairline, winning item saturated pastel text",
      "diagram.matrix_2x2: 4 round-rect zones (radius 20px, pastel 12% light tint fill), 0.16in gutter, 1pt #D6CFC7 cross axis, puffy circle bubbles 0.3-0.5in (pastel fill + soft shadow, size = 3rd variable), axis labels outside 11pt 600",
      "diagram.hierarchy_funnel: round stacked tiers narrowing downward 4-5 (plump round-rect, single pastel lightness steps, 0.12in gap), 14pt step name inside + 46pt Quicksand value at right + 11pt conversion delta",
      "diagram.kpi_card: puffy round card (white fill, radius 20px, soft double shadow), pastel circle chip with line icon + 14pt Quicksand header top-left, 46pt Quicksand 700 saturated-pastel KPI, 13pt delta (mint up / #E0746C down), donut progress ring bottom-right (pastel round arc, track #EDE8E2)",
      "diagram.toc_divider_quote: TOC = floating pastel circle number badge + 18pt item name card list; divider = off-white bg + giant round pastel panel + 84pt Quicksand section number + 30pt section name; quote = white round card soft shadow + floating pastel circle quote mark + 26pt Quicksand pull-quote"
    ],
    "avoid": [
      "각진 모서리·하드 섀도(`Npx Npx 0` 한 줄 그림자) — 통통한 라운드 + 부드러운 멀티 섀도가 정체성.",
      "원색·네온·고채도 색, 파스텔 3색군 외 4번째 색.",
      "CSS gradient·베벨·입체 효과.",
      "데이터 요소 섀도를 강하게 — 약하게(`0 3px 8px` 18%). 값 라벨엔 섀도 금지.",
      "슬라이드를 글로 가득 채우기 — 여백과 통통한 도형이 숨 쉬게.",
      "모든 슬라이드 완전 중앙 정렬 반복 — 본문은 비대칭 허용.",
      "차트 회귀: 3D 차트, 무지개 계열 색칠, 격자선 과다, 범례 박스, 잘린 y축, 파이/다중 도넛.",
      "이모지 불릿·클립아트."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD39",
    "title": "Archival Index Deck",
    "mood": "mono · mixed · strict-grid · dense · none",
    "bestFor": "design-diversity standard · archival-index",
    "id": "ppt-archival-index-deck",
    "background": [
      "Bg: `#EFE9DD`",
      "Surface: `#F6F2E8`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#EFE9DD"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#F6F2E8"
      },
      {
        "role": "surface alt",
        "label": "surface alt",
        "hex": "#FBF8F0"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#33302A"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#7A7468"
      },
      {
        "role": "index number",
        "label": "index number",
        "hex": "#5A5448"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#33302A"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#C9C0AC"
      },
      {
        "role": "rule strong",
        "label": "rule strong",
        "hex": "#9A9180"
      },
      {
        "role": "hatch",
        "label": "hatch",
        "hex": "#33302A"
      }
    ],
    "fonts": [
      "display: **Source Serif 4**, 26pt, weight 600, tracking 0, fallback Georgia, Pretendard",
      "index_number: **IBM Plex Mono**, 13pt, weight 500, tracking 0.04em, fallback Courier New",
      "section_number: **IBM Plex Mono**, 120pt, weight 300",
      "cell_header: **Source Serif 4**, 11pt, weight 600, tracking 0.08em",
      "kpi: **IBM Plex Mono**, 44pt, weight 400",
      "body: **Source Serif 4**, 16pt, weight 400, leading 1.5, fallback Georgia, Pretendard",
      "caption: **IBM Plex Mono**, 10pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.6in",
      "spacing.margin_y: 0.5in",
      "spacing.grid: 14-column, left 0.9in monospace index column",
      "spacing.row_rule: 0.75pt #C9C0AC",
      "slide.size: 13.33x7.5in",
      "slide.grid: strict 14-column dense catalog, 2-4 table/index modules per slide, slide number Fig. NN / NN at top-right",
      "slide.chart.data_encoding: no color; texture encoding — hollow outline (0.75pt ink border) / 45deg hatch / solid ink-brown; single emphasis bar solid; multi-series via 3 texture steps",
      "slide.chart.bar: bar:gap = 3:2, radius 0px, baseline 0 (no truncated y-axis)",
      "slide.chart.axis: x and y axis 0.75pt #9A9180",
      "slide.chart.gridline: none or 2-3 y major 0.5pt #C9C0AC",
      "slide.chart.value_label: IBM Plex Mono 13pt 400, ink-brown, tabular, direct on bar/vertex",
      "slide.chart.category_label: 11pt Source Serif 4 under bar",
      "slide.chart.legend: no box; texture swatch 0.16in square + 11pt serif label",
      "slide.chart.figure_number: monospace Fig. 1 / Fig. 2 at chart top-left, mandatory",
      "slide.chart.types: comparison = outline/hatch bar; trend = 1pt ink polyline, hollow circle markers, no area fill; share = single 100% stacked bar (segments via texture)"
    ],
    "signature": [
      "종이빛 베이지 캔버스에 세리프+등폭 혼합, 도서관 카드·아카이브 대장처럼 모든 다이어그램을 번호·라벨·룰 라인으로 색인하는 학술 리서치 카탈로그 키트 덱.",
      "한눈에 알아보는 단서: (1) 모든 요소가 등폭 인덱스 번호(`01`·`02`·`A1`·`B2`)로 색인되고 가는 룰 라인이 질서를 만든다, (2) 본문은 세리프, 코드·수치는 등폭 — 도서관 카드 대장의 활자 혼합, (3) 강조색 없이 잉크 브라운 단색. 모든 다이어그램이 표·인덱스·번호 카탈로그처럼 읽힌다.",
      "diagram.language: all nodes/cells angular (radius 0px) beige cell + 0.75pt rule border, indexed by monospace number (01/02/A1...), no arrow connectors — flow from number continuity + rule lines, emphasis = ink-brown solid fill or hatch",
      "diagram.process_flow: numbered rectangular cells (ledger rows, 1.0in tall, beige fill + 0.75pt rule border), monospace index number at left (01/02..., 13pt), no arrows — number continuity + 0.04in rule line between cells, active step 0.12in ink-brown solid left bar",
      "diagram.timeline: vertical index timeline — left 0.9in monospace year column (right-aligned) + 1pt vertical rule + right serif event text, milestones 0.12in ink-brown solid square ticks, current point solid + monospace label",
      "diagram.comparison: catalog multi-column table — 0.75pt rule grid, header row 11pt serif small-caps (ink-brown solid fill + beige inverse text), numeric cells right-aligned monospace, winning item cell hatched, left index column",
      "diagram.matrix_2x2: table-form 2x2 — 0.75pt rule cross, index code per quadrant (A1/A2/B1/B2 monospace 13pt top-left), data points 0.16in ink-brown solid circle + 11pt serif label, axis labels outside 11pt small-caps",
      "diagram.hierarchy_funnel: indented index tree — TOC-style numbering (1 / 1.1 / 1.1.1), 0.35in indent per level + monospace number + serif label, thin rule between levels; funnel = width-proportional angular rect stack (hollow outline, emphasis tier hatched)",
      "diagram.kpi_card: ledger row card — angular beige cell (0.75pt rule border), monospace code (KPI-01) + 11pt serif small-caps label at left, 44pt IBM Plex Mono ink-brown KPI, 13pt monospace delta (+12.4 / -3.1, sign + weight only no color), small rule division at right",
      "diagram.toc_divider_quote: TOC = monospace number column + serif item name + dotted leader (....) + monospace page number; divider = beige bg + giant 120pt monospace section number + 26pt serif section name + 0.75pt rule; quote = beige cell + monospace code + 22pt serif italic pull-quote + source footnote"
    ],
    "avoid": [
      "컬러 강조·CSS gradient·발광 — 강조는 잉크 브라운 솔리드 또는 빗금 해치뿐.",
      "둥근 모서리, 그림자, 입체 효과 — 종이는 평면·각짐.",
      "화살표 커넥터를 다이어그램에 — 흐름은 등폭 번호 연속성과 룰 라인이 만든다.",
      "본문 전체를 등폭으로(이건 minimal-mono-note) — 본문은 세리프, 등폭은 인덱스·수치·코드에만.",
      "이모지·클립아트·스톡 아이콘, 빌드 애니메이션.",
      "슬라이드를 너무 비우기 — 빽빽한 대장 밀도가 정체성(단, 한 슬라이드 핵심 메시지는 1개).",
      "차트 회귀: 3D 차트, 컬러 채색, 격자선 과다, 범례 박스, 잘린 y축, 파이/다중 도넛, 도판 번호·출처 각주 누락."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD40",
    "title": "Warm Minimal Diagram Deck",
    "mood": "earth · minimal-sans · centered · airy · none",
    "bestFor": "design-diversity standard · warm-minimal-diagram",
    "id": "ppt-warm-minimal-diagram-deck",
    "background": [
      "Bg: `#F2EBDF`",
      "Surface: `#FBF7EF`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#F2EBDF"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#FBF7EF"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#3D3528"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#8A8170"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#C2693F"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#3D3528"
      },
      {
        "role": "rule light",
        "label": "rule light",
        "hex": "#D6CCB8"
      }
    ],
    "fonts": [
      "display: **Work Sans**, 30pt, weight 500, tracking -0.01em, fallback Arial, Pretendard",
      "kicker: **Work Sans**, 12pt, weight 600, tracking 0.08em",
      "kpi: **Work Sans**, 52pt, weight 300",
      "node_number: **Work Sans**, 16pt, weight 500",
      "body: **Work Sans**, 18pt, weight 400, leading 1.5, fallback Arial, Pretendard",
      "caption: **Work Sans**, 11pt, weight 500"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 1.0in",
      "spacing.margin_y: 0.8in",
      "spacing.grid: 12-column, centered, generous whitespace (>50% empty)",
      "slide.size: 13.33x7.5in",
      "slide.grid: centered airy, 2-4 diagram/node modules per slide, 1pt #D6CCB8 bottom rule + 11pt caption",
      "slide.chart.data: #3D3528, #C2693F",
      "slide.chart.emphasis: no color by default; bars hollow outline 1pt #3D3528; single emphasis bar terracotta #C2693F solid fill; lines 1pt ink hairline, emphasis line terracotta; max 2 series",
      "slide.chart.delta.indicator: terracotta line arrow up/down — direction not color",
      "slide.chart.bar: bar:gap = 2:3 (thin bar, generous gap), radius 0-2px, baseline 0 (no truncated y-axis)",
      "slide.chart.axis: x baseline 0.75pt #3D3528, y-axis omitted",
      "slide.chart.gridline: near-none; y max-value only 0.5pt #D6CCB8 hairline",
      "slide.chart.value_label: Work Sans 13pt 500, ink-brown (emphasis terracotta), tabular, direct on bar/vertex",
      "slide.chart.category_label: 11pt #8A8170 under bar",
      "slide.chart.legend: no box; 11pt label + thin color line swatch beside chart",
      "slide.chart.types: comparison = thin outline bar (1 emphasis terracotta fill); trend = 1pt hairline line, hollow circle markers, no area or terracotta 8% faint; share = donut thin arc <=3 slices, center 28pt light metric"
    ],
    "signature": [
      "따뜻한 샌드-아이보리 캔버스에 잉크 브라운 본문과 단일 테라코타 강조, 가는 1pt 라인 다이어그램과 넉넉한 여백의 부드럽고 절제된 따뜻한 미니멀 다이어그램 키트 덱.",
      "한눈에 알아보는 단서: (1) 모든 다이어그램 도형이 채움보다 가는 1pt 윤곽선 + 라운드 코너로 그려진다, (2) 따뜻한 샌드-아이보리 배경 + 잉크 브라운 텍스트 + 테라코타 강조 단 한 점, (3) 넉넉한 여백 — 슬라이드의 절반 이상이 빈 공간. 부드럽고 절제됐지만 또렷한 라인 다이어그램.",
      "diagram.language: all nodes/cards round corner (radius 10-14px) no-fill + 1pt #3D3528 outline, connectors 1pt curved line + thin arrowhead, step number in floating terracotta full-round circle badge (white digit 16pt), emphasis single element only terracotta fill or terracotta border",
      "diagram.process_flow: 3-5 horizontal round-corner rect nodes (0.95in tall, no-fill + 1pt ink border), 1pt curved bezier connectors + thin triangle arrowhead, step number floating terracotta circle badge top-left (0.42in, white digit), active step terracotta 1pt border + terracotta 8% faint fill",
      "diagram.timeline: thin horizontal line 1pt #3D3528, hollow circle markers 0.2in (1pt border no-fill), current point terracotta solid circle, labels alternating above/below — date 11pt #8A8170, event 16pt",
      "diagram.comparison: 2-3 columns, 1pt hairline rule dividers, 12pt terracotta small-caps header per column, rows = item + thin line check icon 1.5pt, winning item terracotta text + terracotta line icon",
      "diagram.matrix_2x2: 1pt #3D3528 cross axis (no quadrant fill), 11pt 500 axis labels at 4 ends, hollow circle data points 0.24-0.44in (1pt border no-fill, size = 3rd variable), emphasis point terracotta solid fill + 11pt label",
      "diagram.hierarchy_funnel: thin outline stacked trapezoid narrowing downward 4-5 tiers (no-fill + 1pt ink border, 0.1in gap), thin line leader + 16pt step name + 52pt light value at right, emphasis tier terracotta border",
      "diagram.kpi_card: 1pt border round card (no-fill or ivory, radius 12px), 1.5pt thin line icon + 12pt terracotta kicker top-left, 52pt Work Sans 300 light ink-brown KPI, 13pt delta (terracotta line arrow up/down — direction not color), thin donut progress ring bottom-right (1pt terracotta arc, track #D6CCB8)",
      "diagram.toc_divider_quote: TOC = floating terracotta circle number badge + 18pt item name left list + 1pt rule dividers; divider = sand bg + 12pt terracotta kicker + giant 44pt section name + thin 1pt rule; quote = large floating terracotta outline quote mark + 26pt Work Sans light pull-quote + generous whitespace"
    ],
    "avoid": [
      "도형을 솔리드로 채우기 — 채움보다 1pt 윤곽선이 기본, 채움은 강조 1요소만 테라코타.",
      "2번째 강조색 추가 — 테라코타 단 1색. 무지개·다색 차트 금지.",
      "CSS gradient·발광·베벨·강한 그림자.",
      "슬라이드를 글로·도형으로 가득 채우기 — 여백이 절반 이상, 모듈 2~4개만.",
      "굵은 보더(1.5pt 초과), 통통한 큰 라운드(반경 14px 초과).",
      "풀블리드 사진 배경(이건 warm-hospitality-deck — 이 팩은 라인 다이어그램 키트가 정체성).",
      "이모지 불릿·클립아트·스톡 아이콘, 빌드 애니메이션.",
      "차트 회귀: 3D 차트, 다색 채색, 격자선 과다, 범례 박스, 잘린 y축, 파이/다중 도넛."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD41",
    "title": "BCG 익스히빗 덱",
    "mood": "vivid-primary · minimal-sans · strict-grid · balanced · subtle",
    "bestFor": "design-diversity premium · bcg-exhibit",
    "id": "ppt-bcg-exhibit-deck",
    "background": [
      "Bg: `#FFFFFF`",
      "Surface: `#F2F4F3`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#FFFFFF"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#F2F4F3"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#1A1A1A"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#5B636E"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#177B57"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#D6DAD8"
      },
      {
        "role": "data light",
        "label": "data light",
        "hex": "#9CA3AC"
      },
      {
        "role": "data dark",
        "label": "data dark",
        "hex": "#5B636E"
      }
    ],
    "fonts": [
      "exhibit_label: **IBM Plex Mono**, 11pt, weight 500, tracking 0.06em, fallback Courier New",
      "display: **IBM Plex Sans**, 28pt, weight 700, leading 1.25, fallback Inter, Arial, Pretendard, sans-serif",
      "subhead: **IBM Plex Sans**, 16pt, weight 600",
      "body: **IBM Plex Sans**, 18pt, weight 400, leading 1.4, fallback Inter, Arial, Pretendard, sans-serif",
      "value_label: **IBM Plex Sans**, 14pt, weight 600",
      "footnote: **IBM Plex Mono**, 9pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.58in",
      "spacing.margin_y: 0.5in",
      "spacing.footer_zone: 0.7in",
      "spacing.grid: strict 12-column modular",
      "slide.size: 13.33x7.5in",
      "slide.grid: strict 12-column, Exhibit N.N label top-left mandatory, answer-first 28pt header (single takeaway), bottom 1px rule + Source:/Note: footnote line",
      "slide.chart.data_encoding: monochrome grey value steps (#9CA3AC light / #5B636E dark); single emphasis series/bar BCG green #177B57; no rainbow",
      "slide.chart.marimekko: variable-width 100% stacked, x-width = market size, segments mono value steps, key segment green, 1px white segment borders",
      "slide.chart.waterfall: start/end bars dark slate solid, increase green, decrease mono outline, 0.75pt dotted connectors, delta labels on bars",
      "slide.chart.bar: bar:gap = 3:2, radius 0px, baseline 0 (no truncated y-axis)",
      "slide.chart.axis: x-axis 0.75pt #5B636E",
      "slide.chart.gridline: none or 2-3 y major 0.5pt #D6DAD8",
      "slide.chart.value_label: IBM Plex Sans 14pt 600 tabular, direct on bar/vertex, consistent unit",
      "slide.chart.legend: no box; direct label at bar/line end",
      "slide.chart.types: comparison = vertical bar; trend = 1.5pt polyline no area fill; share = marimekko or single 100% stacked bar; value-bridge = waterfall"
    ],
    "signature": [
      "모든 슬라이드가 좌상단 `Exhibit N.N` 번호를 달고 헤더는 answer-first 결론 문장을 진술하며 하단에 Source 각주 라인이 깔리는, BCG 그린 단색 강조의 근거 중심 컨설팅 덱.",
      "한눈에 알아보는 단서: (1) 모든 본문 슬라이드 좌상단에 `Exhibit 3.2` 식 등폭 번호 라벨(그린)이 붙고, 슬라이드는 차트·표가 곧 'Exhibit'이다, (2) 헤더가 제목이 아니라 결론 — \"신규 채널이 마진을 4.2%p 끌어올린다\" 같은 완결 문장(answer-first), (3) 하단에 항상 1px 룰 + `Source:` / `Note:` 등폭 각주. 강조는 BCG 그린 한 색, 그 외 전부 무채색.",
      "diagram.language: angular cells (radius 0px) white/green-grey fill + 1px hairline border, 1.5pt thin arrow connectors #5B636E (arrowhead 6px 30deg), step number in 0.32in green outline circle, emphasis = green text or 0.1in green solid left bar",
      "diagram.process_flow: impact-bridge: 4-5 chevron/rect nodes 1.0in tall, white fill + 1px hairline, 1.5pt thin arrows, step number in 0.32in green outline circle top-left, key step 0.1in green solid left bar, as-is to-be impact label above node",
      "diagram.timeline: horizontal axis, 0.75pt base rule #5B636E, milestones 0.14in mono circles (current point green solid), date labels mono 9pt below, event labels 14pt 600 above",
      "diagram.comparison: hairline grid table, header row green-grey #F2F4F3 fill + 600, winning column green text + 0.1in green left bar, numeric cells right-aligned tabular",
      "diagram.matrix_2x2: 0.75pt hairline cross axis, quadrant label 14pt 600 top-left, variable-size data bubbles mono outline, recommended-quadrant bubble green solid, axis labels outside 11pt slate",
      "diagram.hierarchy_funnel: width-proportional rect stack (pyramid/funnel), mono value steps, key tier green, level labels right 14pt, flow via width change no arrows",
      "diagram.kpi_card: white cell + 1px hairline, 11pt slate label top-left, 40pt IBM Plex Sans 700 tabular figure, 14pt delta (green up triangle / slate down triangle), 3-4 cards even row",
      "diagram.toc_divider_quote: TOC = monospace green 01-NN number + 16pt item name + right page number, hairline between items; divider = white bg + giant 100pt green outline section number + 28pt section name; quote = green-grey cell + 0.1in green left bar + 24pt 600 pull-quote + monospace source footnote"
    ],
    "avoid": [
      "BCG 그린을 면(배경)으로 쓰지 말 것 — 강조 텍스트·데이터 핵심 계열·Exhibit 라벨에만.",
      "그라디언트·그림자·둥근 모서리·이모지·클립아트 금지.",
      "한 슬라이드에 takeaway 2개 이상 금지 — answer-first 헤더는 단 하나의 결론.",
      "`Exhibit N.N` 라벨, 하단 `Source:` 각주 라인 생략 금지 — 둘 다 정체성.",
      "헤더를 명사구 제목(\"시장 분석\")으로 쓰지 말 것 — 완결 문장 결론으로.",
      "차트 회귀: 무지개색, 3D, 격자선 과다, 범례 박스, 잘린 y축, 출처 누락.",
      "**슬라이드를 한 요소만 두고 비우기 금지.** 거대한 흰 여백에 차트 하나·박스 하나만 띄우는 것 금지 — 실제 Exhibit은 빽빽하다. 모든 본문/차트/다이어그램 슬라이드는 3개 이상 코디네이트된 모듈 + `Source:` 풋라인 + Exhibit 번호를 가진다.",
      "**캔버스 한 구석에 죽은 흰 공백을 고이게 두지 말 것 / 빈 플레이스홀더 블록 금지 / 헤더 문장 중간 단어 비대 금지 / 외곽 여백·풋라인·헤더 baseline 위치 드리프트 금지.** 외곽 여백 64px·풋라인 baseline 64px·헤더 baseline을 슬라이드 전체에서 고정한다."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD42",
    "title": "베인 리절츠 덱",
    "mood": "vivid-primary · minimal-sans · centered · balanced · none",
    "bestFor": "design-diversity premium · bain-results",
    "id": "ppt-bain-results-deck",
    "background": [
      "Bg: `#FFFFFF`",
      "Surface: `#F4F5F6`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#FFFFFF"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#F4F5F6"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#111827"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#9CA3AF"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#CC0000"
      },
      {
        "role": "data light",
        "label": "data light",
        "hex": "#D1D5DB"
      },
      {
        "role": "data dark",
        "label": "data dark",
        "hex": "#6B7280"
      }
    ],
    "fonts": [
      "metric: **Inter**, 130pt, weight 800, tracking -0.02em, fallback Helvetica Neue, Arial, Pretendard, sans-serif",
      "metric_caption: **Inter**, 16pt, weight 400",
      "display: **Inter**, 32pt, weight 700, fallback Helvetica Neue, Arial, Pretendard, sans-serif",
      "body: **Inter**, 20pt, weight 400, leading 1.45",
      "column_header: **Inter**, 14pt, weight 600, tracking 0.04em",
      "secondary_value: **Inter**, 28pt, weight 700"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.8in",
      "spacing.margin_y: 0.6in",
      "spacing.grid: centered single axis, all key elements on vertical centerline",
      "slide.size: 13.33x7.5in",
      "slide.grid: centered single axis, one giant result metric per slide top 28-40%, caption below, supporting elements lower; balanced white space",
      "slide.chart.data_encoding: monochrome value steps (#D1D5DB light / #6B7280 dark); single emphasis bar / result point Bain red solid; no rainbow",
      "slide.chart.trend: 1.5pt polyline no area fill, start point mono, result point red 0.16in circle marker + large delta label",
      "slide.chart.bar: bar:gap = 3:2, radius 0px, baseline 0 (no truncated y-axis)",
      "slide.chart.axis: x-axis 0.75pt #9CA3AF, y-axis optional omit",
      "slide.chart.gridline: none",
      "slide.chart.value_label: Inter 14pt 600 tabular direct on bar/vertex, result value 28pt red",
      "slide.chart.legend: no box; direct label",
      "slide.chart.types: comparison = vertical bar; trend = line; share = single donut (<=3 slices, key figure in center); before/after = two symmetric bars",
      "slide.chart.render: SVG precise, no div blocks, no 3D, no rainbow, no border box, no truncated y-axis",
      "slide.chart.source: bottom-left 10pt Inter #9CA3AF source/unit footnote, mandatory"
    ],
    "signature": [
      "슬라이드 중앙 상단에 거대 결과 메트릭 한 점(+34%·2.7×)이 지배하고 아래 작은 캡션이 맥락을 다는, 베인 레드 단색 강조·중앙 정렬 단일 축의 results-first 컨설팅 덱.",
      "한눈에 알아보는 단서: (1) 슬라이드마다 거대 숫자 한 점이 시선을 독점한다 — `+34%`·`2.7×`·`$1.2B` 같은 결과 메트릭이 160~200px로, 베인 레드, (2) 모든 것이 중앙 세로축 기준 정렬 — 비교조차 중앙 좌우 대칭, (3) 무채색 + 레드 단 한 점. 성과를 먼저 보여주고 설명을 나중에 다는 results-first 덱.",
      "diagram.language: flat borderless elements, centered symmetric layout, 1.5pt thin arrow connectors or red delta triangles, giant-figure + small-caption hierarchy shared across all components",
      "diagram.process_flow: 3-5 steps left-to-right, giant step number 48pt Inter 800 mono (key step red) + 14pt caption below, 1.5pt thin arrows #9CA3AF, no node box",
      "diagram.timeline: horizontal axis 0.75pt #9CA3AF, milestones 0.14in mono circles, result point red solid circle + giant metric above, date labels 12pt below",
      "diagram.comparison: two columns symmetric on centerline, before column light grey panel + mono values, after column white + red result values, headers 14pt 600 uppercase, center red delta triangle + delta value",
      "diagram.matrix_2x2: 0.75pt mono cross axis, equal-size mono dots, target-quadrant dot red, quadrant labels 14pt 600",
      "diagram.hierarchy_funnel: width-proportional rect stack centered symmetric, mono value steps, result tier red, giant figure right of each tier",
      "diagram.kpi_card: borderless card, giant 100-120pt Inter 800 red/mono figure, 16pt grey caption below, 14pt triangle delta, 2-3 cards centered even row",
      "diagram.toc_divider_quote: TOC = mono 01-NN number + 20pt item name centered; divider = white bg centered giant red section number + 32pt section name; quote = centered 28pt 700 pull-quote + 14pt source"
    ],
    "avoid": [
      "베인 레드를 면(배경)·본문 텍스트에 쓰지 말 것 — 거대 결과 숫자·델타 표시에만.",
      "한 슬라이드에 거대 메트릭 2개 이상 금지 — 초점이 분산된다. 메트릭은 슬라이드당 단 하나.",
      "그라디언트·그림자·둥근 카드·이모지·클립아트 금지.",
      "차트 색을 여러 개 쓰지 말 것 — 무채 명도 + 레드 한 점.",
      "좌측 정렬로 회귀하지 말 것 — 중앙 정렬 단일 축이 정체성.",
      "차트 회귀: 3D, 무지개색, 격자선 과다, 범례 박스, 잘린 y축, 출처 누락.",
      "**거대 숫자 하나만 두고 슬라이드 비우기 금지.** results-first ≠ 빈약. 영웅 메트릭 아래에 그것을 입증하는 모듈 3개 이상(KPI 스트립 · 추이 차트 · 근거 분해)을 반드시 채운다. 모든 본문성 슬라이드에 출처 각주 + 페이지 번호.",
      "**캔버스 한 구석에 죽은 흰 공백을 고이게 두지 말 것 / 빈 플레이스홀더 블록 금지 / 헤더 문장 중간 단어 비대 금지(거대 메트릭 외 헤더는 일관 크기) / 외곽 여백·풋라인·메트릭 baseline 위치 드리프트 금지.** 외곽 여백 64px·풋라인 baseline 56px를 슬라이드 전체에서 고정한다."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD43",
    "title": "골드만 IR 덱",
    "mood": "dark · serif-editorial · strict-grid · balanced · subtle",
    "bestFor": "design-diversity premium · goldman-ir",
    "id": "ppt-goldman-ir-deck",
    "background": [
      "Bg: `#0A1A33`",
      "Surface: `#1F3A5F`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#0A1A33"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#1F3A5F"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#E8E5DE"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#9AA6BC"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#C8A24B"
      },
      {
        "role": "data navy light",
        "label": "data navy light",
        "hex": "#3A5A85"
      }
    ],
    "fonts": [
      "display: **Source Serif 4**, 26pt, weight 600, tracking 0, fallback Georgia, 'Times New Roman', Pretendard, serif",
      "section_label: **Inter**, 11pt, weight 500, tracking 0.08em",
      "body: **Inter**, 17pt, weight 400, leading 1.4, fallback Arial, Pretendard, sans-serif",
      "table_header: **Inter**, 11pt, weight 600, tracking 0.06em",
      "table_number: **Inter**, 14pt, weight 400",
      "kpi: **Source Serif 4**, 40pt, weight 600",
      "disclaimer: **Inter**, 8pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.65in",
      "spacing.margin_y: 0.55in",
      "spacing.footer_zone: 0.75in",
      "spacing.grid: strict 12-column",
      "slide.size: 13.33x7.5in",
      "slide.grid: strict 12-column, 26pt serif heading + 0.5pt gold hairline divider, gold section label uppercase, bottom-right disclaimer + pagination footline mandatory on every slide",
      "slide.chart.data_encoding: gold #C8A24B + off-white #E8E5DE + navy value steps #1F3A5F/#3A5A85 only; single key series gold; no rainbow",
      "slide.chart.trend: 1pt polyline multi-year, key series gold, comparison series off-white, 0.1in circle markers, no/very-light gold 8% area fill",
      "slide.chart.bar: bar:gap = 3:2, radius 0px, baseline 0 (no truncated y-axis — financial distortion)",
      "slide.chart.axis: axis 0.75pt #3A5A85",
      "slide.chart.gridline: y major 2-3 ticks 0.5pt #1F3A5F only",
      "slide.chart.value_label: Inter 14pt 400 tabular right-aligned, consistent unit/currency",
      "slide.chart.table: tabular numbers right-aligned, header row 11pt uppercase + 0.5pt gold bottom rule, 1px navy row rules, total row 0.5pt gold top rule + bold",
      "slide.chart.legend: no box; direct label at line/bar end",
      "slide.chart.types: trend = multi-year line; comparison = vertical bar; share = 100% stacked bar or single donut"
    ],
    "signature": [
      "딥 네이비 전면 페이지에 메탈릭 골드 0.5pt 헤어라인이 헤더·섹션·표를 구획하고 트랜지셔널 세리프 헤딩과 등폭 재무 표가 권위를 만드는, 디스클레이머 풋라인 의무의 투자은행 IR 덱.",
      "한눈에 알아보는 단서: (1) 슬라이드 전면이 딥 네이비 `#0A1A33`, 오프화이트 텍스트 — 보수적 금융 권위, (2) 메탈릭 골드는 0.5pt 헤어라인·라벨에만 — 헤더 밑줄·섹션 구획·표 룰로 가늘게 흐르고 절대 면으로 쓰지 않는다, (3) 헤딩은 트랜지셔널 세리프, 재무 표는 등폭 우정렬. 우하단에 항상 디스클레이머 + 페이지네이션 풋라인.",
      "diagram.language: angular navy panels #1F3A5F + 0.5pt gold hairline border, 1pt thin connectors (restrained chevron arrowheads), monospace small gold step numbers, emphasis = gold hairline or gold text",
      "diagram.process_flow: 4-5 rect nodes left-to-right navy panel + 0.5pt gold hairline, 1pt thin chevrons between, monospace gold step number top-left, serif 14pt node heading + 12pt body, current step gold hairline 1pt",
      "diagram.timeline: horizontal axis 0.75pt #3A5A85, milestones 0.12in gold outline diamonds (current quarter gold solid), year/quarter labels monospace 10pt below, events serif 13pt above",
      "diagram.comparison: multi-column financial table, 0.5pt gold hairline grid, header row 11pt uppercase + gold bottom rule, numeric cells tabular right-aligned, winning segment row gold text",
      "diagram.matrix_2x2: 0.5pt gold hairline cross axis, quadrant labels serif 14pt, data points 0.14in gold outline circles (key gold solid), axis labels outside 11pt muted",
      "diagram.hierarchy_funnel: width-proportional rect stack, navy value-step fills, key tier gold hairline, level labels right serif 14pt",
      "diagram.kpi_card: navy panel + 0.5pt gold hairline, 11pt uppercase label top-left, 40pt Source Serif 4 600 off-white figure, 14pt gold YoY delta, 3-4 cards even row separated by gold hairline",
      "diagram.toc_divider_quote: TOC = monospace gold 01-NN number + serif item name + dotted leader + page number, 0.5pt gold hairline between; divider = navy full bg + giant 90pt serif gold outline section number + 26pt serif section name + 0.5pt gold rule; quote = navy panel + 0.5pt gold left hairline + 22pt serif pull-quote + monospace source"
    ],
    "avoid": [
      "골드를 큰 면·버튼 배경으로 쓰지 말 것 — 0.5pt 헤어라인·라벨·차트 핵심 계열에만(면 채움은 저렴해 보인다).",
      "헤딩에 산세리프 쓰지 말 것 — 트랜지셔널 세리프가 정체성.",
      "그라디언트·글로우·그림자·둥근 모서리·이모지 금지.",
      "우하단 디스클레이머 풋라인 생략 금지 — IR 정체성.",
      "차트 y축 자르지 말 것 — 재무 수치 왜곡. 차트 회귀: 3D, 무지개색, 격자선 과다, 범례 박스, 출처 누락.",
      "**거대한 네이비 여백에 차트/표 하나만 띄우기 금지.** 실제 IR 페이지는 빽빽하다 — 모든 본문/차트/표 슬라이드는 모듈 3개 이상(차트 + 표 + KPI 스트립 또는 주석) + 출처 각주 + 디스클레이머 풋라인.",
      "**캔버스 한 구석에 죽은 네이비 공백을 고이게 두지 말 것 / 빈 플레이스홀더 블록 금지 / 헤딩 문장 중간 단어 비대 금지 / 외곽 여백·풋라인·헤딩 baseline 위치 드리프트 금지.** 외곽 여백 64px·풋라인 baseline 64px·헤딩 baseline을 슬라이드 전체에서 고정한다."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD44",
    "title": "Every 골든 그리드 키노트",
    "mood": "mono · minimal-sans · block-grid · balanced · subtle",
    "bestFor": "design-diversity premium · golden-grid",
    "id": "ppt-every-golden-grid-keynote",
    "background": [
      "Bg: `#FAFAF8`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#FAFAF8"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#161616"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#6E6E68"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#B5A642"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#D8D8D2"
      },
      {
        "role": "data light",
        "label": "data light",
        "hex": "#C4C4BE"
      },
      {
        "role": "data dark",
        "label": "data dark",
        "hex": "#6E6E68"
      }
    ],
    "fonts": [
      "display: **Inter**, 55pt, weight 600, tracking -0.01em, leading 1.15, fallback Helvetica Neue, Pretendard, sans-serif",
      "subhead: **Inter**, 34pt, weight 600",
      "body: **Inter**, 21pt, weight 400, leading 1.5, fallback Helvetica Neue, Pretendard, sans-serif",
      "caption: **Inter**, 13pt, weight 500, tracking 0.04em",
      "kpi: **Inter**, 55pt, weight 600"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.62in",
      "spacing.margin_y: 0.5in",
      "spacing.grid: golden-ratio block grid — large:small block = 1.618:1, recursively subdivided",
      "spacing.scale: golden type scale 13/21/34/55pt (ratio 1.618)",
      "slide.size: 13.33x7.5in",
      "slide.grid: golden-ratio block grid, large:small block 1.618:1, content focus on golden-spiral point (61.8%/38.2% cross), 1px grid lines lightly exposed",
      "slide.chart.data_encoding: monochrome value steps (#C4C4BE light / #6E6E68 dark); single emphasis bar muted gold #B5A642; no rainbow",
      "slide.chart.bar: bar:gap = 1.618:1 (golden ratio), radius 0px, baseline 0 (no truncated y-axis)",
      "slide.chart.chart_block: chart area itself a golden rectangle (width:height = 1.618:1)",
      "slide.chart.axis: x-axis 0.75pt #6E6E68",
      "slide.chart.gridline: none or 2-3 y major 0.5pt #D8D8D2",
      "slide.chart.value_label: Inter 13pt 500 tabular direct on bar/vertex",
      "slide.chart.legend: no box; direct label",
      "slide.chart.types: comparison = vertical bar; trend = 1pt polyline no area fill; share = single donut (<=3 slices)",
      "slide.chart.render: SVG precise, no div blocks, no 3D, no rainbow, no border box, no truncated y-axis"
    ],
    "signature": [
      "황금비(1:1.618)로 분할된 그리드가 모든 슬라이드의 골격이고 이미지 블록·텍스트 컬럼·여백·폰트 크기까지 전부 황금 스케일을 따르는, 무채색 + muted gold 한 점의 비례 일관성 미니멀 키노트.",
      "한눈에 알아보는 단서: (1) 모든 슬라이드가 큰 블록 1.618 : 작은 블록 1로 분할되고 그 안이 다시 황금비로 재분할된다 — 균등 12열이 아니다, (2) 폰트 크기도 황금 스케일(13/21/34/55pt) — 인접 크기 비율이 1.618, (3) 무채색 캔버스에 차분한 muted gold `#B5A642` 단 한 점. 황금나선 가이드가 콘텐츠 무게중심에 맞는 비례 미감.",
      "diagram.language: angular golden-rectangle blocks (radius 0px), 1px grid-line border, 1pt thin connectors, node/gap sizes in golden ratio, emphasis = muted gold text/small rule",
      "diagram.process_flow: rect nodes left-to-right golden-rectangle, node width:gap = 1.618:1, 1px grid-line border, 1pt thin line connectors, step number 13pt gold, key step 0.08in gold left rule",
      "diagram.timeline: horizontal axis 0.75pt #6E6E68, milestone gaps grow/shrink in golden ratio, 0.12in mono circle markers (current point gold), labels 13pt",
      "diagram.comparison: column widths in golden ratio (1.618:1 or recursive golden subdivision), 1px grid-line separators, headers 13pt 500, winning column gold text",
      "diagram.matrix_2x2: asymmetric 2x2 with cross axis at golden position 61.8%, 0.75pt grid lines, data points 0.12in dots (key gold), quadrant labels 13pt",
      "diagram.hierarchy_funnel: stack with tier widths decreasing in golden ratio, mono value steps, key tier gold, level labels right 21pt",
      "diagram.kpi_card: golden-rectangle card, 1px grid-line border, 13pt label + 55pt Inter 600 figure + 13pt gold delta, card size/gap in golden ratio",
      "diagram.toc_divider_quote: TOC = 01-NN gold number + 21pt item name, row gap in golden ratio; divider = giant 55pt heading on golden-spiral focus + 13pt gold section number; quote = 34pt pull-quote in golden block + 13pt source"
    ],
    "avoid": [
      "균등 12열 그리드로 회귀 금지 — 황금비 분할이 정체성(균등 그리드는 다른 팩의 자리).",
      "요소를 황금비 무시하고 임의 크기·위치에 두지 말 것 — 비례 일관성이 정체성.",
      "그라디언트·그림자·둥근 카드·이모지·클립아트 금지.",
      "강조색 2개 이상 금지 — muted gold 한 점.",
      "차트 회귀: 3D, 무지개색, 격자선 과다, 범례 박스, 잘린 y축.",
      "**황금비 블록 하나에 요소 하나만 두고 비우기 금지.** 비례 일관성은 빈약이 아니다 — 본문 슬라이드는 황금비로 재분할된 모듈 3개 이상 + 출처 각주 + 페이지 번호.",
      "**캔버스 한 구석에 죽은 오프화이트 공백을 고이게 두지 말 것 / 빈 단색 플레이스홀더 블록 금지(이미지 블록은 실제 비주얼·톤 필드·차트를 담는다) / 헤딩 문장 중간 단어 비대 금지 / 외곽 여백·풋라인·헤딩 baseline 위치 드리프트 금지.** 외곽 여백 60px·풋라인 baseline 52px를 슬라이드 전체에서 고정한다."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD45",
    "title": "Pattern 볼드 포스터 키노트",
    "mood": "vivid-primary · heavy-display · full-bleed · airy · none",
    "bestFor": "design-diversity premium · bold-poster",
    "id": "ppt-pattern-bold-poster-keynote",
    "background": [
      "Bg: `#1F3DFF`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#1F3DFF"
      },
      {
        "role": "bg alt",
        "label": "bg alt",
        "hex": "#FF4D2E"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#FFFFFF"
      },
      {
        "role": "ink",
        "label": "ink",
        "hex": "#0E0E0E"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#FF4D2E"
      }
    ],
    "fonts": [
      "display: **Anton**, 105pt, weight 400, tracking -0.01em, leading 0.95, fallback 'Arial Black', Impact, Pretendard, sans-serif",
      "subhead: **Archivo**, 24pt, weight 600, tracking 0.02em",
      "label: **Archivo**, 13pt, weight 600, tracking 0.08em",
      "body: **Archivo**, 28pt, weight 600, leading 1.3, fallback Arial, Pretendard, sans-serif",
      "kpi: **Anton**, 240pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0in (full-bleed)",
      "spacing.safe_inset: 0.7in",
      "spacing.grid: full-bleed single solid color, giant headline poster placement",
      "slide.size: 13.33x7.5in",
      "slide.grid: full-bleed single saturated color (A blue / B vermilion, alternating per slide), giant 90-140px headline poster-placed, minimal components, generous whitespace",
      "slide.chart.data_encoding: white solid or ink outline on solid color page; 2 tones (white solid / white outline) for series; no extra color",
      "slide.chart.bar: giant few bars (3-5), bar:gap = 2:1, radius 0px, baseline 0 (no truncated y-axis)",
      "slide.chart.axis: minimal — white 0.75pt single line or none",
      "slide.chart.gridline: none",
      "slide.chart.value_label: giant direct on bar end, 28-40pt Archivo 600 white; category 14pt",
      "slide.chart.legend: no box",
      "slide.chart.types: comparison = giant 3-5 vertical bars; share = giant single donut (2-3 slices); KPI = giant number; trend = thick white polyline",
      "slide.chart.render: SVG precise, no div blocks, no 3D, no gridlines, no border box",
      "slide.chart.source: 13pt label in slide corner, single line",
      "slide.diagram.language: white solid or ink outline on solid color page, angular (radius 0px), giant and simple, flow via text hierarchy (minimal connectors), labels 13pt uppercase"
    ],
    "signature": [
      "슬라이드 전면을 채도 높은 단색 한 가지로 도배하고 그 위에 거대한 굵은 산세리프 헤드라인을 포스터처럼 앉히는, 컴포넌트 최소·정적인 키노트. 색이 페이지를 정의하고 타이포가 이미지를 대신한다.",
      "한눈에 알아보는 단서: (1) 슬라이드마다 화면 전체가 채도 높은 단색 한 가지 — 일렉트릭 블루 또는 버밀리언, 슬라이드 넘기면 색이 교대된다, (2) 거대 굵은 산세리프 헤드라인이 90~140px로 포스터처럼 좌상 또는 중앙에 앉는다, (3) 컴포넌트는 작은 라벨·페이지 번호 정도뿐 — 거대 타이포 주변에 넉넉한 여백. 정적인 포스터 시리즈.",
      "diagram.language: white solid or ink outline on solid color page, angular (radius 0px), giant and simple, flow via text hierarchy (minimal connectors), labels 13pt uppercase",
      "diagram.process_flow: giant step numbers (80-120pt Anton white/ink) 3-4 across, 14pt label below, no node box, wide gaps express flow, optional single thick white arrow",
      "diagram.timeline: single thick white horizontal line (4pt), milestones 0.2in white solid circles, large 24pt date labels, minimal markers",
      "diagram.comparison: slide split into two color fields (left blue / right vermilion), each with giant headline + giant number, color boundary is the divider",
      "diagram.matrix_2x2: white 0.75pt cross axis on color page, giant 28pt quadrant labels, data points 0.2in white solid circles, minimal decoration",
      "diagram.hierarchy_funnel: giant white rect stack 3-4 tiers width-proportional, giant 28pt label per tier, white solid/outline alternating",
      "diagram.kpi_card: no card box — giant 200-280px Anton number on color page + 24pt label below, one KPI per slide",
      "diagram.toc_divider_quote: TOC = giant 01-NN Anton numbers stacked + 24pt item name; divider = color-field switch + centered giant headline; quote = giant 60-80pt Anton pull-quote white + 13pt source label"
    ],
    "avoid": [
      "한 슬라이드에 2색 이상 면 금지(좌우 분할 비교 슬라이드 예외) — 페이지 = 단색 1가지가 정체성.",
      "그라디언트·사진·이모지·클립아트 금지.",
      "헤드라인을 작게 쓰지 말 것 — 90~140px 거대해야 한다.",
      "흐린 파스텔·무채색 면으로 회귀 금지 — 채도 높은 원색만.",
      "차트 회귀: 3D, 격자선, 범례 박스, 작은 차트, 추가 색.",
      "**데이터 슬라이드(본문·KPI·차트·비교)를 거대 숫자/차트 하나만 두고 비우기 금지.** 포스터 미감은 표지·간지·클로징에서 유지하되, 데이터 슬라이드는 흰 윤곽 모듈 3개 이상으로 단색 면을 채운다 — \"포스터지만 빈약하지 않다\". 모든 데이터 슬라이드에 출처 라벨 + 페이지 번호.",
      "**헤드라인 문장 중간 단어 비대 절대 금지** — 한 줄 안에서 한 단어만 3배 크게 부풀리면 사고처럼 보인다. 스케일 변화는 줄 단위로만, 강조는 굵기·색 반전·룰로.",
      "**캔버스 한 구석에 죽은 공백을 고이게 두지 말 것** — 데이터 슬라이드는 흰 윤곽 모듈로 단색 면을 고르게 채우고, 포스터 슬라이드의 여백도 한쪽에 몰지 않고 분산한다.",
      "**빈 흰 윤곽 플레이스홀더 모듈 금지** — 모든 모듈은 실제 숫자·차트·표·텍스트를 담는다.",
      "**여백·풋라인·페이지 번호 위치 드리프트 금지** — 안전 여백 64px·풋라인 baseline 48px를 슬라이드 전체에서 고정."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD46",
    "title": "Altezza 울트라모던 키노트",
    "mood": "dark · heavy-display · asymmetric · dense · snappy",
    "bestFor": "design-diversity premium · ultramodern-clip",
    "id": "ppt-altezza-ultramodern-keynote",
    "background": [
      "Bg: `#13141A`",
      "Surface: `#3A3C46`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#13141A"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#3A3C46"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#F4F4F6"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#9A9CA6"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#2EE6A6"
      },
      {
        "role": "data light",
        "label": "data light",
        "hex": "#5A5C66"
      },
      {
        "role": "data dark",
        "label": "data dark",
        "hex": "#9A9CA6"
      }
    ],
    "fonts": [
      "display: **Archivo**, 72pt, weight 800, tracking -0.02em, leading 1.0, fallback Inter, Helvetica Neue, Pretendard, sans-serif",
      "heading: **Archivo**, 32pt, weight 800, tracking -0.01em",
      "label: **Archivo**, 12pt, weight 300, tracking 0.12em",
      "body: **Archivo**, 17pt, weight 400, leading 1.4, fallback Inter, Pretendard, sans-serif",
      "kpi: **Archivo**, 60pt, weight 800"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.55in",
      "spacing.margin_y: 0.45in",
      "spacing.grid: asymmetric dense, 12-column crossed by 12-18deg diagonal split lines",
      "slide.size: 13.33x7.5in",
      "slide.grid: asymmetric dense, slide split by 12-18deg diagonal into 2-3 zones (clipped photo/color field + content), content snapped to diagonal edges",
      "slide.chart.data_encoding: panel-grey value steps (#5A5C66 light / #9A9CA6 dark); single emphasis bar electric mint #2EE6A6; no rainbow",
      "slide.chart.bar: bar:gap = 3:2, radius 0px, baseline 0 (no truncated y-axis); option to clip emphasis bar top at 12-18deg diagonal",
      "slide.chart.axis: x-axis 0.75pt #9A9CA6",
      "slide.chart.gridline: none or 2-3 y major 0.5pt #3A3C46",
      "slide.chart.value_label: Archivo 14pt 600 tabular #F4F4F6 direct on bar/vertex",
      "slide.chart.legend: no box; direct label",
      "slide.chart.types: comparison = vertical bar; trend = 2pt mint polyline no/diagonal-clipped 10% area fill; share = single donut (<=3 slices)",
      "slide.chart.render: SVG precise, no div blocks, no 3D, no rainbow, no border box, no truncated y-axis, no glow",
      "slide.chart.source: bottom-left 11pt Archivo #9A9CA6 source/unit footnote",
      "slide.diagram.language: angular panels (radius 0px) clipped at 12-18deg diagonal edges, 2pt angular line connectors (chevron arrowheads), diagonal-clipped small mint step badges, emphasis = mint text / 1.5pt mint diagonal edge"
    ],
    "signature": [
      "사진·컬러 면을 각진 사선 클립 마스크(12~18°)로 잘라 동적 긴장을 만들고 거대 산세리프 헤드라인과 얇은 라벨이 강하게 대비하는, near-black + electric mint 한 점의 빽빽한 다크 에이전시 키노트.",
      "한눈에 알아보는 단서: (1) 사진·컬러 면이 직사각형이 아니라 12~18° 각진 사선으로 잘려 있다 — clip-path 사선 마스크가 형태 정체성, (2) 거대 산세리프 헤드라인(800)과 얇은 라벨(300)이 같은 슬라이드에서 강하게 대비, (3) near-black 배경 + electric mint 한 점, 콘텐츠가 사선 분할선 기준으로 빽빽이 맞물린다. 둥근 모서리·발광 없음.",
      "diagram.language: angular panels (radius 0px) clipped at 12-18deg diagonal edges, 2pt angular line connectors (chevron arrowheads), diagonal-clipped small mint step badges, emphasis = mint text / 1.5pt mint diagonal edge",
      "diagram.process_flow: 4-5 diagonal parallelogram nodes (12-18deg skew) panel fill, 2pt angular chevrons between, small mint step badge (diagonal clip), current step 1.5pt mint diagonal edge",
      "diagram.timeline: axis skewed 12-18deg, milestones 0.14in angular diamonds (current point mint solid), date labels 12pt label style",
      "diagram.comparison: slide split by 12-18deg diagonal into 2-3 zones, each with heading + body + figures, diagonal split line as column divider with 1.5pt mint edge",
      "diagram.matrix_2x2: 2x2 with axes skewed 8-12deg, 0.75pt panel cross axis, data points 0.16in angular rhombus (key mint solid), quadrant labels 14pt",
      "diagram.hierarchy_funnel: diagonal-clipped width-proportional stack, each tier a 12-18deg parallelogram, panel value steps, key tier mint, level labels right",
      "diagram.kpi_card: diagonal-clipped panel card (one corner clipped 12-18deg), 12pt label-style label + 60pt Archivo 800 figure + 14pt mint delta, 3-4 cards with interlocking diagonal edges",
      "diagram.toc_divider_quote: TOC = diagonal-clip mint number badge + 17pt item name; divider = diagonal-clipped giant color/photo field + 72pt headline; quote = diagonal-clip panel + 1.5pt mint diagonal edge + 28pt 800 pull-quote + 12pt source"
    ],
    "avoid": [
      "둥근 모서리·둥근 클립 금지 — 각진 사선 12~18°만.",
      "글로우·라디얼 그라디언트 금지(다른 다크 SaaS 팩의 자리).",
      "사진을 직사각형 그대로 쓰지 말 것 — 사선 clip-path 마스크 필수.",
      "electric mint를 큰 면으로 도배하지 말 것 — 강조 텍스트·사선 엣지·차트 1계열에만.",
      "이모지·클립아트 금지. 대칭 중앙 정렬로 회귀 금지 — 비대칭이 정체성.",
      "차트 회귀: 3D, 무지개색, 격자선 과다, 범례 박스, 잘린 y축, 출처 누락.",
      "**거대 사선 면에 헤드라인 하나만 두고 비우기 금지(간지 예외).** dense가 정체성 — 본문/차트/KPI/비교 슬라이드는 사선 모듈 3개 이상으로 빽빽이 채운다. 모든 본문성 슬라이드에 출처 각주 + 페이지 번호.",
      "**캔버스 한 구석에 죽은 near-black 공백을 고이게 두지 말 것 / 빈 단색 플레이스홀더 클립 면 금지(사선 면은 실제 사진·톤 필드·차트를 담는다) / 헤드라인 문장 중간 단어 비대 금지 / 외곽 여백·풋라인·헤딩 baseline 위치 드리프트 금지.** 외곽 여백 56px·풋라인 baseline 48px를 슬라이드 전체에서 고정한다."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD47",
    "title": "Kula 미니멀리스트 키노트",
    "mood": "earth · minimal-sans · block-grid · airy · subtle",
    "bestFor": "design-diversity premium · kula-lookbook",
    "id": "ppt-kula-minimalist-keynote",
    "background": [
      "Bg: `#EDE8E0`",
      "Surface: `#FFFFFF`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#EDE8E0"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#FFFFFF"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#4A4540"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#8C857C"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#B79B86"
      },
      {
        "role": "data light",
        "label": "data light",
        "hex": "#D3CABF"
      },
      {
        "role": "data dark",
        "label": "data dark",
        "hex": "#8C857C"
      }
    ],
    "fonts": [
      "display: **Plus Jakarta Sans**, 34pt, weight 600, tracking -0.01em, leading 1.2, fallback Hanken Grotesk, Helvetica Neue, Pretendard, sans-serif",
      "subhead: **Plus Jakarta Sans**, 20pt, weight 400",
      "body: **Plus Jakarta Sans**, 18pt, weight 400, leading 1.5, fallback Hanken Grotesk, Pretendard, sans-serif",
      "caption: **Plus Jakarta Sans**, 12pt, weight 500, tracking 0.04em",
      "label: **Plus Jakarta Sans**, 11pt, weight 600, tracking 0.08em",
      "kpi: **Plus Jakarta Sans**, 44pt, weight 600"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.75in",
      "spacing.margin_y: 0.6in",
      "spacing.grid: modular block grid, 12-column grouped into large blocks for images/text",
      "slide.size: 13.33x7.5in",
      "slide.grid: modular block grid, rounded (16-24px) image frames arranged gallery-style, generous whitespace, catalog-style 12pt captions",
      "slide.chart.data_encoding: dusty neutral value steps (#D3CABF light / #8C857C dark); single emphasis bar dusty clay #B79B86; no rainbow",
      "slide.chart.bar: bar:gap = 3:2, radius 4px (slight round, soft lookbook tone), baseline 0 (no truncated y-axis)",
      "slide.chart.axis: x-axis 0.75pt #8C857C",
      "slide.chart.gridline: none or 2-3 y major 0.5pt #D3CABF",
      "slide.chart.value_label: Plus Jakarta Sans 14pt 600 tabular direct on bar/vertex",
      "slide.chart.legend: no box; direct label",
      "slide.chart.types: comparison = vertical bar; trend = 1.5pt clay polyline no area fill; share = single donut (<=3 slices, rounded tone)",
      "slide.chart.render: SVG precise, no div blocks, no 3D, no rainbow, no border box, no truncated y-axis",
      "slide.chart.source: bottom-left 12pt Plus Jakarta Sans #8C857C source/unit footnote",
      "slide.diagram.language: rounded (12-16px) white card nodes, no border or very subtle shadow, 1.5pt soft straight/curve connectors, small clay circle step numbers, emphasis = dusty clay text / small rule"
    ],
    "signature": [
      "따뜻한 샌드 배경에 둥근 모서리(16~24px) 이미지 프레임이 모듈러 블록 그리드로 정렬되고 작은 산세리프 캡션이 도록처럼 단정한, 더스티 뉴트럴 톤·dusty clay 한 점의 차분한 룩북 키노트.",
      "한눈에 알아보는 단서: (1) 따뜻한 샌드 `#EDE8E0` 배경에 둥근 모서리(16~24px) 이미지 프레임 — 이미지가 모듈러 블록 그리드로 갤러리처럼 정렬, (2) 채도 낮은 더스티 뉴트럴 색만 — 채도 높은 색 일절 없음, (3) 작은 산세리프 캡션이 미술 도록처럼 단정하고 여백이 넓다. 부드럽고 차분한 룩북.",
      "diagram.language: rounded (12-16px) white card nodes, no border or very subtle shadow, 1.5pt soft straight/curve connectors, small clay circle step numbers, emphasis = dusty clay text / small rule",
      "diagram.process_flow: 4-5 rounded card nodes (12-16px radius, white fill), 1.5pt soft straight connectors (small arrowhead), 0.3in clay circle step number top-left, key step 0.08in clay left rule",
      "diagram.timeline: horizontal axis 0.75pt #8C857C, milestones 0.12in dusty neutral circles (current point clay solid), date labels 12pt catalog caption style",
      "diagram.comparison: 2-3 rounded card columns (16px radius, white fill), 0.5in gap, no border, headers 11pt uppercase clay, winning column 0.08in clay top rule",
      "diagram.matrix_2x2: 0.75pt dusty cross axis, quadrant labels 12pt catalog caption, data points 0.14in dusty circles (key clay solid)",
      "diagram.hierarchy_funnel: rounded rect stack (12px radius) width-proportional, dusty value steps, key tier clay, level labels right 18pt",
      "diagram.kpi_card: rounded white card (16px radius), 11pt uppercase clay label + 44pt Plus Jakarta Sans 600 warm-ink figure + 14pt delta, 3-4 cards even row wide gaps",
      "diagram.toc_divider_quote: TOC = small clay circle number + 18pt item name, wide row gaps; divider = sand bg + one rounded image frame + 34pt section name + 11pt clay section number; quote = rounded white card + 24pt 600 pull-quote + 12pt catalog source caption"
    ],
    "avoid": [
      "채도 높은 색 금지 — 더스티 뉴트럴만(채도 높은 색은 다른 팩의 자리).",
      "풀블리드 사진 금지 — 이미지는 둥근 모서리 프레임 안에(풀블리드는 warm-hospitality의 자리).",
      "짙은 그림자·글로우·그라디언트 금지(그림자는 아주 옅게만).",
      "강조색 2개 이상 금지 — dusty clay 한 톤.",
      "차트 회귀: 3D, 무지개색, 격자선 과다, 범례 박스, 잘린 y축.",
      "**거대한 샌드 여백에 카드/차트 하나만 두고 비우기 금지(표지·간지·갤러리 예외).** 절제 ≠ 빈약 — 본문/비교/차트 슬라이드는 둥근 카드 모듈 3개 이상으로 채운다. 모든 본문성 슬라이드에 도록 출처 캡션 + 페이지 번호.",
      "**빈 플레이스홀더 블록 절대 금지** — 우측에 거대한 빈 단색 베이지/샌드 라운드 블록을 두면 누락 에셋·미완성처럼 보인다. 이미지/비주얼 프레임은 반드시 실제 사진·듀오톤 톤 필드·차트·다이어그램을 담는다.",
      "**캔버스 한 구석에 죽은 샌드 공백을 고이게 두지 말 것** — 여백은 모듈 사이로 분산한다.",
      "**헤드라인 문장 중간 단어 비대 금지** — 헤딩은 일관 크기, 강조는 clay 색·굵기로.",
      "**여백·풋라인·타이틀 baseline 위치 드리프트 금지** — 안전 여백 72px·풋라인 baseline 56px를 슬라이드 전체에서 고정."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD48",
    "title": "Epoch 프리미엄 키노트",
    "mood": "dark · mixed · centered · balanced · subtle",
    "bestFor": "design-diversity premium · epoch-corporate",
    "id": "ppt-epoch-premium-keynote",
    "background": [
      "Bg: `#1A1E26`",
      "Surface: `#2C313B`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#1A1E26"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#2C313B"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#E6E8EC"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#9298A4"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#7FA9C9"
      },
      {
        "role": "data light",
        "label": "data light",
        "hex": "#4A5160"
      },
      {
        "role": "data dark",
        "label": "data dark",
        "hex": "#9298A4"
      }
    ],
    "fonts": [
      "display: **Newsreader**, 30pt, weight 500, tracking 0, leading 1.2, fallback Georgia, Pretendard, serif",
      "section_label: **Inter**, 11pt, weight 500, tracking 0.08em",
      "body: **Inter**, 17pt, weight 400, leading 1.45, fallback Helvetica Neue, Pretendard, sans-serif",
      "caption: **Inter**, 12pt, weight 400",
      "kpi: **Newsreader**, 42pt, weight 500",
      "table_number: **Inter**, 14pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.7in",
      "spacing.margin_y: 0.55in",
      "spacing.grid: centered axis, 12-column, 1pt rule lines partition content",
      "slide.size: 13.33x7.5in",
      "slide.grid: centered axis, 11pt cool-steel section label + 30pt serif heading + 1pt rule divider, 1pt rule lines partition sections/tables/cards",
      "slide.chart.data_encoding: monochrome slate value steps (#4A5160 light / #9298A4 dark); single emphasis bar cool steel #7FA9C9; no rainbow",
      "slide.chart.bar: bar:gap = 3:2, radius 0px, baseline 0 (no truncated y-axis)",
      "slide.chart.axis: x-axis 0.75pt #9298A4",
      "slide.chart.gridline: y major 2-3 ticks 0.5pt #2C313B only",
      "slide.chart.value_label: Inter 14pt 400 tabular #E6E8EC direct on bar/vertex",
      "slide.chart.legend: no box; direct label",
      "slide.chart.types: comparison = vertical bar; trend = 1pt steel polyline no/8% steel area fill; share = single donut (<=3 slices)",
      "slide.chart.render: SVG precise, no div blocks, no 3D, no rainbow, no border box, no truncated y-axis, no glow",
      "slide.chart.source: bottom-left 12pt Inter #9298A4 source/unit footnote",
      "slide.diagram.language: angular slate panels #2C313B (radius 0px), 1pt rule-line border, 1pt thin connectors (small chevron arrowheads), small steel step numbers, emphasis = cool steel text / 1pt steel rule"
    ],
    "signature": [
      "차분한 딥 슬레이트 배경에 가는 세리프 헤딩과 산세리프 본문을 혼합하고 1pt 룰 라인이 콘텐츠를 정연히 구획하는, cool steel 한 점의 차갑고 정제된 하이엔드 코퍼레이트 키노트.",
      "한눈에 알아보는 단서: (1) 딥 슬레이트 `#1A1E26` 배경 — 따뜻하지 않은 차가운 다크, (2) 가는 트랜지셔널 세리프 헤딩 + 산세리프 본문의 절제된 혼합 타이포, (3) 1pt 룰 라인이 헤더·섹션·콘텐츠를 정연히 구획하고 cool steel `#7FA9C9`이 차트·라벨에 차갑게 한 점. heritage 럭셔리와 달리 따뜻함 없이 정제된 코퍼레이트.",
      "diagram.language: angular slate panels #2C313B (radius 0px), 1pt rule-line border, 1pt thin connectors (small chevron arrowheads), small steel step numbers, emphasis = cool steel text / 1pt steel rule",
      "diagram.process_flow: 4-5 rect nodes left-to-right slate panel + 1pt rule border, 1pt thin chevrons between, 11pt steel step number top-left, current step 1pt steel left rule",
      "diagram.timeline: horizontal axis 0.75pt #9298A4, milestones 0.12in steel outline circles (current point steel solid), date labels 12pt below, events serif 14pt above",
      "diagram.comparison: 1pt rule-line grid columns (2-3), header row 11pt uppercase + 1pt steel bottom rule, numeric cells tabular right-aligned, winning column header steel text",
      "diagram.matrix_2x2: 1pt rule-line cross axis, quadrant labels serif 14pt, data points 0.14in steel outline circles (key steel solid), axis labels outside 11pt muted",
      "diagram.hierarchy_funnel: width-proportional rect stack, slate value steps, key tier steel rule, level labels right serif 14pt",
      "diagram.kpi_card: slate panel + 1pt rule border, 11pt uppercase label + 42pt Newsreader 500 figure + 14pt steel delta, 3-4 cards even row separated by 1pt rule",
      "diagram.toc_divider_quote: TOC = 01-NN steel number + serif item name + 1pt rule divider + page number; divider = slate full bg + centered giant 80pt serif steel outline section number + 30pt serif section name + 1pt steel rule; quote = slate panel + 1pt steel rule + 24pt serif pull-quote + 12pt source"
    ],
    "avoid": [
      "골드·따뜻한 강조 금지 — 차가운 cool steel만(골드는 다른 다크 IR·heritage 팩의 자리).",
      "글로우·라디얼 그라디언트 금지(SaaS 다크 팩의 자리).",
      "둥근 카드·이모지·클립아트 금지. 룰 라인을 두껍게 쓰지 말 것 — 1pt 유지.",
      "헤딩에 산세리프만 쓰지 말 것 — 세리프 헤딩 + 산세리프 본문 혼합이 정체성.",
      "차트 회귀: 3D, 무지개색, 격자선 과다, 범례 박스, 잘린 y축, 출처 누락.",
      "**거대 슬레이트 여백에 차트/표 하나만 두고 비우기 금지.** 정연함 ≠ 빈약 — 본문/차트/비교/타임라인 슬라이드는 1pt 룰로 구획된 모듈 3개 이상 + 출처 각주 + 페이지 번호.",
      "**캔버스 한 구석에 죽은 슬레이트 공백을 고이게 두지 말 것 / 빈 플레이스홀더 패널 금지 / 헤딩 문장 중간 단어 비대 금지 / 외곽 여백·풋라인·헤딩 baseline 위치 드리프트 금지.** 외곽 여백 64px·풋라인 baseline 56px·헤딩 baseline을 슬라이드 전체에서 고정한다."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD49",
    "title": "Folio 포트폴리오 키노트",
    "mood": "vivid-primary · minimal-sans · asymmetric · balanced · playful",
    "bestFor": "design-diversity premium · folio-portfolio",
    "id": "ppt-folio-portfolio-keynote",
    "background": [
      "Bg: `#F7F7F5`",
      "Surface: `#FFFFFF`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#F7F7F5"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#FFFFFF"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#141414"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#9A9A9A"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#FF5C35"
      },
      {
        "role": "data light",
        "label": "data light",
        "hex": "#CFCFCB"
      },
      {
        "role": "data dark",
        "label": "data dark",
        "hex": "#141414"
      }
    ],
    "fonts": [
      "index_number: **Space Grotesk**, 110pt, weight 700, tracking -0.03em, fallback General Sans, Inter, Pretendard, sans-serif",
      "display: **Space Grotesk**, 36pt, weight 700, tracking -0.01em, leading 1.15, fallback General Sans, Inter, Pretendard, sans-serif",
      "case_caption: **Space Grotesk**, 18pt, weight 400, leading 1.45",
      "tag: **Space Grotesk**, 12pt, weight 500, tracking 0.06em",
      "body: **Space Grotesk**, 18pt, weight 400, leading 1.45",
      "kpi: **Space Grotesk**, 56pt, weight 700"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.65in",
      "spacing.margin_y: 0.55in",
      "spacing.grid: asymmetric, 12-column split 7:5 or 5:7, large image one side / giant index number + caption other",
      "slide.size: 13.33x7.5in",
      "slide.grid: asymmetric 7:5 or 5:7 split, large rectangular artwork one side, giant index number (120-160px) + title + case caption other, edge-cropped numbers allowed",
      "slide.chart.data_encoding: monochrome value steps (#CFCFCB light / #141414 dark); single emphasis bar coral #FF5C35; no rainbow",
      "slide.chart.bar: bar:gap = 3:2, radius 0px, baseline 0 (no truncated y-axis)",
      "slide.chart.axis: x-axis 0.75pt #141414",
      "slide.chart.gridline: none or 2-3 y major 0.5pt #CFCFCB",
      "slide.chart.value_label: Space Grotesk 14pt 600 tabular direct on bar/vertex",
      "slide.chart.legend: no box; direct label",
      "slide.chart.types: comparison = vertical bar; trend = 2pt coral polyline no area fill; share = single donut (<=3 slices)",
      "slide.chart.render: SVG precise, no div blocks, no 3D, no rainbow, no border box, no truncated y-axis",
      "slide.chart.source: bottom-left 12pt Space Grotesk #9A9A9A source/unit footnote",
      "slide.diagram.language: angular white/off-white elements (radius 0px), giant index numbers index steps/items, 2pt thin line connectors, emphasis = coral text / small rule"
    ],
    "signature": [
      "슬라이드 한쪽을 큰 직사각 작품 이미지가 채우고 반대쪽에 거대 인덱스 번호(01·02… 120~160px)와 짧은 케이스 캡션이 비대칭으로 앉는, coral 한 점의 크리에이티브 포트폴리오 케이스 스터디 키노트.",
      "한눈에 알아보는 단서: (1) 거대 인덱스 번호(`01`·`02`… Space Grotesk 700, 120~160px)가 모든 케이스 슬라이드의 형태 정체성 — 작품 인덱스, (2) 슬라이드 한쪽은 큰 직사각 작품 이미지 한 점, 반대쪽은 거대 번호 + 짧은 케이스 캡션의 비대칭 배치, (3) 밝은 오프화이트 배경에 coral `#FF5C35` 한 점. 케이스 스터디처럼 흐른다.",
      "diagram.language: angular white/off-white elements (radius 0px), giant index numbers index steps/items, 2pt thin line connectors, emphasis = coral text / small rule",
      "diagram.process_flow: 3-5 giant index numbers (80-100px Space Grotesk 700) + 18pt step label + 12pt caption, no node box, 2pt thin line connectors, key step number coral",
      "diagram.timeline: horizontal axis 0.75pt #141414, milestones giant index number label + 0.14in mono circle (current point coral solid), date labels 12pt uppercase",
      "diagram.comparison: white card columns (angular, no border), giant index number + 12pt uppercase tag per column header, winning column 0.08in coral top rule",
      "diagram.matrix_2x2: 0.75pt mono cross axis, data points 0.16in mono circles (key coral solid) + small index number beside, quadrant labels 12pt uppercase",
      "diagram.hierarchy_funnel: width-proportional rect stack, mono value steps, key tier coral, index number + 18pt label per tier",
      "diagram.kpi_card: white card (angular, no border), giant index number or 12pt tag top-left + 56pt Space Grotesk 700 figure + 14pt coral delta, 3-4 cards asymmetric row",
      "diagram.toc_divider_quote: TOC = giant 01-NN index numbers stacked + 18pt case name; divider = off-white bg + edge-cropped giant index number + 36pt section name; quote = white card + giant index number + 26pt 700 pull-quote + 12pt source tag"
    ],
    "avoid": [
      "둥근 이미지 프레임 금지 — 직사각 이미지(둥근 프레임은 다른 룩북 팩의 자리).",
      "그라디언트·그림자·이모지·클립아트 금지.",
      "인덱스 번호를 작게 쓰지 말 것 — 120~160px 거대해야 한다(형태 정체성).",
      "coral을 큰 면으로 도배하지 말 것 — 인덱스 번호·작은 태그·룰에만.",
      "강조색 2개 이상 금지. 대칭 중앙 정렬로 회귀 금지 — 비대칭이 정체성.",
      "차트 회귀: 3D, 무지개색, 격자선 과다, 범례 박스, 잘린 y축.",
      "**거대 인덱스 번호 하나만 두고 슬라이드 비우기 금지(간지 예외).** 케이스 스터디는 번호 + 이미지 + 모듈 3개 이상으로 채운다. 모든 본문성 슬라이드에 출처 태그 + 페이지 번호.",
      "**캔버스 한 구석에 죽은 오프화이트 공백을 고이게 두지 말 것 / 빈 단색 플레이스홀더 이미지 블록 금지(이미지 블록은 실제 작품 사진·톤 필드·차트를 담는다) / 케이스 제목 문장 중간 단어 비대 금지(거대 인덱스 번호 외 제목은 일관 크기) / 외곽 여백·풋라인·헤딩 baseline 위치 드리프트 금지.** 외곽 여백 64px·풋라인 baseline 52px를 슬라이드 전체에서 고정한다."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD50",
    "title": "다크 럭셔리 키노트",
    "mood": "dark · serif-editorial · full-bleed · airy · subtle",
    "bestFor": "design-diversity premium · dark-luxury-keynote",
    "id": "ppt-dark-luxury-keynote",
    "background": [
      "Bg: `#0B0B0C`",
      "Surface: `#1A1A1C`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#0B0B0C"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#1A1A1C"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#EDEAE3"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#8E8A82"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#C9A36A"
      },
      {
        "role": "data light",
        "label": "data light",
        "hex": "#3A3A3C"
      },
      {
        "role": "data dark",
        "label": "data dark",
        "hex": "#8E8A82"
      }
    ],
    "fonts": [
      "display: **Cormorant Garamond**, 54pt, weight 500, tracking 0.12em, leading 1.1, fallback 'Times New Roman', Pretendard, serif",
      "heading: **Cormorant Garamond**, 34pt, weight 500, tracking 0.08em",
      "body: **Cormorant Garamond**, 20pt, weight 400, leading 1.5, fallback 'Times New Roman', Pretendard, serif",
      "caption: **Inter**, 11pt, weight 300, tracking 0.2em, fallback Helvetica Neue, sans-serif",
      "kpi: **Cormorant Garamond**, 52pt, weight 500, tracking 0.04em"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0in (full-bleed)",
      "spacing.safe_inset: 0.8in",
      "spacing.grid: full-bleed photo one side or whole, text cluster framed by gold hairline",
      "slide.size: 13.33x7.5in",
      "slide.grid: full-bleed product/lifestyle photo one side (half to 2/3) or whole, text cluster framed by 0.5pt gold hairline, generous whitespace, very few words per slide",
      "slide.chart.data_encoding: monochrome value steps (#3A3A3C light / #8E8A82 dark); single emphasis bar champagne gold #C9A36A solid or gold hairline outline; no rainbow",
      "slide.chart.bar: bar:gap = 1:1 (wide luxury gaps), radius 0px, baseline 0 (no truncated y-axis); bars hairline outline or mono solid, emphasis gold",
      "slide.chart.trend: 0.75pt gold hairline polyline, no area fill, 0.1in gold outline circle markers",
      "slide.chart.axis: axis 0.5pt #3A3A3C or omitted",
      "slide.chart.gridline: none",
      "slide.chart.value_label: Inter 13pt 300 tracking 0.1em #EDEAE3 direct on bar/vertex",
      "slide.chart.legend: no box; direct label",
      "slide.chart.types: comparison = wide-gap vertical bar; trend = gold hairline line; share = single donut (<=3 slices, 0.75pt hairline dividers)",
      "slide.chart.render: SVG precise, no div blocks, no 3D, no rainbow, no gridlines, no border box, no truncated y-axis, no glow",
      "slide.chart.source: bottom-left 10pt Inter 300 #8E8A82 source/unit footnote"
    ],
    "signature": [
      "거의 순흑 무대에 풀블리드 제품/라이프스타일 사진이 떠 있고 샴페인 골드 0.5pt 헤어라인 프레임이 사진·텍스트 군집을 절제되게 두르며 넓은 자간의 가는 디스플레이 세리프 라벨이 럭셔리를 만드는 다크 키노트.",
      "한눈에 알아보는 단서: (1) 거의 순흑 `#0B0B0C` 무대에 풀블리드 제품/라이프스타일 사진이 한쪽 또는 전면을 채운다, (2) 샴페인 골드 0.5pt 헤어라인이 사진·텍스트 군집을 절제된 프레임으로 두른다 — 절대 면으로 안 쓴다, (3) 가는 디스플레이 세리프(Cormorant Garamond) 라벨이 넓은 자간(0.12em)으로 럭셔리 카탈로그처럼 앉는다. 넓은 여백.",
      "diagram.language: angular nodes (radius 0px) 0.5pt gold hairline frame (no fill or panel #1A1A1C), 0.5pt thin gold hairline connectors, wide-tracked display-serif step numbers, emphasis = gold hairline or gold text",
      "diagram.process_flow: 4-5 rect nodes left-to-right 0.5pt gold hairline frame (no fill), 0.5pt thin gold hairline connectors (small arrowhead), wide-tracked serif step number, current step gold hairline 1pt",
      "diagram.timeline: horizontal axis 0.5pt gold hairline, milestones 0.1in gold outline circles (current point gold solid), date labels 11pt caption wide-tracked",
      "diagram.comparison: 0.5pt gold hairline grid columns, header 11pt uppercase gold caption, full-bleed product photo + serif body per column, winning column 0.5pt to 1pt gold hairline",
      "diagram.matrix_2x2: 0.5pt gold hairline cross axis, quadrant labels serif 20pt wide-tracked, data points 0.12in gold outline circles (key gold solid)",
      "diagram.hierarchy_funnel: width-proportional rect stack 0.5pt gold hairline frame, key tier gold hairline 1pt, level labels right serif 20pt",
      "diagram.kpi_card: 0.5pt gold hairline frame card (no fill or panel), 11pt uppercase gold caption label + 52pt Cormorant Garamond 500 figure + 13pt delta, 3-4 cards wide gaps",
      "diagram.toc_divider_quote: TOC = wide-tracked serif 01-NN gold number + 20pt serif item name + 0.5pt gold hairline divider; divider = full-bleed dark photo + 0.5pt gold hairline frame + centered 48pt serif section name + 11pt gold caption number; quote = 0.5pt gold hairline frame + 28pt serif pull-quote + 11pt source caption"
    ],
    "avoid": [
      "골드를 큰 면·버튼 배경으로 쓰지 말 것 — 0.5pt 헤어라인 프레임·라벨·차트 핵심 계열에만.",
      "산세리프 헤딩 금지 — 디스플레이 세리프(Cormorant Garamond)가 정체성(시네마틱 다크 팩과의 분리선).",
      "글로우·그라디언트·그림자·둥근 모서리·이모지 금지.",
      "사진 없이 텍스트만으로 채우지 말 것 — 풀블리드 비주얼이 정체성.",
      "자간을 좁게 쓰지 말 것 — 라벨은 넓은 자간(0.12~0.2em)이 럭셔리.",
      "차트 회귀: 3D, 무지개색, 격자선, 범례 박스, 잘린 y축, 출처 누락.",
      "**콘텐츠 슬라이드(본문·비교·차트)를 사진 하나 + 텍스트 한 줄로 비우기 금지.** 에디토리얼 미감은 표지·간지·클로징에서 유지하되, 콘텐츠 슬라이드는 골드 헤어라인 모듈 3개 이상으로 채운다 — \"럭셔리하지만 빈약하지 않다\". 모든 본문성 슬라이드에 출처 캡션 + 페이지 번호.",
      "**캔버스 한 구석에 죽은 평면 검정 공백을 고이게 두지 말 것** — 특히 표지의 작은 패널 + 우측 평면 빈 검정 구성은 절대 금지. 빈 영역은 따뜻한 조명톤 그라디언트 필드·거대 세리프 모노그램·골드 헤어라인 디테일로 채운다.",
      "**빈 골드 헤어라인 플레이스홀더 프레임 금지** — 비주얼/이미지 프레임은 반드시 실제 렌더된 비주얼(다크 무드 사진·톤 그라디언트 필드·차트·다이어그램·모노그램)을 담는다.",
      "**헤드라인 문장 중간 단어 비대 금지** — 디스플레이 타이틀은 일관 크기, 강조는 골드 색·자간으로.",
      "**여백·풋라인·타이틀 baseline 위치 드리프트 금지** — 슬라이드마다 동일 y에 고정."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD51",
    "title": "삼성전자 IR 절제",
    "mood": "vivid-primary · minimal-sans · asymmetric-content-driven · balanced · subtle",
    "bestFor": "design-diversity premium · samsung-global-ir",
    "id": "ppt-samsung-ir-restrained",
    "background": [
      "Primary background/token: `#FFFFFF`"
    ],
    "colors": [
      {
        "role": "bg white body",
        "label": "bg white body",
        "hex": "#FFFFFF"
      },
      {
        "role": "bg dark navy photo",
        "label": "bg dark navy photo",
        "hex": "#06122A"
      },
      {
        "role": "bg dark navy flat",
        "label": "bg dark navy flat",
        "hex": "#030414"
      },
      {
        "role": "bg off white mean",
        "label": "bg off white mean",
        "hex": "#F6F8FA"
      },
      {
        "role": "text title on white",
        "label": "text title on white",
        "hex": "#010821"
      },
      {
        "role": "text on dark",
        "label": "text on dark",
        "hex": "#FFFFFF"
      },
      {
        "role": "text section label",
        "label": "text section label",
        "hex": "#3D4E6F"
      },
      {
        "role": "text table header",
        "label": "text table header",
        "hex": "#5C6B90"
      },
      {
        "role": "text axis caption muted",
        "label": "text axis caption muted",
        "hex": "#A5B3C6"
      },
      {
        "role": "accent samsung blue",
        "label": "accent samsung blue",
        "hex": "#0028A8"
      },
      {
        "role": "accent navy hairline commentary",
        "label": "accent navy hairline commentary",
        "hex": "#0D2062"
      },
      {
        "role": "chart bar past gray",
        "label": "chart bar past gray",
        "hex": "#A5B3C6"
      },
      {
        "role": "table highlight border",
        "label": "table highlight border",
        "hex": "#0028A8"
      },
      {
        "role": "table highlight fill light",
        "label": "table highlight fill light",
        "hex": "#BBD2E8"
      },
      {
        "role": "table row hairline",
        "label": "table row hairline",
        "hex": "#D8DBE2"
      },
      {
        "role": "footer band cover",
        "label": "footer band cover",
        "hex": "#0E1930"
      },
      {
        "role": "footer band thankyou",
        "label": "footer band thankyou",
        "hex": "#15202F"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#0028A8"
      }
    ],
    "fonts": [
      "page_title: **Manrope**, 34-36pt, weight 700, tracking 0em, leading 1.05, fallback Inter, Pretendard, Helvetica Neue, Arial, sans-serif",
      "subtitle: **Manrope**, 11-12pt, weight 400, fallback Inter, Pretendard, sans-serif",
      "section_label: **Manrope**, 14-15pt, weight 600, fallback Inter, Pretendard, sans-serif",
      "kpi_huge: **Manrope**, 44-48pt, weight 800, fallback Inter, Pretendard, sans-serif",
      "kpi_sub_label: **Manrope**, 11pt, weight 400",
      "body: **Manrope**, 11-12pt, weight 400, leading 1.35, fallback Inter, Pretendard, sans-serif",
      "bullet_headline: **Manrope**, 12pt, weight 600",
      "bullet_detail: **Manrope**, 11pt, weight 400",
      "table_header_cell: **Manrope**, 10-11pt, weight 600",
      "table_body_cell: **Manrope**, 10-11pt, weight 400",
      "table_growth_indicator: **Manrope**, 10-11pt, weight 600",
      "chart_value_label_in_bar: **Manrope**, 9-10pt, weight 600",
      "chart_axis_label: **Manrope**, 9-10pt, weight 400",
      "chart_unit_caption: **Manrope**, 11pt, weight 400",
      "wordmark_samsung_top_right: **Manrope**, 13-14pt, weight 700, tracking 0.06em, fallback Inter, sans-serif",
      "cover_footer_label: **Manrope**, 11-14pt, weight 600",
      "index_nav_label: **Manrope**, 13-14pt, weight 600, tracking 0.04em",
      "korean_font_strategy, fallback Noto Sans KR, Apple SD Gothic Neo, sans-serif"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.canvas_pt: 1440 x 810",
      "spacing.canvas_in: 13.33 x 7.5",
      "spacing.margin_x_pct: 4%",
      "spacing.margin_top_hairline_pct: 3.4%",
      "spacing.margin_top_title_pct: 8%",
      "spacing.margin_bottom_body_pct: 3-5%",
      "spacing.header_gradient_y_span_pct: 0% to 21%",
      "spacing.content_y_span_pct: 22% to 92%",
      "spacing.grid: content-driven asymmetric (not strict 12-column). Outer margins 4% fixed; left/right block split varies per page (1:1, 3:2, 1:2, 1:1).",
      "slide.size_pt: 1440 x 810",
      "slide.size_in: 13.33 x 7.5",
      "slide.two_mode_system.dark_navy_pages: cover (p-01), disclaimer (p-02), index (p-03), presenters (p-04), thank-you (p-15)",
      "slide.two_mode_system.white_body_pages: highlights (p-05), financial-data (p-06), segments (p-07), memory (p-08), slsi-foundry (p-09), sdc (p-10), mx-nw (p-11), vd-da-harman (p-12), appendix-1 (p-13), appendix-2 (p-14)",
      "slide.page_common_elements_mandatory_on_body_pages_p02_to_p14.top_hairline.y_pct: 3.4%",
      "slide.page_common_elements_mandatory_on_body_pages_p02_to_p14.top_hairline.thickness_pt: 1.3pt (~2px)"
    ],
    "signature": [
      "삼성·LG 같은 글로벌 대기업이 분기 실적을 발표할 때 쓰는 영문 IR 자료 스타일. 강조는 진한 파랑 한 가지뿐, 표는 가로 줄 한 줄로 정리, 차트는 깨끗한 흰 배경에 막대 두 가지 색만. 화려하지 않으면서 격조 있게 보이는 보수적 톤 — 분기·연간 실적 보고, 글로벌 투자자 대상 IR에 어울립니다.",
      "diagram.philosophy: Original deck has almost NO traditional diagrams (no segment tree, no process flow, no 2x2 matrix). The 'diagram' page kind uses the commentary template (chart left + nested bullets right with #0D2062 hairline tab labels) instead.",
      "diagram.kpi_huge_combo.usage: p-05 Highlights signature",
      "diagram.kpi_huge_combo.structure: 2 or 4 KPI giant numbers in #0028A8 44-48pt Manrope 800 tabular (with 'T' suffix at same size), each with small sub-label above (Sales / Operating Profit, Manrope 400 11pt #A5B3C6). Section label (#3D4E6F 14pt 600) at top. Bar+line chart below. NO card box, NO border — bare text only.",
      "diagram.kpi_huge_combo.layout: left half: Quarterly Results (Sales KPI + OP KPI + chart) | right half: Full-year Results (Sales KPI + OP KPI + chart)",
      "diagram.commentary_tab_hairline.usage: p-08 through p-12 right side — each timeframe section header",
      "diagram.commentary_tab_hairline.stroke_px: 2",
      "diagram.commentary_tab_hairline.stroke_color: #0D2062",
      "diagram.commentary_tab_hairline.orientation: horizontal"
    ],
    "avoid": [
      "v1 hex `#1428A0` 금지 — 실측 강조색은 `#0028A8` 단 하나.",
      "Samsung Blue를 큰 면(배경 banner·표지 풀블리드 컬러)으로 사용 금지.",
      "청색 변주(밝은 청·하늘색·인디고·시안) 추가 금지.",
      "차트의 paired side-by-side 막대 절대 금지.",
      "차트에 격자선·y축 라인·외곽 박스·범례 박스·잘린 y축 추가 금지.",
      "차트에 다중 색 카테고리 코딩 금지 — 모든 부문이 `#0028A8` + `#A5B3C6` 동일 팔레트.",
      "표에 zebra-fill·vertical column rule·외곽 frame 추가 금지.",
      "증감 화살표를 녹/적 컬러 코딩 금지.",
      "페이지 번호 표시 금지.",
      "본문 페이지에 푸터 밴드 추가 금지 — 표지·Thank-you만 푸터.",
      "상단 hairline·우상단 워드마크를 페이지마다 위치 변경 금지.",
      "표지(p-01)와 closing(p-15)에 상단 hairline·우상단 워드마크 추가 금지 — 이 두 페이지는 푸터 영역에만 hairline/워드마크."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD52",
    "title": "SKT 인터랙티브 AI 피라미드",
    "mood": "monochrome-blue · thin-display · asymmetric-content-driven · balanced-with-whitespace · subtle",
    "bestFor": "design-diversity premium · skt-interactive-report",
    "id": "ppt-skt-interactive-ai-pyramid",
    "background": [
      "Bg: `#FFFFFF`",
      "Surface: `#E4EEFB`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#FFFFFF"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#E4EEFB"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#000000"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#595757"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#0023C3"
      },
      {
        "role": "accent shadow",
        "label": "accent shadow",
        "hex": "#0010A7"
      },
      {
        "role": "secondary",
        "label": "secondary",
        "hex": "#4B8CE6"
      },
      {
        "role": "pyramid mid right face",
        "label": "pyramid mid right face",
        "hex": "#2B65D8"
      },
      {
        "role": "pyramid light face",
        "label": "pyramid light face",
        "hex": "#DBE8FA"
      },
      {
        "role": "pale blue header",
        "label": "pale blue header",
        "hex": "#C9DDF8"
      },
      {
        "role": "frost blue fill",
        "label": "frost blue fill",
        "hex": "#E4EEFB"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#D7D7D7"
      },
      {
        "role": "tab inactive underline",
        "label": "tab inactive underline",
        "hex": "#EAEAEA"
      },
      {
        "role": "chart cool gray",
        "label": "chart cool gray",
        "hex": "#84959E"
      },
      {
        "role": "data gray",
        "label": "data gray",
        "hex": "#595757"
      },
      {
        "role": "data medium blue",
        "label": "data medium blue",
        "hex": "#4B8CE6"
      },
      {
        "role": "data deep blue",
        "label": "data deep blue",
        "hex": "#0023C3"
      },
      {
        "role": "logo only red",
        "label": "logo only red",
        "hex": "#EA002C"
      }
    ],
    "fonts": [
      "cover_lettering: **Pretendard**, 130pt, weight 500, tracking -0.04em, fallback Noto Sans KR, Inter, Arial, sans-serif",
      "chapter_slate_lettering: **Pretendard**, 150pt, weight 400, tracking 0, fallback Noto Sans KR, Inter, Arial, sans-serif",
      "section_h1: **Pretendard**, 36pt, weight 700, leading 1.25, fallback Noto Sans KR, Inter, Arial, sans-serif",
      "subsection_h2: **Pretendard**, 18pt, weight 700",
      "section_indicator_chip: **Pretendard**, 11pt, weight 500",
      "body_paragraph: **Pretendard**, 10pt, weight 400, leading 1.55, fallback Noto Sans KR, Inter, Arial, sans-serif",
      "chart_value_label: **Pretendard**, 9pt, weight 500",
      "top_nav_tab_label: **Pretendard**, 10pt, weight 500, tracking +0.05em",
      "agenda_track_header: **Pretendard**, 32pt, weight 500",
      "top_nav_meta: **Pretendard**, 8pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x_pct: 6-7% (16:9 변환 시 5:3 원본 4-5%에서 확장)",
      "spacing.margin_y_top_pct: 3.6% (네비 바) → 9-12% (H1 baseline)",
      "spacing.margin_y_bottom_pct: 5-8% (의도적 빈 화이트스페이스)",
      "spacing.footer_zone: none — 본문 페이지 하단 풋라인 절대 없음",
      "spacing.grid: 보이는 12-column 그리드 없음. 콘텐츠 주도 비대칭. paragraph 컬럼 좁고(16~18%), 다이어그램 모듈이 자체 내부 그리드로 우/하단 floats",
      "spacing.rhythm: 8, 16, 24, 40",
      "slide.size: 13.33x7.5in",
      "slide.grid: 비대칭 콘텐츠 주도. 상단 4-탭 네비 바 + H1 + ▶︎ chip + 본문 모듈. 하단 풋라인 없음",
      "slide.signature_motifs_canonical.M1_top_4tab_nav.description: 30~40px 흰 띠 + 좌측 home/menu 아이콘 + 중앙 4 균등 탭 + 우측 메타. 활성 #0023C3 + 1.5pt underline / 비활성 #595757 + 1px #EAEAEA underline",
      "slide.signature_motifs_canonical.M1_top_4tab_nav.mandatory_on_slots: section_slate, chart, diagram, cards, comparison, narrative, closing",
      "slide.signature_motifs_canonical.M1_top_4tab_nav.conditional_on_slots: key_message",
      "slide.signature_motifs_canonical.M1_top_4tab_nav.absent_on_slots: cover, agenda",
      "slide.signature_motifs_canonical.M2_huge_thin_display_lettering.description: #0023C3 단색, weight 400~500 (bold 절대 아님). 표지 130pt near-zero kerning / 챕터 슬레이트 150pt normal kerning",
      "slide.signature_motifs_canonical.M2_huge_thin_display_lettering.mandatory_on_slots: cover, section_slate",
      "slide.signature_motifs_canonical.M2_huge_thin_display_lettering.optional_on_slots: key_message variant_a"
    ],
    "signature": [
      "SK텔레콤 2024 연간보고서처럼 별빛 표지에 큰 영문 슬로건과 입체 피라미드 다이어그램이 시그니처. 짙은 보라색 한 가지로 통일하고 위에 PDF 탭 메뉴가 떠있는 인터랙티브 보고서 미감 — AI·테크 기업의 비전 발표, 통합보고서, 전략 키노트에 어울립니다.",
      "한눈에 알아보는 단서: (1) **순백 단일 배경 + SKT Electric Indigo `#0023C3` 1색** — 표지 거대 `DOTHEGOODAI` 글자, 모든 챕터 슬레이트 lettering, 모든 H1, 모든 ▶︎ chip, 모든 차트 강조 막대, 활성 탭이 전부 정확히 이 한 색. SKT Red `#EA002C`는 **표지 SK telecom 로고 워드마크 0.16% 면적에만** 등장하고 본문 절대 금지. (2) **챕터 색 변주 없음** — DO AI · THE AI · GOOD AI · APPENDIX 네 챕터가 모두 동일 블루를 공유, 챕터 식별은 오직 상단 4-탭 네비의 「어느 탭이 활성인지」로만. (3) **AI 피라미드 2.0 3D isometric 3단** — Agentic AI(꼭대기, 흰 면+`#DBE8FA` 좌면) / AIX(중간, `#4B8CE6` 좌면+`#2B65D8` 우면) / AI Infra Super Highway(바닥, `#0023C3` 좌면+`#0010A7` 우면) — 좌·우 두 면이 각각 다른 색으로 isometric 입체감을 만들고, 우측에 `AI B2C·B2B·DC` 흰 정원 배지 3개가 각 단을 가리키며, 바닥 아래 「자강과 협력」 흰 캡슐이 모든 단을 떠받친다. (4) **거대 lettering + ✦ sparkle** — 표지·챕터 슬레이트는 흰 배경에 좌측 정렬된 thin/medium 디스플레이 거대 글자(96~150pt, weight 400~500의 얇은 톤 — Bold/Black 절대 아님)와 그 옆 중간 지점의 ✦ + 가는 가로 헤어라인이 전부. (5) **상단 풀폭 4-탭 PDF 네비게이션** — 모든 본문 페이지 y=0~3.6% 영역에 🏠+☰ 아이콘 + `DO AI · THE AI · GOOD AI · APPENDIX` 4탭 + 우측 `SK Telecom Annual Report 2024 [p.NN]` 메타. (6) **본문 ▶︎ 캡슐 chip** — H1 바로 아래에 진 블루 솔리드 둥근 캡슐 + 흰 한글 라벨 + 우측 끝 ▶︎ 화살표(`거버넌스 ▶︎` `예방 ▶︎` `식별 ▶︎` 등)가 모든 본문 페이지 하위 섹션 시작마다 반복. (7) **차트 3톤 사다리** — 회색 `#595757` + 미디엄 블루 `#4B8CE6` + 진 블루 `#0023C3` 단 세 톤. 무지개·따뜻한 색·녹색·빨강 절대 등장 없음. (8) **하단 풋라인 없음** — 페이지 번호·아카이브 메타는 전부 상단 네비 우측 끝. 본문 페이지 하단 5~8%는 의도적 빈 화이트스페이스.",
      "diagram.language: 둥근 모서리 박스 + 1px 헤어라인 + 1.5pt 가는 화살표 #595757 또는 #4B8CE6. 강조 노드 = #0023C3 솔리드 + 흰 텍스트",
      "diagram.process_flow: 둥근 모서리 박스 4~5단계, 기본 채움 #E4EEFB + 검정 텍스트, 강조 노드 #0023C3 솔리드 + 흰 텍스트. 박스 상단 thin-line 아이콘",
      "diagram.swimlane: 복잡 플로우는 좌측 4-row swimlane 라벨 (예: SK텔레콤 외부 / Stakeholder 의견 참고 / SK텔레콤 내부 / 이사회/우총)",
      "diagram.satellite_4_direction: 중앙 정원(직경 80px, #0023C3 채움 + 흰 텍스트) + 사방 4 위성 정원(미디엄 블루 outline + 텍스트, 흰 채움) + 가는 회색 헤어라인 연결",
      "diagram.org_chart: 사각/둥근 박스 + 수직 연결선. 상단 이사회 → CEO → 하위 부서. 채움 보통 흰(gray outline), 강조 노드만 #4B8CE6 또는 #0023C3",
      "diagram.table: 1px #D7D7D7 가로 헤어라인만 (세로 컬럼 라인 없음). 헤더 행 #E4EEFB 채움 + #0023C3 텍스트 또는 검정 굵게. 본문 행 흰 채움 + 검정. 숫자 우정렬 tabular, 한글 좌정렬",
      "diagram.render: SVG 정밀"
    ],
    "avoid": [
      "**SKT Red `#EA002C` 본문 사용 금지** — 표지 우상단 SK telecom 로고 워드마크 외 절대 등장 금지. KPI·강조·피라미드 좌측 바·헤더 underline에 빨강 쓰지 말 것.",
      "**챕터 색 변주 금지** — 5색 순환(Red/Indigo/Teal/Amber/Slate) 절대 금지. 4 챕터(DO AI / THE AI / GOOD AI / APPENDIX, 5 아님)가 전부 동일 `#0023C3` 사용. 챕터 식별은 오직 상단 네비의 활성 탭 표시로만.",
      "**AI 피라미드를 4단 평면으로 만들지 말 것** — 정확히 **3단 3D isometric**(Agentic AI / AIX / AI Infra Super Highway). 좌·우 두 면을 다른 단색으로 칠해 입체. SKT Red 좌측 바 절대 금지. `자강과 협력`은 바닥 지지 캡슐(꼭대기 단 아님). `AI B2C/B2B/DC`는 우측 정원 배지(단 이름 아님).",
      "**6-Capital을 5-Capital 원형 카드로 만들지 말 것** — 정확히 6 capitals(Financial/Human/Intellectual/**Infrastructure**/Social/**Environment**), Manufactured 없음. 형태는 **가로 미러 행 테이블**, 원형 카드 그리드 아님.",
      "**DO/THE/GOOD AI 3-card 핵심 메시지 슬라이드 만들지 말 것** — 표지에서는 `DOTHEGOODAI` 단일 lettermark로, 본문에서는 ESG Vision 체계 3-track 깔때기 안에서만 등장. 거대 윤곽 글리프(140pt 800 stroke) 3-card 횡렬 금지.",
      "**상단 4-탭 네비 바 생략 금지** — 모든 본문·sub-slate·챕터 슬레이트 페이지에 의무. 좌상단 `CHAPTER 02 · THE AI` 모노 라벨 + 우상단 `p.07 / 10` 모노 페이지 인디케이터 형식 절대 금지. 페이지 인디케이터는 **상단 네비 우측 끝에만** 위치.",
      "**mono 폰트 금지** — JetBrains Mono / IBM Plex Mono / Courier 사용 금지. 페이지 번호·각주·라벨 모두 Pretendard 비례 sans.",
      "**하단 풋라인·`Source:` 풋라인 금지** — 본문 페이지 하단 5~8%는 빈 화이트스페이스. 페이지 번호와 아카이브 메타는 상단 네비 우측 끝에만.",
      "**챕터 슬레이트에 색띠·풀블리드 색·풍부한 사진·일러스트 금지** — 흰 배경 + 거대 lettering + ✦ + 가로 헤어라인 + 우측 인덱스만.",
      "**거대 lettering을 Bold/Black으로 만들지 말 것** — 표지·챕터 슬레이트 lettering은 weight 400~500의 thin/medium 톤. Pretendard 800 Black 절대 금지. **v1·기타 가정에서 가장 자주 틀리는 부분.**",
      "**그라디언트·그림자·이모지·클립아트·3D 차트·잘린 y축·무지개색·범례 박스·라운드 글로우 금지**.",
      "**off-white 배경·다크 모드 금지** — 모든 페이지 정확히 `#FFFFFF` 순백."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD53",
    "title": "현대차 시네마틱 인베스터데이",
    "mood": "dark · heavy-display · full-bleed · balanced · subtle",
    "bestFor": "design-diversity premium · hyundai-cinematic",
    "id": "ppt-hyundai-cinematic-investor-day",
    "background": [
      "Bg: `#101030`",
      "Surface: `#14274A`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#101030"
      },
      {
        "role": "bg lit",
        "label": "bg lit",
        "hex": "#101838"
      },
      {
        "role": "bg deep",
        "label": "bg deep",
        "hex": "#0E1329"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#14274A"
      },
      {
        "role": "surface alt",
        "label": "surface alt",
        "hex": "#132142"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#FFFFFF"
      },
      {
        "role": "text offwhite",
        "label": "text offwhite",
        "hex": "#FCFCFC"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#A8B4C8"
      },
      {
        "role": "accent 1",
        "label": "accent 1",
        "hex": "#66FFFF"
      },
      {
        "role": "accent 2",
        "label": "accent 2",
        "hex": "#00D3FD"
      },
      {
        "role": "accent 3",
        "label": "accent 3",
        "hex": "#00B0F0"
      },
      {
        "role": "accent 4",
        "label": "accent 4",
        "hex": "#0060A8"
      },
      {
        "role": "accent signature cyan",
        "label": "accent signature cyan",
        "hex": "#66FFFF"
      },
      {
        "role": "accent chart emphasis",
        "label": "accent chart emphasis",
        "hex": "#00D3FD"
      },
      {
        "role": "accent header label",
        "label": "accent header label",
        "hex": "#00B0F0"
      },
      {
        "role": "accent secondary blue",
        "label": "accent secondary blue",
        "hex": "#0060A8"
      },
      {
        "role": "accent badge blue",
        "label": "accent badge blue",
        "hex": "#04599D"
      },
      {
        "role": "accent card surface",
        "label": "accent card surface",
        "hex": "#14274A"
      }
    ],
    "fonts": [
      "cover_title: **Hyundai Sans Head**, 68-80pt, weight 700, tracking -0.01em, leading 1.08, fallback Inter Bold",
      "chapter_slate_english: **Hyundai Sans Head**, 54-72pt, weight 700, tracking -0.015em, leading 1.05, fallback Inter Bold",
      "chapter_slate_korean_subtitle: **Hyundai Sans Head KR Bold**, 20-24pt, weight 700, leading 1.3, fallback Pretendard Black",
      "body_title: **Hyundai Sans Head KR Bold**, 34pt, weight 700, tracking -0.01em, leading 1.15, fallback Pretendard Black",
      "body_subtitle_eyebrow: **Hyundai Sans Head KR Bold**, 14-15pt, weight 600, leading 1.4, fallback Pretendard Bold",
      "kpi_numeral_giant: **Hyundai Sans Head**, 140-160pt, weight 700, tracking -0.025em, fallback Inter Bold",
      "kpi_unit_trailing: **Hyundai Sans Head KR Bold**, 45-55pt, weight 700, fallback Pretendard Black",
      "kpi_numeral_card: **Hyundai Sans Head**, 80-100pt, weight 700, fallback Inter Bold",
      "card_label_korean: **Hyundai Sans Head KR Bold**, 18-22pt, weight 700, fallback Pretendard Black",
      "card_body_korean: **Hyundai Sans Head KR Bold**, 12-13pt, weight 500, leading 1.55, fallback Pretendard SemiBold",
      "header_label_persistent: **Inter Regular**, 11-13pt, weight 400, tracking +0.02em, fallback Pretendard Regular",
      "page_number: **Inter Regular**, 9-10pt, weight 400, fallback Pretendard Regular",
      "chart_axis_label: **Inter Regular**, 10-11pt, weight 400, fallback Pretendard Regular",
      "chart_value_label: **Hyundai Sans Head**, 14-16pt, weight 700, fallback Inter Bold",
      "source_caption: **Inter Regular**, 9pt, weight 400, fallback Pretendard Regular"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_left_pct: 5",
      "spacing.margin_right_pct: 5",
      "spacing.margin_top_pct: 3.5",
      "spacing.margin_bottom_pct: 4.5",
      "spacing.title_baseline_pct_y: 9",
      "spacing.subtitle_gap_pct_y: 1.5",
      "spacing.header_label_y_pct: 4",
      "spacing.page_number_y_pct: 96",
      "spacing.card_padding: 0.32in",
      "spacing.card_gap: 0.28in",
      "spacing.chart_plot_area: 8.0in x 3.4in (centered in content band)",
      "spacing.chevron_corner_mark_x_pct: 3",
      "spacing.chevron_corner_mark_y_pct: 4",
      "slide.size: 13.33x7.5in",
      "slide.canvas_pixel: 1280x720 (or 1170x827 to match source export)"
    ],
    "signature": [
      "현대차 인베스터데이처럼 다크 네이비 무대에 미래적 사이안 라인이 흐르는 컨퍼런스 키노트 톤. 거대한 흰색 숫자, ∞ 모양 컨셉 다이어그램, 7장 카드에 큰 사이안 숫자가 박힌 양식 — AI·EV·미래 모빌리티·신사업 발표, 테크 컨퍼런스 키노트에 어울립니다.",
      "한눈에 알아보는 단서: (1) 배경은 **다크 네이비 `#101030`** (R=16 G=16 B=48 — 순흑이 아니라 푸른 톤이 살짝 도는 짙은 네이비) 단 하나로 71페이지 전부를 통일한다. 라이트 모드·회색 BG·CSS gradient BG 일체 금지. (2) 시그니처 액센트는 **밝은 민트-사이안 `#66FFFF`** 단 하나 — 모든 챕터 슬레이트 영문 타이틀, 좌상단 헤더 chevron 글로우, 강조 차트 데이터, 카드 enumerator가 이 색으로 발광한다. **Hyundai N Blue `#002C5F`는 이 덱에 0건 — 절대 쓰지 말 것**. (3) 챕터 디바이더의 지배적 모티프는 **chevron**(중첩된 우향 `>` 3~5개 스택 + 안쪽 V-vertex에 흰-사이안 글로우 + 바깥으로 미디엄 블루 → 다크 네이비 fade). **거대 outline 숫자(240~360pt)는 이 덱에 절대 존재하지 않는다 — 큰 사이안 숫자는 오직 p-64 카드 안 enumerator(80~100pt SOLID fill)로만 등장**. (4) **HYUNDAI WAY ∞ 다이어그램**(좌 사이안-블루 lobe = Mobility Game Changer + 우 teal-green lobe = Energy Mobilizer)이 이 덱 전체의 컨셉 아키텍처를 정의 — high-concept hero 자리에 1순위 사용. (5) **풀-블리드 단일 사진 0장** — 사진/렌더링은 5종 양식(하단 반 히어로 / 인라인 cut-out / dim underlay ≤30% / 좌 50% 분할 패널 / 로고 인라인)으로 분산.",
      "diagram.language: 다크 네이비 무대 + 사이안 chevron + 헤어라인 골격 + 단일 사이안-블루 패밀리 rasterized/SVG asset 또는 flat-token fallback. 노드는 #14274A 면 + 1px #1E2A52 보더, 활성 요소만 #66FFFF border + cyan glow. NO rainbow, NO per-category color.",
      "diagram.node: #14274A fill + 1px #1E2A52 border, 6-8px radius, padding 0.28-0.32in",
      "diagram.connector_straight: 1pt #1E2A52 solid hairline OR 1.5-2pt #66FFFF straight (for timeline arrow, p-65 left→right)",
      "diagram.connector_curved: 1.5-2pt #66FFFF curved arc (for hub-spoke flow, p-35 card→vehicle) + filled triangle arrowhead 0.10in",
      "diagram.chevron_corner_mark: miniaturized 3-stack chevron at top-left x=3%/y=4%, ~50px wide, white-cyan inner glow fading to #00B0F0; PRESENT on every Mode B page next to '2024 CEO Investor Day' header label",
      "diagram.chevron_chapter_motif: 3-5 nested right-pointing > shapes on chapter-slate edge. Cover/closing (p-01/p-71): LEFT 5-stack ~80% canvas height (mirror = bookend). Single-word chapter slates (p-02/p-58): RIGHT 4-stack ~60% canvas height. Multi-word chapter slates (p-08/p-33/p-45): RIGHT 2-3 arcs + LEFT small starburst glow. Stroke 8-20px. Inner V-vertex #F5FBFF → mid #00B0F0 → outer fades to #101030",
      "diagram.hyundai_way_infinity: SIGNATURE DIAGRAM (p-07 mirror). Two horizontal interlocking lobes forming ∞: LEFT lobe uses rasterized PNG/Sharp cyan-blue radial asset (#0060A8→#002C5F with #66FFFF top inner glow) with flat #0060A8 fallback labeled 'MOBILITY GAME CHANGER' (ALL CAPS 22-26pt bold white inside) / RIGHT lobe uses rasterized PNG/Sharp teal-green radial asset (#189078→#0E5645 with #66FFFF top inner glow) with flat #189078 fallback labeled 'ENERGY MOBILIZER' (ALL CAPS 22-26pt bold white inside). Crossing center labeled 'HYUNDAI DYNAMIC CAPABILITIES' in #66FFFF Title Case 22-24pt above infinity. Above the ∞: giant white 'HYUNDAI WAY' ALL CAPS 64-72pt. Position: center, y≈40-78%, width≈70% canvas. THIS IS THE DECK'S CONCEPTUAL ARCHITECTURE — must appear in diagram primary slot. ONLY 1 instance in entire deck. #189078 teal is used ONLY here.",
      "diagram.chevron_tabbed_stage_band: Hyundai signature progress primitive (p-48/p-52 mirror). Horizontal row of 3 trapezoidal chevron tabs above a chart/table (active filled #66FFFF #101030 text; inactive filled #14274A #A8B4C8 text); each tab leads-into the next like > > >. Used for stage progressions (초기→성장기→성숙기, Upstream→Midstream→Downstream). y position ≈18-22%. Tab width = label text + 0.6in."
    ],
    "avoid": [
      "Hyundai N Blue `#002C5F`를 기본 배경·강조색으로 대체하기 — 이 덱의 무대는 #101030, 액센트는 #66FFFF로 고정.",
      "라이트 모드, 회색 배경, CSS gradient 배경 사용 — 모든 배경은 다크 네이비 단색 또는 래스터 자산으로만 처리.",
      "풀-블리드 사진 한 장으로 히어로를 채우기 — 사진은 하단 반 히어로, 인라인 컷아웃, dim underlay 등 지정된 5종 양식으로 제한.",
      "거대 outline 숫자나 무지개 카테고리 색상 — 큰 숫자는 p-64 카드 enumerator처럼 솔리드 사이안 숫자에만 사용.",
      "부드러운 소비재 톤, 둥근 파스텔 카드, 장식적 아이콘 과다 — 컨퍼런스 키노트의 헤어라인·chevron·사이안 글로우를 유지."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD54",
    "title": "네이버 통합보고서 어워드",
    "mood": "multi-segment-signature · giant-display-sans · data-card-grid · dual-mode-breath · subtle",
    "bestFor": "design-diversity premium · naver-communication-design",
    "id": "ppt-naver-integrated-report-award",
    "background": [
      "Bg: `#FFFFFF`",
      "Surface: `#F5F5F5`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#FFFFFF"
      },
      {
        "role": "bg slate",
        "label": "bg slate",
        "hex": "#FAFAFA"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#F5F5F5"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#0A0A0A"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#7B7B7B"
      },
      {
        "role": "text disabled",
        "label": "text disabled",
        "hex": "#B4B4B4"
      },
      {
        "role": "rule line",
        "label": "rule line",
        "hex": "#E8E8E8"
      },
      {
        "role": "bar compare muted",
        "label": "bar compare muted",
        "hex": "#C8C8C8"
      },
      {
        "role": "donut muted",
        "label": "donut muted",
        "hex": "#E8E8E8"
      },
      {
        "role": "accent primary",
        "label": "accent primary",
        "hex": "#03C75A"
      },
      {
        "role": "chart",
        "label": "#7C5BFF",
        "hex": "#7C5BFF"
      },
      {
        "role": "chart",
        "label": "#1ED2C0",
        "hex": "#1ED2C0"
      },
      {
        "role": "chart",
        "label": "#FF6A4A",
        "hex": "#FF6A4A"
      },
      {
        "role": "chart",
        "label": "#4FB8FF",
        "hex": "#4FB8FF"
      },
      {
        "role": "chart",
        "label": "#FFD24A",
        "hex": "#FFD24A"
      },
      {
        "role": "diagram",
        "label": "#3D8BFF",
        "hex": "#3D8BFF"
      },
      {
        "role": "diagram",
        "label": "#5B3FE0",
        "hex": "#5B3FE0"
      }
    ],
    "fonts": [
      "korean_primary: **Pretendard**, fallback Noto Sans KR, Inter, Helvetica Neue",
      "english_primary: **Inter**, fallback Helvetica Neue, SF Pro Display, Arial",
      "cover_giant_display, weight 700, tracking -0.025em, leading 1.0",
      "cover_year_display, 100pt, weight 700, tracking -0.02em",
      "section_slate_label_jumbo, 96pt, weight 700, tracking -0.02em",
      "section_slate_subtitle_list, 14pt, weight 500, leading 1.6",
      "page_h1_english_44pt, 40~44pt, weight 700",
      "page_h1_english_32pt, 32pt, weight 700",
      "page_h1_korean_mixed, 28pt, weight 600",
      "kicker_above_h1, 14pt, weight 600",
      "timeline_era_label, 32pt, weight 700",
      "esg_grade_alphabet, 90~110pt, weight 700",
      "global_network_giant_digit",
      "data_card_giant_number, 40pt 또는 56pt, weight 700, tracking -0.02em",
      "solid_circle_inside_number, 60pt, weight 700",
      "quarterly_grand_total, 56pt, weight 700",
      "donut_emphasis_percent, 24pt, weight 700",
      "delta_arrow_percent, 40pt, weight 700",
      "delta_caption, 12pt, weight 500",
      "mixed_size_number_unit",
      "alphabet_as_data, 90~110pt, weight 700",
      "body, 11~12pt, weight 400, leading 1.55",
      "caption_source, 9~10pt, weight 400",
      "nav_header_label, 11pt, weight 500, tracking +0.04em",
      "nav_subtab, 11pt, weight 500, tracking +0.02em",
      "footer_brand, 10pt, weight 500"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x_pct: 4.5%",
      "spacing.margin_x_in: 0.6in",
      "spacing.margin_y: 0.5in",
      "spacing.header_band_height_pct: 6%",
      "spacing.header_band_height_in: 0.9in",
      "spacing.subtab_band_height_pct: 3% (BUSINESS REPORT 활성 시 추가, y=6~9%)",
      "spacing.footer_band_height_pct: 4~6%",
      "spacing.footer_band_height_in: 0.5in",
      "spacing.content_band_pct: y=7~94% (네비·푸터 제외)",
      "spacing.card_padding: 0.3in",
      "spacing.card_gap: 16~20px",
      "spacing.whitespace_target: 표지·섹션 슬레이트·On-Service AI 인트로 = 콘텐츠 점유율 25~40% (극단적 여백) / 본문·데이터 카드 페이지 = 콘텐츠 점유율 60~70% (보고서 정보 밀도)",
      "shape.radius_card: 8~10px",
      "shape.radius_pill_label: 12px",
      "shape.radius_circle: 999px"
    ],
    "signature": [
      "네이버 2024 통합보고서(iF Design Award 수상작) 스타일. 페이지 가득 채우는 큰 영문 디스플레이 글씨, 부드러운 그린 안개 효과를 rasterized PNG/Sharp asset 또는 flat-token fallback으로 처리, 5개 사업부문이 각자 색을 갖는 카드, 한국식 숫자+단위 표기('4천 8백만 명') — 어워드급 디자인이 필요한 통합보고서·ESG 리포트·연간 리뷰에 어울립니다.",
      "diagram.node_shape_rule: 세 종만 반복 — 원형(사업부문·기술·서비스 노드 직경 100~120px), 둥근 사각형(인물 카드·정보 카드 라운드 8~10px), 라운드 라벨 박스(영문 카테고리 태그 라운드 12px 솔리드 채움)",
      "diagram.connector_rule: 1pt 검은 직선만. 화살표 없음. 곡선 거의 없음 (Next, N 무한대 곡선만 예외, v3 10장 덱 외).",
      "diagram.v3_diagrams_used: horizontal_milestone_timeline_s4, on_service_ai_4color_node_network_s9, segment_pill_label_on_photo_s10",
      "diagram.horizontal_milestone_timeline.where: s4 ← p8 KEY MILESTONES",
      "diagram.horizontal_milestone_timeline.form: 페이지 폭 풀로 0.5pt #E8E8E8 수평 라인(y=42%) + 4구간(2008-2014/2015-2019/2020-2022/2023-2024) 거대 32pt Bold 검정 시기 라벨 가로 4등분 중앙 정렬(y=30%) + 마일스톤 그린 도트(직경 8~10px 채움 #03C75A) + 도트에서 위로 짧은 회색 0.5pt 수직 라인 + 도트 아래 연도(Bold 11pt)+항목 본문(Regular 11pt #0A0A0A) 리스트",
      "diagram.on_service_ai_4color_node_network.where: s9 ← p10",
      "diagram.on_service_ai_4color_node_network.form: 좌측 2x2 4개 솔리드 컬러 원 노드(직경 ~100~120px / PPT 환산 1.0~1.2in) — SEARCH #03C75A / COMMERCE #7C5BFF (우상) / ADVERTISING #4FB8FF (좌하) / PLACE #3D8BFF (우하) + 노드 안 흰 SemiBold 영문 라벨 + 1pt 검은 직선 커넥터 + 중앙 rasterized/SVG gradient-text asset hub 'On-Service AI' 24pt Bold (PNG/Sharp 또는 SVG/local asset 그린→퍼플→블루, flat #03C75A fallback) + 작은 아이콘 + 우측 옅은 시안 보조 원 노드 2개(직경 60~80px, 한글 라벨 '초개인화 탐색 서비스' / '파트너 비즈니스 성과 극대화') + 좌하 'AI 원천 기술' / 우하 '사용자 의도·맥락 이해' 라벨 11pt SemiBold",
      "diagram.segment_pill_label_on_photo.where: s10 ← p47 Commerce 지속가능"
    ],
    "avoid": [
      "네이버 그린 `#03C75A`를 일반 장식색처럼 남발하기 — 핵심 도트·서비스 노드·브랜드 강조에만 제한.",
      "카드마다 임의 색상을 추가하거나 무지개 팔레트를 만들기 — 5개 사업부문 색과 흑백 보고서 톤을 유지.",
      "화살표가 많은 플로우차트, 굵은 곡선 커넥터, 복잡한 3D 차트 — 커넥터는 1pt 검은 직선 중심.",
      "극단적 여백이 필요한 표지·섹션 슬레이트를 정보 카드 밀도로 채우기 — 페이지 유형별 콘텐츠 점유율을 지킨다.",
      "한국식 숫자+단위 표기 대신 영문 약어/KPI만 쓰기 — 통합보고서의 현지화된 숫자 리듬을 유지."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD55",
    "title": "카카오 1Q26 보수 IR",
    "mood": "accent-signal · humanist-sans · strict-grid · balanced · subtle",
    "bestFor": "design-diversity premium · kakao-conservative-earnings",
    "id": "ppt-kakao-friendly-card-news",
    "background": [
      "Bg: `#F2F2F2`",
      "Surface: `#FFFFFF`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#F2F2F2"
      },
      {
        "role": "bg alt white",
        "label": "bg alt white",
        "hex": "#FFFFFF"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#FFFFFF"
      },
      {
        "role": "surface zebra",
        "label": "surface zebra",
        "hex": "#F2F2F2"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#000000"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#7F7F7F"
      },
      {
        "role": "text on yellow",
        "label": "text on yellow",
        "hex": "#000000"
      },
      {
        "role": "accent",
        "label": "accent",
        "hex": "#FBE100"
      },
      {
        "role": "accent pill title",
        "label": "accent pill title",
        "hex": "#FAE232"
      },
      {
        "role": "accent logo",
        "label": "accent logo",
        "hex": "#FDD000"
      },
      {
        "role": "accent table tint",
        "label": "accent table tint",
        "hex": "#FEF9D6"
      },
      {
        "role": "data gray secondary",
        "label": "data gray secondary",
        "hex": "#BFBFBF"
      },
      {
        "role": "data gray dark",
        "label": "data gray dark",
        "hex": "#7F7F7F"
      },
      {
        "role": "data blue light",
        "label": "data blue light",
        "hex": "#99CCFF"
      },
      {
        "role": "data blue line",
        "label": "data blue line",
        "hex": "#007ABF"
      },
      {
        "role": "alert red",
        "label": "alert red",
        "hex": "#FF0000"
      },
      {
        "role": "cover sky blue",
        "label": "cover sky blue",
        "hex": "#C1E9F3"
      },
      {
        "role": "border",
        "label": "border",
        "hex": "#BFBFBF"
      }
    ],
    "fonts": [
      "display: **Pretendard**, 40pt, weight 700, tracking -0.01em, leading 1.2, fallback Noto Sans KR, Apple SD Gothic Neo, Inter, sans-serif",
      "cover_logo: **Pretendard**, 40pt, weight 800",
      "subhead: **Pretendard**, 22pt, weight 700, tracking -0.01em, leading 1.3, fallback Noto Sans KR, sans-serif",
      "pill_title: **Pretendard**, 26pt, weight 700",
      "metric_callout: **Pretendard**, 16pt, weight 700",
      "mau_headline: **Pretendard**, 28pt, weight 700",
      "thanks_headline: **Pretendard**, 60pt, weight 700",
      "body: **Pretendard**, 13pt, weight 400, leading 1.55, fallback Noto Sans KR, sans-serif",
      "body_inline_emphasis, weight 700",
      "data_label: **Pretendard**, 14pt, weight 400",
      "data_label_total_bold: **Pretendard**, 16pt, weight 700",
      "table_header: **Pretendard**, 14pt, weight 700",
      "table_body: **Pretendard**, 13pt, weight 400",
      "table_subtotal: **Pretendard**, 13pt, weight 700",
      "table_rate_italic: **Pretendard**, 13pt, weight 400",
      "table_special_keyword: **Pretendard**, 13pt, weight 700",
      "top_right_caption: **Pretendard**, 12pt, weight 400",
      "bottom_right_wordmark: **Pretendard**, 16pt, weight 800",
      "footnote: **Pretendard**, 9pt, weight 400",
      "page_number: **Pretendard**, 10pt, weight 400",
      "cover_meta: **Pretendard**, 14pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x_left: 0in (pill bleeds left edge)",
      "spacing.margin_x_right: 0.6in",
      "spacing.margin_y_top: 0.3in",
      "spacing.margin_y_bottom: 0.55in",
      "spacing.between_chart_and_metric: 0.4in",
      "spacing.white_space_percent: 35~45% — generous breathing room",
      "spacing.grid: informal split — left chart ~50% + right metrics/bullets ~45%, OR left table 50% + right table 50%, OR full-width chart+table (slide 9 MAU), OR 60/35 asymmetric (slide 5 inset). No strict 12-col snap.",
      "slide.size: 13.33x7.5in",
      "slide.background: #F2F2F2 light warm gray (NOT white) for body slides 2~9. Slide 1 cover: top half #F2F2F2 + bottom half #C1E9F3 sky blue. Slide 10 thanks: #FFFFFF white (intentional contrast).",
      "slide.grid: Standard zones: (1) yellow half-pill title at top-left (x=0, y=3%, w=26%, h=8%); (2) top-right caption '1Q26 Earnings Release' (#7F7F7F); (3) main content zone y=12~92% — split per page; (4) footnotes 1)/2)/3) below content; (5) centered page number at bottom; (6) bottom-right 'kakao' black wordmark. Slides 1, 10 exempt from footer marks.",
      "slide.yellow_budget_per_slide: 5~12% of slide area for body slides. Title pill ~2% + chart accent bars 3~10% + table header 2~3%. Slide 5 runs at ~4% (porters page emphasis-light + entertainment inset). Cover ~1% (logo only). Thanks 0%.",
      "slide.chart.data_encoding: Bar fills are warm-neutral or signal: #BFBFBF light gray (secondary), #7F7F7F dark gray (single-color emphasis when blue/yellow not used), #99CCFF light blue (tertiary category), #FBE100 kakao yellow (PRIMARY METRIC SIGNAL ONLY). Color-category mapping is NOT fixed across pages — emphasis category gets yellow per-page.",
      "slide.chart.bar: RIGHT-ANGLE square bars, corner radius=0. Bar width 50~60% of slot width (gap_ratio ~0.4). Stacked bars use stacked rectangles, also square corners.",
      "slide.chart.line: Combo chart line is 1.5px DASHED line in #007ABF (dash 8px - gap 4px) with 6×6px solid SQUARE markers in #007ABF at each data point. NEVER rounded line caps, NEVER smooth curves. Optional values printed beside markers in black.",
      "slide.chart.donut: Not used in this style. Avoid donut charts entirely."
    ],
    "signature": [
      "카카오 분기 실적발표 스타일. 회색 배경에 옐로우 강조 한두 점, 좌측 끝에 반쪽 알약 타이틀, 분기 비교 표에 1분기 칸을 빨강 네모로 둘러싼 IR 분석가 데크 — 보수적 톤의 분기·연간 실적 발표, 테크 기업 IR에 어울립니다.",
      "diagram.language: There is NO custom diagram language in this style. Communication happens through (1) tables, (2) bar/line charts, (3) ▪ square-bullet body bullets. No process flows, no node graphs, no Before/After cards, no comparison panels, no KPI cards with icons.",
      "diagram.process_flow: Not used. If a process must be shown, render as a numbered ▪ bullet list with bold step names.",
      "diagram.timeline: Not used. Quarter timeseries are shown via the bar chart x-axis (1Q24, 2Q24, ... 1Q26) with 'Latest Quarter Yellow' signature.",
      "diagram.comparison: Not used as Before/After cards. Comparison is done via a SINGLE table with 1Q25 | 4Q25 | 1Q26 | YoY | QoQ columns and red box on 1Q26.",
      "diagram.kpi_card: Not used. KPIs live as metric callouts BESIDE charts (16pt bold first line + ▪ supporting bullets) or as the title hero of a chart slide (e.g., '4천9백만 명 규모의 견조한 국내 MAU 유지' headline above MAU chart).",
      "diagram.icon_container: Not used. NO icons in IR body slides. Character illustrations appear ONLY on cover (slide 1) and thanks (slide 10). IR body pages (slides 2~9) are 100% chart/table/text.",
      "diagram.section_divider: Not used. There is no full-bleed section divider. Section grouping happens only via the pill title text (e.g., '플랫폼 부문 | 톡비즈' pipe, '영업이익 / 당기순이익' slash).",
      "diagram.render: Almost no SVG diagrams. Charts and tables ARE the visual language."
    ],
    "avoid": [
      "**둥근 모서리(반경 16/24/28/32px) 차트·표·박스에 절대 금지** — 둥근 모서리는 알약 타이틀 1개 요소(우측 반원 캡)만. 차트 막대 직각, 표 직각, 사각 테두리 직각.",
      "**드롭섀도·소프트 섀도·링 펄스·옐로우 글로우 전면 금지** — 평면 IR 데크. 분리는 채움 대비와 헤어라인만.",
      "**카드뉴스 풍 둥근 흰 카드(반경 24~32px) 적층 금지** — \"한 슬라이드 = 한 카드 = 한 메시지\" 양식 자체가 이 팩에 없음. 정보 밀도 중간(슬라이드당 1~2 차트 + 3~5 불릿).",
      "**친근 면채움 아이콘·옐로우 둥근 컨테이너·아이콘 그리드 카드 금지** — 본문 IR 슬라이드에 아이콘 0건. 카테고리 표시는 텍스트 라벨로만.",
      "**풀블리드 옐로우 섹션 디바이더 페이지 금지** — 옐로우는 강조 시그널이지 면채움 양식이 아니다. 슬라이드당 옐로우 5~12% 면적 상한 엄수.",
      "**친근 어미 한국어 풀어쓰기 금지** — \"월간 활성 이용자/전년 대비/직전 분기 대비\" 대신 `MAU/YoY/QoQ` 그대로(슬라이드 9 헤드라인의 한글 풀이 1회 동행 외 0건). \"—했어요/예요/늘었어요\" 어미 0건. IR 분석가 voice는 한영 혼용 IR 약어.",
      "**이모지·face emoji·미소·슬픈 표정 닷 등 친근 표정 아이콘 금지** — 본 팩에 없음.",
      "**3D·아이소메트릭·글래스모피즘·그라디언트·텍스처·노이즈·블러 전면 금지** — 평면 평면 평면.",
      "**둥근 막대(반경 12~16px 캡)·둥근 라인 캡·면적 채움 라인·면적 그라디언트 금지** — 직각 사각 막대 + 1.5px 점선 + 6×6 사각 마커가 양식.",
      "**차트 격자선·차트 박스 테두리·y축 라인 금지** — x축 1pt 검정선 + 데이터 라벨 직접 표기만.",
      "**흰 배경 슬라이드 금지(슬라이드 10 감사 제외)** — 모든 본문 슬라이드 배경 `#F2F2F2`. 흰색 캔버스 아님.",
      "**옐로우 위 흰 글씨 금지** — 옐로우 위 텍스트는 무조건 `#000000` 검정."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD56",
    "title": "산업통상부 슬로건 캘리그래피",
    "mood": "navy-mono-with-gold-cyan-accent · slogan-calligraphy-driven · asymmetric-card-grid + photo-fullscreen + map-pin-infographic · generous-breathing-slogan-dominant · none",
    "bestFor": "design-diversity premium · korea-gov-slogan-deck",
    "id": "ppt-motie-slogan-infographic",
    "background": [
      "Primary background/token: `#001838`"
    ],
    "colors": [
      {
        "role": "bg dark fullscreen",
        "label": "bg dark fullscreen",
        "hex": "#001838"
      },
      {
        "role": "bg dark signature",
        "label": "bg dark signature",
        "hex": "#002858"
      },
      {
        "role": "bg dark alt",
        "label": "bg dark alt",
        "hex": "#003070"
      },
      {
        "role": "bg light pale blue",
        "label": "bg light pale blue",
        "hex": "#E8F0F8"
      },
      {
        "role": "bg light cyan",
        "label": "bg light cyan",
        "hex": "#E8F8F8"
      },
      {
        "role": "bg light gray",
        "label": "bg light gray",
        "hex": "#F0F0F0"
      },
      {
        "role": "surface card white",
        "label": "surface card white",
        "hex": "#FFFFFF"
      },
      {
        "role": "text deep ink",
        "label": "text deep ink",
        "hex": "#1C2848"
      },
      {
        "role": "text on dark",
        "label": "text on dark",
        "hex": "#FFFFFF"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#5C6470"
      },
      {
        "role": "text breadcrumb",
        "label": "text breadcrumb",
        "hex": "#303040"
      },
      {
        "role": "navy 900 deepest",
        "label": "navy 900 deepest",
        "hex": "#001838"
      },
      {
        "role": "navy 800",
        "label": "navy 800",
        "hex": "#002048"
      },
      {
        "role": "navy 700 signature",
        "label": "navy 700 signature",
        "hex": "#002858"
      },
      {
        "role": "navy 600",
        "label": "navy 600",
        "hex": "#003070"
      },
      {
        "role": "navy 500 card label",
        "label": "navy 500 card label",
        "hex": "#004890"
      },
      {
        "role": "navy 400 label alt",
        "label": "navy 400 label alt",
        "hex": "#005890"
      },
      {
        "role": "blue 400 link",
        "label": "blue 400 link",
        "hex": "#0060C0"
      }
    ],
    "fonts": [
      "slogan_display: brush/calligraphy-style Korean lettering, 64-96pt, weight 900 visual mass, fallback Pretendard Black for editable text",
      "title: Pretendard ExtraBold, 34-44pt, tracking -0.02em, leading 1.12",
      "body: Pretendard Medium, 18-22pt, leading 1.45",
      "label: Pretendard SemiBold, 12-14pt, tracking 0.04em",
      "number: Pretendard Black, 52-72pt, tabular figures"
    ],
    "layout": [
      "slide.size: 13.33x7.5in",
      "spacing.margin_x_pct: 5",
      "spacing.margin_y_pct: 6",
      "slide.mode_slogan: full-screen calligraphy wordmark occupying 55-70% canvas width, supporting text in lower third",
      "slide.mode_map: Korea/world map silhouette as raster or SVG-like flat asset with 3-6 pin callouts, no chart grid",
      "slide.mode_card_grid: 2x2 or 3-column white cards on #001838/#002858 navy canvas, card padding 0.28-0.34in",
      "diagram.connector: thin cyan #00D8FF or yellow-green #B7F000 straight lines only; avoid curved spaghetti",
      "shape.radius: 8-14px for cards, 999px for pin badges",
      "image.treatment: heroic silhouette or monument cutout with navy overlay <=30%, never stock-photo collage"
    ],
    "signature": [
      "한국 정부 부처 업무보고 톤. 거대한 한글 캘리그래피 손글씨 슬로건이 풀스크린으로 박히고, 한반도·세계지도 인포그래픽과 영웅 실루엣(이순신 등), 시안+옐로그린 빛이 흐르는 다이어그램이 등장. 차트·표 없이 큰 숫자 카드만 — 정부·공공·정책 비전 발표, 국가 전략 보고에 어울립니다."
    ],
    "avoid": [
      "평범한 비즈니스 보고서 표·막대차트 중심 구성 — 이 스타일은 슬로건, 지도, 실루엣, 큰 숫자 카드가 주역.",
      "CSS gradient나 블러 배경 직접 구현 — 빛 효과가 필요하면 Sharp로 래스터 PNG를 만든 뒤 배치.",
      "파스텔 소비재 팔레트, 카카오/네이버식 친근 일러스트, 이모지 — 다크 네이비 정부 비전 톤을 유지.",
      "작은 본문을 빽빽하게 채우기 — 슬로건과 상징 이미지를 위해 넓은 여백과 큰 타이포그래피를 남긴다.",
      "복잡한 범례·축·격자선 차트 — 수치는 1~3개 대형 KPI 카드나 지도 핀 콜아웃으로 표현."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD57",
    "title": "과기정통부 정통 정부 라이트",
    "mood": "light-navy-pale-blue · pretendard-balanced · asymmetric-2col-with-ribbon · balanced · none",
    "bestFor": "design-diversity premium · korea-gov-navy-ribbon",
    "id": "ppt-msit-ai-three-powers",
    "background": [
      "Bg: `#E7F1FA`",
      "Surface: `#FFFFFF`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#E7F1FA"
      },
      {
        "role": "bg card",
        "label": "bg card",
        "hex": "#E0EEF9"
      },
      {
        "role": "bg softer",
        "label": "bg softer",
        "hex": "#F4F9FC"
      },
      {
        "role": "bg white",
        "label": "bg white",
        "hex": "#FFFFFF"
      },
      {
        "role": "surface",
        "label": "surface",
        "hex": "#FFFFFF"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#1C2848"
      },
      {
        "role": "text muted",
        "label": "text muted",
        "hex": "#3C4860"
      },
      {
        "role": "text caption",
        "label": "text caption",
        "hex": "#6B7787"
      },
      {
        "role": "text body alt",
        "label": "text body alt",
        "hex": "#333333"
      },
      {
        "role": "text on navy",
        "label": "text on navy",
        "hex": "#FFFFFF"
      },
      {
        "role": "navy signature",
        "label": "navy signature",
        "hex": "#002060"
      },
      {
        "role": "navy title",
        "label": "navy title",
        "hex": "#172A88"
      },
      {
        "role": "royal blue",
        "label": "royal blue",
        "hex": "#0F41BD"
      },
      {
        "role": "card header blue",
        "label": "card header blue",
        "hex": "#1A4BC6"
      },
      {
        "role": "highlight blue",
        "label": "highlight blue",
        "hex": "#2277F2"
      },
      {
        "role": "connector grey blue",
        "label": "connector grey blue",
        "hex": "#C5D3E2"
      },
      {
        "role": "accent 1",
        "label": "accent 1",
        "hex": "#002060"
      },
      {
        "role": "accent 2",
        "label": "accent 2",
        "hex": "#0F41BD"
      }
    ],
    "fonts": [
      "cover_main_title: **Pretendard**, 58pt, weight 800, tracking -0.02em, leading 1.15",
      "cover_meta_label: **Pretendard**, 16pt, weight 500",
      "body_main_title: **Pretendard**, 34pt, weight 700, tracking -0.015em, leading 1.3",
      "section_indicator: **Pretendard**, 15pt, weight 600",
      "review_capsule: **Pretendard**, 13pt, weight 600",
      "chip_header: **Pretendard**, 17pt, weight 700",
      "card_header: **Pretendard**, 15pt, weight 700",
      "card_body_keyword: **Pretendard**, 13pt, weight 700",
      "card_body: **Pretendard**, 11pt, weight 400, leading 1.5",
      "checklist_text: **Pretendard**, 11pt, weight 400, leading 1.45",
      "pill_card_number: **Pretendard**, 28pt, weight 800",
      "pill_card_caption: **Pretendard**, 13pt, weight 500",
      "pill_card_text: **Pretendard**, 14pt, weight 600, leading 1.3",
      "mini_pill_strip_label: **Pretendard**, 11pt, weight 700",
      "ribbon_label: **Pretendard**, 13pt, weight 700",
      "ribbon_keywords: **Pretendard**, 13pt, weight 500",
      "chart_value_label: **Pretendard**, 22pt, weight 700",
      "chart_category_label: **Pretendard**, 11pt, weight 400",
      "node_label_radial: **Pretendard**, 13pt, weight 700",
      "central_node_label: **Pretendard**, 15pt, weight 700",
      "radial_supporting_box_label: **Pretendard**, 12pt, weight 600",
      "timeline_quarter_label: **Pretendard**, 14pt, weight 800",
      "timeline_keyword: **Pretendard**, 11pt, weight 500, leading 1.4"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_left_pct: 3.5",
      "spacing.margin_right_pct: 3.5",
      "spacing.top_indicator_pct: 5",
      "spacing.title_zone_pct: 8-22",
      "spacing.body_zone_pct: 25-85",
      "spacing.ribbon_zone_pct: 89-100",
      "spacing.ribbon_height_pct: 11",
      "spacing.grid_columns: 12",
      "spacing.asymmetric_split_default: left 65% + right 35%",
      "spacing.card_gutter: 0.12in",
      "spacing.card_gutter_review: 0.15in",
      "spacing.card_gutter_pill: 0.25in",
      "spacing.card_inner_padding: 0.18in",
      "spacing.checklist_row_gap: 0.08in",
      "slide.size: 13.33x7.5in"
    ],
    "signature": [
      "한국 정부 부처 업무보고의 정통 라이트 톤. 옅은 하늘색 배경에 진한 네이비 글씨, 페이지 하단에 네이비 띠로 핵심 키워드 노출, 중앙 부처를 둘러싼 위성 노드의 거버넌스 다이어그램이 클라이맥스 — 정부·공공 정책 보고, 부처 업무계획, 행정 발표에 어울립니다.",
      "대한민국 과학기술정보통신부 2026년 업무계획(별첨2) 발표자료의 시각 언어를 9p PNG 1:1 mirror로 증류한 v3 팩이다. 옅은 블루(`#E7F1FA`) 배경 위에 딥 네이비(`#002060`) 본문 타이틀이 얹히는 **라이트 정통 정부 톤**이며, 본문 6페이지 + 클로징 1페이지를 일관되게 관통하는 시그니처는 **하단 11% 네이비 리본**이다(왼쪽 '상반기 핵심과제' 라벨 + 흰 텍스트로 콤마 구분된 핵심 키워드 3~4개). 본문 골격은 거의 항상 **좌 와이드 60~70% + 우 좁은 보조 30~40%의 비대칭 2-컬럼**이며, 시각적 클라이맥스는 마지막 본문 페이지의 **방사형 허브-스포크 거버넌스 다이어그램**(중앙 부처 + 8~12개 위성 노드 + `#C5D3E2` 가는 회색-옅은블루 직선 연결선 + 상하 보조 박스). 한 슬라이드를 보면 안다 — \"정부 보고서 톤인데 단조롭지 않은 비대칭 분할 + 네이비 리본 + 체크리스트(✓) + 블루→퍼플 알약 패턴.\""
    ],
    "avoid": [
      "**다크 프리미엄 테마 금지**. 이 팩은 라이트 정통 정부 톤. 진한 색은 하단 11% 리본과 본문 타이틀 텍스트뿐.",
      "**사이언/청록(turquoise/cyan) 메인 사용 금지**. 그라디언트는 p-3 알약 카드 블루→퍼플 + 표지 배경 + p-4 'AI' 박스 한정.",
      "**카드 내부 그라디언트 금지**. 표면 단색.",
      "**거대 수치 디스플레이(80pt 이상) 금지**. 원본에 없다. 100~140pt 'GPU 26만장' 같은 hero 수치 카드 만들지 말 것.",
      "**'1·2·3 순위 카드' 금지**. p-3의 01/02/03은 병렬 번호이지 순위가 아니다. 왕관(crown) 글리프, 골드 마커, 1위 강조 막대, rank-1/2/3 위계 모두 금지.",
      "**균등 6분할 그리드 금지**. 본문은 비대칭 다분할(상2+하3 또는 좌 와이드+우 좁은 보조)이 시그니처. 6 균등 셀 그리드 만들지 말 것.",
      "**\"부총리 부처 격상\", \"17년 만의 부활\", \"deputy PM\", \"부총리·17년·부활\" 류 라벨 사용 절대 금지**. 원본 9페이지 어디에도 없는 키워드. 절대 임의로 추가하지 말 것.",
      "**3D 효과·드롭 섀도·글래스모피즘·발광 글로우 금지**. 평면 인포그래픽이다(p-9 옅은 배경 글로우 ~20%만 예외).",
      "**무지개색 차트 금지**. 강조색 1색의 단색 막대만.",
      "**모노스페이스 폰트(IBM Plex Mono 등) 금지**. 등폭 숫자 흔적 없음.",
      "**이모지 불릿·클립아트·의미 없는 스톡 아이콘 금지**. 평면 모노크롬 블루 아이콘만.",
      "**차트 종류 발명 금지**. 막대 2개짜리 미니 차트 1개만 허용. 라인·파이·도넛·3D 모두 금지."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD58",
    "title": "기획재정부 시네마틱 브리핑",
    "mood": "multi · mixed · hybrid · medium · minimal",
    "bestFor": "design-diversity premium · korea-gov-cinematic-briefing",
    "id": "ppt-moef-fiscal-blue",
    "background": [
      "Primary background/token: `#05091A`"
    ],
    "colors": [
      {
        "role": "bg dark",
        "label": "bg dark",
        "hex": "#05091A"
      },
      {
        "role": "bg dark alt 1",
        "label": "bg dark alt 1",
        "hex": "#040716"
      },
      {
        "role": "bg dark alt 2",
        "label": "bg dark alt 2",
        "hex": "#050818"
      },
      {
        "role": "bg dark alt 3",
        "label": "bg dark alt 3",
        "hex": "#050B1E"
      },
      {
        "role": "bg dark alt 4",
        "label": "bg dark alt 4",
        "hex": "#07111F"
      },
      {
        "role": "bg body plate",
        "label": "bg body plate",
        "hex": "#F2F3F4"
      },
      {
        "role": "bg body plate alt 1",
        "label": "bg body plate alt 1",
        "hex": "#F2F3F5"
      },
      {
        "role": "bg body plate alt 2",
        "label": "bg body plate alt 2",
        "hex": "#F2F3F3"
      },
      {
        "role": "bg closing black",
        "label": "bg closing black",
        "hex": "#000000"
      },
      {
        "role": "header bar",
        "label": "header bar",
        "hex": "#0D1627"
      },
      {
        "role": "header bar glow left",
        "label": "header bar glow left",
        "hex": "#003F7B"
      },
      {
        "role": "footer bar",
        "label": "footer bar",
        "hex": "#0D1627"
      },
      {
        "role": "surface box",
        "label": "surface box",
        "hex": "#FFFFFF"
      },
      {
        "role": "surface box alt",
        "label": "surface box alt",
        "hex": "#E6E8EB"
      },
      {
        "role": "surface action box band",
        "label": "surface action box band",
        "hex": "#E5ECF2"
      },
      {
        "role": "memo paper cream",
        "label": "memo paper cream",
        "hex": "#FCFCF6"
      },
      {
        "role": "text",
        "label": "text",
        "hex": "#0D1627"
      },
      {
        "role": "text alt",
        "label": "text alt",
        "hex": "#1B394B"
      }
    ],
    "fonts": [
      "cover_title: **Malgun Gothic**, 54pt, weight 900, leading 1.2, fallback Pretendard, Noto Sans KR, sans-serif",
      "cover_subtitle: **Malgun Gothic**, 18pt, weight 700, fallback Pretendard, Noto Sans KR, sans-serif",
      "cover_date: **Malgun Gothic**, 14pt, weight 400, fallback Pretendard, Noto Sans KR, sans-serif",
      "agenda_label: **Malgun Gothic**, 50pt, weight 700, fallback Pretendard, Noto Sans KR, sans-serif",
      "agenda_item: **Malgun Gothic**, 24pt, weight 700, fallback Pretendard, Noto Sans KR, sans-serif",
      "divider_title: **Malgun Gothic**, 42pt, weight 700, fallback Pretendard, Noto Sans KR, sans-serif",
      "body_header_title: **Malgun Gothic**, 28pt, weight 700, leading 1.25, fallback Pretendard, Noto Sans KR, sans-serif",
      "pill_box_header: **Malgun Gothic**, 20pt, weight 700, fallback Pretendard, Noto Sans KR, sans-serif",
      "category_badge: **Malgun Gothic**, 12pt, weight 700, fallback Pretendard, Noto Sans KR, sans-serif",
      "body_paragraph: **Malgun Gothic**, 14pt, weight 400, leading 1.45, fallback Pretendard, Noto Sans KR, sans-serif",
      "timeline_month_label: **Malgun Gothic**, 16pt, weight 700, fallback Pretendard, Noto Sans KR, sans-serif",
      "timeline_callout_line1: **Malgun Gothic**, 14pt, weight 700, fallback Pretendard, Noto Sans KR, sans-serif",
      "timeline_callout_line2: **Malgun Gothic**, 16pt, weight 700, fallback Pretendard, Noto Sans KR, sans-serif",
      "subthesis_with_hanja_echo: **Malgun Gothic**, 24pt, weight 700, fallback Pretendard, Noto Sans KR, sans-serif",
      "page_indicator: **Malgun Gothic**, 11pt, weight 400, fallback Pretendard, Noto Sans KR, sans-serif",
      "chart_value_emphasis: **Malgun Gothic**, 22pt, weight 700, fallback Pretendard, Noto Sans KR, sans-serif",
      "chart_topic_label: **Malgun Gothic**, 11pt, weight 400, fallback Pretendard, Noto Sans KR, sans-serif",
      "chart_axis_label: **Malgun Gothic**, 10pt, weight 400, fallback Pretendard, Noto Sans KR, sans-serif",
      "chart_yellow_callout: **Malgun Gothic**, 12pt, weight 700, fallback Pretendard, Noto Sans KR, sans-serif",
      "takeaway_below_chart: **Malgun Gothic**, 16pt, weight 700, leading 1.35, fallback Pretendard, Noto Sans KR, sans-serif",
      "closing_main_line_1: **Malgun Gothic**, 40pt, weight 900, fallback Pretendard, Noto Sans KR, sans-serif",
      "closing_main_line_2: **Malgun Gothic**, 32pt, weight 700, fallback Pretendard, Noto Sans KR, sans-serif",
      "closing_submark: **Malgun Gothic**, 18pt, weight 700, fallback Pretendard, Noto Sans KR, sans-serif",
      "closing_thanks: **Malgun Gothic**, 22pt, weight 700, fallback Pretendard, Noto Sans KR, sans-serif"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.slide_size: 13.33x7.5in",
      "spacing.aspect: 16:9",
      "spacing.header_bar_height_pct: 12.8",
      "spacing.body_plate_y_pct: 12.8 to 93",
      "spacing.body_plate_height_pct: 80.2",
      "spacing.footer_bar_height_pct: 7.0",
      "spacing.body_inner_margin_x_pct: 3",
      "spacing.body_inner_margin_y_pct: 2",
      "spacing.header_glow_radius_pct: 40",
      "spacing.header_bottom_accent_line_px: 1",
      "spacing.footer_page_indicator_position: right edge (x ≈ 96%), vertically centered in footer bar",
      "spacing.agency_underline_height_px: 3-4 amber-gold #FFD966 line directly below header bar (narrative-as-agency-page mirror)",
      "spacing.grid_columns: variable per slide kind: 2-column / 2x2 quadrant / 2x3 module / 3-panel / 6-icon ribbon / central giant shape + satellites / 5-tier horizontal stack",
      "spacing.panel_gap_3panel_chart_px: 16",
      "spacing.panel_3_chart_widths_pct: 31, 31, 31"
    ],
    "signature": [
      "한국 기획재정부 업무보고처럼 다크 네이비 표지·구분면과 오프화이트 본문이 교차하는 시네마틱 정부 브리핑 톤. 매 페이지마다 핵심 단어 1~3글자에 노란 형광펜을 그어 강조하고, 가로 화살표 리본·라인 차트·거대 원 다이어그램이 시그니처 — 정부 거시 정책 발표, 경제 전망, 예산 브리핑에 어울립니다.",
      "한눈에 알아보는 단서: (1) 표지·목차·디바이더·마무리는 다크 네이비 `#05091A` 라디얼 스포트라이트 배경(중앙-하단 cyan 글로우 + 코너 동심원 arc), 본문 페이지는 상단 다크네이비 헤더바(12.8%) · 중앙 오프화이트 `#F2F3F4` 플레이트(80%) · 하단 다크네이비 푸터바(7%)의 3단 샌드위치 — 슬라이드를 펴면 시네마처럼 어둠 → 종이 → 어둠 순으로 흐른다, (2) 본문 모든 페이지의 헤더 제목 끝에 콜론 `:`을 두고 1~3 글자 핵심 키워드를 **노란 `#FFFF00` 형광 마커** 사각 배지(z-order 맨 뒤) 위에 검정 텍스트로 얹은 한 구절이 박혀 있다 — 표지의 한자 `大`도 96pt로 노란 형광 위에 흰 텍스트로 얹히고, 마무리에서도 `大` 60pt가 한 번 더 echo된다. 이 노란 한 구절이 덱의 알파-오메가 시그니처, (3) 4색 브랜드 팔레트(sky `#1F91DF` / teal `#20988F` / royal `#4472C4` / purple `#5464A6`)의 둥근 모서리 컬러 필 pill 박스 헤더 + 가로 rasterized/SVG 화살표 리본(navy→teal→cyan, flat #20988F fallback) + 중앙 거대 원·다이아몬드 + 3패널 단일 라인 차트 + 5단 수직 rasterized PNG/Sharp 밴드(flat-token fallback) + 손글씨 메모 오버레이 6종이 다이어그램 키트의 전부다 — **헤어라인 격자 표 한 장 없고 IBM Plex Mono 한 글자 없고 96pt Light 로마숫자 디바이더 없다**. 타 정부 팩(보수 흑백 백서, 산업부 슬로건 일러스트, 과기부 거대 수치 인포그래픽, 국토부 5극 지도, 고용부 친근 메시지)과 달리 이 팩은 \"다크 시네마틱 + 형광 마커 + 컬러 필 모듈\"이 정체성이다.",
      "diagram.language: rounded color-filled pill headers (radius 24px) in 4 brand colors + content boxes (radius 6-10px) with white fill + 0.5pt hairline border or micro shadow; yellow fluorescent highlight rectangle on header keyword (MANDATORY per body page, exception slide 4 p-04 mirror and slide 5 p-05 mirror where yellow appears in body callouts instead); central giant circles/diamonds for conceptual diagrams; horizontal rasterized/SVG arrow ribbons for timelines; 5-tier vertical rasterized PNG/Sharp band stacks for diplomacy/security pages with flat-token fallback; tilted handwritten memo overlay for narrative one-off; no CSS gradients",
      "diagram.kit_a_arrow_ribbon_milestones: horizontal arrow shape (width 90% slide, height ~16%), fill with a pre-rendered navy #425C8C → teal #20988F → cyan #04AFE3 PNG ribbon asset (Sharp rasterization; flat #20988F fallback), arrowhead at end; 6 drop-pin icon containers at x centers [10, 24, 40, 56, 70, 86]% above the ribbon (fill #E0E5EB, dark line-art glyph inside, tip touches ribbon); month label 16pt Bold white above each pin; 2-line callout INSIDE ribbon per pin (line 1 on yellow fluorescent rect 14pt Bold black on 3 of 6, line 2 white bold 16pt). Mirrors p-04. Variation: vertical 5-tier policy banner stack on slide 8 (each tier a different brand pill).",
      "diagram.kit_b_central_giant_circle_dual: two giant circles in central horizontal band, diameter ~28% slide width, slightly adjacent or overlapping. Left = sky #1F91DF solid with '기회' Black 56pt white (x center 36%, y center 50%). Right = deep blue #283473 solid with '도전' Black 56pt white (x center 62%, y center 50%). 3 satellite boxes radiate from each circle (white fill + 0.5pt #D1D5DB border + optional mini chart icon). Bottom auxiliary callout below 기회 circle. Mirrors p-06.",
      "diagram.kit_c_central_diamond_quadrants: single diamond (45deg rotated square) at slide center, fill deep navy #1A223F, w ≈ 22%, h ≈ 30%, with 3-line slogan in white Bold 16pt (text in non-rotated text box overlaid). 4 quadrant rectangles orbit: TOP wide (royal #4472C4 pill), RIGHT tall (purple #564C92 pill), BOTTOM wide (royal pill), LEFT tall (royal pill). Mirrors p-18 (조달청).",
      "diagram.kit_d_color_fill_box_module: pill header (radius 24px, 4-color brand fill, white bold 20pt) + small yellow/amber category badge to the LEFT or top-left ('국정과제 N' / '2026 업무추진방향:' / '1월중, 관계부처 합동') + content box (white fill, radius 6-10px, 0.5pt hairline or micro shadow) with body paragraph and inline yellow fluorescent keyword highlight. Arranged in 2-column / 2x2 / 2x3 / 3-column / 2-col-plus-bottom-band grids. Mirrors p-09 (slide 7) and p-11/p-13 patterns. THE workhorse module of body pages.",
      "diagram.kit_e_3panel_single_line_chart: see chart.signature — 3 equal-width panels (widths 31% each, gap 2.5%) with pill header + bracketed topic label + monochrome line (sky/green/purple) + emphasis point with big bold panel-color value + 2-line takeaway. Mirrors p-05.",
      "diagram.kit_f_five_tier_band_stack: 5 horizontal bands stacked vertically (each h ≈ 13%, y start 18%). Each band = left 30% colored label section (rasterized PNG/Sharp or SVG/local asset vertical tier sequence top-to-bottom: royal #4987BF → purple #5464A6 → teal #20988F → cyan #28A4CA → lighter cyan #04AFE3, with flat-token fallback per band; no CSS gradients) + right 70% white content section with bullets. Tier label white Bold 18pt inside colored band. Header has TWO yellow keywords (e.g. '전략투자' + '경제안보'). Mirrors p-12.",
      "diagram.kit_g_handwritten_memo_overlay: ONE-OFF creative motif — used only on slide 9 narrative. Header subthesis: ''26년을 \"한국경제 [大] 도약 원년\"으로' with '大' at 36pt yellow fluorescent echo of cover signature. Central tilted (-8deg) cream paper (#FCFCF6, w ≈ 35%, h ≈ 55%) + soft drop shadow + red+black marker-style handwritten content. 6 small numbered circular badges (diameter ~8%, fan arrangement 3 left + 3 right) in colors [sky, teal, purple, royal, sky, purple] each labeled with one of the 6 policy axes (01 경제활력 / 02 잠재성장률 / 03 민생안정 / 04 전략적 글로벌 / 05 적극적 국부 / 06 재정·세제·공공 혁신). Hairline gray dotted connectors from badge to memo. Mirrors p-07."
    ],
    "avoid": [
      "❌ 순백 `#FFFFFF` 배경(본문 콘텐츠 박스 fill 제외, 슬라이드 전체 배경 금지).",
      "❌ 헤어라인 격자 표(이 덱에는 한 장도 없다). 표 본문 모듈 자체 금지 — 컬러 필 박스 또는 2x2/2x3 module grid로 대체.",
      "❌ 페어 차트(좌 막대 + 우 라인 6:6 분할 + 사이 수직 헤어라인 룰).",
      "❌ 100% 가로 적층 막대 / 도넛 / 파이 / 3D / 트리맵 / 무지개 시리즈 / 이중축.",
      "❌ 챕터번호 + 워드마크 + 페이지 3분할 헤더 레일(`II-1 / MOEF 2026 ANNUAL POLICY BRIEF / 03 / 10` 같은 백서 양식). 출처 각주 좌 + 페이지 우 푸터 레일.",
      "❌ **IBM Plex Sans·Mono 등폭 숫자 일체 금지**, 영문 워드마크 라인, tabular numerals.",
      "❌ 단색 진청 `#1E3A8A` 한 점만 액센트(반드시 4색 브랜드 팔레트 sky/teal/royal/purple 사용). `#003478` 보조 진청도 금지.",
      "❌ **노란 형광 시그니처 누락** — 매 본문 페이지 헤더 키워드 + 표지·마무리 `大`자에 노란 `#FFFF00` 배지 의무. 누락 시 슬라이드 불합격.",
      "❌ **거대 96pt Light 로마 숫자 디바이더** — 디바이더 헤딩은 ~42pt Bold + 화면 정중앙 정렬 2줄, 로마 숫자만 한글보다 ~10pt 큼. 96pt Light·흰 배경·진청 1pt rule·영문 라벨(`SECTION 02 — FISCAL POLICY` 같은 라인) 일체 금지.",
      "❌ CSS gradient를 컬러 필 박스에 사용 금지. 예외 영역(라인 chart, 화살표 리본, 표지·디바이더 라디얼 글로우, p-12 수직 시퀀스)은 rasterized PNG/Sharp 또는 SVG/local asset과 flat-token fallback으로만 구현.",
      "❌ 드롭 섀도우 과다, 글로우 효과(헤더바 좌상 라디얼 글로우와 표지·디바이더·마무리 라디얼 스포트라이트, 손글씨 메모 soft shadow, 콘텐츠 박스 미세 shadow 외 모두 금지).",
      "❌ 발표 영상에서 흐릿해지는 12pt 이하 본문 텍스트. 슬라이드당 핵심 메시지 1개."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD59",
    "title": "문체부 K-컬처 라벤더",
    "mood": "pastel-accent · mixed · hybrid · medium · static",
    "bestFor": "design-diversity premium · korea-gov-kculture-lavender",
    "id": "ppt-mcst-k-culture",
    "background": [
      "Primary background/token: `#EEF2F7`"
    ],
    "colors": [
      {
        "role": "page bg main",
        "label": "page bg main",
        "hex": "#EEF2F7"
      },
      {
        "role": "page bg alt cool",
        "label": "page bg alt cool",
        "hex": "#E7EDF5"
      },
      {
        "role": "page bg split left",
        "label": "page bg split left",
        "hex": "#E5ECF4"
      },
      {
        "role": "page bg closing left",
        "label": "page bg closing left",
        "hex": "#E2E9EE"
      },
      {
        "role": "navy text 900",
        "label": "navy text 900",
        "hex": "#32355D"
      },
      {
        "role": "navy text alt 1",
        "label": "navy text alt 1",
        "hex": "#30355C"
      },
      {
        "role": "navy text alt 2",
        "label": "navy text alt 2",
        "hex": "#2A2D55"
      },
      {
        "role": "navy cover title",
        "label": "navy cover title",
        "hex": "#022853"
      },
      {
        "role": "navy cover title alt",
        "label": "navy cover title alt",
        "hex": "#0B2A4F"
      },
      {
        "role": "text white",
        "label": "text white",
        "hex": "#FFFFFF"
      },
      {
        "role": "text muted body",
        "label": "text muted body",
        "hex": "#5C5C63"
      },
      {
        "role": "text muted caption",
        "label": "text muted caption",
        "hex": "#8E93A7"
      },
      {
        "role": "text axis label",
        "label": "text axis label",
        "hex": "#A5A5A5"
      },
      {
        "role": "lavender indicator signature",
        "label": "lavender indicator signature",
        "hex": "#7285E4"
      },
      {
        "role": "lavender pastel divider veil",
        "label": "lavender pastel divider veil",
        "hex": "#BCC4F2"
      },
      {
        "role": "lavender pastel alt",
        "label": "lavender pastel alt",
        "hex": "#BDC5F3"
      },
      {
        "role": "lavender pill light",
        "label": "lavender pill light",
        "hex": "#C2CAF6"
      },
      {
        "role": "lavender dark block",
        "label": "lavender dark block",
        "hex": "#444F85"
      }
    ],
    "fonts": [
      "cover_title: **Pretendard**, 64pt, weight 900, leading 1.18, fallback Noto Sans KR, sans-serif",
      "cover_subtitle: **Pretendard**, 14pt, weight 400",
      "section_divider_h1: **Pretendard**, 52pt, weight 900, leading 1.18",
      "page_eyebrow: **Pretendard**, 14pt, weight 500",
      "outline_pill_section_label: **Pretendard**, 18pt, weight 700",
      "page_h1_hero: **Pretendard**, 44-52pt, weight 900, leading 1.18",
      "card_header_pill: **Pretendard**, 20pt, weight 700",
      "card_body_lead: **Pretendard**, 17pt, weight 700, leading 1.45",
      "card_body_text: **Pretendard**, 14pt, weight 400, leading 1.55",
      "card_inner_dashed_divider",
      "matrix_quadrant_label: **Pretendard**, 22pt, weight 700",
      "number_badge_large: **Pretendard**, 24pt, weight 900",
      "number_badge_small: **Pretendard**, 14pt, weight 700",
      "kculture_brown_pill_label: **Pretendard**, 24pt, weight 700",
      "inner_navy_pill_3col: **Pretendard**, 16pt, weight 700",
      "chevron_arrow_bullet",
      "chart_value_label: **Pretendard**, 14pt, weight 700",
      "chart_axis_label: **Pretendard**, 10pt, weight 400",
      "x2_marker_text: **Pretendard**, 14pt, weight 700",
      "kpi_card_pill_header: **Pretendard**, 18pt, weight 700",
      "kpi_card_body: **Pretendard**, 16pt, weight 700, leading 1.45",
      "cta_button_text: **Pretendard**, 16pt, weight 700",
      "page_caption_footer: **Pretendard**, 11pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.slide_size: 13.33x7.5in",
      "spacing.slide_size_px: 1280x720",
      "spacing.slide_size_emu: 12192000x6858000",
      "spacing.page_margin_top_pct: 5.5",
      "spacing.page_margin_right_pct: 4.8",
      "spacing.page_margin_bottom_pct: 5.5",
      "spacing.page_margin_left_pct: 4.8",
      "spacing.header_zone_y_pct: 4.5, 11.0",
      "spacing.h1_zone_y_pct: 13.0, 26.0",
      "spacing.main_content_y_pct: 28.0, 88.0",
      "spacing.footer_deco_y_pct: 88.0, 96.0",
      "spacing.header_rule_line_px: 1",
      "spacing.header_rule_color: #C8E1EE",
      "spacing.footer_page_indicator: NONE",
      "spacing.card_grid_two_up.col_count: 2"
    ],
    "signature": [
      "한국 문화체육관광부 K-컬처 업무보고 톤. 옅은 라벤더 강조점과 한지·한복 갈색 라벨, 풀-블리드 라벤더 베일이 깔린 섹션 표지, ▶▶ 갈매기 화살표 불릿이 시그니처 — 문화·예술·관광 정책 발표, K-콘텐츠 비전, 문화 산업 보고에 어울립니다.",
      "한눈에 알아보는 단서: (1) 페이지 상단 좌측 이브라우(`지난 6개월간 성과` `문화체육관광부 업무보고` `10대 핵심과제`) 좌측에 항상 라벤더 `#7285E4` 작은 점 또는 짧은 막대가 박혀 있다 — 다른 부처(기재부 노랑 형광, 산자부 빨강, 과기부 진청)가 빨강·주황·노랑을 시그니처로 쓸 때 문체부는 **라벤더-퍼플** 한 색으로 문화·예술 감성을 표현한다. (2) 본문 페이지의 카드는 예외 없이 **둥근 navy `#32355D` pill 헤더(radius 999px 풀 라운드) + 흰 본문 박스 + dashed 1px `#DDE2EE` 내부 구분선**의 단일 anatomy로 통일. 3-up·2-up·4-up 어디서나 같은 어휘. (3) Ⅰ~Ⅳ 섹션 디바이더는 K-컬처 실사 사진(전통시장·K-팝 관객·제트엔진·청사초롱)을 풀-블리드로 깔고 라벤더 `#BCC4F2` 반투명 베일(alpha 0.6~0.7)을 씌운 뒤 흰 큰 H1 + 좌상단 outline pill `Ⅰ 10대 핵심과제`를 얹는 패턴이 정확히 4회 반복. (4) 핵심 메시지·정책 불릿은 `●`·`▶`·`■` 대신 **두 갈매기 V 화살표 ▶▶**로 좌측 정렬해 진행·전환 의미를 비주얼화한다. (5) K-관광 3천만 차트 슬라이드(p-20)는 라인 차트(KR navy / JP red dashed) + 미래 구간 노란 음영 + 'X2' 빨강 격차 마커 + 우측 KPI 카드 + 위쪽 화살표 + 빨강 CTA 버튼 5요소를 한 슬라이드에 정밀 결합 — 정부 PPT에서 보기 드문 다요소 비주얼 통합. 이 5개가 빠지면 이 팩이 아니다.",
      "diagram.kit_a_matrix_2x2_plus_list: p-07 = p02-agenda — Left 60% 2x2 matrix (K-컬처/문화창조/동반성장/토대구축 four quadrants, each rounded radius 12px with white or navy bold 22pt category label) + Right 40% ①~⑩ numbered list with small navy outline circle badges. SIGNATURE.",
      "diagram.kit_b_industry_tree: p-13 = p06-diagram — Central K-컬처 brown pill (#8F6F56 fill, white 24pt 'K-컬처 산업') + Left outline navy box containing 3 inline navy pills (콘텐츠/문화/예술) + Right 3 flat human illustrations (Made With Korea / K-브랜드 호감도 / 소비재 수출). Container = 1.5pt navy rounded outline radius 16px. SIGNATURE.",
      "diagram.kit_c_navy_pill_cards: p-03/p-04/p-05/p-06/p-10/p-11/p-15/p-16/p-23/p-24 = p07-cards/p08-comparison — Single anatomy: rounded 999px navy pill header (white 20pt) + white body box radius 8px with dashed #DDE2EE 1px internal divider + navy bold 17pt lead + muted 14pt detail rows. 2-up / 3-up / 4-up grids. THE workhorse module.",
      "diagram.kit_d_chevron_narrative: p-19/p-21/p-22/p-04 = p09-narrative — Left 55% four-five ▶▶ chevron-arrow lines (navy #32355D 22pt double-V + navy bold 18pt message text) + Right 45% companion visual (world-map dot network #67A0A6 / illustration / photo / phone mockup). SIGNATURE.",
      "diagram.kit_e_chart_kpi_cta: p-20 = p05-chart — see chart.signature. Five elements: line chart + future zone + X2 markers + KPI card + red CTA button.",
      "diagram.lavender_indicator_signature: MANDATORY top-left eyebrow lavender #7285E4 dot/bar on every body page. Pack identity rule — if missing, slide fails QA.",
      "diagram.section_divider_veil: MANDATORY full-bleed K-culture photo + #BCC4F2 alpha 0.65 lavender veil on every Ⅰ~Ⅳ section divider. Four occurrences (one per section).",
      "diagram.render: SVG/PPT shapes — no div blocks, no anti-aliased fallback, micro shadows OK on card body, cover sweep must be rasterized PNG/Sharp or SVG asset with flat fallback (NOT on pills/cards/CTA); no CSS gradients"
    ],
    "avoid": [
      "라벤더 `#7285E4` 누락 — 매 본문 페이지 상단 이브라우 좌측에 라벤더 점/막대 의무. 누락 시 슬라이드 불합격.",
      "라벤더 `#7285E4`를 인디케이터 외 위치(카드 헤더·차트 라인·CTA 등)에 사용 금지. 시그니처 한 색은 한 위치에서만.",
      "K-컬처 브라운 `#8F6F56`을 다이어그램 중앙 라벨·일러스트 자연 톤 외 위치에 사용 금지. 본문 텍스트·카드 헤더에 브라운 사용 금지.",
      "카드 anatomy 변형 금지 — 모든 카드는 둥근 navy pill 헤더(radius 999px) + 흰 본문 + dashed 1px 내부 구분선의 단일 양식. 사각 헤더·그라데이션 헤더·테두리 헤더 금지.",
      "Ⅰ~Ⅳ 섹션 디바이더의 라벤더 베일 alpha를 0.5 미만(사진 너무 진함)이나 0.85 이상(베일 너무 진함)으로 설정 금지. 0.6~0.7 사이 유지.",
      "정부 엠블럼을 본문 페이지에 크게 표시 금지. 표지·종결만 명확, 본문은 우상단 1.5%×3% 매우 작은 사이즈만.",
      "일반 ●·▶·■ 불릿 사용 — 핵심 정책 페이지(p04 형식 / p09 형식)에는 ▶▶ 갈매기 의무. 일반 불릿은 카드 내부 본문에만.",
      "페이지 번호 푸터 인디케이터 추가 금지 — 이 덱은 페이지 번호 표시 없음. 푸터는 모서리 도트 데코만.",
      "영문 워드마크 라인(`MCST 2026 ANNUAL POLICY BRIEF` 같은) 추가 금지. 헤더·푸터에 영문 라벨 일체 없음.",
      "CSS gradient를 카드·pill·다이어그램에 사용 금지. 표지 sweep BG는 rasterized PNG/Sharp 또는 SVG/local asset과 flat fallback으로만 구현하고, 차트 미래 음영은 단색만 허용.",
      "드롭 섀도우 과다·글로우·블러 효과. 카드 본체의 매우 옅은 rgba(50,53,93,0.06) 그림자만 허용.",
      "24pt 이하 본문 텍스트(발표 거리 6m에서 흐릿). 슬라이드당 핵심 메시지 1개."
    ],
    "collection": "design-diversity"
  },
  {
    "number": "DD60",
    "title": "통일부 한반도 평화공존",
    "mood": "dark · mixed · strict-grid · balanced · subtle",
    "bestFor": "design-diversity premium · korea-gov-peace-coexistence",
    "id": "ppt-unikorea-peace-coexistence",
    "background": [
      "Bg: `#050829`"
    ],
    "colors": [
      {
        "role": "bg",
        "label": "bg",
        "hex": "#050829"
      },
      {
        "role": "bg header top",
        "label": "bg header top",
        "hex": "#02072B"
      },
      {
        "role": "bg header mid",
        "label": "bg header mid",
        "hex": "#02153D"
      },
      {
        "role": "bg header accent",
        "label": "bg header accent",
        "hex": "#001B4A"
      },
      {
        "role": "surface card white",
        "label": "surface card white",
        "hex": "#FFFFFF"
      },
      {
        "role": "surface card pale blue",
        "label": "surface card pale blue",
        "hex": "#EDF4FD"
      },
      {
        "role": "surface card light blue",
        "label": "surface card light blue",
        "hex": "#D7E6FB"
      },
      {
        "role": "surface card gray",
        "label": "surface card gray",
        "hex": "#EAEDF2"
      },
      {
        "role": "surface card gray dark",
        "label": "surface card gray dark",
        "hex": "#E0E5EC"
      },
      {
        "role": "text on dark",
        "label": "text on dark",
        "hex": "#FFFFFF"
      },
      {
        "role": "text on dark secondary",
        "label": "text on dark secondary",
        "hex": "#C9D9E6"
      },
      {
        "role": "text on dark muted",
        "label": "text on dark muted",
        "hex": "#9D9DAE"
      },
      {
        "role": "text on card",
        "label": "text on card",
        "hex": "#050829"
      },
      {
        "role": "text on card secondary",
        "label": "text on card secondary",
        "hex": "#1E213F"
      },
      {
        "role": "text tag indigo",
        "label": "text tag indigo",
        "hex": "#08306C"
      },
      {
        "role": "accent primary blue",
        "label": "accent primary blue",
        "hex": "#105FD2"
      },
      {
        "role": "accent deep navy",
        "label": "accent deep navy",
        "hex": "#08306C"
      },
      {
        "role": "accent card tag blue",
        "label": "accent card tag blue",
        "hex": "#266ED6"
      }
    ],
    "fonts": [
      "calligraphy_display: **나눔 손글씨 펜**, weight 400, fallback KCC 도담돋움 손글씨, Pretendard, sans-serif",
      "display: **Pretendard**, 32-38pt, weight 800, tracking -0.02em, fallback Noto Sans KR, Malgun Gothic, sans-serif",
      "subhead: **Pretendard**, 20-24pt, weight 600",
      "body: **Pretendard**, 12-14pt, weight 400, leading 1.5, fallback Noto Sans KR",
      "card_headline: **Pretendard**, 16-18pt, weight 600",
      "tag_label: **Pretendard**, 10-12pt, weight 600",
      "roman_numeral: **Pretendard**, 18-24pt, weight 700",
      "narrative_index_number: **Pretendard**, 28pt, weight 800",
      "breadcrumb: **Pretendard**, 10-11pt, weight 400",
      "value_label: **Pretendard**, 14pt, weight 600",
      "caption: **Pretendard**, 9-10pt, weight 400"
    ],
    "layout": [
      "spacing.unit: 8",
      "spacing.margin_x: 0.5in",
      "spacing.margin_y: 0.4in",
      "spacing.card_internal_padding: 0.2in",
      "spacing.card_gap: 0.2-0.3in",
      "spacing.header_zone_pct: 0-6",
      "spacing.title_zone_pct: 8-22",
      "spacing.body_zone_pct: 22-85",
      "spacing.footer_zone_pct: 88-96",
      "spacing.grid_columns: 12",
      "slide.size: 13.33x7.5in",
      "slide.native_pixels: 1280x720",
      "slide.aspect_ratio: 16:9",
      "slide.header_band: 0-6% 다크 풀-블리드 + 좌 breadcrumb + 우 통일부 BI 워터마크",
      "slide.title_band: 8-22% 좌측 정렬(들여쓰기 4%), Pretendard ExtraBold 32-38pt 흰색 + 키워드 #F59751",
      "slide.body_band: 22-85% 흰 카드 그리드 (3/4-column 또는 2-column 비교)"
    ],
    "signature": [
      "한국 통일부 한반도 평화공존 업무보고 톤. 다크 네이비 풀-블리드 위에 흰 카드가 떠있고, 표지와 종결 페이지에 한반도 발광 지도(북측 레드 글로우 / 남측 시안 글로우)가 거울처럼 박힌 북엔드 모티프 — 외교·통일·평화·국제관계 정책 발표, 정상회담 자료에 어울립니다.",
      "한눈에 알아보는 단서 다섯 가지: (1) 전 슬라이드 다크 네이비 `#050829` 풀-블리드 — 일반 흰 배경 정부 보고서와 정반대, (2) 표지·종결에 **한반도 발광 지도**가 동일 형태로 박힌 '책의 북엔드' 모티프(북측 레드 글로우 `#A41729` / 남측 시안 글로우 `#5794C3` — 분단을 색으로 표현하되 같은 다크 캔버스에 함께 배치해 '평화공존' 시각화), (3) 손글씨 캘리그래피 슬로건이 슬라이드당 정확히 1회 등장(오렌지 `#F59751` 또는 종결 골드 `#FFFF66`), (4) Roman numeral(Ⅰ·Ⅱ·Ⅲ·Ⅳ)이 `#105FD2` 또는 `#08306C` 원 안에 흰색으로 박혀 목차·breadcrumb·내러티브 번호를 일관 표기, (5) 본문 카드는 흰색/페일블루로 다크 위에 떠 있고 카드 좌측에 `#105FD2` 컬러 스트립 5~10% 폭. 우상단에 통일부 BI 자리(흰 워터마크)가 본문 페이지 동일 위치 고정.",
      "diagram.language: 흰 카드 노드(모서리 6-8px, 그림자) + 좌측 #105FD2 컬러 스트립 + 좌상단 Roman numeral 원 또는 큰 #08306C 인덱스 원, 커넥터 1.5pt #105FD2 직각 화살표(화살촉 6px 삼각), 강조 = 듀얼(좌 #105FD2 / 우 #A41729)",
      "diagram.process_flow: 3-4단계 흰 카드 노드(높이 1.0in, 모서리 6-8px, 그림자), 노드 좌측 #105FD2 컬러 스트립, 좌상단 Roman numeral 원, 노드 사이 1.5pt #105FD2 직각 커넥터 + 6px 삼각 화살촉",
      "diagram.three_column_card_grid: 3개 흰 카드 가로 배열 (간격 0.2in), 각 카드 좌측 #105FD2 컬러 스트립 + 상단 #105FD2 원형 번호 + 헤드라인 SemiBold 16-18pt + 본문 12-14pt + 선택적 작은 일러스트",
      "diagram.agenda_four_column: 4개 흰 카드 (2.5x3.5in), 각 카드 상단 #105FD2 원 + 흰 Roman numeral Ⅰ·Ⅱ·Ⅲ·Ⅳ 24pt + 카드명 + 1-2줄 부제 + 작은 라인 일러스트",
      "diagram.timeline: 수평 1pt #C5D2E3 축선, 마일스톤 0.18in #105FD2 정사각, 현재 시점 #08306C 채움 + '현재' 11pt Bold 네이비 칩, 날짜 12pt #9D9DAE 아래 / 이벤트 14pt 흰색 위, 위험 마일스톤 #A41729",
      "diagram.dual_compare: 2-column 좌우 동일 폭 흰 카드, 좌 #105FD2 블루 태그(미국·우방) / 우 #A41729 레드 태그(북한), 각 카드 인용문 + 사진 + 라벨, 카드 좌측 동일 색 컬러 스트립",
      "diagram.matrix_2x2: 흰 카드 + 0.75pt #C5D2E3 십자 축, 4축 라벨 12pt, 데이터 포인트 0.3in #105FD2 원형 버블, 핵심 사분면(우상) 항목 #08306C 채움, 사분면 제목 14pt SemiBold #050829",
      "diagram.narrative_index_card: 좌측 01·02·03·04 깊은 네이비 원(#08306C 채움, 직경 0.6in, 흰 28pt 숫자) + #EAEDF2 그레이 카드 본문 14pt #050829, 우측 인물 사진 또는 4분할 사진 그리드 + Quote 박스(흰 카드 + 좌측 4px #105FD2 보더 + 인용문 20pt Medium)"
    ],
    "avoid": [
      "**흰 배경으로 회귀** — 다크 `#050829` 풀-블리드가 정체성. 모든 13페이지 동일 다크 캔버스.",
      "**한반도 발광 지도를 표지·종결 외에 쓰기** — 북엔드 모티프가 깨진다. 표지 1회 + 종결 1회 = 정확히 2회.",
      "**캘리그래피 슬라이드당 2회 이상** — 페이지당 정확히 1회만. 남발하면 희소성이 사라진다.",
      "**레드/시안을 장식용으로 칠하기** — 레드 `#A41729`는 북측 글로우 + 듀얼 비교 우측 태그에만. 시안 `#5794C3`은 남측 글로우에만. 그 외 슬라이드에는 사용 금지.",
      "**한글 폰트를 Pretendard·Noto Sans KR 외로** — 폰트 깨짐 방지를 위해 반드시 한글 지원 폰트.",
      "**Roman numeral 원 색 임의 변경** — `#105FD2`(주) 또는 `#08306C`(섹션 강조) 두 가지만. 그 외 색 금지.",
      "**카드 좌측 컬러 스트립 생략** — 모든 본문 카드는 좌측 스트립 또는 상단 원형 번호 중 하나 필수.",
      "**그라디언트 배경, 보라/핑크 액센트, 둥근 풀스크린 카드** — 정부 보고서 톤이 깨진다.",
      "**아마추어 차트 회귀**: 3D·입체 막대, 막대/조각 그림자, 무지개 채색, 격자선 과다, 차트 테두리 박스, 잘린 y축, 출처 누락.",
      "**이모지 불릿·클립아트·의미 없는 스톡 아이콘** — 라인 아이콘 단색만.",
      "**본문을 7줄 넘게 채우기** — 한국어는 줄당 글자 수가 많으니 줄 수를 엄격히 제한.",
      "**외교부 합동을 별도 BI 워터마크로 표시** — 원본은 본문 콘텐츠 메시지에 통합. 표지 좌하단에 두 부처 BI 병기 또는 본문 텍스트 내 명시 두 옵션만."
    ],
    "collection": "design-diversity"
  }
];
