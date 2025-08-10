let arr = [1, 2, 3, 4, 5];

// let newArr = arr.map((value, index, a) => {
//     console.log("Value", value, "Index", index, "array", a)
//     return value * value;
// });
let newArr = arr.map(v => v * v);

console.log(newArr);