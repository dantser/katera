import Swiper from 'swiper';

export default () => {
  // eslint-disable-next-line no-new
  new Swiper('.gallery-slider-popup__container', {
    slidesPerView: 1,
    prevButton: '.gallery-slider-popup__btn_prev',
    nextButton: '.gallery-slider-popup__btn_next',
  });
};
