const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // CHECK auth-token FROM REQUEST
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Unauthorized access!');

    // VERIFY AND PROCESS THE REQUEST
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send('Invalid token!');
    }
}