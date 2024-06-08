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
    const payment = await Payment.findByPk(paymentID);
    res.json(payment);
});

router.put('/:PaymentID', async (req, res) => {
    const paymentID = req.params.PaymentID;
    const updatedData = req.body;
    await Payment.update(updatedData, { where: { PaymentID: paymentID } });
    const updatedPayment = await Payment.findByPk(paymentID);
    res.json(updatedPayment);
});


router.delete('/:PaymentID', async (req, res) => {
     const paymentID = req.params.PaymentID;
     await Payment.destroy({ where: { PaymentID: paymentID } });
     res.json({ message: 'Payment item deleted successfully' });
 });

module.exports = router;