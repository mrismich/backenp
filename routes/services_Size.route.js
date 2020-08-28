const express = require('express');
const app = express();

const SD_SERVICES_SIZE_route = express.Router();

// Student model
let SD_SERVICES_SIZE = require('../model/Services_size');
let student=require('../model/Student');

// Add Services size
SD_SERVICES_SIZE_route.route('/add-services_size').post((req, res, next) => {
  SD_SERVICES_SIZE.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
SD_SERVICES_SIZE_route.route('/get-all-services-size').get((req, res) => {
    SD_SERVICES_SIZE.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  SD_SERVICES_SIZE_route.route('/read-services-value/:id').get((req, res) => {
    SD_SERVICES_SIZE.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  SD_SERVICES_SIZE_route.route('/delete-service-value/:id').delete((req, res, next) => {
    SD_SERVICES_SIZE.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  SD_SERVICES_SIZE_route.route('/read-student/:id').get((req, res) => {
    SD_SERVICES_SIZE.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  // Get all student
  SD_SERVICES_SIZE_route.route('/').get((req, res) => {
    SD_SERVICES_SIZE.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  SD_SERVICES_SIZE_route.route('/edit-services-value/:id').put((req, res, next) => {
    SD_SERVICES_SIZE.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data)
        console.log('Service Value successfully updated!')
      }
    })
  })
  // Get single student
  
module.exports = SD_SERVICES_SIZE_route;