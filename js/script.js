'use strict'
let inputLabel = document.querySelectorAll('label')
let input = document.querySelectorAll('.forms__block-input');


function clickColor(event) {
    for (let i in inputLabel) {
        if (inputLabel[i].className === "active") {
            inputLabel[i].classList.remove("active")
        }
    }
    event.target.parentNode.classList.add("active")

}

input.forEach(e => {
    addEventListener('click', clickColor)
});
