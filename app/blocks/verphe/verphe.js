import $ from 'jquery';

export default () => {
  const CLOSE = $('.verphe-contacts__icon-close');
  const CONTACTS = $('.verphe__contacts');
  const SIDEBAR = $('.verphe__sidebar');
  if (!CLOSE.length) {
    return;
  }
  CLOSE.on('click', (e) => {
    e.preventDefault();
    SIDEBAR.slideToggle();
    CONTACTS.slideToggle();
  });
  CONTACTS.on('click', (e) => {
    e.preventDefault();
    SIDEBAR.slideToggle();
    CONTACTS.slideToggle();
  });
};
