import $ from 'jquery';
import Dropdown from '../blocks/dropdown/dropdown';

$(() => {
  // your code goes here
  const burgerDrop = new Dropdown('.js-burger-dropdown');
  setTimeout(burgerDrop.show, 2000);
  setTimeout(burgerDrop.hide, 4000);
});
