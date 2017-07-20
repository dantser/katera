export default () => {
  const CONTROL = $('.account-shop-3-page .button-slide');
  const SLIDE_EL = $('.types');
  if (!CONTROL.length) {
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
