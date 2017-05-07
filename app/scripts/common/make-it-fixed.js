import $ from 'jquery';
import { throttle } from 'throttle-debounce';

// eslint-disable-next-line max-len
export default (blockClass, defaultStateClass, fixedStateClass, stopFixingBreakpoint = null, startFixingBreakpoint = 99999) => {
  // eslint-disable-next-line no-confusing-arrow
  const normalizeClassName = cn => cn.slice(0, 1) === '.' ? cn.slice(1) : cn;
  const DEFAULT_STATE_CLASS = normalizeClassName(defaultStateClass);
  const FIXED_STATE_CLASS = normalizeClassName(fixedStateClass);
  const ELEMENT_CLASS = `.${normalizeClassName(blockClass)}`;
  const defaultBlock = $(ELEMENT_CLASS);

  if (!defaultBlock || defaultBlock.length === 0) {
    return;
  }

  const fixedBlock = defaultBlock
    .clone(true, true)
    .hide()
    .removeClass(DEFAULT_STATE_CLASS)
    .addClass(FIXED_STATE_CLASS)
    .insertAfter(defaultBlock);

  const w = $(window);

  w.on('scroll', throttle(200, () => {
    const documentScrollTop = $(document).scrollTop();
    const defaultBlockOffset = defaultBlock.offset().top + defaultBlock.outerHeight();
    const hasToBeFixed = (
      documentScrollTop >= defaultBlockOffset &&
      w.width() >= stopFixingBreakpoint &&
      w.width() <= startFixingBreakpoint
    );

    if (hasToBeFixed) {
      fixedBlock.fadeIn();
    } else {
      fixedBlock.fadeOut();
    }
  }));
};
