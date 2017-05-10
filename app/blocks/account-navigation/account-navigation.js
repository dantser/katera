import $ from 'jquery';
import 'sticky-kit/dist/sticky-kit';

export default () => {
  $('.account-navigation').stick_in_parent({
    offset_top: 95,
  });
};
