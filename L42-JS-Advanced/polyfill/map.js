let arr = [1, 2, 3, 4, 5, 6];


function myMap(arr){
    let newArr = [];
    arr.forEach(e=>{
        newArr.push(e*e);
    })
    return newArr;
}
let newArr = myMap(arr);
// let newArr = arr.myMap((e, indx, a) => {
//     console.log(e, indx, a);
//     return e * e;
// })

console.log(newArr);