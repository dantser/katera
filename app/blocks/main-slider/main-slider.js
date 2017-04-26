import Swiper from 'swiper';

export default () => {
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper('.swiper-container', {
    pagination: '.main-slider__swiper-pagination',
    paginationClickable: true,
    autoplay: 5000,
  });
};
