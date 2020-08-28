const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let SD_PROJECT_OBJECT = new Schema({
    ID: {
    type: String
  },
  COMPONENT_ID:{
    type:String
  },
  SERVICE_ID:{
      type:String
  },
  SERVICE_ALIAS:{
      type:String
  }
}, {
  collection: 'SD_PORJECT_OBJECT'
})
module.exports = mongoose.model('SD_PROJECT_OBJECT', SD_PROJECT_OBJECT);