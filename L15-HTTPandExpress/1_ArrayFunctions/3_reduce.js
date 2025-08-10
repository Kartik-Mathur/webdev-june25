let arr = [1, 5, 2, 3, 4, 6, 7];

let sum = arr.reduce( (acc, value, indx, a) => {
    if(indx%2==0) return acc * value;
    else return acc;
} , 1);

console.log(sum);