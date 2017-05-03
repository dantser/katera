import $ from 'jquery';

export default () => {
  const ITEM = $('.magazine-razdel__item');
  const BANNER = '.magazine-razdel__banner';
  ITEM.children(BANNER).addClass('razedl');
};
