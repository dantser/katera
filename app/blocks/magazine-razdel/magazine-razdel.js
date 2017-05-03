import $ from 'jquery';

export default () => {
  const ITEM = $('.magazine-razdel__item');
  const BANNER = $('.magazine-razdel__banner');

  if (ITEM.has(BANNER)) {
    ITEM.each().addClass('razdel-banner');
  }
};
