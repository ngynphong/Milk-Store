const express = require('express');
const router = express.Router();
const {BrandMilk} = require('../models');

router.get('/', async (req, res) => {
    const listBrandMilk = await BrandMilk.findAll();
    res.json(listBrandMilk);
});

module.exports = router;