import $ from 'jquery';
import 'jquery-ui';

export default () => {
  const filterControl = '.filter-control .division';
  const activeControlClass = 'division_active';

  $('#tabs').tabs();

  filterControl.on('click', (e) => {
    e.preventDefault();
    filterControl.removeClass(activeControlClass);
    $(this).toggleClass(activeControlClass);
  });
};

