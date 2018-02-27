var path = require("path");

var friends = require('../data/friends')

module.exports = function(app){

//HTML ROUTES
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../public/home.html'));
  })
  
  app.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  })
}