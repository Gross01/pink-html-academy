const mainNav = document.querySelector('.main-nav');
const toggle = document.querySelector('.page-header__toggle');
const headerMenuWrapper = document.querySelector('.page-header__main-menu-wrapper')
const headerMenu = document.querySelector('.page-header__main-menu');

headerMenu.classList.remove('page-header__main-menu--no-js')

toggle.addEventListener('click', function () {
  if (mainNav.classList.contains('main-nav--opened')) {
    mainNav.classList.remove('main-nav--opened')
    headerMenuWrapper.classList.remove('page-header__main-menu-wrapper--opened-nav')
    toggle.classList.remove('page-header__toggle--opened')
  } else {
    mainNav.classList.add('main-nav--opened')
    headerMenuWrapper.classList.add('page-header__main-menu-wrapper--opened-nav')
    toggle.classList.add('page-header__toggle--opened')
  }
})

