import $ from 'jquery';

function increment(control) {
  const val = Number(control.val());

  if (typeof val !== 'number') {
    control.val(0);
  }

  control.val(val + 1);
}

function decrement(control) {
  const val = Number(control.val());

  if (typeof val !== 'number' || val < 0) {
    control.val(0);
  }

  control.val(val - 1);
}

export default () => {
  const ELEMENT_CLASS = '.js-counter';
  const CONTROL_CLASS = '.counter__control';
  const PLUS_BTN_CLASS = 'counter__btn_kind_plus';
  const MINUS_BTN_CLASS = 'counter__btn_kind_minus';

  const counters = $(ELEMENT_CLASS);

  if (!counters.length) {
    return;
  }

  counters.each(function () { // eslint-disable-line
    const el = $(this);
    const control = el.find(CONTROL_CLASS);

    el.on('click', (e) => {
      const target = $(e.target);

      if (target.hasClass(PLUS_BTN_CLASS)) {
        increment(control);
      }

      if (target.hasClass(MINUS_BTN_CLASS)) {
        decrement(control);
      }
    });
  });
};
