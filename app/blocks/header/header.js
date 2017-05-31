import $ from 'jquery';
import disableScroll from 'disable-scroll';

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
      zIndex: 8000,
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

  const fixHeaderInit = () => {
    // фиксация хедера
    if (!header.hasClass('header_sticky')) {
      return;
    }

    const w = $(window);
    const navContainer = header.find('.header__container');
    const navTopBreakpoint = navContainer.offset().top;

    const fixHeader = () => {
      const sT = w.scrollTop();

      if (sT >= navTopBreakpoint && !navContainer.hasClass('header__container_fixed')) {
        navContainer.addClass('header__container_fixed');
      }

      if (sT < navTopBreakpoint && navContainer.hasClass('header__container_fixed')) {
        navContainer.removeClass('header__container_fixed');
      }
    };

    w.on('scroll', fixHeader);
    fixHeader();
  };

  $(window).on('resize', fixHeaderInit);
};
