// users 
db.createCollection('users');
db.users.insertMany([
    { "_id": "u1", "username": "divyanshu", "email": "divyanshu@example.com", "age": 21 },
    { "_id": "u2", "username": "hitesh", "email": "hitesh@example.com", "age": 22 },
    { "_id": "u3", "username": "abhi", "email": "abhi@example.com", "age": 23 },
    { "_id": "u4", "username": "riya", "email": "riya@example.com", "age": 20 },
    { "_id": "u5", "username": "arjun", "email": "arjun@example.com", "age": 24 },
    { "_id": "u6", "username": "mehul", "email": "mehul@example.com", "age": 22 },
    { "_id": "u7", "username": "sakshi", "email": "sakshi@example.com", "age": 21 },
    { "_id": "u8", "username": "tanya", "email": "tanya@example.com", "age": 20 },
    { "_id": "u9", "username": "kiran", "email": "kiran@example.com", "age": 23 },
    { "_id": "u10", "username": "pritesh", "email": "pritesh@example.com", "age": 22 },
    { "_id": "u11", "username": "shraddha", "email": "shraddha@example.com", "age": 22 },
    { "_id": "u12", "username": "yash", "email": "yash@example.com", "age": 23 },
    { "_id": "u13", "username": "komal", "email": "komal@example.com", "age": 21 },
    { "_id": "u14", "username": "tejas", "email": "tejas@example.com", "age": 24 },
    { "_id": "u15", "username": "lavanya", "email": "lavanya@example.com", "age": 20 }
]);

// orders
db.createCollection('orders');
db.orders.insertMany([
    { "orderId": "o101", "userId": "u1", "product": "Laptop", "price": 55000, "quantity": 1, "dateOfPurchase": "2025-01-12" },
    { "orderId": "o102", "userId": "u1", "product": "Keyboard", "price": 1200, "quantity": 1, "dateOfPurchase": "2025-02-03" },
    { "orderId": "o103", "userId": "u2", "product": "Mousepad", "price": 300, "quantity": 1, "dateOfPurchase": "2025-02-09" },
    { "orderId": "o104", "userId": "u2", "product": "Graphic Tablet", "price": 6000, "quantity": 1, "dateOfPurchase": "2025-02-04" },
    { "orderId": "o105", "userId": "u3", "product": "Portable SSD", "price": 6000, "quantity": 1, "dateOfPurchase": "2025-02-10" },
    { "orderId": "o106", "userId": "u3", "product": "HDMI Cable", "price": 400, "quantity": 2, "dateOfPurchase": "2025-02-05" },
    { "orderId": "o107", "userId": "u4", "product": "Pendrive 64GB", "price": 700, "quantity": 1, "dateOfPurchase": "2025-02-06" },
    { "orderId": "o108", "userId": "u4", "product": "Fitness Band", "price": 2500, "quantity": 1, "dateOfPurchase": "2025-02-11" },
    { "orderId": "o109", "userId": "u5", "product": "Wireless Charger", "price": 1200, "quantity": 1, "dateOfPurchase": "2025-02-07" },
    { "orderId": "o110", "userId": "u5", "product": "Gaming Mouse", "price": 2500, "quantity": 1, "dateOfPurchase": "2025-02-17" },
    { "orderId": "o111", "userId": "u6", "product": "Tablet", "price": 18000, "quantity": 1, "dateOfPurchase": "2025-01-18" },
    { "orderId": "o112", "userId": "u7", "product": "Smartwatch", "price": 7000, "quantity": 1, "dateOfPurchase": "2025-01-19" },
    { "orderId": "o113", "userId": "u8", "product": "Bluetooth Speaker", "price": 3500, "quantity": 1, "dateOfPurchase": "2025-01-20" },
    { "orderId": "o114", "userId": "u9", "product": "Monitor", "price": 9000, "quantity": 1, "dateOfPurchase": "2025-01-21" },
    { "orderId": "o115", "userId": "u10", "product": "Gaming Chair", "price": 11000, "quantity": 1, "dateOfPurchase": "2025-01-22" }
]
)