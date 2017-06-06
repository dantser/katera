import $ from 'jquery';

export default () => {
  if (!$('.account-sale1').length) {
    return;
  }

  const CONTROL = $('.account-sale1 .button-slide');
  const SLIDE_EL = $('.tarif');

  if (!CONTROL.length || !SLIDE_EL.length) {
    return;
  }

  // Сворачивание тарифов на account-sale1
  CONTROL.on('click', (e) => {
    e.preventDefault();
    const EL = CONTROL.find('span');
    const TEXT = EL.text();
    const ICON = CONTROL.find('svg');
    SLIDE_EL.slideToggle();
    EL.text(TEXT === 'Свернуть блок' ? 'Развернуть блок' : 'Свернуть блок');
    ICON.toggleClass('button__icon_kind_caret-down button__icon_kind_caret-up');
  });
};
