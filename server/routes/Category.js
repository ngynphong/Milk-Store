const express = require('express');
const router = express.Router();
const {Product,ProductItem, BrandMilk,Company,AgeRange,Category} = require('../models');

router.get('/', async (req, res) => {
    const listCategory = await Category.findAll();
    res.json(listCategory);
});

router.post('/',async (req, res) => {
    const category = req.body;
    await Category.create(category);
    res.json(category);
})

router.get('/:CategoryID', async (req, res) => {
    const categoryID = req.params.CategoryID;
    const category = await Product.findByPk(categoryID);
    res.json(category);
});
module.exports = router;