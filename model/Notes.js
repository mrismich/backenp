const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let SD_GENERAL_NOTES = new Schema({
    ID: {
    type: String
  },
 
  NOTE_TEXT:{
      type:String
  },
  NOTE_CATEGORY:{
      type:String
  }
}, {
  collection: 'SD_GENERAL_NOTES'
})
module.exports = mongoose.model('SD_GENERAL_NOTES', SD_GENERAL_NOTES);