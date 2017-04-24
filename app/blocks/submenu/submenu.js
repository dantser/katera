import $ from 'jquery';
// import 'jquery-ui-bundle';

export default () => {
  // const DIVISION_CLASS = '.division';
  // const DIVISION_ACTIVE_CLASS = 'division_active';

  // $('#mainTab').tabs({
  //   activate: (event, ui) => {
  //     const { newTab, oldTab } = ui;
  //
  //     oldTab.find(DIVISION_CLASS).removeClass(DIVISION_ACTIVE_CLASS);
  //     newTab.find(DIVISION_CLASS).addClass(DIVISION_ACTIVE_CLASS);
  //   },
  // });

  const SUBMENU_TITLE = $('.submenu__title');
  // const SUBMENU_LINK = $('.submenu__title a');
  const TABLET_WIDTH = 768;
  const SUBMENU_CLOSED_CLASS = 'submenu__control_closed';
  const SUBMENU_CONTROL = $('.submenu__control');
  const SUBMENU_ITEM = $('.submenu__item');

  $(window).on('resize', () => {
    const windoWidth = $(window).width();
    if (windoWidth <= TABLET_WIDTH) {
      SUBMENU_TITLE.removeClass('division');
      SUBMENU_CONTROL.addClass(SUBMENU_CLOSED_CLASS);

      SUBMENU_ITEM.on('click', () => {
        SUBMENU_CONTROL.toggleClass(SUBMENU_CLOSED_CLASS);
      });
    } else {
      SUBMENU_TITLE.addClass('division');
      SUBMENU_CONTROL.removeClass(SUBMENU_CLOSED_CLASS);
    }
  });
};
