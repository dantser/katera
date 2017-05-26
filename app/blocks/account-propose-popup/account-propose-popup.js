import $ from 'jquery';

export default function accountProposePopup() {
  const popups = $('.account-propose');

  if (!popups.length) {
    return;
  }

  popups.each(function () { // eslint-disable-line func-names
    const popup = $(this);

    if (popup.parent().hasClass('hint__content_left')) {
      popup.addClass('account-propose_left');
    }
  });

  $(window).on('resize', accountProposePopup);
}
