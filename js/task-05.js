const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output')
    
inputRef.addEventListener('input', eventHandler)

function eventHandler(event) {
    outputRef.textContent = event.currentTarget.value || "Anonymous";
}