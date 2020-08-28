const express = require('express');
const app = express();

const SD_PROJECT_MECH_route = express.Router();

let SD_PROJECT_MECH = require('../model/Mechanical');

// Add Services size
SD_PROJECT_MECH_route.route('/project_mech/add-project_mech').post((req, res, next) => {
    SD_PROJECT_MECH.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
SD_PROJECT_MECH_route.route('/project_mech/add-project_mech/:id').post((req, res, next) => {
    SD_PROJECT_MECH.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
SD_PROJECT_MECH_route.route('/project_mech/getAll').get((req, res) => {
    SD_PROJECT_MECH.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  SD_PROJECT_MECH_route.route('/project_mech/getAll/:id').get((req, res) => {
    SD_PROJECT_MECH.find({'ID':req.params.id},(error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  SD_PROJECT_MECH_route.route('/project_mech/read-project_mech/:id').get((req, res) => {
    SD_PROJECT_MECH.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
 
  // Get all student
  SD_PROJECT_MECH_route.route('/').get((req, res) => {
    SD_PROJECT_MECH.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  SD_PROJECT_MECH_route.route('/project_mech/delete-project_mech/:id/:id1').delete((req, res, next) => {
    SD_PROJECT_MECH.findByIdAndRemove(req.params.id1, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  SD_PROJECT_MECH_route.route('/project_mech/edit-project_mech/:id/:id1').put((req, res, next) => {
    SD_PROJECT_MECH.findByIdAndUpdate(req.params.id1, {
        $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data)
        console.log('Mechanical Schedule successfully updated!')
      }
    })
  })
  // Get single student
  
module.exports = SD_PROJECT_MECH_route;