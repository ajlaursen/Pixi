const jwt_decode = require('jwt-decode');

module.exports = {
    getToken: function (headers) {
        if (headers && headers.authorization) {
            let parted = headers.authorization.split(' ');
            if (parted.length === 2) {
                return parted[1];
            } else {
                return null;
            }
        } else {
            return null;
        }
    },
    decode: function (token) {
        return jwt_decode(token);
    },
};
