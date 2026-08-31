# JavaScript — 동작과 이벤트 설명 (초보자용)

이 문서는 `script.js` 파일에서 어떤 동작을 하는지, 그리고 초보자가 이해하기 쉽게 동작 흐름을 설명합니다.

## JavaScript의 역할
- HTML로 구조를 만들고 CSS로 스타일을 지정한 뒤, JavaScript는 '동적 동작'을 담당합니다. 예: 버튼 클릭, 이미지 로딩 실패 처리, DOM에 내용 추가 등.

## 주요 기능 설명

1. 이미지 폴백 처리

```js
const img = document.getElementById('profile-img');
img.addEventListener('error', function(){
  // 이미지 로드 실패 시 대체 요소를 넣음
  av.innerHTML = '<div class="avatar-fallback">HG</div>';
});
```

설명: 프로필 이미지가 로드되지 않으면(`error` 이벤트), 대신 텍스트나 색채를 가진 원형 대체 요소를 보여줍니다.

2. 링크 버튼 자동 생성

```js
const links = [
  { title: '블로그', url: 'https://blog.example.com' },
  { title: '포트폴리오', url: 'https://portfolio.example.com' }
];

links.forEach(l => {
  const a = document.createElement('a');
  a.className = 'link-btn';
  a.href = l.url;
  a.textContent = l.title;
  linksContainer.appendChild(a);
});
```

설명: 버튼 HTML을 직접 반복해서 작성하지 않고 자바스크립트 배열로 정의한 뒤 반복문으로 DOM에 추가합니다. 링크를 추가하려면 `links` 배열에 항목을 넣으면 됩니다.

3. 다크/라이트 모드 토글

```js
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', ()=>{ /* data-theme 스위치 및 localStorage 저장 */ });
```

설명: 토글 버튼을 누르면 `document.body`에 `data-theme="dark"`를 설정하거나 제거해서 CSS의 다크 관련 규칙이 적용되게 합니다. 선택한 테마는 `localStorage`에 저장되어 다음 방문시에도 유지됩니다.

## 테스트 방법
- 브라우저에서 `index.html`을 열고:
  - 프로필 이미지가 보이지 않는 경우(예: 네트워크 차단) 폴백이 나오는지 확인하세요.
  - 링크 버튼이 `links` 배열에 맞게 생성되는지 확인하세요.
  - 우측 상단의 다크/라이트 버튼을 눌러 테마가 전환되는지 확인하세요.

---
파일 위치: [script.js](script.js)
