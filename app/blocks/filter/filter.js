import $ from 'jquery';
import 'jquery-ui-bundle';

export default () => {
  const filter = $('.filter');

  if (!filter) {
    return;
  }

  // slider range
  const lengthSliderTextMin = $('.js-filter-length-min');
  const lengthSliderTextMax = $('.js-filter-length-max');

  const lengthRangleSlider = $('.js-filter-slider-range');

  lengthRangleSlider.slider({
    min: 0,
    max: 100,
    values: [20, 45],
    range: true,
    slide(e, ui) {
      lengthSliderTextMin.text(`${ui.values[0]} м`);
      lengthSliderTextMax.text(`${ui.values[1]} м`);
    },
  });

  lengthSliderTextMin.text(`${lengthRangleSlider.slider('values', 0)} м`);
  lengthSliderTextMax.text(`${lengthRangleSlider.slider('values', 1)} м`);
};
