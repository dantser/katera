import $ from 'jquery';
import makeItFixed from '../../scripts/common/make-it-fixed';

export default () => {
  let searchBar = $('.header__search-bar');
  let header = $('.header');

  if (!header) {
    return;
  }

  if (header.hasClass('header_sticky')) {
    makeItFixed('header', 'header_sticky', 'header_fixed');
  }

  searchBar = $('.header__search-bar');
  header = $('.header');

  if (searchBar && searchBar.length > 0) {
    const searchOverlay = $('<div></div>')
      .css({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(6, 3, 37, .95)',
        zIndex: 8000,
      })
      .hide()
      .insertAfter(header);

    searchOverlay.click(() => {
      searchOverlay.fadeOut();
      searchBar.removeClass('search-bar_active');
    });

    searchBar.on('click', () => {
      searchOverlay.fadeToggle();
    });
  }
};
