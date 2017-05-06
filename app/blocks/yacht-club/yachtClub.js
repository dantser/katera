import $ from 'jquery';
import Swiper from 'swiper';

export default () => {
  // eslint-disable-next-line no-unused-vars
  const yachtScrollSlider = new Swiper('.yacht-club__slider', {
    pagination: '.yacht-club__events__swiper-pagination',
    slidesPerView: 'auto',
    mousewheelControl: true,
    freeMode: true,

    breakpoints: {
      991: {
        mousewheelControl: false,
        freeMode: false,
        slidesPerView: 1,
      },
    },
  });

  const WRAPPER = $('.yacht-club__gallery-slider');
  const WINDOW = $(window);
  const WRAPPER_CLASS = 'swiper-wrapper';
  function resize() {
    console.log(WINDOW.width());
    if (WINDOW.width() < 992) {
      // eslint-disable-next-line no-unused-vars
      const yachtGallerySlider = new Swiper('.yacht-club__gallery', {
        pagination: '.yacht-club__gallery .yacht-club__swiper-pagination',
        paginationClickable: true,
        slidesPerView: 1,
      },
    );
      WRAPPER.addClass(WRAPPER_CLASS);
    } else {
      WRAPPER.removeClass(WRAPPER_CLASS);
    }
  }
  WINDOW.on('resize', resize());
  resize();
// Сворачивание на мобильной версии
  const control = '.jqcontrol';
  const elements = $(control);
  const controlServises = '.jqcontrol-events';
  const elementsServises = $(controlServises);
  const BORDER_CLASS = 'yacht-club__title_border';
  const CLOSED_SLIDER_CLASS = 'yacht-club__slider_closed';

  elements.each(function () { // eslint-disable-line
    const el = $(this);

    el.on('click', (e) => {
      e.preventDefault();
      el.next().slideToggle();
      el.toggleClass(BORDER_CLASS);
    });
  });

  elementsServises.each(function () { // eslint-disable-line
    const el = $(this);
    el.on('click', (e) => {
      e.preventDefault();
      el.parent().toggleClass(CLOSED_SLIDER_CLASS);
      el.siblings().slideToggle();
      el.toggleClass(BORDER_CLASS);
    });
  });
};
