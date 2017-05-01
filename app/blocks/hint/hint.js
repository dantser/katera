import $ from 'jquery';

export default () => {
  const mouseEnter = function () { // eslint-disable-line func-names
    const hint = $(this).parent();
    const content = hint.find('.hint__content');

    content.show(() => {
      hint.addClass('hint_active');
    });
  };

  const mouseLeave = function () { // eslint-disable-line func-names
    const hint = $(this).parent();
    const content = hint.find('.hint__content');

    content.hide(() => {
      hint.removeClass('hint_active');
    });
  };

  $('.hint').hover(mouseEnter, mouseLeave);
};
