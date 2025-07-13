function outerFun() {
    let x = 10;
    x++;

    function innerFun() {
        x++;

        function innerMostFun() {
            x++;
            console.log(x);
        }

        return innerMostFun;
    }

    return innerFun;
}


let genFun1 = outerFun();
let fun1 = genFun1();
let fun2 = genFun1();

fun1();
fun1();
fun2(); 
fun2(); 

let genFun2 = outerFun();
let fun3 =  genFun2();
fun3();
fun3();

fun2();
fun1();












