import $ from 'jquery';
import Swiper from 'swiper';
import { throttle } from 'throttle-debounce';
import stickyBlock from '../../scripts/common/stickyBlock';

/* eslint-disable */
export default function yachtClub() {
  if (!$('.yacht-club').length) {
    return;
  }

  stickyBlock($('.yacht-club__submenu'), true, false);

  const w = $(window);
  const h = $('html');
  const isMobile = h.hasClass('mobile') || h.hasClass('tablet');

  const detectCurrentBlock = () => {
    let currid;
    const sT = w.scrollTop();

    $(".yacht-club__submenu").find('.submenu__link').each(function() {
      const link = $(this);
      const id = link.attr("href");

      if (!id) {
        return;
      }

      const el = $(document).find(id);

      if (!el) {
        return;
      }

      const eltop = el.offset().top;
      const elbottom = eltop + el.outerHeight();

      if ((sT >= eltop) && (sT < elbottom)) {
        currid = id;
        if ( el.hasClass("scrollable__slide") ) {
          if ( el.parents(".scrollable__wrapper").hasClass("fixed") ) {
            currid = el.parents(".scrollable__wrapper").find(".scrollable__slide_horizontal").attr("id");
          } else if ( el.parents(".scrollable__wrapper").hasClass("finish") ) {
            currid = el.parents(".scrollable__wrapper").find(".scrollable__slide_vertical").attr("id");
          }
        }
      }
    });

    if (currid) {

      currid = currid[0] === '#' ? currid : `#${currid}`;
      const link = $(document).find(`[href='${currid}']`);

      if (!link) {
        return;
      }

      link
        .find('.division')
        .addClass('division_active')
        .parents('.submenu__item')
        .siblings()
        .find('.division')
        .removeClass('division_active');
    }
  };

  if (!isMobile) {
    w.on('scroll', throttle(200, detectCurrentBlock));
    detectCurrentBlock();
    return;
  }

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

    if (isMobile) {
      el
        .off('click')
        .on('click', (e) => {
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

    if (isMobile) {
      el
        .off('click')
        .on('click', (e) => {
        e.preventDefault();
        el.parent().toggleClass(CLOSED_SLIDER_CLASS);
        el.siblings().slideToggle();
        el.toggleClass(BORDER_CLASS);
        ICON.toggleClass('yacht-club__icon_down');
      });
    }
  });
};

$(window).on('resize', yachtClub);
