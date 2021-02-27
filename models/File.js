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
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
