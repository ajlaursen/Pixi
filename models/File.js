const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    originalname: {
        type: String,
    },

    key: {
        type: String,
    },

    bucket: {
        type: String,
    },

    location: {
        type: String,
    },

    imageId: {
        type: Schema.Types.ObjectId,
        ref: 'Image',
    },
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
