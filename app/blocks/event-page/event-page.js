import Swiper from 'swiper';

export default () => {
  // eslint-disable-next-line no-unused-vars
  const eventPage = new Swiper('.event-page__slider', {
    pagination: '.event-page__swiper-pagination',
    paginationClickable: true,
    slidesPerView: 'auto',
    mousewheelControl: true,
    freeMode: true,
    breakpoints: {
      1024: {
        mousewheelControl: false,
        freeMode: false,
        slidesPerView: 2,
        loop: true,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
      },
    },
  });
};
