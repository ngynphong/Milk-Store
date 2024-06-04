const express = require('express');
const router = express.Router();
const {Country} = require('../models');

router.get('/', async (req, res) => {
    const listCountry = await Country.findAll();
    res.json(listCountry);
});

module.exports = router;