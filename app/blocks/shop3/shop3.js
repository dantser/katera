import $ from 'jquery';
import 'jquery-ui-bundle';

export default () => {
  const shopTabs = $('#tabs');

  if (!shopTabs) {
    return;
  }

  shopTabs.tabs();
}
