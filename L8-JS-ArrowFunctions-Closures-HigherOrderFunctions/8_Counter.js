function counter() {
    let cnt = 0;

    return function () {
        cnt++;
        return cnt;
    }
}

let newCounter = counter();

console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

let newCounter1 = counter();
console.log(newCounter1());
console.log(newCounter1());
console.log(newCounter1());
console.log(newCounter1());