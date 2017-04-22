import $ from 'jquery';
import burger from '../blocks/burger/burger';
import select from '../blocks/select/select';
import mainSlider from '../blocks/main-slider/main-slider';
import filter from '../blocks/filter/filter';

$(() => {
  burger();
  select();
  mainSlider();
  filter();
});
