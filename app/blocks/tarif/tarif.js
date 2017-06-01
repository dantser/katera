import $ from 'jquery';

export default function tarif() {
  const items = $('.tarif__hideShow');

  if (!items.length) {
    return;
  }

  const h = $('html');
  const isMobile = h.hasClass('mobile') || h.hasClass('tablet');

  if (!isMobile) {
    items.off('click');
    return;
  }

  items
    .off('click')
    .on('click', function (e) { // eslint-disable-line func-names
      e.preventDefault();
      const el = $(this);

      if (el.hasClass('tarif__hideShow_opened')) {
        el
          .removeClass('tarif__hideShow_opened')
          .siblings('.tarif__pros')
          .fadeOut()
          .parent()
          .find('.tarif__button')
          .fadeOut();
      } else {
        el
          .addClass('tarif__hideShow_opened')
          .siblings('.tarif__pros')
          .fadeIn()
          .parent()
          .find('.tarif__button')
          .fadeIn();
      }
    });
}

$(window).on('resize', tarif);
