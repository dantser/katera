import $ from 'jquery';

export default () => {
  const ELEMENT_CLASS = '.search-bar';
  const ACTIVE_ELEMENT_CLASS = 'search-bar_active';
  const BUTTON_CLASS = '.js-search-bar__button';

  const elements = $(ELEMENT_CLASS);

  if (!elements) {
    return;
  }

  elements.each(function () { // eslint-disable-line
    const el = $(this);

    el.on('click', BUTTON_CLASS, (e) => {
      e.preventDefault();

      if (!el.hasClass(ACTIVE_ELEMENT_CLASS)) {
        el.addClass(ACTIVE_ELEMENT_CLASS);
      } else {
        el.removeClass(ACTIVE_ELEMENT_CLASS);
      }
    });
  });
};
