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

  const powerRangleSlider = $('.js-filter-engines-power-slider');

  powerRangleSlider.slider({
    min: 0,
    max: 100,
    values: [20, 45],
    range: true,
    slide(e, ui) {
      powerSliderTextMin.text(`${ui.values[0]} л.с.`);
      powerSliderTextMax.text(`${ui.values[1]} л.с.`);
    },
    change(e, ui) {
      powerSliderTextMin.text(`${ui.values[0]} л.с.`);
      powerSliderTextMax.text(`${ui.values[1]} л.с.`);
    },
  });

  powerSliderTextMin.text(`${powerRangleSlider.slider('values', 0)} л.с.`);
  powerSliderTextMax.text(`${powerRangleSlider.slider('values', 1)} л.с.`);

  // slider range (weight)
  const weightSliderTextMin = $('.js-filter-engines-weight-min');
  const weightSliderTextMax = $('.js-filter-engines-weight-max');

  const weightRangleSlider = $('.js-filter-engines-weight-slider');

  weightRangleSlider.slider({
    min: 0,
    max: 180,
    values: [20, 145],
    range: true,
    slide(e, ui) {
      weightSliderTextMin.text(`${ui.values[0]} л.с.`);
      weightSliderTextMax.text(`${ui.values[1]} л.с.`);
    },
  });

  weightSliderTextMin.text(`${weightRangleSlider.slider('values', 0)} к.г.`);
  weightSliderTextMax.text(`${weightRangleSlider.slider('values', 1)} к.г.`);
};
