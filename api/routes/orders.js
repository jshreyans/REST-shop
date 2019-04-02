const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).json({
        message: 'Orders were fetched',
    });
});

router.post('/', (req,res,next) => {
    const order = {
        name: req.params.name,
        quantity: req.params.quantity
    }
    res,status(201).json({
        message: 'An order was created',
        order: order
    });
});

router.get('/:orderID', (req,res,next) => {
    res.status(200).json({
        message: 'Order details: ',
        orderID: req.params.orderID
    });
});

router.delete('/', (req,res,next) => {
    res.status(200).json({
        message: 'Order was deleted',
        orderID: req.params.orderID
    });
});

module.exports = router;