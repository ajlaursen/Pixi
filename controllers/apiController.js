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
            const userId = req.session.user_id;
            const images = await db.Orders.find({ userId: userId }).populate({
                path: 'photos',
                model: db.Image,
                // options: {
                //     limit: 99,
                // },
            });
            res.status(200).json(images);
        } catch (err) {
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
            // const imageId = req.body.imageId;
            const newTag = await db.Tag.create({ tag: tag });
            // const updatedImage = await db.Image.updateOne(
            //     { _id: ObjectID(imageId) },
            //     {
            //         $push: {
            //             tags: ObjectID(newTag.)
            //         },
            //     },
            //     { upsert: true }
            // );
            console.log(newTag);
            res.status(200).json(newTag);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    addImageTag: async function (req, res) {
        try {
            const tagId = req.body.tagId;
            const imageId = req.body.imageId;
            const tagExists = await db.Image.find().populate({
                path: 'tags',
                match: { _id: ObjectID(tagId) },
            });
            console.log('-------------------------------------');
            console.log('tagExists', tagExists);
            const updatedImage = await db.Image.updateOne(
                { _id: ObjectID(imageId) },
                {
                    $push: {
                        tags: ObjectID(tagId),
                    },
                }
            );
            // console.log(updatedImage);
            res.status(200).json(updatedImage);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    getAllTags: async function (req, res) {
        try {
            const tags = await db.Tag.find({});
            console.log(tags);
            res.status(200).json(tags);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
};