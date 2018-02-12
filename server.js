require('./config/config');

// const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const path = require('path');

var {mongoose} = require('./db/mongoose');
var {Gallery} = require('./models/gallery');
var {HomeSlide} = require('./models/homeslide');

// var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.json());

// var mongoose = require('mongoose');
// var mongoDB = 'mongodb://dac:just4fun@ds241055.mlab.com:41055/mymongo';
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
 var db = mongoose.connection;
 db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// db.once('open', function callback() {
//       // Create recent schema
//   let recentSchema = mongoose.Schema({
//     name: String,
//     period: String,
//     gallerylink: String
//   });

//   // Store recent documents in a collection called "recent"
//   let Recent = mongoose.model('recent', recentSchema);

//    // Create seed data
//    let project1 = new Recent({
//     name: '2018s',
//     period: 'India is my country',
//     gallerylink: 'You Light Up My Life sss'
//   });

//   project1.save((err, results) => {
//     if (err) {
//         console.log('error');
//     }
//     console.log('op is', results);
//   });



// });
// db.collection('test').insertOne
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(__dirname + '/dist'));

// app.get('/', (req,res) => {
//     let doc1 = new Gallery({
//     type: 'wedding',
//     imglink: 'https://wallpapercave.com/wp/OqT3dTT.jpg'
//   });

//   doc1.save((err, results) => {
//     if (err) {
//         console.log('error');
//     }
//     console.log('op is', results);
//   });

// });

app.get('/homeslide', (req,res) => {
    console.log('homepage clicked');
    HomeSlide.find().then((doc) => {
      if (!doc) {
          console.log('main slide not fetching');
        return res.status(404).send();
      }
      console.log('fetch success', doc);
      res.send(doc);
      
    }).catch((e) => {
      res.status(400).send();
    });
 });

// app.get('/blog', (req, res) => {
// console.log('making main request');
//     let doc1 = new HomeSlide({
//     title: 'image4',
//     imglink: 'https://s3.amazonaws.com/ffe-ugc/intlportal2/dev-temp/en-US/__5951f4d047790.jpg'
//   });

//   doc1.save((err, results) => {
//     if (err) {
//         console.log('error');
//     }
//     console.log('op is', results);
//   });
// });

 app.get('/gallery/:name', (req, res) => {
    var name = req.params.name;
    console.log('getthing to the service here', name);

    Gallery.find({type: name}).then((doc) => {
      if (!doc) {
          console.log('this is what is happening');
        return res.status(404).send();
      }
      console.log('fetch success', doc);
    //   res.send({doc});
    res.send(doc);
      
    }).catch((e) => {
      res.status(400).send();
    });

  });

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
  });

// app.use(express.static(__dirname + '/dist'));

app.listen(port, () => {
    console.log(`server up on ${port}`);
});