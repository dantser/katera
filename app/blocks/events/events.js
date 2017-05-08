import Swiper from 'swiper';
import makeItFixed from '../../scripts/common/make-it-fixed';

export default () => {
  // fix tabs
  makeItFixed('events__submenu', 'events__submenu_default', 'events__submenu_fixed');

  // eslint-disable-next-line no-unused-vars
  const scrollSlider = new Swiper('.events__slider', {
    slidesPerView: 'auto',
    mousewheelControl: true,
    freeMode: true,
  });
};
