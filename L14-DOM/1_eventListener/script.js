let btn = document.querySelector('button');
let counterValue = document.querySelector('#counterValue');

let cnt = 0;
btn.onclick = () => {
    cnt++;
    counterValue.innerText = cnt;
    // alert("Button Pressed");
}

// keyboard event
let body = document.querySelector('body');
body.onkeyup = function (ev) {
    console.log(ev)
}

// body.onkeypress = function (ev) {
//     console.log(ev.key)
// }