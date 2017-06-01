import $ from 'jquery';
import 'sticky-kit/dist/sticky-kit';
import { debounce } from 'throttle-debounce';

export default function accountNavigation() {
  const el = $('.account-navigation');
  const h = $('html');

  const init = () => {
    const isMobile = h.hasClass('mobile') || h.hasClass('tablet');

    if (isMobile || !el.length) {
      return;
    }

    el
      .trigger('sticky_kit:detach')
      .stick_in_parent({ offset_top: 95 });
  };

  init();

  $(window).resize(debounce(200, false, init));
}
