import $ from 'jquery';

/**
 * Initialize List
 * @param data {array} - Array of object [{ value: '1', title: 'title' }]
 * @param listClass {string}
 * @param itemClass {string}
 * @returns {*|jQuery|HTMLElement}
 */
function initializeList(data, listClass, itemClass) {
  const list = document.createElement('ul');
  list.className = listClass;

  for (const item of data) { // eslint-disable-line no-restricted-syntax
    const listItem = document.createElement('li');
    listItem.className = itemClass;
    listItem.dataset.value = item.value;
    listItem.innerText = item.title;

    list.appendChild(listItem);
  }

  return $(list);
}

/**
 * @param control {*|jQuery|HTMLElement}
 * @returns {Array} - Array of object [{ value: '1', title: 'title' }]
 */
function serveDataFromControl(control) {
  const data = [];

  control.find('option').each(function () { // eslint-disable-line func-names
    const el = $(this);
    const optionData = {
      value: el.prop('value'),
      title: el.text(),
    };

    data.push(optionData);
  });

  return data;
}

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
  const ELEMENT_CLASS = '.js-select';
  const ELEMENT_ACTIVE_CLASS = 'select_active';
  const CONTROL_CLASS = '.js-select__control';
  const LIST_CLASS = 'list list_rounded list_has_triangle select__list';
  const LIST_ITEM_CLASS = 'list__item select__item';

  const elements = $(ELEMENT_CLASS);

  if (!elements) {
    return;
  }

  elements
    .find(CONTROL_CLASS)
    .each(function () { // eslint-disable-line func-names
      const el = $(this);
      const data = serveDataFromControl(el);
      const list = initializeList(data, LIST_CLASS, LIST_ITEM_CLASS);

      list.appendTo(el.parent());
    });

  // handle click on select element
  elements.on('mousedown click', CONTROL_CLASS, (e) => {
    e.preventDefault();
    e.stopPropagation();

    const control = $(e.target);
    const list = control.parent().find('ul');
    const select = control.parent();

    if (select.hasClass(ELEMENT_ACTIVE_CLASS)) {
      deactivate(select, list, ELEMENT_ACTIVE_CLASS);
    } else {
      activate(select, list, ELEMENT_ACTIVE_CLASS);
    }
  });

  // handle click on LI element
  elements.on('click', 'li', (e) => {
    e.preventDefault();
    e.stopPropagation();

    const el = $(e.target);
    const selected = el.index();
    const control = el.parents(ELEMENT_CLASS).find(CONTROL_CLASS);

    deactivate(control.parent(), el.parent(), ELEMENT_ACTIVE_CLASS);

    control.children().eq(selected).prop('selected', true);
    control.trigger('change');
  });

  // handle click outside of select
  $(document).on('click', () => {
    elements.each(function () { // eslint-disable-line func-names
      const select = $(this);
      const list = select.find('ul');

      deactivate(select, list, ELEMENT_ACTIVE_CLASS);
    });
  });
};
