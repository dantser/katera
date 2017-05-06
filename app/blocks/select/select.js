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

function updateText(textElement, data, allSelectedText = null) {
  const text = allSelectedText || data.map(item => item.title).join(', ');
  textElement.text(text);
}

function generateList(select, data) {
  const ul = document.createElement('ul');
  ul.className = 'list list_rounded list_has_triangle select__list';

  data.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'list__item select__item';
    li.innerText = item.title;
    ul.appendChild(li);
  });

  select.append(ul);
}

export default () => {
  const SELECT_CLASS = '.select';
  const SELECT_ACTIVE_CLASS = 'select_active';
  const TEXT_CLASS = '.select__text';
  const LABEL_CLASS = '.select__list-label';
  const SELECT_DATA_ALL_SELECTED = 'all-selected';
  let selectedData = [];

  const selectElements = $(SELECT_CLASS);

  if (!selectElements) {
    return;
  }

  selectElements.each(function () { // eslint-disable-line func-names
    const select = $(this);

    if (!select.data(SELECT_DATA_ALL_SELECTED)) {
      const control = select.find('select');
      const options = Array.from(control.children());

      const optionsData = options.map((option) => {
        const el = $(option);

        return ({ value: el.val(), title: el.text() });
      });

      generateList(select, optionsData);

      const textElement = control.parent().find(TEXT_CLASS);
      const selectedOption = $(control.children()[control[0].selectedIndex]);
      const data = [{ value: selectedOption.val(), title: selectedOption.text() }];

      updateText(textElement, data);
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

    control.children().eq(selected).prop('selected', true);
    control.trigger('change');
  });

  selectElements.find('select').on('change', function () { // eslint-disable-line func-names
    const control = $(this);
    const textElement = control.parent().find(TEXT_CLASS);
    const selectedOption = $(control.children()[control[0].selectedIndex]);
    const data = [{ value: selectedOption.val(), title: selectedOption.text() }];

    updateText(textElement, data);
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
      const title = li.find(LABEL_CLASS).text();
      selectedData.push({ value: el.val(), title });
    } else {
      selectedData = selectedData.filter(item => item.value !== el.val());
    }

    const select = el.parents(SELECT_CLASS);
    const textElement = select.find(TEXT_CLASS);

    // eslint-disable-next-line max-len
    const allSelected = li.parent().children().length === selectedData.length ? select.data(SELECT_DATA_ALL_SELECTED) : null;
    updateText(textElement, selectedData, allSelected);
  });

  $(document).on('click', () => {
    deactivateAll();
  });
};
