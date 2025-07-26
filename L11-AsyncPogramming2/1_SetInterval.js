let x = setInterval(() => {
    console.log("Hello");
}, 1000);

setTimeout(() => {
    clearInterval(x);
}, 3000);
