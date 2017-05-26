import $ from 'jquery';

// controll all popups
export default () => {
  const FADE_DURATION = 250;
  const MODAL_CLASS = '.modal';
  const ACTIVE_MODAL_CLASS = 'modal_active';
  const OPEN_BUTTON_CLASS = '.js-open-modal';
  const CLOSE_BUTTON_CLASS = '.modal__close';
  const DATA_TARGET_ATTRIBUTE = 'target-modal';

  const modals = $(MODAL_CLASS);

  if (!modals) {
    return;
  }

  modals.on('scroll', (e) => {
    e.stopPropagation();
  });

  const isTrueButton = el => !!(el && el.hasClass(OPEN_BUTTON_CLASS.slice(1)) && el.data(DATA_TARGET_ATTRIBUTE).slice(0, 1) === '#');
  const isTrueModal = el => !!(el && el.hasClass(MODAL_CLASS.slice(1)) && el.attr('id'));

  const show = (el) => {
    if (!isTrueModal(el)) {
      return;
    }

    $('body').css('overflow', 'hidden');

    el.fadeIn(FADE_DURATION, () => {
      el.addClass(ACTIVE_MODAL_CLASS);
    });
  };

  const hide = (el) => {
    if (!isTrueModal(el)) {
      return;
    }

    $('body').css('overflow', 'auto');

    el.fadeOut(FADE_DURATION);
  };

  // init
  $(modals).each(function () { // eslint-disable-line func-names
    const modal = $(this);
    const closeBtn = modal.find(CLOSE_BUTTON_CLASS);

    if (!closeBtn) {
      return;
    }

    closeBtn.on('click', () => {
      hide(modal);
    });
  });

  $(document).on('click', MODAL_CLASS, function (e) { // eslint-disable-line func-names
    const modal = $(this);
    const target = $(e.target);

    if (target.hasClass(MODAL_CLASS.slice(1)) || target.hasClass(CLOSE_BUTTON_CLASS.slice(1))) {
      hide(modal);
    }
  });

  $(OPEN_BUTTON_CLASS).on('click', (e) => {
    e.preventDefault();

    const target = $(e.currentTarget);

    if (!isTrueButton(target)) {
      return;
    }

    const modal = $(target.data(DATA_TARGET_ATTRIBUTE));

    if (!isTrueModal(modal)) {
      return;
    }

    show(modal);
  });
};
