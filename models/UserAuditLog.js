const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserAuditLogSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
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
            type: Schema.Types.ObjectId,
            ref: 'Post',
        },
    ],

    followers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],

    following: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],

    tags: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Tag',
        },
    ],
});

const UserAuditLog = mongoose.model('UserAuditLog', UserAuditLogSchema);

module.exports = UserAuditLog;
