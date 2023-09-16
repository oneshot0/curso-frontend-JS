// const menuEmail = document.querySelector('.navbar-email');
// const desktopMenu = document.querySelector('.desktop-menu');
const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const menuHamIcon = $('.menu');
const mobileMenu = $('.mobile-menu');
const menuCarritoIcon = $('.navbar-shopping-cart');
const aside = $('.product-detail');


menuEmail.addEventListener('click', () => desktopMenu.classList.toggle('inactive') + aside.classList.add('inactive'));
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }

  mobileMenu.classList.toggle('oculto');
}

function toggleCarritoAside() {
  //1er método para ocultar 
  const isMobileMenuClosed = mobileMenu.classList.contains('oculto');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('oculto');
  }
  //2do método para ocultar 
    aside.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');

}


