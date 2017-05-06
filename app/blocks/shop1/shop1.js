import $ from 'jquery';
import 'jquery-ui-bundle';

export default () => {
  const shopTabs = $('#shopTabs');
  const DIVISION_CLASS = '.division';
  const DIVISION_ACTIVE_CLASS = 'division_active';

  if (!shopTabs) {
    return;
  }

  shopTabs.tabs({
    activate: (event, ui) => {
      const { newTab, oldTab } = ui;

      oldTab.find(DIVISION_CLASS).removeClass(DIVISION_ACTIVE_CLASS);
      newTab.find(DIVISION_CLASS).addClass(DIVISION_ACTIVE_CLASS);
    },
  });
};
