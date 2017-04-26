import $ from 'jquery';

export default () => {
  const ELEMENT_CLASS = '.js-up-btn';
  const SHOW_ELEMENT_AT = 200;

  const btn = $(ELEMENT_CLASS);

  if (!btn) {
    return;
  }

  btn.hide();

  $(window).on('scroll', function (e) { // eslint-disable-line
    const offset = $(document).scrollTop();

    if (offset > SHOW_ELEMENT_AT) {
      btn.show('slow');
    } else {
      btn.hide('slow');
    }
  });

  btn.on('click', (e) => {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 600, 'swing');
  });
};
