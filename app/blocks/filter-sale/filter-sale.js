import $ from 'jquery';
import 'jquery-ui-bundle';

export default () => {
  const filter = $('.filter-sale');

  if (!filter) {
    return;
  }
  // tabs
  const DIVISION_CLASS = '.division';
  const DIVISION_ACTIVE_CLASS = 'division_active';
  filter.tabs({
    activate: (event, ui) => {
      const { newTab, oldTab } = ui;

      oldTab.find(DIVISION_CLASS).removeClass(DIVISION_ACTIVE_CLASS);
      newTab.find(DIVISION_CLASS).addClass(DIVISION_ACTIVE_CLASS);
    },
  });

  // slider range
  const lengthSliderTextMin = $('.js-filter-sale-length-min');
  const lengthSliderTextMax = $('.js-filter-sale-length-max');

  const lengthRangleSlider = $('.js-filter-sale-length-slider');

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

  filter.find('.filter-sale__roll-down').on('click', (e) => {
    e.preventDefault();

    const form = $(e.target).parents('form');
    const extendedBlock = form.find('.filter-sale__extended-wrapper');

    form.addClass('filter_extended');
    extendedBlock.slideDown();
  });
};
