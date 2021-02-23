const { User } = require('../models');
// const { Image, Like, Post, Tag, User, UserAuditLog } = require('../models');
const bcrypt = require('bcrypt');

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
                req.session.user_id = user.id;
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
};
