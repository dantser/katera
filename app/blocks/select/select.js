import $ from 'jquery';

function activate(select, list, activeClass) {
  list.fadeIn(() => {
    select.addClass(activeClass);
  });
}

function deactivate(select, list, activeClass) {
  list.fadeOut(() => {
    select.removeClass(activeClass);
  });
}

function showLabel(el) {
  if (!el || el.length === 0) {
    return;
  }

  el.show();
}

function hideLabel(el) {
  if (!el || el.length === 0) {
    return;
  }

  el.hide();
}

function updateText(textElement, data) {
  const text = data.map(item => item.title).join(', ');
  textElement.text(text);
}

function generateList(select, data) {
  const ul = $('<ul></ul>')
    .addClass('list')
    .addClass('list_rounded')
    .addClass('list_has_triangle')
    .addClass('select__list');

  data.forEach((item) => {
    if (!item.disabled) {
      $('<li></li>')
        .addClass('list__item')
        .addClass('select__item')
        .text(item.title)
        .appendTo(ul);
    }
  });

  select.append(ul);
}

export default () => {
  const SELECT_CLASS = '.select';
  const SELECT_ACTIVE_CLASS = 'select_active';
  const TEXT_CLASS = '.select__text';
  const LIST_LABEL_CLASS = '.select__list-label';
  const MULTIPLE_SELECT = 'multiple';
  const LABEL_CLASS = '.select__label';
  let selectedData = [];

  const selectElements = $(SELECT_CLASS);

  if (!selectElements) {
    return;
  }

  selectElements.each(function () { // eslint-disable-line func-names
    const select = $(this);
    const textElement = select.find(TEXT_CLASS);

    if (!select.data(MULTIPLE_SELECT)) {
      const control = select.find('select');
      const options = Array.from(control.children());

      const optionsData = options.map((option) => {
        const el = $(option);

        return ({ value: el.val(), title: el.text(), disabled: el.attr('disabled') });
      });

      generateList(select, optionsData);

      const selectedOption = $(control.children()[control[0].selectedIndex]);
      const data = [{ value: selectedOption.val(), title: selectedOption.text() }];

      updateText(textElement, data);
    } else {
      const labelElement = select.find(LABEL_CLASS);
      updateText(textElement, [{ title: labelElement.text() }]);
    }
  });

  const deactivateAll = () => {
    selectElements.each(function () { // eslint-disable-line func-names
      const el = $(this);
      const list = el.find('ul');

      deactivate(el, list, SELECT_ACTIVE_CLASS);
    });
  };

  selectElements.on('click', 'li', (e) => {
    const el = $(e.target);
    const selected = el.index();
    const control = el.parents(SELECT_CLASS).find('select');

    if (control.length === 0) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    deactivate(control.parent(), el.parent(), SELECT_ACTIVE_CLASS);
    const selectedEl = control.children().eq(selected);
    if (!selectedEl.prop('selected')) {
      selectedEl.prop('selected', true);
    } else {
      control.children().eq(selected + 1).prop('selected', true);
    }
    control.trigger('change');
  });

  selectElements.find('select').on('change', function () { // eslint-disable-line func-names
    const control = $(this);
    const textElement = control.parent().find(TEXT_CLASS);
    const selectedOption = $(control.children()[control[0].selectedIndex]);
    const labelElement = control.parent().find(LABEL_CLASS);
    const data = [{ value: selectedOption.val(), title: selectedOption.text() }];

    updateText(textElement, data);
    showLabel(labelElement);
  });

  // handle show list (custom dropdown)
  selectElements.on('click', (e) => {
    const select = $(e.target);
    e.stopPropagation();

    if (!select.hasClass(SELECT_CLASS.slice(1))) {
      return;
    }

    deactivateAll();

    const list = select.find('ul');

    const toggleData = [select, list, SELECT_ACTIVE_CLASS];

    if (!select.hasClass(SELECT_ACTIVE_CLASS)) {
      activate(...toggleData);
    } else {
      deactivate(...toggleData);
    }
  });

  selectElements.find('input[type="checkbox"]').on('change', (e) => {
    const el = $(e.target);
    const li = el.parents('li');

    if (el.prop('checked')) {
      const title = li.find(LIST_LABEL_CLASS).text();
      selectedData.push({ value: el.val(), title });
    } else {
      selectedData = selectedData.filter(item => item.value !== el.val());
    }

    const select = el.parents(SELECT_CLASS);
    const textElement = select.find(TEXT_CLASS);
    const labelElement = select.find(LABEL_CLASS);

    if (selectedData.length > 0) {
      updateText(textElement, selectedData);
      showLabel(labelElement);
    } else {
      updateText(textElement, [{ title: labelElement.text() }]);
      hideLabel(labelElement);
    }
  });

  $(document).on('click', () => {
    deactivateAll();
  });
};
