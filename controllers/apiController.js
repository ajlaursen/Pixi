const db = require('../models');
const ObjectID = require('mongodb').ObjectID;

module.exports = {
    getImages: async function (req, res) {
        try {
            const images = await db.Image.find({});
            res.status(200).json(images);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getImagesUser: async function (req, res) {
        try {
            const userId = req.session.user_id;
            const images = await db.Image.find({ userId: userId });
            res.status(200).json(images);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getOwnedImages: async function (req, res) {
        try {
            console.log('-------------------------------------');
            const userId = req.session.user_id;
            console.log('userid', userId);
            // const images = await db.Orders.find({ userId: userId });
            const images = await db.Orders.find({ userId: userId }).populate(
                'photos'
            );
            console.log(images);
            res.status(200).json(images);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    postOrder: async function (req, res) {
        try {
            const userId = req.session.user_id;
            const newOrder = {
                ...req.body,
                userId: userId,
            };
            db.Orders.create(newOrder);
            res.status(200).json({ message: 'Order added' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    postImage: async function (req, res) {
        try {
            const userId = req.session.user_id;
            const newImage = {
                ...req.body,
                userId: userId,
            };
            db.Image.create(newImage);
            res.status(200).json({ message: 'Image added' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    addTag: async function (req, res) {
        try {
            const tag = req.body.tagName;
            const imageId = req.body.imageId;
            const newTag = await db.Tag.update(
                { tag: tag },
                {
                    $push: {
                        images: ObjectID(imageId),
                    },
                }
            );
            console.log(newTag);
            res.status(200).json(newTag);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
};
