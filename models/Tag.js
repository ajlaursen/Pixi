const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tagSchema = new Schema({
  tag: {
    type: String,
  },

  images: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Image',
    },
  ],
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;
