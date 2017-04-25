import $ from 'jquery';

export default () => {
  const ELEMENT_CLASS = '.js-up-btn';


  const btn = $(ELEMENT_CLASS);

  if (!btn) {
    return;
  }

  btn.on('click', (e) => {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 600, 'swing');
  });
};
