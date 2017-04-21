import $ from 'jquery';

export default () => {
  const ELEMENT_CLASS = '.js-search-bar';
  const ACTIVE_ELEMENT_CLASS = 'search-bar_active';
  const OPEN_BUTTON_CLASS = 'js-search-bar__btn_open';
  const CLOSE_BUTTON_CLASS = 'js-search-bar__btn_close';

  const elements = $(ELEMENT_CLASS);

  if (!elements) {
    return;
  }

  elements.each(function () { // eslint-disable-line
    const el = $(this);

    el.on('click', [`.${OPEN_BUTTON_CLASS}`, `.${CLOSE_BUTTON_CLASS}`], (e) => {
      e.preventDefault();

      const btn = $(e.target);

      if (btn.hasClass(OPEN_BUTTON_CLASS)) {
        el.addClass(ACTIVE_ELEMENT_CLASS);
      }

      if (btn.hasClass(CLOSE_BUTTON_CLASS)) {
        el.removeClass(ACTIVE_ELEMENT_CLASS);
      }
    });
  });
};
