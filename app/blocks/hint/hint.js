import $ from 'jquery';
import { debounce } from 'throttle-debounce';

export default function hint() {
  const hints = $('.js-hint');

  if (!hints.length) {
    return;
  }

  let hintTimer;

  const hideAllElements = () => {
    $(document).find('.js-hint').each(function () { // eslint-disable-line func-names
      $(this)
        .removeClass('hint_active')
        .find('.hint__content')
        .fadeOut(100);
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

  const init = () => {
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

    hints.off('click');
    hints.off('hover');

    const h = $('html');
    const isMobile = h.hasClass('mobile') || h.hasClass('tablet');

    if (!isMobile) {
      hints.hover(function () { // eslint-disable-line func-names
        hintTimer = setTimeout(() => {
          const el = $(this);
          const content = el.find('.hint__content');

          content.fadeIn(() => {
            el.addClass('hint_active');
          });
        }, 100);
      }, () => {
        clearTimeout(hintTimer);
        hideAllElements();
      });
    } else {
      hints.click(toggleContent);
    }
  };

  init();

  $('html, body').on('click', hideAllElements);
  $(window).on('resize', debounce(200, init));
}
