import $ from 'jquery';

export default () => {
  const el = $('.additional-filter-params');

  if (!el.length) {
    return;
  }

  el.find('.additional-filter-params__roll-up').on('click', (e) => {
    e.preventDefault();

    el.parents('form').removeClass('filter_extended');
    el.parent().slideUp();
  });
};
