window.onload = () => {
  [...document.querySelectorAll('img')]
    .filter(el => el.dataset.src)
    .forEach(el => el.src = el.dataset.src); // eslint-disable-line
};
