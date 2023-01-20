'use strict'

let inputText = document.querySelector('.forms__block_contact');
let input = document.querySelectorAll('.forms__block-input');

input.forEach(e => {
    addEventListener('click', clickColor)
});


function clickColor(event) {
    console.log(event.target)
    inputText.classList.toggle("active")
}