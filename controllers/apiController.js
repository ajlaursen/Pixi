// const passport = require('passport');
const { getToken, decode } = require('../utils/token');
const db = require('../models');
const ObjectID = require('mongodb').ObjectID;

module.exports = {
    getImages: async function (req, res) {
        try {
            let token = decode(getToken(req.headers));
            if (token) {
                const images = await db.Image.find({});
                res.status(200).json(images);
            } else {
                res.status(403).send({ message: 'Not authorized' });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getImagesUser: async function (req, res) {
        try {
            const userId = req.user._id;
            const images = await db.Image.find({ userId: userId });
            res.status(200).json(images);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getOwnedImages: async function (req, res) {
        try {
            const userId = req.user._id;
            const images = await db.Orders.find({ userId: userId }).populate({
                path: 'photos',
                model: db.Image,
            });
            res.status(200).json(images);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    postOrder: async function (req, res) {
        try {
            const userId = req.user._id;
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
            const userId = req.user._id;
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
            const newTag = await db.Tag.create({ tag: tag });
            res.status(200).json(newTag);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    addImageTag: async function (req, res) {
        try {
            const tagId = req.body.tagId;
            const imageId = req.body.imageId;
            const tagExists = await db.Image.count({
                _id: ObjectID(imageId),
                tags: ObjectID(tagId),
            });
            if (tagExists === 1) {
                res.status(200).json({ message: 'tag already assigned' });
            } else {
                const updatedImage = await db.Image.updateOne(
                    { _id: ObjectID(imageId) },
                    {
                        $push: {
                            tags: ObjectID(tagId),
                        },
                    }
                );
                res.status(200).json(updatedImage);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
    removeImageTag: async function (req, res) {
        try {
            const tagId = req.body.tagId;
            const imageId = req.body.imageId;
            const tagExists = await db.Image.count({
                _id: ObjectID(imageId),
                tags: ObjectID(tagId),
            });
            if (tagExists === 1) {
                const updatedImage = await db.Image.updateOne(
                    { _id: ObjectID(imageId) },
                    {
                        $pull: {
                            tags: ObjectID(tagId),
                        },
                    }
                );
                res.status(200).json(updatedImage);
            } else {
                res.status(200).json({ message: 'tag already removed' });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getAllTags: async function (req, res) {
        try {
            const tags = await db.Tag.find({});
            res.status(200).json(tags);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
