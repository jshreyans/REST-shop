const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const OrdersController = require('../controllers/orders');

router.get('/', checkAuth, OrdersController.orders_get_all);

router.post('/', checkAuth, OrdersController.create_order);

router.get('/:orderID', checkAuth, OrdersController.get_order_by_id);

router.delete('/:orderId', checkAuth, OrdersController.delete_order);

module.exports = router;