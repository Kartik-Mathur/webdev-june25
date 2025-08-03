let counterValue = document.querySelector('#counterValue');
let button = document.querySelector('button');

button.addEventListener('click', function () {
    console.log("Button Clicked");

    // counterValue.innerText = Number(counterValue.innerText) + 2;
    counterValue.innerText = +counterValue.innerText + 2;
})

let ironman = document.querySelector('.ironman');

ironman.addEventListener('dblclick', (ev) => {
    // console.log("DBL Click");
    console.log(ev);
})

let box = document.querySelector('.box');
box.addEventListener('mouseenter', (ev) => {
    console.log("Mouse Entered Box");
    document.querySelector('img').classList.remove('greyscale');
})

box.addEventListener('mouseleave', (ev) => {
    console.log("Mouse Left Box");
    document.querySelector('img').classList.add('greyscale');
})