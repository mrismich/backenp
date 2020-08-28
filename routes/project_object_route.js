const express = require('express');
const app = express();

const SD_PROJECT_OBJECT_route = express.Router();

let SD_PROJECT_OBJECT = require('../model/Object');

// Add Services size
SD_PROJECT_OBJECT_route.route('/project_obj/add-project_obj').post((req, res, next) => {
    SD_PROJECT_OBJECT.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
SD_PROJECT_OBJECT_route.route('/project_obj/add-project_obj/:id').post((req, res, next) => {
    SD_PROJECT_OBJECT.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
SD_PROJECT_OBJECT_route.route('/project_obj/getAll').get((req, res) => {
    SD_PROJECT_OBJECT.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  SD_PROJECT_OBJECT_route.route('/project_obj/getAll/:id').get((req, res) => {
    SD_PROJECT_OBJECT.find({'ID':req.params.id},(error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  SD_PROJECT_OBJECT_route.route('/project_obj/read-project_obj/:id').get((req, res) => {
    SD_PROJECT_OBJECT.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
 
  // Get all student
  SD_PROJECT_OBJECT_route.route('/').get((req, res) => {
    SD_PROJECT_OBJECT.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  SD_PROJECT_OBJECT_route.route('/project_obj/delete-project_obj/:id/:id1').delete((req, res, next) => {
    SD_PROJECT_OBJECT.findByIdAndRemove(req.params.id1, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  SD_PROJECT_OBJECT_route.route('/project_obj/edit-project_obj/:id/:id1').put((req, res, next) => {
    SD_PROJECT_OBJECT.findByIdAndUpdate(req.params.id1, {
        $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data)
        console.log('Project Object successfully updated!')
      }
    })
  })
  // Get single student
  
module.exports = SD_PROJECT_OBJECT_route;