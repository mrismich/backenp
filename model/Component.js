const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let SD_COMPONENT = new Schema({
    COMPONENT_NAME: {
    type: String
  },
  SERVICE:{
    type:Array
  }
}, {
  collection: 'COMPONENT'
})
module.exports = mongoose.model('SD_COMPONENT', SD_COMPONENT);