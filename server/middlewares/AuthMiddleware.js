const { verify } = require('jsonwebtoken');

const validateToken = (req, res, next) => {
    const accessToken = req.header('accessToken');
    if (!accessToken) return res.json({ error: 'User not logged in!' });
    //check admin 
    // if (!req.session.User || req.session.User.RoleID !== 1) {
    //     return res.status(401).json({ message: "Unauthorized" });
    // }
    // next();
    try {
        const validToken = verify(accessToken, 'importantsecret');
        req.User = validToken;
        if (validToken) {
            return next();
        }
    } catch (error) {
        res.json({ error: err });
    }
};

module.exports = { validateToken };