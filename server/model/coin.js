var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Coin = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number,
    min:1,
    max:200
  }
},{
    collection: 'coins'
});

module.exports = mongoose.model('Coin', Coin);