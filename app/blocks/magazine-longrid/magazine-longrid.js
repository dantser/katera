import Swiper from 'swiper';
import $ from 'jquery';
import { debounce } from 'throttle-debounce';

export default function magazineLongrid() {
  const h = $('html');
  const isMobile = h.hasClass('mobile') || h.hasClass('tablet');
  magazineLongrid.sliders = magazineLongrid.sliders || [];

  if (!isMobile) {
    if (magazineLongrid.sliders.length) {
      magazineLongrid.sliders.sliders.forEach(item => item.destroy(item));
    }

    return;
  }

  if (magazineLongrid.sliders.length) {
    return;
  }

  // eslint-disable-next-line no-new
  magazineLongrid.s1 = new Swiper('.js-magazine-longrid-slider1', {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: '.js-magazine-longrid-slider1-pagination',
    paginationClickable: true,
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
    },
  });

  // eslint-disable-next-line no-new
  magazineLongrid.s2 = new Swiper('.js-magazine-longrid-slider2', {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: '.js-magazine-longrid-slider2-pagination',
    paginationClickable: true,
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
    },
  });
}

$(window).on('resize', debounce(200, magazineLongrid));
