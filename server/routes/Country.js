const express = require('express');
const router = express.Router();
const {Country} = require('../models');

router.get('/', async (req, res) => {
    const listCountry = await Country.findAll();
    res.json(listCountry);
});

// Update a Country  by ID
router.put('/:CountryID', async (req, res) => {
    const countryID = req.params.CountryID;
    const updatedData = req.body;
    await Country.update(updatedData, { where: { CountryID: countryID } });
    const updatedCountry = await Country.findByPk(countryID);
    res.json(updatedCountry);
});

// Delete a Country  by ID
router.delete('/:CountryID', async (req, res) => {
    const countryID = req.params.CountryID;
    await Country.destroy({ where: { CountryID: countryID } });
    res.json({ message: 'Country deleted successfully' });
});


// Create new Country
router.post('/', async (req, res) => {
    const country = req.body;
    await Country.create(country);
    res.json(country);
});


module.exports = router;