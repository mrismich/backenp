const express = require('express');
const app = express();

const SD_PIPE_route = express.Router();

let SD_PIPE = require('../model/Pipe');

// Add Services size
SD_PIPE_route.route('/pipe/add-pipe').post((req, res, next) => {
    SD_PIPE.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
SD_PIPE_route.route('/pipes/getAll').get((req, res) => {
    SD_PIPE.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  SD_PIPE_route.route('/pipe/read-pipe/:id').get((req, res) => {
    SD_PIPE.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
 
  // Get all student
  SD_PIPE_route.route('/').get((req, res) => {
    SD_PIPE.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  SD_PIPE_route.route('/pipe/delete-pipe/:id').delete((req, res, next) => {
    SD_PIPE.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  SD_PIPE_route.route('/pipe/edit-pipe/:id').put((req, res, next) => {
    SD_PIPE.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data)
        console.log('Pipe successfully updated!')
      }
    })
  })
  // Get single student
  
module.exports = SD_PIPE_route;