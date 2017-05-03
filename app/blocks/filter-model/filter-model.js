import $ from 'jquery';

export default () => {
  const filter = $('.filter-model');

  if (!filter) {
    return;
  }

  // slider range
  const lengthSliderTextMin = $('.js-filter-model-length-min');
  const lengthSliderTextMax = $('.js-filter-model-length-max');

  const lengthRangleSlider = $('.js-filter-model-slider-range');

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

  const extendedLink = filter.find('.filter-model__link');
  const extendedBlock = filter.find('.filter-model__extended-wrapper');

  extendedLink.on('click', (e) => {
    e.preventDefault();

    filter.addClass('filter_extended');
    extendedBlock.slideDown();
  });
};
