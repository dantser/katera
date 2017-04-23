import $ from 'jquery';

export default () => {
  const ELEMENT_CLASS = '.js-text-field';
  const CONTROL_CLASS = '.text-field__control';

  const element = $(ELEMENT_CLASS);

  if (!element) {
    return;
  }

  element.each(function () { // eslint-disable-line
    $(this).find(CONTROL_CLASS).on('input', function () { // eslint-disable-line
      const control = $(this);
      control.attr('value', control.val());
    });
  });
};

// export default class TextField {
//   /**
//    * constructor
//    * @param elementIdentifier {string} - UNIQUE identifier of TextField
//    */
//   constructor(elementIdentifier) {
//     this.ELEMENT_CLASS = 'js-text-field';
//     this.CONTROL_CLASS = '.text-field__control';
//     this.ERROR_CLASS = 'text-field_has_error';
//     const textField = $(elementIdentifier);
//
//     if (!textField) {
//       throw new Error('TextField element not found on the page');
//     }
//
//     if (!textField.hasClass(this.ELEMENT_CLASS)) {
//       throw new Error('Specify correct TextField element');
//     }
//
//     if (textField.length > 1) {
//       throw new Error(`Expected ${elementIdentifier} to be unique on the page`);
//     }
//
//     this.textField = textField;
//     this.control = textField.find(this.CONTROL_CLASS);
//     this._value = '';
//     this._error = false;
//
//     this._init();
//   }
//
//   /**
//    * Set value of TextField control (input element)
//    * @param value {string}
//    */
//   set value(value) {
//     this._value = value;
//     this.control.attr('value', value);
//   }
//
//   /**
//    * Get value of TextField control (input element)
//    * @returns {string}
//    */
//   get value() {
//     return this._value;
//   }
//
//   /**
//    * Set error message
//    * @param error {boolean|string}
//    */
//   set error(error) {
//     this._error = error;
//
//     if (error) {
//       this.textField.addClass(this.ERROR_CLASS);
//     } else {
//       this.textField.removeClass(this.ERROR_CLASS);
//     }
//   }
//
//   /**
//    * Return error message
//    * @returns {boolean|string}
//    */
//   get error() {
//     return this._error;
//   }
//
//   /**
//    * Replace TextField.on with TextField.control.on
//    * @param args
//    */
//   on(...args) {
//     this.control.on(...args);
//   }
//
//   /**
//    * Set attribute value depends on control (input) value. Need for show/hide placeholder
//    * @private
//    */
//   _handleValueChange() {
//     this.value = this.control.val();
//   }
//
//   /**
//    * Initialization
//    * @private
//    */
//   _init() {
//     this.value = '';
//     this.control.on('input', this._handleValueChange.bind(this));
//   }
// }
