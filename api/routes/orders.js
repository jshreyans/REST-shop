const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('../models/order');
const Product = require('../models/product');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched',
    });
    Order.find()
    .select('product quantity _id')
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json({
            count: result.length,
            orders: result.map(doc => {
                return {
                    _id: doc._id,
                    product: doc.product,
                    quantity: doc.quantity,
                    request: {
                        type: 'GET',
                        url: 'https://localhost/3600.orders' + doc._id
                    }
                }
            })
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    }) 
});

router.post('/', (req, res, next) => {
    Product.findById(req.body.productID)
    .then(product => {
        const order = new Order({
            _id: mongoose.Types.ObjectId,
            product: req.body.productID,
            quantity: req.body.quantity
        });
        order
            .save()
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: 'Order stored',
                    createdOrder: {
                        _id: result._id,
                        product: result.product,
                        quantity: result.quantity
                    },
                    request: {
                        type: 'GET',
                        url: 'https://localhost/3600.orders' + doc._id
                    }
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            })
    })
    .catch(err => {
        console.log(err);
        res.statud(500).json({
            error: err
        })
    })
    
});

router.get('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: 'Order details: ',
        orderID: req.params.orderID
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'Order was deleted',
        orderID: req.params.orderID
    });
});

module.exports = router;