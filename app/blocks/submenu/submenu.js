import $ from 'jquery';
// import 'jquery-ui-bundle';

export default () => {
  // const DIVISION_CLASS = '.division';
  const DIVISION_ACTIVE_CLASS = 'division_active';

  // $('#mainTab').tabs({
  //   activate: (event, ui) => {
  //     const { newTab, oldTab } = ui;
  //
  //     oldTab.find(DIVISION_CLASS).removeClass(DIVISION_ACTIVE_CLASS);
  //     newTab.find(DIVISION_CLASS).addClass(DIVISION_ACTIVE_CLASS);
  //   },
  // });

  const SUBMENU_TITLE = $('.submenu__title').each();
  $(window).resize(() => {
    let windoWidth = $(window).width();
    console.log(windoWidth);
    if (windoWidth < 720) {
      SUBMENU_TITLE.removeClass(DIVISION_ACTIVE_CLASS);
    }
  });
};
