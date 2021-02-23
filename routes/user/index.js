const router = require('express').Router();
const { login } = require('../../controllers/userController.js');

router.post('/login', login);

module.exports = router;
