const express = require('express');
const app = express();

const SD_PROJECT_SHEET_route = express.Router();

let SD_PROJECT_SHEET = require('../model/Sheet');

// Add Services size
SD_PROJECT_SHEET_route.route('/project_sheet/add-project_sheet').post((req, res, next) => {
    SD_PROJECT_SHEET.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
SD_PROJECT_SHEET_route.route('/project_sheet/add-project_sheet/:id').post((req, res, next) => {
    SD_PROJECT_SHEET.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
SD_PROJECT_SHEET_route.route('/project_sheet/getAll').get((req, res) => {
    SD_PROJECT_SHEET.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  SD_PROJECT_SHEET_route.route('/project_sheet/getAll/:id').get((req, res) => {
    SD_PROJECT_SHEET.find({'ID':req.params.id},(error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  SD_PROJECT_SHEET_route.route('/project_sheet/read-project_sheet/:id').get((req, res) => {
    SD_PROJECT_SHEET.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
 
  // Get all student
  SD_PROJECT_SHEET_route.route('/').get((req, res) => {
    SD_PROJECT_SHEET.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  SD_PROJECT_SHEET_route.route('/project_sheet/delete-project_sheet/:id/:id1').delete((req, res, next) => {
    SD_PROJECT_SHEET.findByIdAndRemove(req.params.id1, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  SD_PROJECT_SHEET_route.route('/project_sheet/edit-project_sheet/:id/:id1').put((req, res, next) => {
    SD_PROJECT_SHEET.findByIdAndUpdate(req.params.id1, {
        $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data)
        console.log('Project Register Sheet successfully updated!')
      }
    })
  })
  // Get single student
  
module.exports = SD_PROJECT_SHEET_route;