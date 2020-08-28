const express = require('express');
const app = express();

const SD_PROJECTS_route = express.Router();

let SD_PROJECTS = require('../model/Projects');

// Add Services size
SD_PROJECTS_route.route('/project/add-project').post((req, res, next) => {
    SD_PROJECTS.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
SD_PROJECTS_route.route('/project/getAll').get((req, res) => {
    SD_PROJECTS.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  SD_PROJECTS_route.route('/project/read-project/:id').get((req, res) => {
    SD_PROJECTS.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
 
  // Get all student
  SD_PROJECTS_route.route('/').get((req, res) => {
    SD_PROJECTS.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  SD_PROJECTS_route.route('/project/delete-project/:id').delete((req, res, next) => {
    SD_PROJECTS.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  SD_PROJECTS_route.route('/project/edit-project/:id').put((req, res, next) => {
    SD_PROJECTS.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data)
        console.log('Project successfully updated!')
      }
    })
  })
  // Get single student
  
module.exports = SD_PROJECTS_route;