// import $ from 'jquery';
import { throttle } from 'throttle-debounce';

/* eslint-disable */
// eslint-disable-next-line max-len
export default (blockClass, defaultStateClass, fixedStateClass, stopFixingBreakpoint = null, startFixingBreakpoint = 99999, onStick = (f) => f) => {
  // eslint-disable-next-line no-confusing-arrow
  const init = () => {
    const normalizeClassName = cn => cn.slice(0, 1) === '.' ? cn.slice(1) : cn;
    const DEFAULT_STATE_CLASS = normalizeClassName(defaultStateClass);
    const FIXED_STATE_CLASS = normalizeClassName(fixedStateClass);
    const ELEMENT_CLASS = `.${normalizeClassName(blockClass)}`;
    const defaultBlock = $(ELEMENT_CLASS);

    if (!defaultBlock || defaultBlock.length === 0) {
      return;
    }

    let fixedBlock = null;

    const w = $(window);

    w.on('scroll.make-it-fixed', throttle(200, () => {
      const documentScrollTop = $(document).scrollTop();
      const defaultBlockOffset = defaultBlock.offset().top + defaultBlock.outerHeight();
      const hasToBeFixed = (
        documentScrollTop >= defaultBlockOffset &&
        w.width() >= stopFixingBreakpoint &&
        w.width() <= startFixingBreakpoint
      );

      if (hasToBeFixed) {

        if (fixedBlock !== null) {
          return;
        }

        fixedBlock = defaultBlock
            .clone(true, true)
            .removeClass(DEFAULT_STATE_CLASS)
            .addClass(FIXED_STATE_CLASS)
            .insertAfter(defaultBlock);

        if (typeof onStick === 'function' && !onStick.called) {
          onStick();
          onStick.called = true;
        }
      } else if (fixedBlock) {
        fixedBlock.remove();
        fixedBlock = null;
        onStick.called = false;
      }
    }));
  };
  init();
};
