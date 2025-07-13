function returnFn(){

    function hello(){
        console.log("Hello");
    }


    return hello();
}

let newFun = returnFn();

newFun();
