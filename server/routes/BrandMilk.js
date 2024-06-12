const express = require('express');
const router = express.Router();
const {BrandMilk} = require('../models');

router.get('/', async (req, res) => {
    const listBrandMilk = await BrandMilk.findAll();
    res.json(listBrandMilk);
});

// Create new Brand
router.post('/', async (req, res) => {
    const brand = req.body;
    await BrandMilk.create(brand);
    res.json(brand);
});

//Get Brand by ID
router.get('/:BrandID',async (req, res) => {
    const brandID = req.params.BrandID;
    const brand =  await BrandMilk.findByPk(brandID);
    res.json(brand);
});

// Update a brand  by ID
router.put('/:BrandID', async (req, res) => {
    const brandID = req.params.BrandID;
    const updatedData = req.body;
    await BrandMilk.update(updatedData, { where: { BrandID: brandID } });
    const updatedBrand = await BrandMilk.findByPk(brandID);
    res.json(updatedBrand);
});

// Delete a brand  by ID
router.delete('/:BrandID', async (req, res) => {
    const brandID = req.params.BrandID;
    await BrandMilk.destroy({ where: { BrandID: brandID } });
    res.json({ message: 'Brand deleted successfully' });
});


module.exports = router;