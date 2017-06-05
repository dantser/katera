import $ from 'jquery';

function setPositionClass() {
  const item = $(this);
  const l = 'dotted-dropdown_content_left';
  const r = 'dotted-dropdown_content_right';
  const ww = $(window).innerWidth();
  const content = item.find('.dotted-dropdown__content');

  content.addClass('loading');

  const iL = item.offset().left + item.outerWidth();
  const cL = content.offset().left + item.outerWidth();

  if (iL + cL > ww) {
    item
      .removeClass(l)
      .addClass(r);
  } else {
    item
      .removeClass(r)
      .addClass(l);
  }

  content.removeClass('loading');
}

function activate(item, activeClass) {
  item.find('.dotted-dropdown__content').fadeIn(() => {
    item.addClass(activeClass);
  });
}

function deactivate(item, activeClass) {
  item.find('.dotted-dropdown__content').fadeOut(() => {
    item.removeClass(activeClass);
  });
}

export default () => {
  const items = $('.dotted-dropdown');

  if (!items.length) {
    return;
  }

  const ACTIVE_CLASS = 'dotted-dropdown_active';

  items.on('click', '.dotted-dropdown__button', function (e) { // eslint-disable-line func-names
    e.preventDefault();
    const item = $(this).parents('.dotted-dropdown');
    const isActive = item.hasClass(ACTIVE_CLASS);

    if (isActive) {
      deactivate(item, ACTIVE_CLASS);
    } else {
      activate(item, ACTIVE_CLASS);
    }
  });

  const deactivateAll = (e) => {
    if ($(e.target).parents('.dotted-dropdown').length) {
      return;
    }

    items.each(function () { // eslint-disable-line func-names
      const item = $(this);
      deactivate(item, ACTIVE_CLASS);
    });
  };

  $(document).on('click', deactivateAll);
  $(window).on('load resize', () => {
    items.each(setPositionClass);
  });
};
