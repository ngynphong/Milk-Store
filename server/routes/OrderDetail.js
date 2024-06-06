const express = require('express');
const router = express.Router();
const {OrderDetail} = require('../models');

router.get('/', async (req, res) => {
    const listOrderDetail = await OrderDetail.findAll();
    res.json(listOrderDetail);
});

router.post('/',async (req, res) => {
    const orderDetail = req.body;
    await OrderDetail.create(orderDetail);
    res.json(orderDetail);
})

router.get('/:OrderDetailID', async (req, res) => {
    const orderDetailID = req.params.OrderDetailID;
    const orderDetail = await OrderDetail.findByPk(orderDetailID);
    res.json(orderDetail);
});

router.put('/:OrderDetailID', async (req, res) => {
    const orderDetailID = req.params.OrderDetailID;
    const updatedData = req.body;
    await OrderDetail.update(updatedData, { where: { OrderDetailID: orderDetailID } });
    const updatedOrderDetail = await OrderDetail.findByPk(orderDetailID);
    res.json(updatedOrderDetail);
});


router.delete('/:OrderDetailID', async (req, res) => {
    const orderDetailID = req.params.OrderDetailID;
    await OrderDetail.destroy({ where: { OrderDetailID: orderDetailID } });
    res.json({ message: 'OrderDetail item deleted successfully' });
});

module.exports = router;