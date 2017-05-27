import $ from 'jquery';
import Swiper from 'swiper';

/* eslint-disable */
export default () => {

  const submenu = $('.yacht-club__submenu');

  if (!submenu.hasClass('yacht-club__submenu_default')) {
    return;
  }

  const w = $(window);
  const navTopBreakpoint = submenu.offset().top;

  const fixSubmenu = () => {
    const sT = w.scrollTop();

    if (sT >= navTopBreakpoint && !submenu.hasClass('yacht-club__submenu_fixed')) {
      submenu.addClass('yacht-club__submenu_fixed');
    }

    if (sT < navTopBreakpoint && submenu.hasClass('yacht-club__submenu_fixed')) {
      submenu.removeClass('yacht-club__submenu_fixed');
    }
  };

  w.on('scroll', fixSubmenu);
  fixSubmenu();

  // Отменяем обычный клик по ссылке из сабменю
  submenu.on('click', '.submenu__link', function (e) {
    e.preventDefault();
    window.location.hash = $(this).attr('href');
  });

  // Меняем активную ссылку, в зависимости от HASH'а, пример: #events, #contacts и скролим до экрана
  w.on('hashchange', (e) => {
    const nextElement = $(`[data-id="${window.location.hash}"]`);

    if (!nextElement.length) {
      return;
    }

    submenu
      .find('.submenu__link')
      .each(function () {
        $(this)
          .children('.division')
          .removeClass('division_active')
      })
      .filter(function () {
        return $(this).attr('href') === window.location.hash
      })
      .children('.division')
      .addClass('division_active');

    let nextTop = nextElement.offset().top;

    if (nextElement.hasClass('scrollable__slide_vertical')) {
      nextTop += nextElement.prev().outerWidth();
    }

    $('html, body').animate({
      scrollTop: nextTop,
    }, 1000, 'swing');
  });

  // eslint-disable-next-line no-unused-vars
  const yachtScrollSlider = new Swiper('.yacht-club__slider_mob', {
    pagination: '.yacht-club__events .yacht-club__pagination',
    paginationClickable: true,
    slidesPerView: 1,
    spaceBetween: 0,
  });
  // eslint-disable-next-line no-unused-vars
  const yachtGallerySlider = new Swiper('.yacht-club__gallery_mob', {
    pagination: '.yacht-club__gallery .yacht-club__pagination',
    paginationClickable: true,
    slidesPerView: 1,
    spaceBetween: 0,
  });

  // Сворачивание на мобильной версии
  const control = '.jqcontrol';
  const elements = $(control);
  const controlServises = '.jqcontrol-events';
  const elementsServises = $(controlServises);
  const BORDER_CLASS = 'yacht-club__title_border';
  const CLOSED_SLIDER_CLASS = 'yacht-club__slider_closed';

  elements.each(function () { // eslint-disable-line
    const el = $(this);
    const ICON = el.find('svg');
    const WINDOW = $(window);

    if (WINDOW.width() <= 991) {
      el.on('click', (e) => {
        e.preventDefault();
        el.next().slideToggle();
        el.toggleClass(BORDER_CLASS);
        ICON.toggleClass('yacht-club__icon_down');
      });
    }
  });

  elementsServises.each(function () { // eslint-disable-line
    const el = $(this);
    const ICON = el.find('svg');
    const WINDOW = $(window);

    if (WINDOW.width() <= 991) {
      el.on('click', (e) => {
        e.preventDefault();
        el.parent().toggleClass(CLOSED_SLIDER_CLASS);
        el.siblings().slideToggle();
        el.toggleClass(BORDER_CLASS);
        ICON.toggleClass('yacht-club__icon_down');
      });
    }
  });
};
