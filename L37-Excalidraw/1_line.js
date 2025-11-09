const canvas = document.querySelector('#mycanvas');
const pen = canvas.getContext('2d');

const dpr = window.devicePixelRatio || 1;
const rect = canvas.getBoundingClientRect();

canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr
pen.scale(dpr, dpr);

// Jaha bhi pen tha abhi tak usse bhool jaao aur dobara shuru kro
pen.beginPath();
pen.moveTo(50, 50); // Jaha se shuru krna hai line ko
pen.lineWidth = 10;
pen.lineTo(300,300); // Jaha tak line ko lekar jaana hai
// pen.lineTo(100,600); // Jaha tak line ko lekar jaana hai
pen.stroke(); // Draw karo