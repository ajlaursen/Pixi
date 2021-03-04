const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagSchema = new Schema({
    tag: String,
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;
