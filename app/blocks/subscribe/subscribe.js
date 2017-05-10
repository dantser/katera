import $ from 'jquery';

export default () => {
  const subscribeForm = $('.subscribe__form');

  if (!subscribeForm || subscribeForm.length === 0) {
    return;
  }

  // eslint-disable-next-line
  const emailRegexp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  subscribeForm.on('submit', function (e) { // eslint-disable-line func-names
    e.preventDefault();
    const form = $(this);
    const input = form.find('.text-field__control');

    if (!input) {
      return;
    }

    /* eslint-disable */
    if (!emailRegexp.test(input.val())) {
      input.textFieldError('Введен некоректный email адресс. Пожалуйста, перепроверьте данные и попробуйте еще раз');
    } else {
      input.textFieldError();
      form.submit();
    }
  });
};
