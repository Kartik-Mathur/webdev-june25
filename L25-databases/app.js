const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));

const customerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
});

const customer = mongoose.model('customers', customerSchema);

const ordersSchema = mongoose.Schema({
    item: String,
    customerId: {
        type: mongoose.Schema.ObjectId,
        ref: 'customers'
    }
});
const orders = mongoose.model('orders', ordersSchema);

app.get('/orders', async (req, res) => {
    try {
        // const allOrders = await orders.find({});
        const allOrders = await orders.find({}).populate('customerId');

        res.status(200).json({
            data: allOrders
        })
    } catch (error) {
        res.status(501).json({
            error,
            message: 'Unable to read all orders right now'
        })
    }
})


mongoose.connect('mongodb://localhost:27017/mydb')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
    .catch(err => {
        console.log(err)
    })