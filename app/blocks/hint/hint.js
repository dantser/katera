import $ from 'jquery';

export default function hint() {
  const hints = $('.js-hint');

  if (!hints.length) {
    return;
  }

  hints.each(function () { // eslint-disable-line func-names
    const item = $(this).find('.hint');
    const content = item.find('.hint__content');

    if (item.offset().left - content.width() < 0) {
      content
        .css({
          left: '-6px',
          right: 'initial',
        })
        .addClass('hint__content_left');
    }

    if (item.offset().left + content.width() > $(window).innerWidth()) {
      content
        .css({
          left: ~(item.offset().left + content.width() - $(window).innerWidth() + 15) + 'px', // eslint-disable-line
          right: 'initial',
        })
        .addClass('hint__content_bc');
    }
  });

  const w = $(window);
  const hideAllElements = () => {
    $('.hint_active').each(function () { // eslint-disable-line func-names
      $(this)
        .removeClass('hint_active')
        .find('.hint__content')
        .fadeOut();
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

    content.fadeToggle(() => {
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
