import Swiper from 'swiper';

export default () => {
// eslint-disable-next-line no-unused-vars
  const swiperModel = new Swiper('.models .swiper-container', {
    pagination: '.swiper-container__swiper-pagination',
    slidesPerView: 6,
    slidesPerColumn: 2,
    paginationClickable: true,
    spaceBetween: 30,
    // Responsive breakpoints
    breakpoints: {
      768: {
        slidesPerView: 1,
        slidesPerColumn: 8,
        spaceBetween: 15,
      },
    },
  });
};
