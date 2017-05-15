import $ from 'jquery';
import 'sticky-kit/dist/sticky-kit';

/* eslint-disable */
export default () => {

  const mainSlider = $('.index__main-slider');
  const mainSliderItem = mainSlider.find('.main-slider');
  const header = $('.header');
  const w = $(window);

  if (mainSlider && mainSlider.length > 0 && header && header.length > 0 && w.width() > 991) {
    const nextMainSliderHeight = w.height() - header.outerHeight();
    mainSlider.css({ height: `${nextMainSliderHeight}px`});
  }

  // init mobile slider
  if (mainSlider && mainSlider.length > 0) {
    const slider = mainSlider.find('.main-slider');
    const sliderSlot = $('.index__mobile-slider-slot');

    if (sliderSlot) {
      slider.clone(true, true).appendTo(sliderSlot);
    }
  }

  const yachtWidget = $('.yacht-preview-widget');
  const topicWidget = $('.topic-preview-widget');

  w.on('scroll', () => {
    const sT = w.scrollTop();
    const vH = w.height();

    if (sT > 100 && !mainSliderItem.hasClass('main-slider_animated')) {
      mainSliderItem.addClass('main-slider_animated')
    }

    if (w.width() <= 991) {
      return;
    }

    if (sT + vH >= yachtWidget.parent().offset().top && !yachtWidget.hasClass('is_stuck')) {
      const offset = sT + vH - yachtWidget.parent().offset().top;
      let translate = 100 - offset * .15;
      translate = translate > 0 ? `${translate}%` : 0;

      if (translate === 0) {
        yachtWidget.trigger('sticky_kit:recalc');
        yachtWidget.addClass('animate_btn');
      }

      yachtWidget.css({ transform: `translate3d(0, ${translate}, 0)`});
    }

    if (sT + vH >= topicWidget.parent().offset().top && !topicWidget.hasClass('is_stuck')) {
      const offset = sT + vH - topicWidget.parent().offset().top;
      let translate = 100 - offset * .15;
      translate = translate > 0 ? `${translate}%` : 0;

      if (translate === 0) {
        topicWidget.trigger('sticky_kit:recalc');
        topicWidget.addClass('animate_btn');
      }

      topicWidget.css({ transform: `translate3d(0, ${translate}, 0)`});
    }
  });

  $('.index__widget').stick_in_parent({
    offset_top: 95,
  });
};
