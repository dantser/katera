import Swiper from 'swiper';
import makeItFixed from '../../scripts/common/make-it-fixed';

export default () => {
  makeItFixed('events__submenu-wrapper', 'events__submenu-wrapper_default', 'events__submenu-wrapper_fixed');
  // eslint-disable-next-line no-unused-vars
  const scrollSlider = new Swiper('.events__slider', {
    slidesPerView: 'auto',
    mousewheelControl: true,
    freeMode: true,
  });
};
