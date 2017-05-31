import $ from 'jquery';
import disableScroll from 'disable-scroll';
import 'sticky-kit/dist/sticky-kit';

/* eslint-disable */
export default function index() {

  const mainSlider = $('.index__main-slider');

  if (mainSlider.length === 0) {
    return;
  }

  const mainSliderItem = mainSlider.find('.main-slider');
  const header = $('.header');
  const w = $(window);
  let mainSliderHeight = 0;

  if (mainSlider.length > 0 && header.length && w.width() > 1169) {
    mainSliderHeight = w.height() - header.outerHeight();
    mainSlider.css({ height: `${mainSliderHeight}px`});
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
  const yachtBtn = yachtWidget.find('.yacht-preview-widget__button');
  const topicWidget = $('.topic-preview-widget');
  const topicBtn = topicWidget.find('.topic-preview-widget__button');

  let yachtBtnAttached = false;
  let topicBtnAttached = false;

  const iOS = window.navigator.platform.match(/i(Phone|Pod)/i);

  let shouldAnimateSlider = true;

  mainSliderItem.on('transitionend', () => {
    $('.index').css('visibility', 'visible');
    shouldAnimateSlider = false;

    setTimeout(() => {
      disableScroll.off();
    }, 750);
  });

  if ($(document).scrollTop() > 100 && w.width() > 1024) {
    mainSliderItem.css({
      transition: 'unset',
      transform: 'scale(1)',
    });
    $('.index').css('visibility', 'visible');
    shouldAnimateSlider = false;
  }

  w.on('scroll', () => {
    const sT = w.scrollTop();
    const vH = w.height();

    if (w.width() <= 1169 || iOS) {
      return;
    }

    if (shouldAnimateSlider && !mainSliderItem.hasClass('main-slider_animated')) {
      disableScroll.on();
      $('.index').css('visibility', 'hidden');
      mainSliderItem.addClass('main-slider_animated');
    }

    if (sT + vH >= yachtWidget.parent().offset().top) {
      const offset = sT + vH - yachtWidget.parent().offset().top;

      if (!yachtWidget.hasClass('is_stuck')) {
        let translate = 100 - offset * .16;
        translate = translate > 0 ? `${translate}%` : 0;

        if (translate === 0) {
          yachtWidget.trigger('sticky_kit:recalc');
        }

        yachtWidget.css({ transform: `translate3d(0, ${translate}, 0)`});
      } else {
        yachtBtnAttached = false;
      }

      let btnTranslate = 100 - offset * .13;
      btnTranslate = btnTranslate > 0 ? `${btnTranslate}vh` : 0;

      if (!yachtBtnAttached) {
        yachtBtn.css({ transform: `translate3d(0, ${btnTranslate}, 0)`});
      }

      if (btnTranslate === 0) {
        yachtBtnAttached = true;
      }
    }

    if (sT + vH >= topicWidget.parent().offset().top) {
      const offset = sT + vH - topicWidget.parent().offset().top;

      if (!topicWidget.hasClass('is_stuck')) {
        let translate = 100 - offset * .16;
        translate = translate > 0 ? `${translate}%` : 0;

        if (translate === 0) {
          topicWidget.trigger('sticky_kit:recalc');
        }

        topicWidget.css({ transform: `translate3d(0, ${translate}, 0)`});
      } else {
        topicBtnAttached = false;
      }

      let btnTranslate = 100 - offset * .13;
      btnTranslate = btnTranslate > 0 ? `${btnTranslate}vh` : 0;

      if (!topicBtnAttached) {
        topicBtn.css({ transform: `translate3d(0, ${btnTranslate}, 0)`});
      }

      if (btnTranslate === 0) {
        topicBtnAttached = true;
      }
    }
  });

  if (w.width() <= 1169 || iOS) {
    return;
  };

  $('.index__widget').stick_in_parent({
    offset_top: 95,
  });
};

$(window).on('resize', index);
