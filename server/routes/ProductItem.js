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

router.put('/:ProductItemID', async (req, res) => {
    const productItemID = req.params.ProductItemID;
    const updatedData = req.body;
    await ProductItem.update(updatedData, { where: { ProductItemID: productItemID } });
    const updatedProductItem = await ProductItem.findByPk(productItemID);
    res.json(updatedProductItem);
});

// Delete a product  by ID
router.delete('/:ProductItemID', async (req, res) => {
    const productItemID = req.params.ProductItemID;
    await ProductItem.destroy({ where: { ProductItemID: productItemID } });
    res.json({ message: 'ProductItem item deleted successfully' });
});


module.exports = router;
