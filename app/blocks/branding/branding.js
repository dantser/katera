import $ from 'jquery';

/* eslint-disable */
export default () => {
  const branding = $('.branding');

  if (!branding) {
    return;
  }

  const brandingTop = branding.find('.branding__top');
  const brandingTopImage = brandingTop.find('img');
  const brandingBottom = branding.find('.branding__bottom');
  const footer = $('.footer');
  const header = $('.header');
  const w = $(window);

  if (header.length > 0 && w.width() > 991) {
    const nextBrandingTopHeight = w.height() - header.outerHeight();

    brandingTop.css({ height: `${nextBrandingTopHeight}px`});
  }

  let nextImageMinWidth = null;

  $(window).on('scroll', () => {

    if ($(window).width() <= 991) {
      return;
    }

    if (!$('.index').length) {
      return;
    }

    const fixedHeader = $('.header_fixed');
    const hasToBeFixed = fixedHeader.length;

    if (hasToBeFixed && brandingTop.css('position') !== 'fixed') {
      brandingTop.css({ position: 'fixed', transform: `translate3d(0, ${fixedHeader.height()}px, 0)` });
      brandingBottom.height($(window).innerHeight() - fixedHeader.height() - footer.height());
    }

    if (!hasToBeFixed) {
      brandingTop.css({ position: 'absolute', transform: 'translate3d(0, 0, 0)' });
    }

    const animateImage = $(window).innerHeight() + $(document).scrollTop() - footer.offset().top - brandingBottom.height();

    if (animateImage > 0) {
      brandingTopImage.css({ minWidth: '100%', minHeight: '100%' });
    } else {
      brandingTopImage.css({ minWidth: '105%', minHeight: '105%' });
    }
  });
};
