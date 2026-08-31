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
});
