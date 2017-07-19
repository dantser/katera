// import $ from 'jquery';
// import 'jquery-ui-bundle';

export default () => {
  const tabs = $('.catalog-yacht__tabs');

  if (!tabs.length) {
    return;
  }

  tabs.tabs();

  const sc = $('.catalog-yacht__scroll-header');

  if (!sc) {
    return;
  }

  // eslint-disable-next-line no-mixed-operators
  sc.scrollLeft(60);
};
