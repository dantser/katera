import $ from 'jquery';

export default () => {
  const submenu = $('.events__submenu-wrapper');

  const w = $(window);
  const navTopBreakpoint = submenu.offset().top;

  const fixSubmenu = () => {
    const sT = w.scrollTop();

    if (sT >= navTopBreakpoint && !submenu.hasClass('events__submenu-wrapper_fixed')) {
      submenu
        .addClass('events__submenu-wrapper_fixed')
        .next()
        .css('margin-top', `${submenu.outerHeight()}px`);
    }

    if (sT < navTopBreakpoint && submenu.hasClass('events__submenu-wrapper_fixed')) {
      submenu
        .removeClass('events__submenu-wrapper_fixed')
        .next()
        .css('margin-top', 0);
    }
  };

  if (w.width() > 1024) {
    w.on('load scroll', fixSubmenu);
  }
};
