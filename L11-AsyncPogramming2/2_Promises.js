function success() {
    console.log("Promise Fulfilled");
}

function error() {
    console.log("Promise Failed");
}

let newPromise = new Promise(function (res, rej) {
    setTimeout(function () {
        res()
    }, 3000);
});

// newPromise.then(success, error);
newPromise.then(success).catch(error)