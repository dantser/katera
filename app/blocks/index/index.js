import $ from 'jquery';
import 'sticky-kit/dist/sticky-kit';

/* eslint-disable */
export default function index() {
  const header = $('.header');
  const w = $(window);

  if (!$('.index').length) {
    return;
  }

  const yachtWidget = $('.yacht-preview-widget');
  const yachtBtn = yachtWidget.find('.yacht-preview-widget__button');
  const topicWidget = $('.topic-preview-widget');
  const topicBtn = topicWidget.find('.topic-preview-widget__button');

  let yachtBtnAttached = false;
  let topicBtnAttached = false;

  w.on('scroll', () => {
    const sT = w.scrollTop();
    const vH = w.height();

    if (w.width() <= 1169) {
      return;
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

  if (w.width() <= 1169) {
    return;
  }

  $('.index__widget').stick_in_parent({
    offset_top: 95,
  });

  //
  // SLIDER
  //
  var slider = $(".main-slider"),
    mainSliderContainer = $(".index__main-slider"),
    sliderScroll = $('.slider-scroll');

  mainSliderContainer.height(w.height() - header.outerHeight());

  sliderScroll.scroll(function(){
    var ssT = $(this).scrollTop(),
      percents = ssT/$(window).height();

    slider.css("transform", "scale(" + percents + ")");

    if (ssT >= w.innerHeight()) {

      if (!sliderScroll.hasClass("scrolled")) {
        sliderScroll.addClass("scrolled");
        console.log("slider scroll finished.");
      }

    }
  });

  $(window).scroll(function(){
    var sT = $(this).scrollTop();

    if (sT === 0) {

      if (sliderScroll.hasClass("scrolled")) {
        sliderScroll.removeClass("scrolled");
        console.log("slider scroll zero.");
      }
    }
  });
};

$(window).on('resize', index);
