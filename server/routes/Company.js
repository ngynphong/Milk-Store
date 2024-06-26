const express = require('express');
const router = express.Router();
const {Company} = require('../models');

router.get('/', async (req, res) => {
    const listCompany = await Company.findAll();
    res.json(listCompany);
});

router.post('/',async (req, res) => {
    const company = req.body;
    await Company.create(company);
    res.json(company);
})

router.get('/:CompanyID', async (req, res) => {
    const companyID = req.params.CompanyID;
    const company = await Company.findByPk(companyID);
    res.json(company);
});


router.put('/:CompanyID', async (req, res) => {
    const companyID = req.params.CompanyID;
    const updatedData = req.body;
    await Company.update(updatedData, { where: { CompanyID: companyID } });
    const updatedCompany = await Company.findByPk(companyID);
    res.json(updatedCompany);
});


router.delete('/:CompanyID', async (req, res) => {
    const companyID = req.params.CompanyID;
    await Company.destroy({ where: { CompanyID: companyID } });
    res.json({ message: 'Company item deleted successfully' });
});

module.exports = router;