
let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page back up if user writes /home. */
router.get('/home', indexController.displayHomePage);


/* GET About page. */
router.get('/answersurvey',  indexController.displayAboutPage);


router.get('/answersurvey', function(req, res, next) {
  res.render('index', { title: 'SurveySolution', page: 'answersurvey'});
});

/* GET Projects page. */
router.get('/projects', indexController.displayProjectPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Me page. */
router.get('/contact-me', indexController.displayContactsPage);

/*  Get Route for displaying Login page     */

router.get('/login', indexController.displayLoginPage);

/*  POst Route for processing Login page    */

router.post('/login', indexController.processLoginPage);

/*  Get Route for displaying Register page     */

router.get('/register', indexController.displayRegisterPage);

/*  POst Route for processing Register page    */

router.post('/register', indexController.processRegisterPage);

/*  Get to perform Logout operation   */

router.get('/logout', indexController.performLogout);


module.exports = router;