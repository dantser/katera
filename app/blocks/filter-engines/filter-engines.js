import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-touch-punch';

export default () => {
  const filter = $('.filter-engines');

  if (!filter.length) {
    return;
  }

  // slider range (power)
  const powerSliderTextMin = $('.js-filter-engines-power-min');
  const powerSliderTextMax = $('.js-filter-engines-power-max');
  const powerSliderValMin = $('.js-filter-engines-power-min-val');
  const powerSliderValMax = $('.js-filter-engines-power-max-val');

  const powerRangleSlider = $('.js-filter-engines-power-slider');

  powerRangleSlider.slider({
    min: powerRangleSlider.data('range-min'),
    max: powerRangleSlider.data('range-max'),
    values: [powerRangleSlider.data('value-min'), powerRangleSlider.data('value-max')],
    range: true,
    slide(e, ui) {
      powerSliderTextMin.text(`${ui.values[0]} л.с.`);
      powerSliderTextMax.text(`${ui.values[1]} л.с.`);
      powerSliderValMin.text(ui.values[0]);
      powerSliderValMax.text(ui.values[1]);
    },
    change(e, ui) {
      powerSliderTextMin.text(`${ui.values[0]} л.с.`);
      powerSliderTextMax.text(`${ui.values[1]} л.с.`);
      powerSliderValMin.text(ui.values[0]);
      powerSliderValMax.text(ui.values[1]);
    },
  });

  powerSliderTextMin.text(`${powerRangleSlider.slider('values', 0)} л.с.`);
  powerSliderTextMax.text(`${powerRangleSlider.slider('values', 1)} л.с.`);
  powerSliderValMin.text(powerRangleSlider.slider('values', 0));
  powerSliderValMax.text(powerRangleSlider.slider('values', 1));

  // slider range (weight)
  const weightSliderTextMin = $('.js-filter-engines-weight-min');
  const weightSliderTextMax = $('.js-filter-engines-weight-max');
  const weightSliderValMin = $('.js-filter-engines-weight-min-val');
  const weightSliderValMax = $('.js-filter-engines-weight-max-val');

  const weightRangleSlider = $('.js-filter-engines-weight-slider');

  weightRangleSlider.slider({
    min: weightRangleSlider.data('range-min'),
    max: weightRangleSlider.data('range-max'),
    values: [weightRangleSlider.data('value-min'), weightRangleSlider.data('value-max')],
    range: true,
    slide(e, ui) {
      weightSliderTextMin.text(`${ui.values[0]} л.с.`);
      weightSliderTextMax.text(`${ui.values[1]} л.с.`);
      weightSliderValMin.val(ui.values[0]);
      weightSliderValMax.val(ui.values[1]);
    },
  });

  weightSliderTextMin.text(`${weightRangleSlider.slider('values', 0)} к.г.`);
  weightSliderTextMax.text(`${weightRangleSlider.slider('values', 1)} к.г.`);
  weightSliderValMin.val(weightRangleSlider.slider('values', 0));
  weightSliderValMax.val(weightRangleSlider.slider('values', 1));
};
