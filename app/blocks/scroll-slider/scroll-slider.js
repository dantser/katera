import Swiper from 'swiper';

export default () => {
  // eslint-disable-next-line no-unused-vars
  const galleryTop = new Swiper('.scroll-slider__gallery-top', {
    // allowSwipeToPrev: false,
    // allowSwipeToNext: false,
  });
  // eslint-disable-next-line no-unused-vars
  const galleryThumbs = new Swiper('.scroll-slider__gallery-thumbs', {
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    scrollbarDraggable: true,
    scrollbar: '.scroll-slider__scrollbar',
    centeredSlides: true,
    scrollbarHide: false,
  });
  galleryTop.params.control = galleryThumbs;
  galleryThumbs.params.control = galleryTop;
};
