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

export default () => {
  filterCategory('.account-sale3__filter-category', mockData, 'categories');
};
