let grandparent = document.querySelector('.grandparent');
let parent = document.querySelector('.parent');
let child = document.querySelector('.child');

grandparent.addEventListener('click', () => {
    console.log("Running Grandparent event")
}, true)

parent.addEventListener('click', () => {
    console.log("Running parent event")
}, false)

child.addEventListener('click', () => {
    console.log("Running child event")
}, true)