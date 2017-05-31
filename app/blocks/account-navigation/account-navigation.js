import $ from 'jquery';
import 'sticky-kit/dist/sticky-kit';

export default function accountNavigation() {
  if ($(window).width() <= 1024) {
    return;
  }

  $('.account-navigation').stick_in_parent({
    offset_top: 95,
  });
}

$(window).on('resize', accountNavigation);
