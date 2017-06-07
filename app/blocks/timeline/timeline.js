import Swiper from 'swiper';

export default () => {
  // eslint-disable-next-line no-unused-vars
  const timeline = new Swiper('.timeline', {
    pagination: '.timeline__swiper-pagination',
    paginationClickable: true,
    slidesPerView: 4,
    nextButton: '.timeline__caret_next',
    prevButton: '.timeline__caret_prev',
    breakpoints: {
      1024: {
        slidesPerView: 3,
        nextButton: '.timeline__arrow_next',
        prevButton: '.timeline__arrow_prev',
      },
      768: {
        slidesPerView: 2,
        nextButton: '.timeline__arrow_next',
        prevButton: '.timeline__arrow_prev',
      },
      640: {
        slidesPerView: 1,
        nextButton: '.timeline__arrow_next',
        prevButton: '.timeline__arrow_prev',
      },
    },
  });
};
