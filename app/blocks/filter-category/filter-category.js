const generateCategory = data => `
  <div class="filter-category__category">
    <span class="filter-category__heading">${data.heading}</span>
    <div class="filter-category__items">
      ${data.items.map(item =>
        `<label class="filter-category__item">
          <input type="radio" name="${data.name}" value="${item.value}" class="filter-category__control" data-children="${item.children || ''}">
          <span class="filter-category__label">${item.title}</span>
        </label>`).join('')}
    </div>
  </div>
`;

const generateHeadings = data => `
  <span class="filter-category__heading">${data.heading}</span>
  <div class="filter-category__selected">${data.selected}</div>
`;

export default (categoryClass, data, firstItemName) => {
  const categories = $(categoryClass);
  const CATEGORY_BOX_CLASS = '.filter-category__category-box';
  const CATEGORY_HEADING_CLASS = '.filter-category__heading';
  const CATEGORY_LABEL_CLASS = '.filter-category__label';
  const CATEGORY_HEADING_BOX_CLASS = '.filter-category__heading-box';
  const CATEGORY_CONTROL_CLASS = '.filter-category__control';

  if (!categories.length || !categories.hasClass('filter-category') || !data || !Object.keys(data).length) {
    return;
  }

  // init first category
  categories
    .find(CATEGORY_BOX_CLASS)
    .eq(0)
    .html(generateCategory(data[firstItemName]));

  categories.on('change', CATEGORY_CONTROL_CLASS, (e) => {
    const control = $(e.target);

    const categoryElement = control.parents(CATEGORY_BOX_CLASS);
    const nextAllElements = categoryElement.nextAll(CATEGORY_BOX_CLASS);
    const nextElement = categoryElement.next(CATEGORY_BOX_CLASS);
    const headingsElements = categories.find(CATEGORY_HEADING_BOX_CLASS);
    const childData = data[control.data('children')];

    nextAllElements.html(null);

    const headingsData = {
      heading: categoryElement.find(CATEGORY_HEADING_CLASS).text(),
      selected: control.parent().find(CATEGORY_LABEL_CLASS).text(),
    };

    headingsElements
      .eq(categoryElement.index())
      .html(generateHeadings(headingsData))
      .nextAll(CATEGORY_HEADING_BOX_CLASS)
      .html(null);

    if (!childData || !nextElement.length) {
      return;
    }

    nextElement.html(generateCategory(childData));
  });
};
