const router = require('express').Router();
const API = require('../../controllers/apiController.js');
const checkAuth = require('../../utils/auth');
const files = require('../files');

router.get('/allimages', checkAuth, API.getImages);

router.get('/images', checkAuth, API.getImagesUser);

router.get('/myimages', checkAuth, API.getOwnedImages);

router.get('/getAllTags', API.getAllTags);

router.post('/neworder', checkAuth, API.postOrder);

router.use('/files', files);

router.post('/image', checkAuth, API.postImage);

router.post('/addtag', checkAuth, API.addTag);

router.post('/addimagetag', checkAuth, API.addImageTag);

router.post('/removeimagetag', checkAuth, API.removeImageTag);

module.exports = router;
