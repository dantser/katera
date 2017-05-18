import $ from 'jquery';
import 'sticky-kit/dist/sticky-kit';

export default () => {
  if ($(window).width() <= 991) {
    return;
  }

  $('.account-navigation').stick_in_parent({
    offset_top: 95,
  });
};
