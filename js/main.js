(function(){
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.getElementById('navMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.getAttribute('data-open') === 'true';
      menu.setAttribute('data-open', String(!open));
      toggle.setAttribute('aria-expanded', String(!open));
    });
  }
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
})();
