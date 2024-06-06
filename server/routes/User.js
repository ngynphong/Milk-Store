const express = require('express');
const router = express.Router();
const { User } = require('../models')
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');
const { validateToken } = require('../middlewares/AuthMiddleware');


router.get('/', async (req, res) => {
    const listUser = await User.findAll();
    res.json(listUser);
});

// router.get('/profile/:UserID', async (req, res) => {
//     const userID = req.params.UserID;
//     const user = await User.findByPk(userID);
//     res.json(user);
// });

router.get("/profile/:UserID", async (req, res) => {
    const userid = req.params.UserID;
  
    const profile = await User.findByPk(userid, {
      attributes: { exclude: ["password"] },
    });
  
    res.json(profile);
  });

// Check authentication route
router.get('/auth', validateToken, (req, res) => {
    res.json(req.User);
});


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
                res.json({ token: accessToken, Email: Email, UserID: user.UserID });              
            }
        });
    }

});

module.exports = router