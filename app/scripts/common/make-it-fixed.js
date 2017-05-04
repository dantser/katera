import $ from 'jquery';
import 'jquery-ui-bundle';

export default (blockClass, defaultStateClass, fixedStateClass) => {
  // eslint-disable-next-line no-confusing-arrow
  const normalizeClassName = cn => cn.slice(0, 1) === '.' ? cn.slice(1) : cn;
  const DEFAULT_STATE_CLASS = normalizeClassName(defaultStateClass);
  const FIXED_STATE_CLASS = normalizeClassName(fixedStateClass);
  const ELEMENT_CLASS = `.${normalizeClassName(blockClass)}`;
  const filter = $(ELEMENT_CLASS);

  if (!filter) {
    return;
  }

  let filterOffsetTop = null;

  if (!filter.data('offset-top')) {
    filterOffsetTop = filter.offset().top;
    filter.data('offset-top', filterOffsetTop);
  }

  $(window).on('scroll', () => {
    const documentScrollTop = $(document).scrollTop();
    const hasToBeFixed = filterOffsetTop && documentScrollTop >= filterOffsetTop;

    if (hasToBeFixed && !filter.hasClass(FIXED_STATE_CLASS)) {
      filter.slideUp(() => {
        filter
          .removeClass(DEFAULT_STATE_CLASS)
          .addClass(FIXED_STATE_CLASS)
          .slideDown();
      });
    }

    if (!hasToBeFixed && filter.hasClass(FIXED_STATE_CLASS)) {
      filter.slideUp(() => {
        filter
          .removeClass(FIXED_STATE_CLASS)
          .addClass(DEFAULT_STATE_CLASS)
          .slideDown();
      });
    }
  });
};
