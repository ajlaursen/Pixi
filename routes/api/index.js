const router = require('express').Router();
const API = require('../../controllers/apiController.js');
const checkAuth = require('../../utils/auth');

router.get('/allimages', checkAuth, API.getImages);

router.get('/images', checkAuth, API.getImagesUser);

router.get('/myimages', checkAuth, API.getOwnedImages);

router.get('/getAllTags', checkAuth, API.getAllTags);

router.post('/neworder', checkAuth, API.postOrder);

router.post('/addtag', checkAuth, API.addTag);

router.post('/addImageTag', checkAuth, API.addImageTag);

module.exports = router;
