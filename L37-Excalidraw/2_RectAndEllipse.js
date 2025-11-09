const canvas = document.querySelector('#mycanvas');
const pen = canvas.getContext('2d');

const dpr = window.devicePixelRatio || 1;
const rect = canvas.getBoundingClientRect();

canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr
pen.scale(dpr, dpr);

// Jaha bhi pen tha abhi tak usse bhool jaao aur dobara shuru kro
// pen.fillRect(x, y, width, height);
pen.beginPath();
pen.strokeStyle = 'red';
pen.lineWidth = 5;
// pen.fillRect(50, 60, 500, 500);
pen.strokeRect(50, 60, 500, 500);
pen.stroke();

// Making a circle or ellipse
pen.beginPath();
pen.lineWidth = 5;
pen.ellipse(350, 350, 200, 100, 0, 0, Math.PI * 2);
pen.strokeStyle = 'black';
pen.stroke();