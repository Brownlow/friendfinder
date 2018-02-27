// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");

// EXPRESS CONFIGURATION
var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTER
require("./app/routes/apiRoutes")(app);
//var apiRoutes = require("./routes/apiRoutes")
//console.log(apiRoutes); => [Function]
//apiRoutes(app);
require("./app/routes/htmlRoutes")(app);


// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});