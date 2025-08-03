let button = document.querySelector('button');
const firstCallback = () => {
    console.log("First Callback function for click");
}
button.addEventListener('click',firstCallback)

const secondCallback = () => {
    console.log("Second Callback function for click");
}

button.addEventListener('click', secondCallback)

button.removeEventListener('click', firstCallback)

// button.onclick = () => {
//     console.log("First Callback function for click");
// }

// button.onclick = () => {
//     console.log("Second Callback function for click");
// }
