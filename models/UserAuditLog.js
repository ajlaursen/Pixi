const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserAuditLogSchema = new Schema({
    userId: {
        type: String,
    },

    updateDate: {
        type: Date,
        default: Date.now,
    },

    firstName: {
        type: String,
    },

    lastName: {
        type: String,
    },

    username: {
        type: String,
    },

    email: {
        type: String,
    },

    url: {
        type: String,
    },

    image: {
        type: String,
    },

    bio: {
        type: String,
    },

    passwordChanged: {
        type: Boolean,
    },

    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
        },
    ],

    followers: Array,

    following: Array,
});

const UserAuditLog = mongoose.model('UserAuditLog', UserAuditLogSchema);

module.exports = UserAuditLog;
