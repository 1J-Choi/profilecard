# HTML — 구조와 역할 (초보자용)

이 문서는 `index.html` 파일의 주요 HTML 구조와 각 요소가 어떤 역할을 하는지 초보자도 이해하기 쉽게 설명합니다.

## 전체 구조 요약

- `<!doctype html>`: 문서가 HTML5임을 브라우저에 알려줍니다.
- `<head>`: 문서 메타데이터(문자셋, 뷰포트, 제목, CSS 연결)를 넣습니다.
- `<body>`: 화면에 보이는 모든 요소가 들어갑니다. 우리의 프로필 카드는 여기 있습니다.

## 주요 블록

- `<main class="wrap">` — 페이지 중앙에 콘텐츠를 정렬하는 컨테이너입니다.
- `<section class="card">` — 프로필 카드의 루트 박스입니다. 배경, 그림자, 반응형 패딩을 여기서 조절합니다.
- `<div class="avatar">` — 원형 프로필 사진을 담는 영역입니다. 내부의 `<img id="profile-img">`이 실제 사진을 표시합니다.
- `<h1 class="name">` — 사용자의 이름을 보여줍니다.
- `<p class="tagline">` — 한 줄 소개(직업, 한 줄 설명 등)를 표시합니다.
- `<div class="social">` — GitHub / YouTube / Instagram 등 소셜 아이콘 링크들의 그룹입니다. 각 아이콘은 `<a class="icon">` 안에 SVG로 들어갑니다.
- `<div id="links" class="links">` — 프로필 아래의 '링크 버튼'들이 자바스크립트로 동적으로 추가되는 컨테이너입니다.

## 접근성(ARIA)와 링크
- 소셜 링크와 링크 버튼에 `aria-label` 또는 `role="navigation"`을 사용해 스크린리더가 읽기 쉽게 도왔습니다.
- 외부 링크는 `target="_blank" rel="noopener"` 를 사용해 새 탭에서 열리도록 했고 보안/성능을 개선했습니다.

## 어떻게 수정하면 좋을까?
- 이름과 소개는 `index.html`의 텍스트를 직접 바꾸면 됩니다.
- 프로필 이미지를 바꾸려면 `#profile-img`의 `src` 속성을 바꾸세요.
- 추가 링크는 `script.js`의 `links` 배열에 항목을 추가하면 자동으로 버튼이 생성됩니다.

---
파일 위치: [index.html](index.html)
