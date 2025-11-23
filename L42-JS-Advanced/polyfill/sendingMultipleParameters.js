function sum(a, b, ...args) {
    console.log(a, b, args)
    let ans = a + b;
    args.forEach(e => {
        ans += e;
    })
    return ans;
}



console.log(sum(10, 20, 30, 40, 50, 60));