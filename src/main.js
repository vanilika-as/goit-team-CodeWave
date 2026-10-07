const openMenuBtn = document.querySelector('.header-menu-btn');
const closeMenuBtn = document.querySelector('.mobile-menu-close');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
const mobileRegisterBtn = document.querySelector('.mobile-menu-register');

const openMenu = () => {
  mobileMenu.classList.add('is-open');
  document.body.style.overflow = 'hidden';
};

const closeMenu = () => {
  mobileMenu.classList.remove('is-open');
  document.body.style.overflow = '';
};

openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

mobileRegisterBtn.addEventListener('click', closeMenu);