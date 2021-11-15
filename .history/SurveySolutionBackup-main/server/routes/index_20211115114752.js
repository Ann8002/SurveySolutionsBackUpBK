// Author: Survey Solutions 
// Course: COMP 229 Fall 2021
// Subject: PRoject Survey
// 


// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let survey = require('../models/survey');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    survey: ''
   });
});

module.exports = router;
