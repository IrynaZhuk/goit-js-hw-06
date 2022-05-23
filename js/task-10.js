function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input');
const createBtnRef = document.querySelector('button[date-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('#boxes');

createBtnRef.addEventListener("click", () => createBoxes(inputRef.value));

function createBoxes(amount) {
  
  let boxSize = 30;

  for (let i = 0; i <= amount; i += 1) {
    const color = getRandomHexColor();
    const createdDiv = document.createElement('div');
    createdDiv.style.width = `${boxSize}px`;
    createdDiv.style.height = `${boxSize}px`;
    boxSize += 10;
    createdDiv.style.backgroundColor = color;


  }
}
