const inputRef = document.querySelector('input');
const symbolNumber = inputRef.dataset.length;

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    console.log(event.currentTarget.value.length)
    if (event.currentTarget.value.length === symbolNumber) {
        inputRef.classList.add('valid'); 
         inputRef.classList.remove('invalid')
    } else {
        inputRef.classList.add('invalid')
        inputRef.classList.remove ('valid')
    } 
    }


