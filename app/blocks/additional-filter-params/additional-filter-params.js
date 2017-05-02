import $ from 'jquery';

export default () => {
  const el = $('.additional-filter-params');

  el.find('.additional-filter-params__roll-up').on('click', (e) => {
    e.preventDefault();

    el.slideUp();
  });
};
