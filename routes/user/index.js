const router = require('express').Router();
const API = require('../../controllers/userController.js');

router.post('/login', API.login);

router.get('/logout', API.logout);

router.get('/like/:id', API.like);

module.exports = router;
