const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let SD_PROJECTS_REV = new Schema({
  ID:{
     type:String
  },
  REV_NAME:{
      type:String
  },
  REV_NO:{
      type:String
  },
 
}, {
  collection: 'SD_PROJECTS_REV'
})
module.exports = mongoose.model('SD_PROJECTS_REV', SD_PROJECTS_REV);