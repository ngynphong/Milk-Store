const express = require('express');
const router = express.Router();
const {Product, ProductItem, BrandMilk,Company,AgeRange} = require('../models');

router.get('/', async (req, res) => {
    const listAgeRange = await AgeRange.findAll();
    res.json(listAgeRange);
});

router.post('/',async (req, res) => {
    const ageRange = req.body;
    await AgeRange.create(ageRange);
    res.json(ageRange);
})

router.get('/:AgeRangeID', async (req, res) => {
    const ageRangeID = req.params.AgeRangeID;
    const ageRange = await Product.findByPk(ageRangeID);
    res.json(ageRange);
});
router.put('/:AgeRangeID', async (req, res) => {
    const ageRangeID = req.params.AgeRangeID;
    const updatedData = req.body;
    await AgeRange.update(updatedData, { where: { AgeRangeID: ageRangeID } });
    const updatedAgeRange = await AgeRange.findByPk(ageRangeID);
    res.json(updatedAgeRange);
});

// Delete a brand  by ID
router.delete('/:AgeRangeID', async (req, res) => {
    const ageRangeID = req.params.AgeRangeID;
    await AgeRange.destroy({ where: { AgeRangeID: ageRangeID } });
    res.json({ message: 'AgeRange deleted successfully' });
});

module.exports = router;