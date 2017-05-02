import $ from 'jquery';

export default () => {
  const ELEMENT_CLASS = '.text-field';
  const CONTROL_CLASS = '.text-field__control';

  const element = $(ELEMENT_CLASS);

  if (!element) {
    return;
  }

  element.find(CONTROL_CLASS).on('input', function () { // eslint-disable-line
    const el = $(this);
    el.attr('value', el.val());
  });
};
