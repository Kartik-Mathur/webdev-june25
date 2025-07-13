function newCart() {
    let cart = [];

    return {
        "addToCart": function (item) {
            cart.push(item);
        },
        "clearCart": function () {
            cart = []
        },
        getCart: function () {
            return cart;
        }
    }
}

let cart = newCart(); // DRY : DONT REPEAT YOURSELF
cart.addToCart("Mobile");
cart.addToCart("Laptop");
cart.addToCart("Jacket");

console.log(cart.getCart());
cart.clearCart();
cart.addToCart("Ipad");
console.log(cart.getCart());

let cart1 = newCart();
cart1.addToCart("ABC");
console.log(cart1.getCart());