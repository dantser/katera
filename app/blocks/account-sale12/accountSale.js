import $ from 'jquery';
import Swiper from 'swiper';

export default () => {
  const CONTROL = $('.account-sale1 .button-slide');
  const CONTROL_PAGE2 = $('.account-sale2 .button-slide');
  const SLIDE_EL = $('.tarif');
  if (!CONTROL) {
    return;
  }
// Сворачивание тарифов на account-sale1
  CONTROL.on('click', (e) => {
    e.preventDefault();
    const EL = CONTROL.find('span');
    const TEXT = EL.text();
    const ICON = CONTROL.find('svg');
    SLIDE_EL.slideToggle();
    EL.text(TEXT === 'Свернуть блок' ? 'Развернуть блок' : 'Свернуть блок');
    ICON.toggleClass('button__icon_kind_caret-down button__icon_kind_caret-up');
    $('html, body').animate({ scrollTop: 0 }, 600, 'swing');
  });
// Сворачивание тарифов на account-sale2
  CONTROL_PAGE2.on('click', (e) => {
    e.preventDefault();
    SLIDE_EL.slideToggle();
  });

// eslint-disable-next-line no-unused-vars
  const swiper = new Swiper('.account-sale1__submenu', {
    slidesPerView: 'auto',
    freeMode: true,
    slideClass: 'submenu__item',
    wrapperClass: 'submenu',
    // breakpoints: {
    //   640: {
    //     slidesPerView: 2,
    //   },
    // },
  });
};
