# 소프닉스 홈페이지 (Jekyll)

GitHub Pages가 자동으로 빌드합니다. 파일을 고쳐서 올리면 1~2분 뒤 반영됩니다.

## 내용 수정은 `_data` 폴더에서

| 파일 | 내용 |
|---|---|
| `_data/company.yml` | 회사명, 슬로건, 소개 문장, 주소, 전화, 이메일 |
| `_data/nav.yml` | 상단 메뉴 |
| `_data/business.yml` | 홈 화면 사업 분야 카드 |
| `_data/research.yml` | 홈 화면 연구개발 목록 |
| `_data/records.yml` | 수행 실적 (`area: measure` 또는 `automation`) |
| `_data/faq.yml` | 자주 묻는 질문 |
| `_data/history.yml` | 연혁 |

CE-Meter 규격과 기능은 `cemeter.html`, 사업 영역 설명은 `measure.html`, `automation.html`에서 직접 고칩니다.
사진은 `assets/img/photo/`, 카탈로그 PDF는 `assets/download/`에 있습니다.

## 페이지

| 주소 | 파일 |
|---|---|
| `/` | `index.html` |
| `/measure.html` | `measure.html` (계측·모니터링) |
| `/automation.html` | `automation.html` (자동제어) |
| `/cemeter.html` | `cemeter.html` (CE-Meter) |
| `/support.html` | `support.html` (문의, FAQ, 연혁) |
| `/simulator.html` | 예전 주소로 들어온 방문자를 simgame.co.kr로 안내 (메뉴에는 없음) |

예전 사이트와 같은 주소(measure.html 등)를 그대로 써서, 검색 결과나 기존 링크가 깨지지 않습니다.

## 디자인

- `assets/css/style.css` ─ 색상은 맨 위 `:root`의 변수(`--accent` 등)만 바꾸면 전체에 적용됩니다.
- `_includes/` ─ 상단 메뉴, 하단 정보, 카드 모양 등 공통 조각

## GitHub Pages에 올리기

1. GitHub에서 새 저장소를 만듭니다 (Public).
2. 이 폴더 안의 파일과 폴더를 **전부** 저장소에 업로드합니다 (`_data`, `_includes` 같은 밑줄 폴더 포함).
3. Settings → Pages → Source: `Deploy from a branch`, Branch: `main` / `(root)` → Save.
4. 1~2분 뒤 저장소 주소(사용자명.github.io/저장소명)에서 확인한 뒤 Custom domain에 sofnix.co.kr을 연결합니다.

회사 도메인을 연결하면 `_config.yml`의 `url`을 그 주소로 바꿔 주세요.
