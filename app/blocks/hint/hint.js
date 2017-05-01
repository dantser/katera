import $ from 'jquery';

export default () => {
  // const mouseEnter = function () { // eslint-disable-line func-names
  //   const hint = $(this);
  //   const content = hint.find('.hint__content');
  //
  //   content.show(() => {
  //     hint.addClass('hint_active');
  //   });
  // };
  //
  // const mouseLeave = function () { // eslint-disable-line func-names
  //   const hint = $(this);
  //   console.log('leave');
  //   const content = hint.find('.hint__content');
  //
  //   content.hide(() => {
  //     hint.removeClass('hint_active');
  //   });
  // };

  // $('.hint').hover(mouseEnter, mouseLeave);
  $('.hint').hover(function () { // eslint-disable-line func-names
    const hint = $(this);
    const content = hint.find('.hint__content');

    content.toggle(() => {
      hint.toggleClass('hint_active');
    });
  });
};
