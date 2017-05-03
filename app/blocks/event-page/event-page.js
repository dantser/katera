import Swiper from 'swiper';

export default () => {
  // eslint-disable-next-line no-unused-vars
  const eventPage = new Swiper('.event-page__slider', {
    slidesPerView: 'auto',
    mousewheelControl: true,
    spaceBetween: 60,
  });
};
