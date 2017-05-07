import makeItFixed from '../../scripts/common/make-it-fixed';

export default () => {
  const sortFilterFixedParams = [
    'sale-raznoe__sort-filter',
    'sale-raznoe__sort-filter_default',
    'sale-raznoe__sort-filter_fixed',
    null,
    991,
  ];
  makeItFixed(...sortFilterFixedParams);
  makeItFixed('js-filter-sale', 'filter-sale_default', 'filter-sale_fixed', 991);
  makeItFixed('js-filter-rest', 'filter-rest_default', 'filter-rest_fixed', 991);
};
