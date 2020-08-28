const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let SD_SHEET_REGISTER = new Schema({
  ID: {
    type: String
  },
  ITEM_NAME:{
      type:String
  },
  DESCRIPTION_A:{
      type:String
  },
  DESCRIPTION_B:{
      type:String
  },
  DESCRIPTION_C:{
      type:String
  },
  SECTION:{
      type:String
  },
  ITEM_NO:{
      type:String
  },
  DATE_ISSUED:{
      type:Date
  },
  REV_ISSUED:{
      type:String
  }
  

}, {
  collection: 'SD_SHEET_REGISTER'
})

module.exports = mongoose.model('SD_SHEET_REGISTER', SD_SHEET_REGISTER);