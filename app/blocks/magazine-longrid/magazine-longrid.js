import Swiper from 'swiper';

export default () => {
  // eslint-disable-next-line no-unused-vars
  const scrollSlider = new Swiper('.magazine-longrid__slider', {
    slidesPerView: 'auto',
    mousewheelControl: true,
    freeMode: true,
  });
};
