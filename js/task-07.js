const inputRef = document.querySelector('input');

inputRef.addEventListener('input', inputHandler)

function inputHandler(event) {
    const spanRef = document.querySelector('span');
    spanRef.style.fontSize = event.currentTarget.value + 'px';
}