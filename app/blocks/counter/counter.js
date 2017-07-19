// import $ from 'jquery';

function increment(control) { // eslint-disable-line consistent-return
  const val = Number(control.val());

  if (typeof val !== 'number') {
    return control.val(0);
  }

  control.val(val + 1);
}

function decrement(control) { // eslint-disable-line consistent-return
  const val = Number(control.val());

  if (typeof val !== 'number' || val <= 0) {
    return control.val(0);
  }

  control.val(val - 1);
}

export default () => {
  const ELEMENT_CLASS = '.js-counter';
  const CONTROL_CLASS = '.counter__control';
  const PLUS_BTN_CLASS = '.counter__btn_kind_plus';
  const MINUS_BTN_CLASS = '.counter__btn_kind_minus';

  $(document)
    .on('click', PLUS_BTN_CLASS, function (e) {
      e.preventDefault();
      increment($(this).parents(ELEMENT_CLASS).find(CONTROL_CLASS));
    })
    .on('click', MINUS_BTN_CLASS, function (e) {
      e.preventDefault();
      decrement($(this).parents(ELEMENT_CLASS).find(CONTROL_CLASS));
    });
};
