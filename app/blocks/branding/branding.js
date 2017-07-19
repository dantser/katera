import $ from 'jquery';

/* eslint-disable */
export default function branding() {
  const branding = $('.branding');

  if (!branding.length) {
    return;
  }

  const brandingTop = branding.find('.branding__top');
  const brandigOffsetTop = branding.offset().top;
  const brandingTopImage = brandingTop.find('img');
  const brandingBottom = branding.find('.branding__bottom');
  const footer = $('.footer');
  const header = $('.header');
  const w = $(window);

  if (header.length > 0 && w.width() > 1024) {
    const nextBrandingTopHeight = w.height() - header.outerHeight();

    brandingTop.css('height', `${nextBrandingTopHeight}px`);
  }

  let nextImageMinWidth = null;

  const isIndex = $('.index').length;

  if (isIndex && w.width() > 1024) {
    if ($(document).scrollTop() > $(window).innerHeight()) {
      brandingTop.find('.branding__scroll-btn').hide();
    }
  }

  w.on('scroll load', () => {

    if ($(window).width() <= 1024) {
      return;
    }

    if (!isIndex) {
      return;
    }

    if (w.scrollTop() < brandigOffsetTop && brandingTop.hasClass('fixed')) {
      brandingTop.removeClass('fixed');
    }

    if (w.scrollTop() >= brandigOffsetTop && !brandingTop.hasClass('fixed')) {
      brandingTop.addClass('fixed');
    }

    const animateImage = $(window).innerHeight() + $(document).scrollTop() - footer.offset().top - brandingBottom.height();

    if (animateImage > 0) {
      brandingTopImage.css({ minWidth: '100%', minHeight: '100%' });
    } else {
      brandingTopImage.css({ minWidth: '105%', minHeight: '105%' });
      brandingTop.find('.branding__scroll-btn').hide();
    }
  });
};

$(() => {
  $(window).on('resize', branding);
});
