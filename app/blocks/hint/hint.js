import $ from 'jquery';

export default () => {
  const hints = $('.hint');

  if (!hints.length) {
    return;
  }

  const init = () => {
    hints.each(function () { // eslint-disable-line func-names
      const item = $(this);
      const content = item.find('.hint__content');

      if (item.offset().left - content.width() < 0) {
        content
          .css({
            left: '-6px',
            right: 'initial',
          })
          .addClass('hint__content_left');
      }
    });
  };

  init();
  $(window).on('resize', init);

  hints.hover(function () { // eslint-disable-line func-names
    const hint = $(this);
    const content = hint.find('.hint__content');

    content.toggle(() => {
      hint.toggleClass('hint_active');
    });
  });
};
