/* Shiv Bindra
     Student #  300758190
     Assignment 2
     COMP 229- SECTION 001
     DATE - OCTOBER, 22, 2021


 */

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

// define the book model

let contactController = require('../controllers/contact');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in

    //*********************************** */
    ///   Uncomment Later Stage



    // if(!req.isAuthenticated())
    // {
    //     return res.redirect('/login');
    // }
    // next();
    //******************************************************* */
    next();
}

/*  Get Route for the Contact List page  - REad Operation   */

router.get('/', requireAuth, contactController.displayContactList);


/*  Get Route for displaying ADD Contact List page  - Create Operation   */

router.get('/add', requireAuth, contactController.displayAddPage);

/*  POst Route for processing the ADD Contact List page  - Create Operation   */

router.post('/add', requireAuth, contactController.processAddPage);

/*  Get Route for displaying EDIT Contact List page  - Update Operation   */

router.get('/edit/:id', requireAuth, contactController.displayEditPage);

/*  Post Route for processing EDIT Contact List page  - Update Operation   */

router.post('/edit/:id', requireAuth, contactController.processEditPage);

/*  Get to perform Removing  Contact List page  - DELETE Operation   */

router.get('/delete/:id', requireAuth, contactController.performDelete);



let survey = require('../models/Survey');

/* GET Survey List page. READ */
router.get('/', (req, res, next) => {
    // find all books in the books collection
    survey.find( (err, Surveys_Database) => {
      if (err) {
        return console.error(err);
      }
      else {
        res.render('contact/list', {
          title: 'Surveys',
          Survey1: Surveys_Database
        });
      }
    });
  
  });

module.exports = router;