let counterValue = 0;

const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector("#value");

decrementBtnRef.addEventListener('click', handleDecrementBtnClick);
incrementBtnRef.addEventListener('click', handleIncrementBtnClick)

function handleDecrementBtnClick () {
    counterValue -= 1;
    valueRef.textContent = counterValue;
}
   
function handleIncrementBtnClick() {
    counterValue += 1;
    valueRef.textContent = counterValue;
}