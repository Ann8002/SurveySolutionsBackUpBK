let mongoose = require('mongoose');

//  Create a model class

let Survey = mongoose.Schema({
    NameOfTheSurvey: String,
   
},
{
    collection: "Surveys_Database"
});

module.exports = mongoose.model('Contact', Survey);
