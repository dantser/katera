// import $ from 'jquery';
import 'jquery.inputmask';

export default () => {
  const mask = (el, settings) => {
    if (!el.length) {
      return;
    }

    if (el[0].tagName === 'INPUT') {
      el.inputmask(settings);
    } else {
      el.find('input').inputmask(settings);
    }
  };

  // Маска для email
  mask($('.js-inputmask-email'), 'email');
  // Маска для phone
  mask($('.js-inputmask-phone'), '+7(999) 999-9999');
  // Маска для url
  mask($('.js-inputmask-url'), { alias: 'url', mask: '(\\http://)|(\\http\\s://)i{+}' });
};
