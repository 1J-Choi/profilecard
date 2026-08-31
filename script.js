document.addEventListener('DOMContentLoaded', function(){
  const img = document.getElementById('profile-img');
  if(!img) return;

  img.addEventListener('error', function(){
    const av = document.querySelector('.avatar');
    if(!av) return;
    av.innerHTML = '<div class="avatar-fallback">HG</div>';
  });

  // Small accessibility: add keyboard-visible class on focus for social links
  document.querySelectorAll('.icon').forEach(el=>{
    el.addEventListener('focus', ()=> el.classList.add('focused'));
    el.addEventListener('blur', ()=> el.classList.remove('focused'));
  });

  // Render link buttons from data to avoid repeating markup
  const links = [
    { title: '블로그', url: 'https://blog.example.com' },
    { title: '포트폴리오', url: 'https://portfolio.example.com' },
    { title: '연락하기', url: 'mailto:you@example.com' }
  ];

  const linksContainer = document.getElementById('links');
  if(linksContainer){
    links.forEach(l=>{
      const a = document.createElement('a');
      a.className = 'link-btn';
      a.href = l.url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = l.title;
      linksContainer.appendChild(a);
    });
  }

  // Theme toggle: initialize from localStorage or prefers-color-scheme
  const themeToggle = document.getElementById('theme-toggle');
  function applyTheme(t){
    document.body.setAttribute('data-theme', t);
    if(themeToggle) themeToggle.setAttribute('aria-pressed', String(t === 'dark'));
  }

  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (prefersDark ? 'dark' : 'light');
  applyTheme(initial);

  if(themeToggle){
    themeToggle.addEventListener('click', ()=>{
      const current = document.body.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('theme', next);
    });
  }
});
