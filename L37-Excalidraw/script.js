const canvas = document.querySelector('#mycanvas');
const pen = canvas.getContext('2d');

const dpr = window.devicePixelRatio || 1;
const rect = canvas.getBoundingClientRect();

canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr
pen.scale(dpr, dpr);

function getPosition(e) {
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    }
}

// STATES
let startX = 0;
let startY = 0;
let shapes = []; // To store all the shapes
let drawing = false;
let lineWidth = 5;
let currentShape = 'line'; // 'line', text, ellipse

function redraw() {
    pen.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of shapes) {
        if (s.type === 'line') {
            drawLine(s.startX, s.startY, s.endX, s.endY, 'black', false);
        }
        else if (s.type === 'ellipse') {
            // PENDING 
            drawEllipse(s.startX, s.startY, s.endX, s.endY, 'black', false);
        }
    }
}

function drawEllipse(startX, startY, endX, endY, color = 'black', isDashed = false) {

    pen.save();

    let rx = Math.abs(endX - startX) / 2;
    let ry = Math.abs(endY - startY) / 2;
    let cx = startX + rx;
    let cy = startY + ry;

    pen.beginPath();
    if (isDashed) {
        pen.setLineDash([5, 5]);
    }
    pen.lineWidth = 5;
    pen.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
    pen.strokeStyle = 'black';
    pen.stroke();
    pen.setLineDash([]);
    pen.restore();
}

function drawLine(startX, startY, endX, endY, color, isDashed) {

    pen.save(); // Yaha tak jo pen ki settings hai unhe bhool jaao
    pen.beginPath();
    pen.moveTo(startX, startY);
    pen.lineTo(endX, endY);
    if (isDashed) {
        pen.setLineDash([5, 5]);
    }
    pen.strokeStyle = color;
    pen.lineWidth = lineWidth;
    pen.stroke();
    pen.setLineDash([]);
    pen.restore(); // Yeh hone ke baad jo pen pehle tha usse ussi par reset krdo
}

canvas.addEventListener('mousedown', e => {
    const pos = getPosition(e);
    startX = pos.x;
    startY = pos.y;
    drawing = true;
}) // Jab pehli baar click krenge

canvas.addEventListener('mousemove', e => {
    if (!drawing) return;
    redraw();

    const { x, y } = getPosition(e);
    if (currentShape === 'line') {
        drawLine(startX, startY, x, y, "gray", true);
    }
    else if (currentShape === 'ellipse') {
        drawEllipse(startX, startY, x, y, "gray", true);
    }

}) // Jab mouse ko move krenge

canvas.addEventListener('mouseup', e => {
    if (!drawing) return;
    const pos = getPosition(e);
    if (currentShape === 'line') {
        const endX = pos.x;
        const endY = pos.y;
        shapes.push({
            startX,
            startY,
            endX,
            endY,
            type: currentShape,
            color: 'black'
        })
        // console.log(shapes);
    }
    else if (currentShape === 'ellipse') {
        const endX = pos.x;
        const endY = pos.y;
        shapes.push({
            startX,
            startY,
            endX,
            endY,
            color: 'black',
            type: currentShape
        })
    }
    redraw();
    drawing = false;
}) // Jab mouse click ko chhod denge


document.querySelector('#line').addEventListener('click', e => {
    currentShape = 'line'
})

document.querySelector('#ellipse').addEventListener('click', e => {
    currentShape = 'ellipse'
})