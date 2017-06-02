import Swiper from 'swiper';

export default () => {
  // eslint-disable-next-line no-unused-vars
  const yachtSlider = new Swiper('.yacht-slider', {
    pagination: '.yacht-slider__swiper-pagination',
    paginationClickable: true,
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
    },
    loop: true,
  });
};
