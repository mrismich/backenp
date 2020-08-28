const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let SD_MECH_SCHEDULE = new Schema({
    ID: {
    type: String
  },
 
  COMPONENT_ID:{
      type:String
  },
  REF_NO:{
      type:Number
  },
  LEVEL:{
      type:Number
  },
  SERVICE_DESCRIPTION:{
      type:String
  },
  SERVICE_SIZE:{
      type:String
  },
  PIPE_CLASS:{
      type:String
  },
  CONNECTION_TYPE_SIZE:{
      type:String
  },
  UM_TEMP_MIN:{
      type:String
  },
  UM_TEMP_MAX:{
      type:String
  },
  UM_TEMP_UNIT:{
      type:String
  },
  UM_PRES_MIN:{
    type:String
},
UM_PRES_MAX:{
    type:String
},
UM_PRES_UNIT:{
    type:String
},
UM_FLOW_MIN:{
    type:String
},
UM_FLOW_MAX:{
    type:String
},
UM_FLOW_UNIT:{
    type:String
},
SERVICE_CONN:{
    type:String
},
END_REF_NO:{
    type:String
},
OPE:{
    type:String
},
NOTES:{
    type:String
}



}, {
  collection: 'SD_MECH_SCHEDULE'
})
module.exports = mongoose.model('SD_MECH_SCHEDULE', SD_MECH_SCHEDULE);