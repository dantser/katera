import Swiper from 'swiper';

export default () => {
  // eslint-disable-next-line no-unused-vars
  const full = new Swiper('.custom-slider_full', {
    initialSlide: 0,
    pagination: '.custom-slider_full .custom-slider__pagination',
    paginationClickable: true,
    slidesPerView: 3,
    spaceBetween: 30,
    // Responsive breakpoints
    breakpoints: {
      1169: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 1,
      },
      // 768: {
      //   slidesPerView: 1,
      // },
    },
  });
  // eslint-disable-next-line no-unused-vars
  const mob = new Swiper('.custom-slider_mob', {
    initialSlide: 0,
    pagination: '.custom-slider_mob .custom-slider__pagination',
    paginationClickable: true,
    slidesPerView: 1,
    spaceBetween: 0,
  });
};
