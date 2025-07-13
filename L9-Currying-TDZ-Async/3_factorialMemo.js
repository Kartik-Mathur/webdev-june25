function memoize(fn) {
    let cache = {};

    return function (n) {
        if (cache[n]) return cache[n];
        let ans = fn(n);
        cache[n] = ans;
        return ans;
    }
}

function factorial(n) {
    console.log("Calculation fact of", n);
    let ans = 1;
    for (let i = 1; i <= n; i++) ans *= i;
    return ans;
}

let memoFactorial = memoize(factorial);
console.log(memoFactorial(5));
console.log(memoFactorial(5));
console.log(memoFactorial(6));
console.log(memoFactorial(6));