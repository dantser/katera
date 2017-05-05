import $ from 'jquery';

export default () => {
  const MORE = $('.tarif__hideShow');
// сворачивание тарифа

  MORE.each( function () { // eslint-disable-line
    const EL = $(this);

    const SLIDE_EL = '.tarif__pros';
    const CLOSED_CLASS = 'tarif__hideShow_closed';
    const BUTTON = '.button';
    const HIDE_BUTTON_CLASS = 'button_hide';

    EL.on('click', (e) => {
      e.preventDefault();
      EL.toggleClass(CLOSED_CLASS);
      EL.siblings(SLIDE_EL).slideToggle();
      EL.siblings().children(BUTTON).slideToggle().toggleClass(HIDE_BUTTON_CLASS);
    });
  });
};
