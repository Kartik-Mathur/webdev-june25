function success() {
    console.log("Promise Fulfilled");
}

function error() {
    console.log("Promise Failed");
}

let newPromise = new Promise(function (res, rej) {
    setTimeout(function () {
        console.log("RAN resolve fun");
        res()
    }, 3000);
});

// newPromise.then(success, error);
setTimeout(() => {
    console.log("RAN then fun");
    newPromise.then(success).catch(error)
}, 4000);


