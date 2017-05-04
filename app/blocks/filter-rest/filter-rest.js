import $ from 'jquery';
import 'jquery-ui-bundle';

export default () => {
  const filter = $('.filter-rest');

  if (!filter) {
    return;
  }

  // slider range (power)
  const powerSliderTextMin = $('.js-filter-rest-power-min');
  const powerSliderTextMax = $('.js-filter-rest-power-max');

  const powerRangleSlider = $('.js-filter-rest-power-slider');

  powerRangleSlider.slider({
    min: 0,
    max: 100,
    values: [20, 45],
    range: true,
    slide(e, ui) {
      powerSliderTextMin.text(`${ui.values[0]} л.с.`);
      powerSliderTextMax.text(`${ui.values[1]} л.с.`);
    },
  });

  powerSliderTextMin.text(`${powerRangleSlider.slider('values', 0)} л.с.`);
  powerSliderTextMax.text(`${powerRangleSlider.slider('values', 1)} л.с.`);

  // slider range (weight)
  const weightSliderTextMin = $('.js-filter-rest-weight-min');
  const weightSliderTextMax = $('.js-filter-rest-weight-max');

  const weightRangleSlider = $('.js-filter-rest-weight-slider');

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
