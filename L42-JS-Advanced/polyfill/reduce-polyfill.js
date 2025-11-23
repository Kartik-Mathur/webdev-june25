let arr = [];

Array.prototype.myReduce = function (fn, initialValue) {
    /*
        this: [1, 2, 3, 4, 5, 6]
        fn: (acc, val, i, a) => {
                return acc * val; // Yeh jo return krega vo new acc ki value hogi...
            }
        initialValue : data or undefined
    */
    if (this.length == 0) {
        throw new TypeError("Reduce of empty array with no initial value")
    }
    let acc;
    let start_indx;
    if (initialValue) {
        acc = initialValue;
        start_indx = 0;
    }
    else {
        acc = this[0];
        start_indx = 1; // val ka index
    }

    for (let i = start_indx; i < this.length; i++) {
        acc = fn(acc, this[i], i, this);
    }
    return acc;
}

let ans = arr.myReduce((acc, val, i, a) => {
    return acc * val; // Yeh jo return krega vo new acc ki value hogi...
})
console.log(ans);

// ans = arr.reduce((acc, val, i, a) => {
//     return acc * val; // Yeh jo return krega vo new acc ki value hogi...
// })
// console.log(ans);
