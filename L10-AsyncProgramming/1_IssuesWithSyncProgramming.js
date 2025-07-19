function waitASec() {
    let prevTime = new Date().getTime();

    while (new Date().getTime() - prevTime < 1000) {

    }
}

function waitNSec(n){
    for(let i = 0; i < n; i++){
        waitASec();
    }
}

waitNSec(2);

console.log("Hello");