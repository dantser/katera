import $ from 'jquery';


function activate(containerElement, contentElement, activeClass) {
  contentElement.slideDown(() => {
    containerElement.addClass(activeClass);
  });
}

function deactivate(containerElement, contentElement, activeClass) {
  contentElement.slideUp(() => {
    containerElement.removeClass(activeClass);
  });
}

export default () => {
  const CONTAINER_CLASS = '.dotted-dropdown';
  const BTN_CLASS = '.dotted-dropdown__button';
  const ACTIVE_CONTAINER_CLASS = 'dotted-dropdown_active';
  const CONTENT_CLASS = '.dotted-dropdown__content';

  const elements = $(CONTAINER_CLASS);

  if (!elements) {
    return;
  }

  elements.on('click', BTN_CLASS, function () { // eslint-disable-line func-names
    const btn = $(this);
    const container = btn.parent();
    const content = container.find(CONTENT_CLASS);
    const params = [container, content, ACTIVE_CONTAINER_CLASS];

    if (!container.hasClass(ACTIVE_CONTAINER_CLASS)) {
      activate(...params);
    } else {
      deactivate(...params);
    }
  });
};
