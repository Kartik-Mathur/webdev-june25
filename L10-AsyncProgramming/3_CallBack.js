function sabziLaana(cb) {
    console.log("Sabzi lene gaye");
    setTimeout(function () {
        console.log("sabzi aa gai");
        cb(bartanDhona); // Khana banana call krdo
    }, 3000);
}

function khanaBanana(cb) {
    console.log("Khana banana start")
    setTimeout(function () {
        console.log("Khana banana complete");
        cb(); // BartanDhona call krdo
    }, 3000);
}

function bartanDhona() {
    console.log("Bartan dhona start")
    setTimeout(function () {
        console.log("Bartan dhona end")
    }, 3000);
}

sabziLaana(khanaBanana);

let arr = [4, 5, 6, 1, 0, 9, 7, 42, 55, 68];
console.log(arr);
arr.sort();
console.log(arr);


function waitASec() {
    let prevTime = new Date().getTime();

    while (new Date().getTime() - prevTime < 1000) {

    }
}

function waitNSec(n) {
    for (let i = 0; i < n; i++) {
        waitASec();
    }
}

waitNSec(5);