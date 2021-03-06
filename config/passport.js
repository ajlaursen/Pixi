const passport = require('passport');
const config = require('./database');
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = function (User) {
    console.log('User', User);
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = config.jwt_secret;
    console.log('opts', opts.jwtFromRequest);
    passport.use(
        new JwtStrategy(opts, function (jwt_payload, done) {
            console.log(jwt_payload.id);
            User.findById(jwt_payload.id, function (err, foundUser) {
                console.log('foundUser', foundUser);
                if (err) {
                    return done(err, false);
                }
                if (foundUser) {
                    return done(null, foundUser);
                } else {
                    return done(null, false);
                }
            }).then((res) => console.log(res));
        })
    );
};
