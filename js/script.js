document.addEventListener("DOMContentLoaded", () => {

  const burgerMenu = document.querySelector('.nav-mobile');

  function showMobileMenu() {
    const burgerBtn = document.querySelector('.burger__btn');

    burgerBtn.addEventListener('click', () => {
      burgerMenu.classList.add('is-active');
    })
  }

  function hideMobileMenu() {
    const burgerCloseBtn = document.querySelector('.burger__btn-close');
    console.log(burgerCloseBtn);
    burgerCloseBtn.addEventListener('click', () => {
      burgerMenu.classList.remove('is-active');
    })

  }

  showMobileMenu()
  hideMobileMenu()




})