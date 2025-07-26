let p = new Promise((res, rej) => {
    res("Hi");
})


p.then(msg => {
    console.log(msg);
    return "Hello";``
    // return new Error("Nahi chal paaya");
}).then(msg => {
    console.log(msg);
}).catch(err => {
    console.log("ERROR", err);
})


// p.then(msg => {
//     console.log(msg);
//     return new Promise((res, rej) => {
//         res("Hello");
//     })
// }).then(msg => {
//     console.log(msg);
// })