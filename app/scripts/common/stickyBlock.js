import $ from 'jquery';
import { debounce, throttle } from 'throttle-debounce';

export default function stickyBlock(el, addOffset = false, stickOnMobile = true) {
  if (!el.length) {
    return;
  }

  const h = $('html');
  const w = $(window);
  const topBreakpoint = el.offset().top;
  const bottomBreakpoint = topBreakpoint + el.outerHeight();

  const initFixation = () => {
    const sT = w.scrollTop();
    const isFixed = el.hasClass('fixed');
    const isMobile = h.hasClass('.mobile') || h.hasClass('.tablet');

    if (!stickOnMobile && isMobile) {
      return;
    }

    if (sT >= topBreakpoint && !isFixed) {
      el.addClass('fixed');
    }

    if (sT < bottomBreakpoint && isFixed) {
      el.removeClass('fixed');
    }
  };

  initFixation();
  w.scroll(throttle(200, initFixation));
}

$(window).resize(debounce(200, stickyBlock));
