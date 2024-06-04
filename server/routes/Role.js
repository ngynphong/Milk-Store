const express = require('express');
const router = express.Router();
const {Role} = require('../models');

router.get('/',async (req, res) => {
    const listRole = await Role.findAll();
    res.json(listRole);
});

router.post('/',async (req, res) => {
    const role = req.body;
    await Role.create(role);
    res.json(role);
});

module.exports = router;