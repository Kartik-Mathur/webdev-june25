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
            drawEllipse(s.startX, s.startY, s.endX, s.endY, 'black', false);
        }
        else if (s.type === 'rectangle') {
            drawRectangle(s.startX, s.startY, s.endX, s.endY, 'black', false);
        }
    }
}

function drawEllipse(startX, startY, endX, endY, color = 'black', isDashed = false) {

    let height = Math.abs(endX - startX);
    let width = Math.abs(endY - startY);
    if (width < 1 || height < 1) return;

    let rx = height / 2;
    let ry = width / 2;

    let cx = Math.min(startX, endX) + rx;
    let cy = Math.min(startY, endY) + ry;

    pen.save();
    if (isDashed) {
        pen.setLineDash([5, 5]);
    }
    pen.beginPath();
    pen.lineWidth = 5;
    pen.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
    pen.strokeStyle = color;
    pen.stroke();
    pen.setLineDash([]);
    pen.restore();
}

function drawRectangle(startX, startY, endX, endY, color, isDashed) {
    let height = Math.abs(endX - startX);
    let width = Math.abs(endY - startY);

    let sx = Math.min(startX, endX);
    let sy = Math.min(startY, endY);

    pen.save();
    if (isDashed) {
        pen.setLineDash([5, 5]);
    }
    pen.beginPath();
    pen.lineWidth = 5;
    pen.strokeRect(sx, sy, width, height);
    pen.strokeStyle = color;
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
    if (currentShape === 'line' || currentShape === 'ellipse') {
        startX = pos.x;
        startY = pos.y;
        drawing = true;
    }
}) // Jab pehli baar click krenge

canvas.addEventListener('mousemove', e => {
    if (!drawing) return;
    // Pehle saari shapes ko draw krdo
    redraw();

    const { x, y } = getPosition(e);
    if (currentShape === 'line') {
        // DASHED LINE DRAW KRO TO SHOW KYA DRAW HOGA AGAR KIA TOH
        drawLine(startX, startY, x, y, "gray", true);
    }
    else if (currentShape === 'ellipse') {
        // DASHED ELLIPSE DRAW KRO TO SHOW KYA DRAW HOGA AGAR KIA TOH
        drawEllipse(startX, startY, x, y, "gray", true);
    }
    else if (currentShape === 'rectangle') {
        drawRectangle(startX, startY, x, y, "gray", true);
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
    else if (currentShape === 'ellipse' || currentShape === 'rectangle') {
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
    // Jo bhi mera shapes ka array hai usse canvas par draw krdo
    redraw();
    drawing = false;
}) // Jab mouse click ko chhod denge


document.querySelector('#line').addEventListener('click', e => {
    currentShape = 'line'
})

document.querySelector('#ellipse').addEventListener('click', e => {
    currentShape = 'ellipse'
})

document.querySelector('#rectangle').addEventListener('click', e => {
    currentShape = 'rectangle'
})