const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let SD_SERVICES_SIZE = new Schema({
  SIZE_VALUE: {
    type: String
  }
}, {
  collection: 'SERVICES_SIZE'
})

module.exports = mongoose.model('SD_SERVICES_SIZE', SD_SERVICES_SIZE);