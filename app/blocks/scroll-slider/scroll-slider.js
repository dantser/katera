import Swiper from 'swiper';

export default () => {
  // eslint-disable-next-line no-unused-vars
  const galleryTop = new Swiper('.scroll-slider_gallery-top', {
    initialSlide: 0,
    pagination: '.scroll-slider__pagination',
    paginationClickable: true,
  });
  // eslint-disable-next-line no-unused-vars
  const galleryThumbs = new Swiper('.scroll-slider_gallery-thumbs', {
    initialSlide: 0,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    scrollbarDraggable: true,
    scrollbar: '.scroll-slider__scrollbar',
    scrollbarHide: false,
  });
  galleryTop.params.control = galleryThumbs;
  galleryThumbs.params.control = galleryTop;
};
