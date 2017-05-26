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
  const hideAllElements = () => {
    hints
      .filter((index, item) => $(item).hasClass('hint_active'))
      .each(function () { // eslint-disable-line func-names
        $(this)
          .removeClass('hint_active')
          .find('.hint__content')
          .hide('slow');
      });
  };

  const toggleContent = function (e) { // eslint-disable-line func-names
    e.stopPropagation();
    e.preventDefault();

    const el = $(this);
    const content = el.find('.hint__content');

    if (!el.hasClass('hint_active')) {
      hideAllElements();
    }

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

  $('html, body').on('click', hideAllElements);

  $(window).on('resize', hint);
}
