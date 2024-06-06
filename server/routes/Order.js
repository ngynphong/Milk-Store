const express = require('express');
const router = express.Router();
const {Order} = require('../models');

router.get('/', async (req, res) => {
    const listOrder = await Order.findAll();
    res.json(listOrder);
});

router.post('/',async (req, res) => {
    const order = req.body;
    await Order.create(order);
    res.json(order);
})

router.get('/:OrderID', async (req, res) => {
    const orderID = req.params.OrderID;
    const order = await Product.findByPk(orderID);
    res.json(order);
});
module.exports = router;