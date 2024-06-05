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

router.get('/byId/:ProductItemID',async (req, res) => {
    const productItemID = req.params.ProductItemID;
    const product =  await ProductItem.findByPk(productItemID);
    res.json(product);
})

module.exports = router;
