import $ from 'jquery';

/* eslint-disable */
export default () => {
  const branding = $('.branding');

  if (!branding) {
    return;
  }

  const brandingTop = branding.find('.branding__top');
  const header = $('.header');
  const w = $(window);

  if (header.length > 0 && w.width() > 991) {
    const nextBrandingTopHeight = w.height() - header.outerHeight();

    brandingTop.css({ height: `${nextBrandingTopHeight}px`});
  }
};
