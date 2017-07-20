export default () => {
  const checkboxes = $('.buy-magazine-form .checkbox__control');

  if (!checkboxes.length) {
    return;
  }

  const changeState = function () { // eslint-disable-line func-names
    const checkbox = $(this);
    checkbox
      .parents('.buy-magazine-form__fieldset')
      .find('.text-field')
      .trigger(!checkbox.prop('checked') ? 'disable' : 'enable');
  };

  changeState();

  checkboxes.on('change', changeState);
};
