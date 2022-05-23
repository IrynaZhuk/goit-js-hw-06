function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const buttonRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color')



buttonRef.addEventListener('click', buttonClickHandler);


function buttonClickHandler() {
  const body = document.querySelector('body');
  body.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = getRandomHexColor();
}


