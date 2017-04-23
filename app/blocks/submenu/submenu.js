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

  $(window).on('resize', () => {
    const windoWidth = $(window).width();
    if (windoWidth <= TABLET_WIDTH) {
      SUBMENU_TITLE.removeClass('division');
      $('.submenu__control').addClass('submenu__control_closed');
    } else {
      SUBMENU_TITLE.addClass('division');
      $('.submenu__control').removeClass('submenu__control_closed');
    }
  });
  $('.submenu__item').on('click', () => {
    $('.submenu__control').toggleClass('submenu__control_closed');
  });
};
