import $ from 'jquery';

export default () => {
  const CONTROL = $('.account-faq__item-heading');
  if (!CONTROL) {
    return;
  }
  console.log(CONTROL);
// сворачиваемся
  CONTROL.each( function () { // eslint-disable-line
    const EL = $(this);
    const ACTIVE_CLASS = 'active';
    const ITEM = '.account-faq__item';
    EL.on('click', (e) => {
      console.log('click');
      e.preventDefault();
      EL.parent(ITEM).toggleClass(ACTIVE_CLASS);
    });
  });
};

//   $('.account-faq__item-showbutton').click(() => {
//     const block = $(this).parents('.account-faq__item');
//     const details = block.find('.account-faq__item-details');
//     if (block.hasClass('active')) {
//       block.removeClass('active');
//       details.height(0);
//     } else {
//       block.addClass('active');
//       let detailsHeight = 0;
//       details.children().each(() => {
//         const textHeight = $(this).outerHeight(true);
//         detailsHeight += textHeight;
//       });
//       details.height(detailsHeight);
//     }
//   });
// };
