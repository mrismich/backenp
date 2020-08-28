const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let SD_SERVICES = new Schema({
    SERVICE_NAME: {
    type: String
  },
  PIPE:{
      type:Array
  }
}, {
  collection: 'SERVICES'
})

module.exports = mongoose.model('SD_SERVICES', SD_SERVICES);