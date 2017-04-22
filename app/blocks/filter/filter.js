import $ from 'jquery';
import 'jquery-ui-bundle';

export default () => {
  $('#filterTab').tabs();
  $('.ui-tab').each(() => {
    if ($(this).hasClass('.ui-tabs-active')) {
      $('.ui-tabs-anchor').addClass('division_active');
    }
  });
};
