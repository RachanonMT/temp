var express = require('express');
var router = express.Router();
var StudentModel = require('../models/Student');

router.get('/', async (req, res) => {
  StudentModel.find((error, data) => {
    if (error) {
      res.status(500).send('Error');
    } else {
      res.status(200).send(data);
    }
  });
});

router.get('/:id', async (req, res) => {
  StudentModel.findById(req.params.id, (error, data) => {
    if (error) {
      res.status(500).send('Error');
    } else {
      res.status(200).send(data);
    }
  });
});

router.post('/create', async function(req, res) {
  StudentModel.create(req.body, (error, data) => {
    if (error){
      res.status(500).send('Error');
    } else {
      res.status(200).send(data);
    }
  });
});

router.delete('/delete/:id', async function(req, res) {
  StudentModel.findByIdAndDelete(req.params.id, (error, data) => {
    if (error){
      res.status(500).send('Error');
    } else {
      res.status(200).send(data);
    }
  });
});

router.put('/update/:id', async function(req, res) {
  StudentModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error){
      res.status(500).send('Error');
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = router;