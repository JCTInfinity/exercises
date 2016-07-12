var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
mongoose.connect('mongodb://localhost/enron')
var db = mongoose.connection

db.on('error', function(msg) {
  console.log('Mongoose connection error ', msg)
})

db.once('open', function() {
  console.log('Mongoose connection established')
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
