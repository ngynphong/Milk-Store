const express = require('express');
const router = express.Router();
const {Category} = require('../models');

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
    const category = await Category.findByPk(categoryID);
    res.json(category);
}); 

router.put('/:CategoryID', async (req, res) => {
    const categoryID = req.params.CategoryID;
    const updatedData = req.body;
    await Category.update(updatedData, { where: { CategoryID: categoryID } });
    const updatedCategory = await Category.findByPk(categoryID);
    res.json(updatedCategory);
});


router.delete('/:CategoryID', async (req, res) => {
    const categoryID = req.params.CategoryID;
    await Category.destroy({ where: { CategoryID: categoryID } });
    res.json({ message: 'Category item deleted successfully' });
});

module.exports = router;