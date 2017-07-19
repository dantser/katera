import Swiper from 'swiper';
// import $ from 'jquery';

export default () => {
  if (!$('.account-shop1').length) {
    return;
  }

  // eslint-disable-next-line no-unused-vars
  const mainSlider = new Swiper('.account-shop1 .main-slider', {
    pagination: '.account-shop1 .main-slider__swiper-pagination',
    paginationClickable: true,
    autoplay: 5000,
    initialSlide: 1,
    loop: true,
  });
};
