import $ from 'jquery';

export default () => {
  const el = $('.reset-filter');

  if (!el) {
    return;
  }

  el.on('click', () => {
    el.parents('form').find('.text-field__control').attr('value', '');
  });
};
