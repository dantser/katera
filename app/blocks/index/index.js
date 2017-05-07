import $ from 'jquery';
import 'sticky-kit/dist/sticky-kit';

/* eslint-disable */
export default () => {
  $('.yacht-preview-widget').stick_in_parent({
    offset_top: 30,
  });

  $('.topic-preview-widget').stick_in_parent({
    offset_top: 30,
  });
};
