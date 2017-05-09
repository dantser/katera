import $ from 'jquery';
import makeItFixed from '../../scripts/common/make-it-fixed';

export default () => {
  const header = $('.header');

  if (!header) {
    return;
  }

  if (header.hasClass('header_sticky')) {
    makeItFixed('header', 'header_sticky', 'header_fixed');
  }

  const searchOverlay = $('<div></div>')
    .css({
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      backgroundColor: 'rgba(6, 3, 37, .85)',
      zIndex: 8000,
    })
    .hide()
    .insertAfter(header);

  $('html, body').on('click', '.header__search-bar', () => {
    const searchBar = $('.header__search-bar');

    if (searchBar.hasClass('search-bar_active')) {
      searchOverlay.fadeOut(() => {
        searchBar.removeClass('search-bar_active');
      });
    } else {
      searchOverlay.fadeIn(() => {
        searchBar.addClass('search-bar_active');
      });
    }
  });
};
