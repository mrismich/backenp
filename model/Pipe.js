const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let SD_PIPE = new Schema({
    PIPE_NAME: {
    type: String
  }
}, {
  collection: 'PIPES'
})
module.exports = mongoose.model('SD_PIPE', SD_PIPE);