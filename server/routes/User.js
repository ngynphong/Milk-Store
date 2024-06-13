const express = require('express');
const router = express.Router();
const { User } = require('../models')
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');
const { validateToken } = require('../middlewares/AuthMiddleware');

// Delete a User  by ID
router.delete('/:UserID', async (req, res) => {
    const userID = req.params.UserID;
    await User.destroy({ where: { UserID: userID } });
    res.json({ message: 'User deleted successfully' });
});


router.get('/', async (req, res) => {
    const listUser = await User.findAll();
    res.json(listUser);
});

//Update profile
router.put('/profile/:UserID', async (req, res) => {
    const userID = req.params.UserID;
    const updateData = req.body;
    await User.update(updateData, {where: {UserID: userID}}, {
        attributes: { exclude: ["Password", "RoleID", "Email"] },
    });
    const updateUser = await User.findByPk(userID);
    res.json(updateUser);

});

//Profile
router.get('/profile/:UserID' , async (req, res) => {
    const userid = req.params.UserID;

    const profile = await User.findByPk(userid, {
        attributes: { exclude: ["Password"] },
    });

    res.json(profile);
});

// Check authentication route
router.get('/auth', validateToken, (req, res) => {
    res.json(req.User);
});

//Register
router.post('/', async (req, res) => {
    const { RoleID, Email, Password, FullName, Age, Address } = req.body;
    bcrypt.hash(Password, 10).then((hash) => {
        User.create({

            RoleID: RoleID,
            Email: Email,
            Password: hash,
            FullName: FullName,
            Age: Age,
            Address: Address,
        })

        res.json('Sucessfully');

    });
});

//Login
router.post('/login', async (req, res) => {
    const { Email, Password } = req.body;
    const user = await User.findOne({ where: { Email: Email } });
    if (!user) {
        res.json({ error: 'User does not exist!' })
    } else {
        bcrypt.compare(Password, user.Password).then((match) => {
            if (!match) {
                res.json({ error: 'Wrong Email or Password' });
            }
            else {
                const accessToken = sign({ Email: user.Email, UserID: user.UserID, FullName: user.FullName, Age: user.Age, Address: user.Address, RoleID: user.RoleID }, 'importantsecret')
                res.json({ token: accessToken, Email: Email, UserID: user.UserID, FullName: user.FullName, Age: user.Age, Address: user.Address , RoleID: user.RoleID});
            }
        });
    }

});

module.exports = router