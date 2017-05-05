import $ from 'jquery';

// controll all popups
export default () => {
  const MODAL_CLASS = '.mobile-slide-popup';
  const ACTIVE_MODAL_CLASS = 'mobile-slide-popup_active';
  const OPEN_BUTTON_CLASS = '.js-mobile-slide-popup';
  const CLOSE_BUTTON_CLASS = '.mobile-slide-popup__back';
  const DATA_TARGET_ATTRIBUTE = 'target-modal';

  const modals = $(MODAL_CLASS);

  if (!modals) {
    return;
  }

  const isTrueButton = el => !!(el && el.hasClass(OPEN_BUTTON_CLASS.slice(1)) && el.data(DATA_TARGET_ATTRIBUTE).slice(0, 1) === '#');
  const isTrueModal = el => !!(el && el.hasClass(MODAL_CLASS.slice(1)) && el.attr('id'));

  const show = (el) => {
    if (!isTrueModal(el)) {
      return;
    }

    el.show(0, () => {
      const body = $('html, body');

      el.addClass(ACTIVE_MODAL_CLASS);
      el.data('scroll-top', body.scrollTop());

      el.on('transitionend', () => {
        body.animate({ scrollTop: 0 }, 500, 'swing');
        el.off('transitionend');
      });
    });
  };

  const hide = (el) => {
    if (!isTrueModal(el)) {
      return;
    }

    el
      .removeClass(ACTIVE_MODAL_CLASS)
      .on('transitionend', () => {
        el
          .css({ display: 'none' })
          .off('transitionend');
        $('html, body').animate({ scrollTop: +el.data('scroll-top') || 0 }, 500, 'swing');
      });
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
