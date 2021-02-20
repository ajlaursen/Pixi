const mongoose = require('mongoose');

const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const imagesSchema = new Schema({
  id: {
    type: String,
    trim: true,
    required: "id is Required"
  },

  userId: {
    type: String,
  },

  location: {
    type: String,
  },

  title: {
    type: String,
  },

  description: {
    type: String,
  },

  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag"
    }
  ],

  free: {
    type: Boolean,
  },

  price: {
    type: Currency,
  },

  creationDate: {
    type: Date,
    default: Date.now
  }
});

const Images = mongoose.model('Images', imagesSchema);

module.exports = Images;
