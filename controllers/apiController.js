const { Image, Orders } = require('../models');
// const { Image, Like, Orders, Post, Tag, User, UserAuditLog } = require('../models');

module.exports = {
    getImages: async function (req, res) {
        try {
            const images = await Image.find({});
            res.status(200).json(images);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getImagesUser: async function (req, res) {
        try {
            const userId = req.session.user_id;
            const images = await Image.find({ userId: userId });
            res.status(200).json(images);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getOwnedImages: async function (req, res) {
        try {
            const userId = req.session.user_id;
            const images = await Orders.find({ userId: userId }).populate(
                'photos'
            );
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
            Orders.create(newOrder);
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
            Image.create(newImage);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
