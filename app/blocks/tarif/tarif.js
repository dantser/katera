import $ from 'jquery';

export default function tarif() {
// сворачивание тарифа
  const MORE = $('.tarif__hideShow');
  const SLIDE_EL = '.tarif__pros';
  if ($(window).width <= 991) {
    $(SLIDE_EL).slideUp();
  }
  MORE.each( function () { // eslint-disable-line
    const EL = $(this);
    const OPENED_CLASS = 'tarif__hideShow_opened';
    const BUTTON = '.tarif__button';
    EL.on('click', (e) => {
      e.preventDefault();
      EL.toggleClass(OPENED_CLASS);
      EL.siblings(SLIDE_EL).slideToggle();
      EL.siblings().children(BUTTON).slideToggle();
    });
  });
}

$(window).on('resize', tarif);
