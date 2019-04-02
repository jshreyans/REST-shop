const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/product');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET request to /products'
    });
});

router.post('/', (req,res,next) => {
    // const product = {
    //     name: req.body.name,
    //     price: req.body.price
    // }

    const product = new Product({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    })

    product.save().then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err);
    });
    
    res.status(201).json({
        message: 'This is a POST request to /products',
        createdProduct: product
    });
});

router.get('/:productID', (req,res,next) => {
    const id = req.params.productID;

    if(id === 'special') {
        res.status(200).json({
            message: 'You have reached a special place',
            id: id
        });
    }
    else {
        res.status(200).json({
            message: 'You passed a simlpe id to the products',
        });
    }
});

module.exports = router;