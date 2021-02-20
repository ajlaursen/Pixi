const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const likeSchema = new Schema({
  imageId: {
    type: String,
  },

  userId: {
    type: String,
  },
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;
