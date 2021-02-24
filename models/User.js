const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: 'First Name is Required',
    },

    lastName: {
        type: String,
        trim: true,
        required: 'Last Name is Required',
    },

    username: {
        type: String,
        trim: true,
        required: 'Username is Required',
    },

    password: {
        type: String,
        trim: true,
        required: 'Password is Required',
        validate: [({ length }) => length >= 6, 'Password should be longer.'],
    },

    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
    },

    url: {
        type: String,
        default: '',
    },

    image: {
        type: String,
        default: 'placeholder.png',
    },

    bio: {
        type: String,
        default: '',
    },

    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
        },
    ],

    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],

    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],

    creationDate: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
