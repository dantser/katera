import $ from 'jquery';

/* eslint-disable */
export default () => {
  const header = $('.header');
  const headerFixed = $('.header_fixed');
  const w = $(window);
  const burgerDropdown = $('.burger-dropdown');

  burgerDropdown.css({
    top: `${header.offset().top + header.outerHeight()}px`,
    height: `${w.height() + header.outerHeight()}`,
  });

  w.on('scroll', () => {

    if (w.scrollTop() > header.offset().top + header.outerHeight()) {
      burgerDropdown.css({
        top: `${headerFixed.outerHeight()}px`,
      });
    } else {
      burgerDropdown.css({
        top: `${header.offset().top + header.outerHeight() - w.scrollTop()}px`,
      });
    }
  });
};
