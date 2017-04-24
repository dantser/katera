import Swiper from 'swiper';

export default () => {
  // eslint-disable-next-line no-unused-vars
  const timeline = new Swiper('.timeline', {
    pagination: '.timeline__swiper-pagination',
    paginationClickable: true,
    slidesPerView: 4,
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 1,
      },
    },
  });
};
