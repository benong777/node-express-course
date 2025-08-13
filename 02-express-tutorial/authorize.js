const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === 'thor') {
        req.user = { name: user, id: 18 }
        next();
    } else {
        res.status(401).send('Unathorized');
    }
};

module.exports = authorize;