let obj = {
    a: "Hello",
    hello: function () {
        console.log(this)
        this.c = "World"
    }
}

obj.hello();
console.log(obj);