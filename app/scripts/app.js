import $ from 'jquery';
import burger from '../blocks/burger/burger';
import select from '../blocks/select/select';
import searchBar from '../blocks/search-bar/search-bar';
import mainSlider from '../blocks/main-slider/main-slider';
import filter from '../blocks/filter/filter';

$(() => {
  burger();
  select();
  searchBar();
  mainSlider();
  filter();
});
