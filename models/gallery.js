var mongoose = require('mongoose');

var Gallery = mongoose.model('gallery', {
    type: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    imglink: {
      type: String,
      required: true,
      minlength: 1
    }
  });

//   let recentSchema = mongoose.Schema({
//     name: String,
//     period: String,
//     gallerylink: String
//   });

module.exports = {Gallery}