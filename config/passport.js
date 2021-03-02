const passport = require('passport');
const config = require('./database');
let JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = function (user) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = config.jwt_secret;
    passport.use(
        new JwtStrategy(opts, function (jwt_payload, done) {
            user.findOne({ id: jwt_payload.sub }, function (err, foundUser) {
                if (err) {
                    return done(err, false);
                }
                if (foundUser) {
                    return done(null, foundUser);
                } else {
                    return done(null, false);
                }
            });
        })
    );
};
