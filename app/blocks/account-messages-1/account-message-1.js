export default () => {
  if (!$('.account-messages-1').length) {
    return;
  }

  const allCheckbox = $('.js-account-messages-1-select-all').find('.checkbox__control');
  const checkboxes = $('.js-account-messages-1-checkbox').find('.checkbox__control');
  const btns = $('.js-account-messages-1-btn');

  if (!allCheckbox.length || !checkboxes.length || !btns.length) {
    return;
  }

  allCheckbox.on('change', () => {
    checkboxes
      .prop('checked', allCheckbox.prop('checked'))
      .trigger('change');
  });

  // disable buttons if checkboxes arent selected
  const disableBtns = () => {
    const disableButtons = Array.from(checkboxes.map(function () { // eslint-disable-line func-names
      return $(this).prop('checked');
    }))
      .every(item => !item);

    if (disableButtons) {
      btns
        .addClass('button_disabled')
        .attr('disabled', true);
    } else {
      btns
        .removeClass('button_disabled')
        .attr('disabled', false);
    }
  };

  checkboxes.on('change', disableBtns);
  disableBtns();
};
