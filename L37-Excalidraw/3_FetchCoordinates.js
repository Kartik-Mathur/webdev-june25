const canvas = document.querySelector('#mycanvas');
const pen = canvas.getContext('2d');

const dpr = window.devicePixelRatio || 1;
const rect = canvas.getBoundingClientRect();

canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr
pen.scale(dpr, dpr);

console.log(rect)

function getPosition(e) {
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    }
}

canvas.addEventListener('click', e => {
    const pos = getPosition(e);
    console.log(pos);
})