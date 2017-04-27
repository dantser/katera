import $ from 'jquery';

/**
 * Mark select as active
 *
 * @param selectElement {*|jQuery|HTMLElement}
 * @param listElement {*|jQuery|HTMLElement}
 * @param activeSelectClass {string}
 */
function activate(selectElement, listElement, activeSelectClass) {
  listElement.slideDown(() => {
    selectElement.addClass(activeSelectClass);
  });
}

/**
 * Deactivate element
 *
 * @param selectElement {*|jQuery|HTMLElement}
 * @param listElement {*|jQuery|HTMLElement}
 * @param activeSelectClass {string}
 */
function deactivate(selectElement, listElement, activeSelectClass) {
  listElement.slideUp(() => {
    selectElement.removeClass(activeSelectClass);
  });
}

export default () => {
  const ELEMENT_CLASS = '.js-select-currency';
  const ELEMENT_ACTIVE_CLASS = 'select-currency_active';
  const CONTROL_CLASS = '.js-select-currency-control';
  const SELECTED_CLASS = '.js-select-currency-selected';
  const SELECT_CLASS = '.js-select-currency-select';
  const OPTION_CLASS = '.js-select-currency-option';

  const elements = $(ELEMENT_CLASS);

  if (!elements) {
    return;
  }

  elements.each(function () { // eslint-disable-line func-names
    const el = $(this);
    const select = el.find(SELECT_CLASS);
    const control = el.find(CONTROL_CLASS);
    const selected = el.find(SELECTED_CLASS);

    el.on('click', () => { // eslint-disable-line func-names
      if (el.hasClass(ELEMENT_ACTIVE_CLASS)) {
        deactivate(el, select, ELEMENT_ACTIVE_CLASS);
      } else {
        activate(el, select, ELEMENT_ACTIVE_CLASS);
      }
    });

    select.on('click', OPTION_CLASS, function () { // eslint-disable-line func-names
      const option = $(this);

      control.val(option.data('value'));
      selected.html(option.html());
    });
  });
};
