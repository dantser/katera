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

  if (header.length > 0 && w.width() > 1024) {
    const nextBrandingTopHeight = w.height() - header.outerHeight();

    brandingTop.css('height', `${nextBrandingTopHeight}px`);
  }

  let nextImageMinWidth = null;

  const isIndex = $('.index').length;

  if (isIndex && w.width() > 1024) {
    if ($(document).scrollTop() < header.height()) {
      brandingTop.css('top', `${header.height() - $(document).scrollTop()}px`);
    } else {
      brandingTop.css({ top: `${header.find('.header__container').outerHeight()}px`});
    }

    if ($(document).scrollTop() > 500) {
      brandingTop.find('.branding__scroll-btn').hide();
    }
  }

  w.on('scroll', () => {

    if ($(window).width() <= 1024) {
      return;
    }

    if (!isIndex) {
      return;
    }

    if (w.scrollTop() < header.height()) {
      brandingTop.css('top', `${header.height() - w.scrollTop()}px`);
    } else {
      brandingTop.css({ top: `${header.find('.header__container').outerHeight()}px`});
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
