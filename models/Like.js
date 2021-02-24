const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const likeSchema = new Schema({
    imageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image',
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

    creationDate: {
        type: Date,
        default: Date.now,
    },
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;
