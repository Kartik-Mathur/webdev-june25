let inp = document.querySelector('input');

inp.addEventListener('focus', (ev) => {
    // console.log(ev.target)
    ev.target.classList.add('inp');
})


inp.addEventListener('blur', (ev) => {
    // console.log(ev.target)
    ev.target.classList.remove('inp');
})