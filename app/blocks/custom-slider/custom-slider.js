import Swiper from 'swiper';

export default () => {
  // eslint-disable-next-line no-unused-vars
  const galleryTop = new Swiper('.custom-slider', {
    initialSlide: 0,
    pagination: '.custom-slider__pagination',
    paginationClickable: true,
    slidesPerView: 1,
    spaceBetween: 0,
    // Responsive breakpoints
    // breakpoints: {
    //   992: {
    //     slidesPerView: 2,
    //     spaceBetween: 15,
    //   },
    //   768: {
    //     slidesPerView: 1,
    //     spaceBetween: 14,
    //     slidesPerColumn: 4,
    //   },
    // },


  });
};
