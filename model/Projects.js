const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let SD_PROJECTS = new Schema({
 
  PROJECT_NAME:{
      type:String
  },
  PROCESS_Y_N:{
      type:Number
  },
  CONTRACTUAL_Y_N:{
      type:Number
  }
}, {
  collection: 'SD_PROJECTS'
})
module.exports = mongoose.model('SD_PROJECTS', SD_PROJECTS);