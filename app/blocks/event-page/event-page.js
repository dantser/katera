import Swiper from 'swiper';

export default () => {
  // eslint-disable-next-line no-unused-vars
  const eventPage = new Swiper('.event-page__slider', {
    pagination: '.event-page__swiper-pagination',
    paginationClickable: true,
    slidesPerView: 3,
    mousewheelControl: true,
    spaceBetween: 30,
    freeMode: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
};
