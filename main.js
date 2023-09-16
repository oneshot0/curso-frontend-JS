// const menuEmail = document.querySelector('.navbar-email');
// const desktopMenu = document.querySelector('.desktop-menu');
const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const menuHamIcon = $('.menu');
const mobileMenu = $('.mobile-menu');


menuEmail.addEventListener('click', () => desktopMenu.classList.toggle('inactive'));
menuHamIcon.addEventListener('click', toggleMobileMenu);


function toggleMobileMenu() {
  mobileMenu.classList.toggle('oculto');
}

