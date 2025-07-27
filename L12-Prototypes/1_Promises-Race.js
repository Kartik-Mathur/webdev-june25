let p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("P1 is complete");
    }, 1000);
})

let p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("P2 is complete");
    }, 2000);
})

Promise.race([p1, p2])
    .then((data) => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })