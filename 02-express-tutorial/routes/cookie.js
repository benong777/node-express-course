const express = require('express');
const auth = require('../auth');
const router = express.Router();
const { loginUser,
        logoutUser,
        testUser } = require('../controllers/cookie');

router.post('/logon', loginUser);
router.delete('/logoff', logoutUser)
router.get('/test', auth, testUser);

module.exports = router;