import Swiper from 'swiper';

export default () => {
  if (!$('.scroll-slider').length) {
    return;
  }

  const galleryTop = new Swiper('.scroll-slider__gallery', {
    pagination: '.scroll-slider__pagination',
    paginationClickable: true,
    slidesPerView: 1,
  });

  const galleryThumbs = new Swiper('.scroll-slider__thumbs', {
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    scrollbarDraggable: true,
    scrollbar: '.scroll-slider__scrollbar',
    scrollbarHide: false,
    centeredSlides: true,
  });

  galleryTop.params.control = galleryThumbs;
  galleryThumbs.params.control = galleryTop;
};
