import $ from 'jquery';
import Dropdown from '../dropdown/dropdown';

export default () => {
  const burgerClass = '.js-burger';
  const activeBurgerClass = 'burger_active';
  const dropDownClass = '.js-burger-dropdown';
  const activeDropDownClass = 'burger-dropdown_active';

  const burger = $(burgerClass);
  const dropdown = new Dropdown(dropDownClass);

  if (!burger || !dropdown) {
    return;
  }

  burger.on('click', (e) => {
    e.preventDefault();

    if (burger.hasClass(activeBurgerClass)) {
      burger.removeClass(activeBurgerClass);
      dropdown.hide();
    } else {
      burger.addClass(activeBurgerClass);
      dropdown.show();
    }
  });
};
