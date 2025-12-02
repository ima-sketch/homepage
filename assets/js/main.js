(function(){
  // Theme toggle
  const btn = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const stored = localStorage.getItem('theme');
  const appliedTheme = stored || (prefersDark? 'dark' : 'light');
  if(appliedTheme === 'dark') document.documentElement.setAttribute('data-theme','dark');
  btn && btn.addEventListener('click', ()=>{
    const cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = cur === 'dark' ? 'light' : 'dark';
    if(next === 'dark') document.documentElement.setAttribute('data-theme','dark'); else document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', next);
    btn.textContent = next === 'dark' ? '☀️' : '🌙';
  });

  // Mobile nav
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  navToggle && navToggle.addEventListener('click', ()=>{
    if(nav.style.display === 'flex') nav.style.display = 'none'; else nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth'});
        if(window.innerWidth <= 800 && nav) nav.style.display = 'none';
      }
    });
  });
})();
