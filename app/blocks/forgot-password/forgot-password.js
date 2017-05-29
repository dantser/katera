import $ from 'jquery';

function getStep() { // eslint-disable-line consistent-return
  // initial step
  const initialStep = '#send-code';

  try {
    return sessionStorage.getItem('forgot-password-step') || initialStep;
  } catch (err) {} // eslint-disable-line
}

function nextStep(step = null) {
  const block = $('.forgot-password');
  // get current state from storage, if it wasnt passed
  const currentStep = step || getStep();

  // hide all forms, and show current
  block
    .find(currentStep)
    .show()
    .siblings('.form')
    .hide();

  if (!step) {
    return;
  }

  // update current step in storage
  try {
    sessionStorage.setItem('forgot-password-step', step);
  } catch (err) {} // eslint-disable-line
}

export default () => {
  const block = $('.forgot-password');

  if (!block.length) {
    return;
  }

  const sendCodeForm = block.find('#send-code');
  const enterCodeForm = block.find('#enter-code');
  const createPassword = block.find('#create-password');

  if (!sendCodeForm.length || !enterCodeForm.length || !createPassword.length) {
    return;
  }

  // show initial step
  nextStep();

  // handle click on re-send code link
  enterCodeForm
    .find('.js-re-send-code')
    .on('click', (e) => {
      e.preventDefault();
      // reset steps to initial one
      nextStep('#send-code');
    });

  // handle forms
  sendCodeForm.on('submit', (e) => {
    e.preventDefault();
    const captcha = sendCodeForm.find('[name="captcha"]');
    const phone = sendCodeForm.find('[name="phone"]');
    let error = false;

    // clear errors
    [captcha, phone].forEach(el => el.removeError());

    if (captcha.val() === '') {
      captcha.addError('Введите символы с картинки');
      error = true;
    }

    if (phone.val() === '') {
      phone.addError('Введите номер телефона');
      error = true;
    }

    if (error) {
      return;
    }

    // PUT IT INTO SUCCESS CALLBACK
    nextStep('#enter-code');
  });

  enterCodeForm.on('submit', (e) => { // eslint-disable-line consistent-return
    e.preventDefault();
    const code = enterCodeForm.find('[name="code"]');

    // clear errors
    code.removeError();

    if (code.val() === '') {
      return code.addError('Введите код');
    }

    // PUT IT INTO SUCCESS CALLBACK
    nextStep('#create-password');
  });

  createPassword.on('submit', (e) => {
    e.preventDefault();
    const password = createPassword.find('[name="password"]');
    const repeat = createPassword.find('[name="repeat"]');
    let error = false;

    // clear errors
    [password, repeat].forEach(el => el.removeError());

    if (password.val() === '') {
      password.addError('Введите пароль');
      error = true;
    }

    if (repeat.val() === '') {
      repeat.addError('Повторите пароль');
      error = true;
    }

    if (password.val() !== repeat.val()) {
      repeat.addError('Пароли не совпадают');
      error = true;
    }

    if (error) {
      return;
    }

    // PUT IT INTO SUCCESS CALLBACK
    alert('done');
  });
};
