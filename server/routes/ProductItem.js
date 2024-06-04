const express = require('express');
const router = express.Router();
const {ProductItem} = require('../models');

router.get('/',async (req, res) => {
    const listProductItem = await ProductItem.findAll();
    res.json(listProductItem);
});

router.post('/',async (req, res) => {
    const productItem = req.body;
    await ProductItem.create(productItem);
    res.json(productItem);
})

module.exports = router;