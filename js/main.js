//Elementos HTML
const form = document.querySelector('.js_form');
const btn = document.querySelector('.js_btn');
const textRgb = document.querySelector('.js_text_rgb');
const textHex = document.querySelector('.js_text_hex');

//Funciones auxiliares

function getRandomNumber(max) {
  //obtener un número aleatorio entre 0 y un máximo
  return Math.floor(Math.random() * max);
}

function getRandomColorRGB() {
  //obtener un color aleatorio
  const red = getRandomNumber(255);
  const green = getRandomNumber(255);
  const blue = getRandomNumber(255);

  const rgbColor = `rgb(${red},${green},${blue})`;

  return rgbColor;
}

function colorCompToHex(colorComp) {
  var hexComp = colorComp.toString(16);
  return hexComp.length === 1 ? '0' + hexComp : hexComp;
}

function rgbToHex(color) {
  const rgbArray = color.split('(')[1].split(')')[0].split(',');
  const red = colorCompToHex(parseInt(rgbArray[0]));
  const green = colorCompToHex(parseInt(rgbArray[1]));
  const blue = colorCompToHex(parseInt(rgbArray[2]));

  const hexColor = `#${red}${green}${blue}`;

  return hexColor;
}

//Funciones Handler
function handleClickForm(ev) {
  ev.preventDefault();
}

function handleClickBtn(ev) {
  newColor = getRandomColorRGB();
  const hexColor = rgbToHex(newColor);
  document.body.style.backgroundColor = newColor;
  textRgb.innerHTML = `RGB color: ${newColor}`;
  textHex.innerHTML = `HEX color: ${hexColor}`;
}

form.addEventListener('click', handleClickForm);
btn.addEventListener('click', handleClickBtn);
