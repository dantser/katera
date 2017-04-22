import $ from 'jquery';
import 'jquery-ui-bundle';

export default () => {
  $('#filterTab').tabs();

  const tab = $('.ui-tabs-tab');
  const activeClass = 'division_active';
  $(tab).each(() => {
    if ($(this).hasClass('.ui-tabs-active')) {
      $(this).children().addClass(activeClass);
    } else {
      $(this).children().removeClass(activeClass);
    }
  });
};
