import $ from 'jquery';

export default class Dropdown {
  constructor(elementClass) {
    if (typeof elementClass !== 'string') {
      throw new Error('Dropdown class should be a string');
    }

    if (elementClass[0] !== '.') {
      throw new Error('Specify correct dropdown class');
    }

    const element = $(elementClass);

    if (!element) {
      throw new Error('Dropdown element not found on the page');
    }

    this.element = element;
    this.activeClass = '.dropdown_active';
  }

  show() {
    this.element.slideDown(() => {
      this.element.addClass('dropdown_active');
    });
  }

  hide() {
    this.element.slideUp(() => {
      this.element.removeClass('dropdown_active');
    });
  }
}
