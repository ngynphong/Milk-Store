const express = require('express');
const router = express.Router();
const {Payment} = require('../models');

router.get('/', async (req, res) => {
    const listPayment = await Payment.findAll();
    res.json(listPayment);
});

router.post('/',async (req, res) => {
    const payment = req.body;
    await Payment.create(payment);
    res.json(payment);
})

router.get('/:PaymentID', async (req, res) => {
    const paymentID = req.params.PaymentID;
    const payment = await Product.findByPk(paymentID);
    res.json(payment);
});

module.exports = router;