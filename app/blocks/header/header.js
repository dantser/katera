import $ from 'jquery';

export default () => {
  const searchBar = $('.header__search-bar');
  const header = $('.header');

  if (!header) {
    return;
  }

  if (searchBar && searchBar.length > 0) {
    const searchOverlay = $('<div></div>')
      .css({
        position: 'fixed',
        top: `${header.outerHeight()}px`,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(6, 3, 37, .95)',
        zIndex: 9999,
      })
      .hide()
      .insertAfter(header);

    searchOverlay.click(() => {
      searchOverlay.fadeOut();
      searchBar.removeClass('search-bar_active');
    });

    searchBar.on('click', () => {
      searchOverlay
        .css({ top: `${header.outerHeight()}px` })
        .fadeToggle();
    });
  }
};
