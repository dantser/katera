import $ from 'jquery';

// add, remove error plugin
$.fn.textFieldError = function textFieldError(message = null) {
  const IS_TEXT_FIELD = this.hasClass('text-field');
  const textField = !IS_TEXT_FIELD ? this.parents('.text-field') : this;
  const errorElement = textField.find('.text-field__error');

  if (!errorElement || !textField || textField.length === 0) {
    return this;
  }

  if (message) {
    errorElement.text(message);
    textField.addClass('text-field_has_error');
  } else {
    errorElement.text('');
    textField.removeClass('text-field_has_error');
  }

  return this;
};

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
