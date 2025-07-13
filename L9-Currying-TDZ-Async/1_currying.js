function sum(x){
    if(!x) return 0;
    let ans = x;

    return function helper(y){  
        if(!y) return ans;
        ans += y;
        return helper;
    };
}

console.log(sum())
console.log(sum(1)())
console.log(sum(1)(2)())
console.log(sum(1)(2)(3)())
console.log(sum(1)(2)(3)(4)())
console.log(sum(1)(2)(3)(4)(5)(6)(7)(8)(9)())