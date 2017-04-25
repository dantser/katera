import $ from 'jquery';
import burger from '../blocks/burger/burger';
import select from '../blocks/select/select';
import searchBar from '../blocks/search-bar/search-bar';
import mainSlider from '../blocks/main-slider/main-slider';
import filter from '../blocks/filter/filter';
import scroll from '../blocks/scroll-slider/scroll-slider';
import textField from '../blocks/text-field/text-field';

$(() => {
  burger();
  select();
  searchBar();
  mainSlider();
  filter();
  textField();
  scroll();
});
