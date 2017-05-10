import $ from 'jquery';

// add error plugin
$.fn.addError = function addError(message = null) {
  const IS_TEXT_FIELD = this.hasClass('text-field');
  const textField = !IS_TEXT_FIELD ? this.parents('.text-field') : this;
  const errorElement = textField.find('.text-field__error');

  if (!errorElement || !textField || textField.length === 0) {
    return this;
  }

  errorElement.text(message);
  return textField.addClass('text-field_has_error');
};

// remove error plugin
$.fn.removeError = function removeError() {
  const IS_TEXT_FIELD = this.hasClass('text-field');
  const textField = !IS_TEXT_FIELD ? this.parents('.text-field') : this;
  const errorElement = textField.find('.text-field__error');

  if (!errorElement || !textField || textField.length === 0) {
    return this;
  }

  errorElement.text('');
  return textField.removeClass('text-field_has_error');
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
