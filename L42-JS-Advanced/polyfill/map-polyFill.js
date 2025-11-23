let arr = [1, 2, 3, 4, 5, 6];

Array.prototype.myMap = function (fn) {
    /*
    fn: (e, indx, a) => {
        console.log(e, indx, a);
        return e * e;
    }
     */
    // console.log(this);
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(fn(this[i], i, this));
    }
    return newArr;
}

let newArr = arr.myMap((e, indx, a) => {
    console.log(e, indx, a);
    return e * e;
})

console.log(newArr);