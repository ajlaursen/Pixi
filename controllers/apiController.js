const { User } = require('../models');
const bcrypt = require('bcrypt');

module.exports = {
    apiLogin: async function (req, res) {
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
};
