'use strict'

let input = document.querySelectorAll('.forms__block-input');

input.forEach(e => {
    addEventListener('click', clickColor)
});

function clickColor(event) {
    event.target.parentNode.classList.toggle("active")
}