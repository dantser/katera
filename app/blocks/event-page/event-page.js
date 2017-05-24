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
      991: {
        mousewheelControl: false,
        freeMode: false,
        slidesPerView: 1,
      },
    },
  });
};
