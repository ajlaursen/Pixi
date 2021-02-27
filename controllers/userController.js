const { User, Like, UserAuditLog } = require('../models');
// const { Image, Like, Orders, Post, Tag, User, UserAuditLog } = require('../models');
const bcrypt = require('bcrypt');
const ObjectID = require('mongodb').ObjectID;

module.exports = {
    login: async function (req, res) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const user = await User.findOne({ email: email });

            if (!user) {
                res.status(404).json({ message: 'Login failed!' });
                return;
            }

            const passVal = await bcrypt.compare(password, user.password);

            if (!passVal) {
                res.status(404).json({ message: 'Login failed!' });
                return;
            }

            req.session.save(() => {
                req.session.user_id = user._id;
                req.session.logged_in = true;
                res.status(200).json({ message: 'Login Success!' });
            });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    logout: async function (req, res) {
        if (req.session.logged_in) {
            req.session.destroy(() => {
                res.redirect('/');
            });
        } else {
            res.redirect('/login');
        }
    },
    like: async function (req, res) {
        try {
            const userId = req.session.user_id;
            const imageId = req.params.id;
            const liked = await Like.count({
                imageId: imageId,
                userId: userId,
            });
            if (liked === 0) {
                Like.create({
                    imageId: imageId,
                    userId: userId,
                });
            } else {
                Like.deleteOne({
                    imageId: imageId,
                    userId: userId,
                });
            }
            res.status(200).json({ message: 'like successful' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    createUser: async function (req, res) {
        try {
            const newUser = req.body;
            console.log(newUser);
            newUser.password = await bcrypt.hash(req.body.password, 10);
            const addedUser = await User.create(newUser);
            newUser.passwordChanged = true;
            await UserAuditLog.create(newUser);
            req.session.save(() => {
                req.session.user_id = addedUser._id;
                req.session.logged_in = true;
                res.status(200).json({ message: 'User Creation Success!' });
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    updateUser: async function (req, res) {
        console.log('-------------------------------------');
        try {
            const userId = req.session.user_id;
            const password = req.body.password;
            const user = await User.findById(userId);

            const updatedUser = { ...user, ...req.body };

            if (password) {
                const passVal = await bcrypt.compare(password, user.password);

                if (!passVal) {
                    updatedUser.passwordChanged = true;
                    updatedUser.password = await bcrypt.hash(
                        req.body.password,
                        10
                    );
                } else {
                    updatedUser.passwordChanged = false;
                    updatedUser.password = user.password;
                }
            } else {
                updatedUser.passwordChanged = false;
                updatedUser.password = user.password;
            }

            await UserAuditLog.create(updatedUser);

            const updated = await User.updateOne(
                { _id: ObjectID(userId) },
                {
                    firstName: updatedUser.firstName,
                    lastName: updatedUser.lastName,
                    username: updatedUser.username,
                    password: updatedUser.password,
                    email: updatedUser.email,
                    url: updatedUser.url,
                    bio: updatedUser.bio,
                    image: updatedUser.image,
                    posts: updatedUser.posts,
                    followers: updatedUser.followers,
                    following: updatedUser.following,
                    tags: updatedUser.tags,
                }
            );
            if (updated.nModified === 1) {
                res.status(200).json({ message: 'user updated' });
            } else {
                res.status(404).json({ message: 'user not updated' });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
};
