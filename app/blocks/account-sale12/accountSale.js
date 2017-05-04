import $ from 'jquery';

export default () => {
  const CONTROL = $('.button-slide');
  if (!CONTROL) {
    return;
  }
// Сворачивание тарифов
  CONTROL.on('click', (e) => {
    e.preventDefault();
    const SLIDE_EL = $('.tarif');
    const TEXT = CONTROL.text();
    SLIDE_EL.slideToggle();
    CONTROL.text(TEXT === 'Свернуть текст' ? 'Развернуть текст' : 'Свернуть текст');
    $('html, body').animate({ scrollTop: 0 }, 600, 'swing');
  });
};
