/* eslint-disable */
// import $ from 'jquery';
import makeItFixed from '../../scripts/common/make-it-fixed';
import dScroll from '../../scripts/common/dScroll';

export default function saleRaznoe() {
  const sortFilterFixedParams = [
    'sale-raznoe__sort-filter',
    'sale-raznoe__sort-filter_default',
    'sale-raznoe__sort-filter_fixed',
    null,
    991,
  ];

  dScroll('.sale-raznoe__main-container', '.js-sale-widgets');
  makeItFixed(...sortFilterFixedParams);
  makeItFixed('js-filter-sale', 'filter-sale_default', 'filter-sale_fixed', 991, undefined, () => {
    const filter = $('.js-filter-sale');

    filter
      .find('.filter-sale__tab')
      .removeClass('filter_extended');

    filter
      .find('.filter-sale__extended-wrapper')
      .hide();
  });

  makeItFixed('js-filter-rest', 'filter-rest_default', 'filter-rest_fixed', 991);
}
