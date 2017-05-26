import $ from 'jquery';

export default function hint() {
  const hints = $('.hint');

  if (!hints.length) {
    return;
  }

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

  const w = $(window);

  const toggleContent = function () { // eslint-disable-line func-names
    const el = $(this);
    const content = el.find('.hint__content');

    content.toggle(() => {
      el.toggleClass('hint_active');
    });
  };

  hints.off('click');
  hints.off('hover');

  if (w.width() > 1024) {
    hints.hover(toggleContent);
  } else {
    hints.click(toggleContent);
  }

  $(window).on('resize', hint);
}
