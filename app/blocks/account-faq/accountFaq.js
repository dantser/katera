export default () => {
  if (!$('.account-faq').length) {
    return;
  }

  const CONTROL = $('.account-faq__item-heading');
  if (!CONTROL) {
    return;
  }

// сворачиваемся
  CONTROL.each( function () { // eslint-disable-line
    const EL = $(this);
    const ACTIVE_CLASS = 'active';
    const ITEM = '.account-faq__item';
    EL.on('click', (e) => {
      e.preventDefault();
      EL.parent(ITEM).toggleClass(ACTIVE_CLASS);
    });
  });
};
