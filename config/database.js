require('dotenv').config();

module.exports = {
    jwt_secret: process.env.JWT_SECRET,
    database: process.env.MONGODB_URI,
};
