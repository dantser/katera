import Swiper from 'swiper';

export default () => {
  const swiper = new Swiper('.main-slider', {
    // pagination: '.swiper-pagination',
    paginationClickable: true,
  });

  swiper();
};
