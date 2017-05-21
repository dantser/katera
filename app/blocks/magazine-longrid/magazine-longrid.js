import Swiper from 'swiper';
import $ from 'jquery';

export default function magazineLongrid() {
  if ($(window).width() >= 1025) {
    return;
  }

  // eslint-disable-next-line no-new
  new Swiper('.js-magazine-longrid-slider1', {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: '.js-magazine-longrid-slider1-pagination',
    paginationClickable: true,
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
    },
  });

  // eslint-disable-next-line no-new
  new Swiper('.js-magazine-longrid-slider2', {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: '.js-magazine-longrid-slider2-pagination',
    paginationClickable: true,
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
    },
  });

  $(window).on('resize', magazineLongrid);
}
