const express = require('express');
const router = express.Router();
const { Product, ProductItem, BrandMilk} = require('../models');


//Get all Product
router.get('/', async (req, res) => {
    const listProduct = await Product.findAll();
    res.json(listProduct);
});

// Create new Product
router.post('/', async (req, res) => {
    const product = req.body;
    await Product.create(product);
    res.json(product);
});

// Get Product by ID
router.get('/:ProductID', async (req, res) => {
    const productID = req.params.ProductID;
    const product = await Product.findByPk(productID);
    res.json(product);
});

// Update a product  by ID
router.put('/:ProductID', async (req, res) => {
    const productID = req.params.ProductID;
    const updatedData = req.body;
    await Product.update(updatedData, { where: { ProductID: productID } });
    const updatedProduct = await Product.findByPk(productID);
    res.json(updatedProduct);
});

// Delete a product  by ID
router.delete('/:ProductID', async (req, res) => {
    const productID = req.params.ProductID;
    await Product.destroy({ where: { ProductID: productID } });
    res.json({ message: 'Product item deleted successfully' });
});

module.exports = router;