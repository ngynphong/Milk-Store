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
    const order = await Order.findByPk(orderID);
    res.json(order);
});

router.put('/:OrderID', async (req, res) => {
    const orderID = req.params.OrderID;
    const updatedData = req.body;
    await Order.update(updatedData, { where: { OrderID: orderID } });
    const updatedOrder = await order.findByPk(orderID);
    res.json(updatedOrder);
});


router.delete('/:OrderID', async (req, res) => {
    const orderID = req.params.OrderID;
    await Order.destroy({ where: { OrderID: orderID } });
    res.json({ message: 'Order item deleted successfully' });
});

module.exports = router;