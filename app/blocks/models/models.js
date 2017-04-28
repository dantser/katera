import Swiper from 'swiper';

export default () => {
// eslint-disable-next-line no-unused-vars
  const swiperModel = new Swiper('.models_cruiser .swiper-container', {
    pagination: '.swiper-container__swiper-pagination',
    slidesPerView: 6,
    slidesPerColumn: 2,
    paginationClickable: true,
    spaceBetween: 30,
    // Responsive breakpoints
    breakpoints: {
      1170: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 1,
        slidesPerColumn: 8,
        spaceBetween: 14,
      },
    },
  });
// eslint-disable-next-line no-unused-vars
  const swiperModelSport = new Swiper('.models_sport .swiper-container', {
    pagination: '.models_sport .swiper-container__swiper-pagination',
    paginationClickable: true,
    slidesPerView: 4,
    spaceBetween: 30,
    // Responsive breakpoints
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 14,
        slidesPerColumn: 4,
      },
    },
  });
};
