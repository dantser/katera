import $ from 'jquery';

const scrollBlock = $('.scrollable');
const scrollWrapper = $('.scrollable-wrapper');
const scrollPreWrapper = $('.scrollable-prewrapper');
let sT = null;
let topBreakpoint;
let bottomBreakpoint;
let translate = 0;
const fixedClass = 'fixed';
const finishClass = 'finish';
const vH = $(window).innerHeight();

function ultraScrollInit() {
  if (!scrollBlock.length || !scrollWrapper.length || !scrollPreWrapper.length) {
    return;
  }
  // eslint-disable-next-line no-mixed-operators
  scrollPreWrapper.height(scrollBlock.width() + scrollBlock.height() - vH);
  // eslint-disable-next-line no-mixed-operators
  scrollWrapper.height(scrollBlock.width() + scrollBlock.height() - vH);

  topBreakpoint = scrollPreWrapper.offset().top;
  // eslint-disable-next-line no-mixed-operators
  bottomBreakpoint = scrollPreWrapper.offset().top + scrollBlock.width() - vH;
}

export default () => {
  if (!scrollBlock.length || !scrollWrapper.length || !scrollPreWrapper.length) {
    return;
  }
  $(window).scroll(function () { // eslint-disable-line func-names
    sT = $(this).scrollTop();

    if (sT < topBreakpoint) {
      scrollWrapper
        .removeClass(fixedClass)
        .removeClass(finishClass)
        .css('top', '0');

      scrollBlock.css('transform', 'translate3d(0, 0, 0)');
    } else if (sT >= topBreakpoint && sT < bottomBreakpoint) {
      scrollWrapper
        .addClass(fixedClass)
        .removeClass(finishClass)
        .css('top', '0');

      translate = sT - topBreakpoint;
      if (translate > scrollBlock.width() - scrollWrapper.width()) {
        translate = scrollBlock.width() - scrollWrapper.width();
      }

      scrollBlock.css('transform', `translate3d(-${translate}px, 0, 0`);
    } else {
      scrollWrapper
        .removeClass(fixedClass)
        .addClass(finishClass)
        .css('top', scrollBlock.width() - vH);
    }
  });

  $(window).on('resize', ultraScrollInit);
  ultraScrollInit();
};
