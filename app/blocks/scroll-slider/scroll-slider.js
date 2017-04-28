import Swiper from 'swiper';

export default () => {
  // eslint-disable-next-line no-unused-vars
  const galleryTop = new Swiper('.scroll-slider__gallery-top', {
    allowSwipeToPrev: false,
    allowSwipeToNext: false,
  });
  const galleryThumbs = new Swiper('.scroll-slider__gallery-thumbs', {
    // spaceBetween: 10,
    // centeredSlides: true,
    slidesPerView: 10,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    scrollbarHide: false,
    scrollbarDraggable: true,
  });
  galleryTop.params.control = galleryThumbs;
  // galleryThumbs.params.control = galleryTop;
};

// export default () => {
//   const mainSlider = new Swiper('.main-slider', {
//     pagination: '.main-slider__swiper-pagination',
//     paginationClickable: true,
//     autoplay: 5000,
//   });
// };

