import $ from 'jquery';

export default function yachtPage() {
  const p = document.querySelector('.yacht-page__description-text');
  const mqMobile = window.matchMedia('(max-width: 768px)');

  if (!p) {
    return;
  }

  const text = p.innerText;

  if (mqMobile.matches && text.length > 200) {
    p.innerText = `${text.slice(0, 800)}...`;
  }
}

$(() => {
  $(window).on('resize', yachtPage);
});
