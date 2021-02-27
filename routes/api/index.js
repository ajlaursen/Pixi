const router = require('express').Router();
const API = require('../../controllers/apiController.js');
const checkAuth = require('../../utils/auth');

router.get('/allimages', checkAuth, API.getImages);

router.get('/images', checkAuth, API.getImagesUser);

router.get('/myimages', checkAuth, API.getOwnedImages);

module.exports = router;
