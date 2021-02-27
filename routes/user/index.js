const router = require('express').Router();
const USER = require('../../controllers/userController.js');
const checkAuth = require('../../utils/auth');

router.post('/login', USER.login);

router.get('/logout', checkAuth, USER.logout);

router.get('/like/:id', checkAuth, USER.like);

router.post('/new', USER.createUser);

router.post('/update', checkAuth, USER.updateUser);

module.exports = router;
