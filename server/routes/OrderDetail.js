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
    const orderDetail = await Product.findByPk(orderDetailID);
    res.json(orderDetail);
});
module.exports = router;