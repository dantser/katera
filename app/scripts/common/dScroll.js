import $ from 'jquery';
import { debounce } from 'throttle-debounce';

export default (b1Class, b2Class) => {
  const h = $('html');

  if (!b1Class || !b2Class || h.hasClass('mobile') || h.hasClass('tablet')) {
    return;
  }

  const init = () => {
    const blocks = [$(b1Class), $(b2Class)];

    if (blocks.some(el => !el.length) || h.hasClass('mobile') || h.hasClass('tablet')) {
      return;
    }

    // eslint-disable-next-line no-confusing-arrow
    const [b1, b2] = blocks.sort((a, b) => a.height() > b.height() ? -1 : 1);
    const w = $(window);
    let translate = 0;

    w.on('scroll', () => {
      const sT = w.scrollTop();
      const vH = w.innerHeight();

      if (sT < b1.offset().top) {
        translate = 0;
      } else if (sT > b1.offset().top + b1.height() - vH) { // eslint-disable-line
        translate = b1.height() - b2.height();
      } else {
        // пройденная дистанция в %
        const percent = (sT - b1.offset().top) / (b1.height() - vH);
        translate = percent * (b1.height() - b2.height());
      }

      b2.css('transform', `translate3d(0, ${translate}px, 0)`);
    });
  };

  init();
  $(window).on('resize', debounce(200, init));
};
