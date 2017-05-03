import Swiper from 'swiper';

export default () => {
  // eslint-disable-next-line no-unused-vars
  const yachtScrollSlider = new Swiper('.yacht-club__slider', {
    slidesPerView: 'auto',
    mousewheelControl: true,
    freeMode: true,
  });
};
