import $ from 'jquery';

/* eslint-disable */
export default () => {
  const header = $('.header__container');
  const w = $(window);
  const burgerDropdown = $('.burger-dropdown');

  burgerDropdown.css({
    top: `${header.offset().top + header.outerHeight()}px`,
    height: `${w.height() + header.outerHeight()}`,
  });

  w.on('scroll', () => {
    if (w.scrollTop() > header.offset().top + header.outerHeight()) {
      burgerDropdown.css({
        top: `${$('.header_fixed').outerHeight()}px`,
      });
    } else {
      burgerDropdown.css({
        top: `${header.offset().top + header.outerHeight() - w.scrollTop()}px`,
      });
    }
  });


  const top = $('.burger-dropdown__top');
  const nav = $('.burger-dropdown__navigation');
  const questionButton = $('.burger-dropdown__question');
  const form = $('.burger-dropdown__form');
  const close = $('.burger-dropdown__form-close');

  questionButton.click(function() {
    form.css({ display: 'block' });
    top.css({ display: 'none' });
    nav.css({ display: 'none' });
    questionButton.css({ display: 'none' });
  });
  close.click(function() {
    form.css({ display: 'none' });
    top.css({ display: 'flex' });
    nav.css({ display: 'block' });
    questionButton.css({ display: 'block' });
  });
};
