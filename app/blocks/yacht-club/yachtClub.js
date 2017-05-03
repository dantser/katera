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

// eslint-disable-next-line no-unused-vars
  const yachtGallerySlider = new Swiper('.yacht-club__gallery', {
    pagination: '.yacht-club__gallery .yacht-club__swiper-pagination',
    paginationClickable: true,
    slidesPerView: 1,
  });

// Сворачивание на мобильной версии
  const control = '.jqcontrol';
  const elements = $(control);
  const controlServises = '.jqcontrol-events';
  const elementsServises = $(controlServises);

  elements.each(function () { // eslint-disable-line
    const el = $(this);

    el.on('click', (e) => {
      e.preventDefault();
      el.next().slideToggle();
    });
  });

  elementsServises.each(function () { // eslint-disable-line
    const el = $(this);
    el.parent().css('marginLeft', 0);
    el.on('click', (e) => {
      e.preventDefault();
      el.siblings().slideToggle();
    });
  });
};
