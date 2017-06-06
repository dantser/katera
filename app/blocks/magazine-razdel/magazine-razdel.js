import $ from 'jquery';

export default () => {
  const ITEM = $('.magazine-razdel__item');

  if (ITEM.length) {
    return;
  }

  const BANNER = '.magazine-razdel__banner';
  ITEM.children(BANNER).addClass('razedl');
};
