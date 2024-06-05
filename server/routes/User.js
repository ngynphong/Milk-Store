const express = require('express');
const router = express.Router();
const { User } = require('../models')
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');


router.post('/', async (req, res) => {
    const {RoleID, Email, Password, FullName, Age, Address } = req.body;
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

router.post('/login', async (req, res) => {
    const { Email, Password } = req.body;
    const user = await User.findOne({ where: { Email: Email } });
    if (!user) {
        res.json({ error: 'User Does not exist!' })
    } else {
        bcrypt.compare(Password, user.Password).then((match) => {
            if (!match) {
                res.json({ error: 'Wrong Email or password' });
            }
            else {
                const accessToken = sign({Email: user.Email, UserID: user.UserID}, 'importantsecret')
                res.json(accessToken);
                
            }
        });
    }

});

module.exports = router