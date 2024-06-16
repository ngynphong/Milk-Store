const express = require('express');
const router = express.Router();
const { Cart, User } = require('../models');
const { where } = require('sequelize');

router.get('/', async (req, res) => {
    const listCart = await Cart.findAll();
    res.json(listCart);
});

// Create new Cart
router.post('/', async (req, res) => {
    const cart = req.body;
    await Cart.create(cart);
    res.json(cart);
});

//add to cart
router.post('/:UserID', async (req, res) => {
    const userID = req.params.UserID;
    const cart = req.body;
    await Cart.create(cart, { where: { UserID: userID } });
    res.json(cart);
});

router.get('/:CartID', async (req, res) => {
    const cartID = req.params.CartID;
    const cart = await Cart.findByPk(cartID);
    res.json(cart);
});



// Update a Cart  by ID
router.put('/:CartID', async (req, res) => {
    const cartID = req.params.CartID;
    const updatedData = req.body;
    await Cart.update(updatedData, { where: { CartID: cartID } });
    const updatedCart = await Cart.findByPk(cartID);
    res.json(updatedCart);
});

// Delete a Cart  by ID
router.delete('/:CartID', async (req, res) => {
    const cartID = req.params.CartID;
    await Cart.destroy({ where: { CartID: cartID } });
    res.json({ message: 'Cart deleted successfully' });
});





module.exports = router;