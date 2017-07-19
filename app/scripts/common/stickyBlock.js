// import $ from 'jquery';
import { debounce } from 'throttle-debounce';

export default function stickyBlock(el, addOffset = false, stickOnMobile = true) {
  if (!el.length) {
    return;
  }

  const h = $('html');
  const w = $(window);
  const topBreakpoint = el.offset().top;
  const isMobile = h.hasClass('mobile') || h.hasClass('tablet');
  let prevOffset = 0;

  if (!stickOnMobile && isMobile) {
    return;
  }

  if (addOffset) {
    prevOffset = parseInt(el.next().css('margin-top'), 10) || 0;
  }

  const initFixation = () => {
    const sT = w.scrollTop();
    const isFixed = el.hasClass('fixed');

    if (sT >= topBreakpoint && !isFixed) {
      el.addClass('fixed');

      if (addOffset) {
        el
          .next()
          .css('margin-top', `${el.outerHeight() + prevOffset}px`);
      }
    }

    if (sT < topBreakpoint && isFixed) {
      el.removeClass('fixed');

      if (addOffset) {
        el
          .next()
          .css('margin-top', `${prevOffset}px`);
      }
    }
  };

  initFixation();
  w.scroll(initFixation);
}

$(() => {
  $(window).resize(debounce(200, stickyBlock));
});
