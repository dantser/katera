import $ from 'jquery';
import burger from '../blocks/burger/burger';
import TextField from '../blocks/text-field/text-field';

$(() => {
  burger();
  window.textField = new TextField('.js-test-text-field');
});
