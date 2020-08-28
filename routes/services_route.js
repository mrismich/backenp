const express = require('express');
const app = express();

const SD_SERVICES_route = express.Router();

// Student model
let SD_SERVICES = require('../model/Services');

// Add Services size
SD_SERVICES_route.route('/service/add-service').post((req, res, next) => {
    SD_SERVICES.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
SD_SERVICES_route.route('/services/getAll').get((req, res) => {
    SD_SERVICES.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  SD_SERVICES_route.route('/service/read-service/:id').get((req, res) => {
    SD_SERVICES.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
 
  // Get all student
  SD_SERVICES_route.route('/').get((req, res) => {
    SD_SERVICES.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  SD_SERVICES_route.route('/service/delete-service/:id').delete((req, res, next) => {
    SD_SERVICES.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  SD_SERVICES_route.route('/service/edit-service/:id').put((req, res, next) => {
    SD_SERVICES.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data)
        console.log('Service successfully updated!')
      }
    })
  })
  // Get single student
  
module.exports = SD_SERVICES_route;