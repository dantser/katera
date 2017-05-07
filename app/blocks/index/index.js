import $ from 'jquery';
import 'sticky-kit/dist/sticky-kit';

/* eslint-disable */
export default () => {

  const mainSlider = $('.index__main-slider');
  const header = $('.header');
  const w = $(window);

  if (mainSlider && mainSlider.length > 0 && header && header.length > 0 && w.width() > 991) {
    const nextMainSliderHeight = w.height() - header.outerHeight();
    mainSlider.css({ height: `${nextMainSliderHeight}px`});
  }

  $('.yacht-preview-widget').stick_in_parent({
    offset_top: 30,
  });

  $('.topic-preview-widget').stick_in_parent({
    offset_top: 30,
  });
};
