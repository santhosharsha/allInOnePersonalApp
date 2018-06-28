var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Categories = new Schema({
  name: {
    type: String,
    unique: true
  },
  subcategories: {
    type: Array,
  }
},{
    collection: 'categories'
});

module.exports = mongoose.model('categories', Categories);