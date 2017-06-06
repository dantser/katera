import $ from 'jquery';
import 'jquery-ui-bundle';

export default () => {
  const shopTabs = $('#tabs');

  if (!shopTabs.length) {
    return;
  }

  shopTabs.tabs();
}
