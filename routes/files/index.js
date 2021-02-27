const router = require('express').Router();
const Image = require('../../models/Image');
const fileService = require('../../utils/file-service');
const checkAuth = require('../../utils/auth');
const File = require('../../models/File');

router.post(
    '/',
    // checkAuth,
    fileService.upload.single('image'),
    async (req, res) => {
        try {
            console.log(req.file)
            const file = await File.create(req.file);
            // req.body.fileId = file._id;
            // const image = await Image.create(req.body);

            res.status(200).json(file);
        } catch (err) {
            res.status(400).json(err);
        }
    }
);

module.exports = router;
