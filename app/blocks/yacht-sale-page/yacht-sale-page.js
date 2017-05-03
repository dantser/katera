
export default () => {
  console.log(document.querySelector('.yacht-sale-page__description-text'));
  const p = document.querySelector('.yacht-sale-page__description-text');
  const mqMobile = window.matchMedia('(max-width: 768px)');

  const text = p.innerText;

  if (mqMobile.matches && text.length > 200) {
    p.innerText = `${text.slice(0, 197)}...`;
  }
};
