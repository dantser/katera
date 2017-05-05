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
    const BTN = $(this);
    const SLIDE_EL = $('.tarif');
    const TEXT = BTN.find('span').text();
    console.log(TEXT);
    SLIDE_EL.slideToggle();
    TEXT(TEXT === 'Свернуть блок' ? 'Свернуть блок' : 'Развернуть блок');
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
