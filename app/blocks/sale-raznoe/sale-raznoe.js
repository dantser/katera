/* eslint-disable */
import $ from 'jquery';
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
};
