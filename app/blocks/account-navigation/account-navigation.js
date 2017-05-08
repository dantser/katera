import $ from 'jquery';
import 'sticky-kit/dist/sticky-kit';

export default () => {
  const headerSticky = $('.header_fixed');
  let offsetTop = 30;

  if (headerSticky.length > 0) {
    offsetTop += headerSticky.outerHeight();
  }

  $('.account-navigation').stick_in_parent({
    offset_top: offsetTop,
  });
};
