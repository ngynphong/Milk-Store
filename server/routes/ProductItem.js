const express = require('express');
const router = express.Router();
const {ProductItem} = require('../models');

router.get('/',async (req, res) => {
    // const listProductItem = await ProductItem.findAll();
    // res.json(listProductItem);
    res.send('hahah')
});

router.post('/',async (req, res) => {
    const productItem = req.body;
    await ProductItem.create(productItem);
    res.json(productItem);
})

module.exports = router;