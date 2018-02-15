var mongoose = require('mongoose');

var Recent = mongoose.model('recent', {
    title: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    client: {
      type: String,
      required: true,
      minlength: 1
    },
    period: {
        type: String,
        required: true,
        minlength: 1
      },
    gallink: {
        type: String,
        required: true,
        minlength: 1
      },
    imglinks: [{
        type: String,
        required: true,
        minlength: 1
      }],
    createdAt: {
        type: Date,
        required: true
    }    
  });

module.exports = {Recent}