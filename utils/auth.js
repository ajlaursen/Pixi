const passport = require('passport');

const checkAuth = (req, res, next) => {
    // if (!req.session.logged_in) {
    //     res.redirect('/login');
    // } else {
    //     next();
    // }
    return passport.authenticate(
        'jwt',
        {
            session: false,
        },
        (err, user) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.json({
                    status: 'error',
                    err: 'Not authorized',
                });
            }
            req.user = user;
            next();
        }
    )(req, res, next);
};

module.exports = checkAuth;
