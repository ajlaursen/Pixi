const db = require('../models');
// const { Image, Like, Orders, Post, Tag, User, UserAuditLog } = require('../models');

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
};
