import $ from 'jquery';
import makeItFixed from '../../scripts/common/make-it-fixed';

export default () => {
  // fix tabs
  makeItFixed('events__submenu', 'events__submenu_default', 'events__submenu_fixed');

  const scrollBlock = $('.scrollable');
  const scrollWrapper = $('.scrollable-wrapper');
  const scrollPreWrapper = $('.scrollable-prewrapper');
  let sT = null;
  let topBreakpoint = null;
  let bottomBreakpoint = null;
  const fixedClass = 'fixed';
  const finishClass = 'finish';
  const w = $(window);
  const vH = w.innerHeight();
  let translate = null;

  function ultraScrollInit() {
    // eslint-disable-next-line no-mixed-operators
    scrollPreWrapper.height(scrollBlock.width() + scrollBlock.height() - vH);
    // eslint-disable-next-line no-mixed-operators
    scrollWrapper.height(scrollBlock.width() + scrollBlock.height() - vH);
    topBreakpoint = scrollPreWrapper.offset().top;
    // eslint-disable-next-line no-mixed-operators
    bottomBreakpoint = scrollPreWrapper.offset().top + scrollBlock.width() - vH;
  }

  function ultraScroll() {
    w.on('scroll', function () { // eslint-disable-line func-names
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
  }

  w.on('resize', ultraScrollInit);

  ultraScrollInit();
  ultraScroll();
};
