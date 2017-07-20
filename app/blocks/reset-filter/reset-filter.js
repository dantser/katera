export default () => {
  const el = $('.reset-filter');

  if (!el.length) {
    return;
  }

  el.on('click', () => {
    const form = el.parents('form');

    form
      .find('.text-field__control')
      .attr('value', '')
      .trigger('change');

    form
      .find('select')
      .prop('selectedIndex', 0)
      .trigger('change');

    form
      .find('.slider-range')
      .each(function () { // eslint-disable-line func-names
        const item = $(this);
        const { min, max } = item.slider('option');
        item.slider('values', [min, max]);
      });
  });
};
