const express = require('express');
const app = express();

const SD_PROJECT_REV_route = express.Router();

let SD_PROJECT_REV = require('../model/Projects_rev');

// Add Services size
SD_PROJECT_REV_route.route('/project_rev/add-project_rev').post((req, res, next) => {
    SD_PROJECT_REV.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
SD_PROJECT_REV_route.route('/project_rev/add-project_rev/:id').post((req, res, next) => {
    SD_PROJECT_REV.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
SD_PROJECT_REV_route.route('/project_rev/getAll').get((req, res) => {
    SD_PROJECT_REV.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  SD_PROJECT_REV_route.route('/project_rev/getAll/:id').get((req, res) => {
    SD_PROJECT_REV.find({'ID':req.params.id},(error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  SD_PROJECT_REV_route.route('/project_rev/read-project_rev/:id').get((req, res) => {
    SD_PROJECT_REV.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
 
  // Get all student
  SD_PROJECT_REV_route.route('/').get((req, res) => {
    SD_PROJECT_REV.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  SD_PROJECT_REV_route.route('/project_rev/delete-project_rev/:id/:id1').delete((req, res, next) => {
    SD_PROJECT_REV.findByIdAndRemove(req.params.id1, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  SD_PROJECT_REV_route.route('/project_rev/edit-project_rev/:id/:id1').put((req, res, next) => {
    SD_PROJECT_REV.findByIdAndUpdate(req.params.id1, {
        $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data)
        console.log('Project revision successfully updated!')
      }
    })
  })
  // Get single student
  
module.exports = SD_PROJECT_REV_route;