const menuButton = document.querySelector('.menu-button');
const sideMenu = document.querySelector('.side-menu');

if (menuButton && sideMenu) {
  menuButton.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded', String(open));
    sideMenu.setAttribute('aria-hidden', String(!open));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.body.classList.remove('menu-open');
      menuButton.setAttribute('aria-expanded', 'false');
      sideMenu.setAttribute('aria-hidden', 'true');
    }
  });
}

const date = document.querySelector('#date');
if (date) date.textContent = new Date().getFullYear();
