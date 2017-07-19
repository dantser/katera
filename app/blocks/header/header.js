// import $ from 'jquery';
import disableScroll from 'disable-scroll';
import stickyBlock from '../../scripts/common/stickyBlock';

/* eslint-disable */
export default () => {
  const header = $('.header');

  if (!header.length) {
    return;
  }

  // Обработка search-bar
  const searchBar = $('.header__search-bar');

  if (!searchBar.length) {
    return;
  }

  const searchOverlay = $('<div></div>')
    .css({
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      backgroundColor: 'rgba(6, 3, 37, .85)',
      zIndex: 890,
    })
    .hide()
    .insertAfter(header)
    .on('click', function() {
      $(this).fadeOut();
      searchBar.removeClass('search-bar_active');
      disableScroll.off();
    });

  searchBar.find('.js-search-bar__button').on('click', () => {
    const searchBar = $('.header__search-bar');

    if (searchBar.hasClass('search-bar_active')) {
      searchOverlay.fadeOut(() => {
        searchBar.removeClass('search-bar_active');
        disableScroll.off();
      });
    } else {
      searchOverlay.fadeIn(() => {
        searchBar.addClass('search-bar_active');
        disableScroll.on();
      });
    }
  });

  if (header.hasClass('header_sticky')) {
    stickyBlock($('.header__container'), false, true);
  }
};
