import $ from 'jquery';

export default () => {
  const MORE = $('.tarif__hideShow');
// сворачивание тарифа
  MORE.on('click', (e) => {
    e.preventDefault();
    const SLIDE_EL = $('.tarif__pros');
    SLIDE_EL.slideToggle();
    MORE.css('transform', 'rotate(90deg)');
  });
};
