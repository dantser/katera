import Swiper from 'swiper';

export default () => {
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper('.scroll-slider', {
    mousewheelControl: true,
  });
  // eslint-disable-next-line no-unused-vars
  const swiper2 = new Swiper('.scroll-slider2', {
    mousewheelControl: true,
    direction: 'vertical',
    freeMode: true,
    slidesPerView: 'auto',
  });
};
