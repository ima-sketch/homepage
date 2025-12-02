# 데이터 사이언티스트 포트폴리오 웹사이트

이 저장소는 데이터 사이언티스트 포트폴리오용 정적 웹사이트 템플릿입니다. 로컬에서 빠르게 확인하고, 내용을 편집해 개인 포트폴리오로 사용할 수 있습니다.

## 포함된 파일

- `index.html` — 홈페이지 마크업 (About, Skills, Projects, Contact)
- `assets/css/styles.css` — 기본 스타일 및 반응형 레이아웃
- `assets/js/main.js` — 테마 토글, 모바일 내비게이션, 스무스 스크롤

## 빠른 시작 (로컬)

아래 방법 중 하나로 정적 서버를 띄워 확인하세요.

방법 1 — Python 3 내장 서버:

```bash
cd /workspaces/homepage
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 열기
```

방법 2 — Node (serve 사용):

```bash
cd /workspaces/homepage
npx serve . -l 8000
# 브라우저에서 http://localhost:8000 열기
```

## 커스터마이즈

- `index.html`에서 이름, 소개 문구, 프로젝트 설명을 수정하세요.
- `assets/css/styles.css`에서 색상 변수(`--accent`, `--bg` 등)를 변경해 테마를 조정하세요.
- `assets/js/main.js`는 테마 토글과 모바일 메뉴 동작을 담당합니다.

## 이력서 추가

루트에 `resume.pdf` 파일을 올리면 상단의 "이력서 다운로드" 버튼에서 바로 다운로드할 수 있습니다.

## 배포

간단히 GitHub Pages로 배포할 수 있습니다.
- 브랜치를 `main`으로 사용하고 루트에 파일이 있으면, 리포지터리 설정에서 GitHub Pages를 활성화하세요.

## 다음 작업 제안

- 프로젝트 상세 페이지(프로젝트별 README 또는 블로그 링크) 추가
- Contact 폼(서버리스 또는 Formspree 등) 연동
- 포트폴리오 내용에 맞춘 디자인/색상 튜닝

필요하시면 위 작업 중 제가 대신 적용해 드릴게요. 어떤 항목부터 진행할까요?
