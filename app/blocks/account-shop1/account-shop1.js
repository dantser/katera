import Swiper from 'swiper';

export default () => {
  // eslint-disable-next-line no-unused-vars
  const mainSlider = new Swiper('.account-shop1 .main-slider', {
    pagination: '.account-shop1 .main-slider__swiper-pagination',
    paginationClickable: true,
    autoplay: 5000,
    initialSlide: 1,
    loop: true,
  });
};
