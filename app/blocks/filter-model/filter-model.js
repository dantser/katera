export default () => {
  const filter = $('.filter-model');

  if (!filter.length) {
    return;
  }

  // slider range
  const lengthSliderTextMin = $('.js-filter-model-length-min');
  const lengthSliderTextMax = $('.js-filter-model-length-max');
  const lengthSliderValMin = $('.js-filter-model-length-min-val');
  const lengthSliderValMax = $('.js-filter-model-length-max-val');

  const lengthRangleSlider = $('.js-filter-model-slider-range');

  lengthRangleSlider.slider({
    min: lengthRangleSlider.data('range-min'),
    max: lengthRangleSlider.data('range-max'),
    values: [lengthRangleSlider.data('value-min'), lengthRangleSlider.data('value-max')],
    range: true,
    slide(e, ui) {
      lengthSliderTextMin.text(`${ui.values[0]} м`);
      lengthSliderTextMax.text(`${ui.values[1]} м`);
      lengthSliderValMin.val(ui.values[0]);
      lengthSliderValMax.val(ui.values[1]);
    },
    change(e, ui) {
      lengthSliderTextMin.text(`${ui.values[0]} м`);
      lengthSliderTextMax.text(`${ui.values[1]} м`);
      lengthSliderValMin.val(ui.values[0]);
      lengthSliderValMax.val(ui.values[1]);
    },
  });

  lengthSliderTextMin.text(`${lengthRangleSlider.slider('values', 0)} м`);
  lengthSliderTextMax.text(`${lengthRangleSlider.slider('values', 1)} м`);
  lengthSliderValMin.val(lengthRangleSlider.slider('values', 0));
  lengthSliderValMax.val(lengthRangleSlider.slider('values', 1));
};
