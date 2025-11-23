let arr = [1, 2, 3, 4, 5, 6];

Array.prototype.myFilter = function (fn) {
    /*
    fn: (e, indx, a) => {
        if(e%2 == 0) return true;
        return false;
    }
     */
    // console.log(this);
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        if(fn(this[i], i, this) == true){
            newArr.push(this[i]);
        }
    }
    return newArr;
}

let newArr = arr.myFilter((e, indx, a) => {
    if(e%2 == 0) return true;
    return false;
})

console.log(newArr);