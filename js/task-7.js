const fontSizeSlider = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeSlider.addEventListener('change', event => {
  let value = event.target.value;
  text.style.fontSize = `${value}px`;
});
