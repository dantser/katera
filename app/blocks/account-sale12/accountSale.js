import $ from 'jquery';
import Swiper from 'swiper';

export default () => {
  const CONTROL = $('.button-slide');
  // if (!CONTROL) {
  //   return;
  // }
// Сворачивание тарифов
  CONTROL.on('click', (e) => {
    e.preventDefault();
    const SLIDE_EL = $('.tarif');
    // const TEXT = CONTROL.text();
    SLIDE_EL.slideToggle();
    // CONTROL.text(TEXT === 'Свернуть блок' ? 'Развернуть блок' : 'Свернуть блок');
    $('html, body').animate({ scrollTop: 0 }, 600, 'swing');
  });

// eslint-disable-next-line no-unused-vars
  const swiper = new Swiper('.account-sale .submenu', {
    slidesPerView: 2,
    paginationClickable: true,
    spaceBetween: 30,
    freeMode: true,
  });
};
