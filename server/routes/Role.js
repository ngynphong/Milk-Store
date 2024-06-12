const express = require('express');
const router = express.Router();
const {Role} = require('../models');

// get all Role
router.get('/',async (req, res) => {
    const listRole = await Role.findAll();
    res.json(listRole);
});

//Create new Role
router.post('/',async (req, res) => {
    const role = req.body;
    await Role.create(role);
    res.json(role);
});

// Update a Role  by ID
router.put('/:RoleID', async (req, res) => {
    const roleID = req.params.RoleID;
    const updatedData = req.body;
    await Role.update(updatedData, { where: { RoleID: roleID } });
    const updatedRole = await Role.findByPk(roleID);
    res.json(updatedRole);
});

// Delete a Role  by ID
router.delete('/:RoleID', async (req, res) => {
    const roleID = req.params.RoleID;
    await Role.destroy({ where: { RoleID: roleID } });
    res.json({ message: 'Role deleted successfully' });
});


// Create new Role
router.post('/', async (req, res) => {
    const role = req.body;
    await Role.create(country);
    res.json(country);
});

module.exports = router;