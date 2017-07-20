export default function accountProposePopup() {
  const popups = $('.account-propose');

  if (!popups.length) {
    return;
  }

  popups.on('click', (e) => {
    e.stopPropagation();
  });

  popups.each(function () { // eslint-disable-line func-names
    const popup = $(this);

    if (popup.parent().hasClass('hint__content_left')) {
      popup.addClass('account-propose_left');
    }

    if (popup.parent().hasClass('hint__content_bc')) {
      popup.addClass('account-propose_bc');
    }
  });

  $(window).on('resize', accountProposePopup);
}
