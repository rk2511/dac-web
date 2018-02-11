var mongoose = require('mongoose');

var HomeSlide = mongoose.model('homeslide', {
    title: {
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

module.exports = {HomeSlide}