import $ from 'jquery';
import filterCategory from '../filter-category/filter-category';

const mockData = {
  categories: {
    heading: 'Категории',
    name: 'category',
    items: [
      {
        title: 'Лодки',
        value: 'boats',
        children: 'boatType',
      },
      {
        title: 'Разное',
        value: 'other',
      },
    ],
  },
  boatType: {
    heading: 'Тип лодки',
    name: 'boatyType',
    items: [
      {
        title: 'Моторная',
        value: 'powerboat',
      },
      {
        title: 'Парусная',
        value: 'sailboat',
        children: 'shipyard',
      },
      {
        title: 'Гребная',
        value: 'rowingboat',
      },
      {
        title: 'Надувная',
        value: 'inflatableboat',
      },
    ],
  },
  shipyard: {
    heading: 'Верфь',
    name: 'shipyard',
    items: [
      {
        title: 'Azimul',
        value: 'azimul',
      },
      {
        title: 'Fairline',
        value: 'fairline',
      },
      {
        title: 'Sunseeker',
        value: 'sunseeker',
        children: 'model',
      },
      {
        title: 'Bavaria Yachts',
        value: 'bavariaYachts',
      },
    ],
  },
  model: {
    heading: 'Модель',
    name: 'model',
    items: [
      {
        title: 'S240',
        value: 's240',
      },
      {
        title: 'Leonardo',
        value: 'leonardo',
      },
      {
        title: 'Dominator 800',
        value: 'dominator800',
      },
      {
        title: 'S560',
        value: 's560',
      },
    ],
  },
};

/* eslint-disable */
export default () => {
  filterCategory('.account-sale3__filter-category', mockData, 'categories');

  // additioanl engine checkbox dependencies
  const hasAdditionalEngine = $('.js-has-additional-engine');

  if (hasAdditionalEngine.length > 0) {
    const typeContainer = $('.js-type-of-additional-engine');
    const control = hasAdditionalEngine.find('.checkbox__control');

    const changeAdditionalEngineState = () => {
      if (!typeContainer.length) {
        return;
      }

      const select = typeContainer.find('.select');

      if (control.prop('checked')) {
        typeContainer.removeClass('input-group__item_disabled');
        select.trigger('enable');
      } else {
        typeContainer.addClass('input-group__item_disabled');
        select.trigger('disable');
      }
    };

    changeAdditionalEngineState();

    control.on('change', changeAdditionalEngineState);
  }
};
