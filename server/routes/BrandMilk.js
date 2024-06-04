const express = require('express');
const router = express.Router();
const {BrandMilk} = require('../models');

router.get('/', async (req, res) => {
    const listBrandMilk = await BrandMilk.findAll();
    res.json(listBrandMilk);
});

router.get('/:BrandID',async (req, res) => {
    const brandID = req.params.BrandID;
    const brand =  await BrandMilk.findByPk(brandID);
    res.json(brand);
})

module.exports = router;