const loginUser = (req, res) => {
    const { name } = req.body;

    if (name) {
        res.cookie('name', name);
        return res
            .status(201)
            .send(`Hello ${name}`);
    } else {
        return res
            .status(400)
            .json({ success: false,  msg: 'Unauthorized' });
    }
}

const logoutUser = (req, res) => {
    res.clearCookie('name');
    return res
        .status(200)
        .json({ success: true, msg: 'Logged off' });
}

const testUser = (req, res) => {
    return res
        .status(200)
        .json({ success: true, msg: `Welcome ${req.cookies.name}`})
}

module.exports = {
    loginUser,
    logoutUser,
    testUser,
}