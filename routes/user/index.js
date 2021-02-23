const router = require('express').Router();
const API = require('../../controllers/userController.js');

router.post('/login', API.login);

module.exports = router;
