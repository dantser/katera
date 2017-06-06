import $ from 'jquery';
import Dropdown from '../dropdown/dropdown';

export default () => {
  const burgerClass = '.js-burger';
  const activeBurgerClass = 'burger_active';
  const dropDownClass = '.js-burger-dropdown';

  const dropdown = new Dropdown(dropDownClass);

  $(burgerClass).on('click', (e) => {
    const burger = $(burgerClass);
    e.preventDefault();
    if (burger.hasClass(activeBurgerClass)) {
      dropdown.hide(() => {
        burger.removeClass(activeBurgerClass);
      });
    } else {
      dropdown.show(() => {
        burger.addClass(activeBurgerClass);
      });
    }
  });
};
