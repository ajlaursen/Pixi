const router = require('express').Router();
const API = require('../../controllers/apiController.js');
const checkAuth = require('../../utils/auth');

router.get('/allimages', checkAuth, API.getImages);

router.post('/image', checkAuth, API.postImage);

router.get('/images', checkAuth, API.getImagesUser);

router.get('/myimages', checkAuth, API.getOwnedImages);

router.post('/neworder', checkAuth, API.postOrder);

router.post('/addtag', checkAuth, API.addTag);

module.exports = router;
