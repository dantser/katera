import $ from 'jquery';
import 'jquery.inputmask';

export default () => {
  // Маска для email
  $('input[name="email"]').inputmask('email');
  // Маска для phone
  $('input[type="phone"]').inputmask('+7(999) 999-9999');
};
