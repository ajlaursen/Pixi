const router = require('express').Router();
const Post = require('../../models/Post');
const fileService = require('../../utils/file-service');

router.post('/', fileService.upload.single('image'), async (req, res) => {
    try {
        const post = await Post.create({
            title: req.body.title,
            desctription: req.body.desctription,
        });

        req.file.post_id = post._id;
        const file = await File.create(req.File);

        res.status(200).json(post);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
