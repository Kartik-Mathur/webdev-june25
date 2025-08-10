let arr = [1, 2, 3, 4, 5, 6, 7];

let newArr = arr.filter(function (value, index, a) {
    return value % 2 != 0;
    // if (value % 2 == 0) return true;
    // return false;
});
console.log(newArr);
/*
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
        newArr.push(arr[i]);
    }
}


console.log(newArr);
// console.log(arr);
let anotherArray = newArr;
anotherArray[0] = 10;
console.log(newArr);
console.log(anotherArray == newArr);
*/