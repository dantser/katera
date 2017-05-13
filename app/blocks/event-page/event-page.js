import $ from 'jquery';
import Swiper from 'swiper';

export default () => {
  function sliderDestroy() {
    if ($(window).width() >= 767) {
      // eslint-disable-next-line no-unused-vars
      const eventPage = new Swiper('.event-page__slider', {
        pagination: '.event-page__swiper-pagination',
        paginationClickable: true,
        slidesPerView: 'auto',
        mousewheelControl: true,
        spaceBetween: 60,
        breakpoints: {
          991: {
            slidesPerView: '1',
          },
        },
      });
    }
  }
  $(window).on('resize', sliderDestroy);
  sliderDestroy();
};
