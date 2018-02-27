var friends = require('../data/friends');

module.exports = function(app){
    //app.post('/api/friends', function(req, res){

      app.post("/api/friends", function(req, res) {
    
        // We will use this object to hold the "best match". We will constantly update it as we
        // loop through all of the options
        var bestMatch = {
          name: "",
          photo: "",
          friendDifference: 0
        };
    
        // The result of the user"s survey POST.
        var userData = req.body;
        var userScores = userData.scores;
    
        // This variable will calculate the difference between the users scores and the scores of
        // each user in the database
        var totalDifference = 0;
    
        // Here we loop through all the friend possibilities in the database.
        for (var i = 0; i < friends.length; i++) {
          totalDifference = 0;

          // Loop through all the scores of each friend
          for (var j = 0; j < friends[i].scores[j]; j++) {
    
            // Calculate the difference between the scores and sum them into the totalDifference
            totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
    
            // If the sum of differences is less then the differences of the current "best match"
            if (totalDifference <= bestMatch.friendDifference) {
    
              // Reset the bestMatch to be the new friend.
              bestMatch.name = friends[i].name;
              bestMatch.photo = friends[i].photo;
              bestMatch.friendDifference = totalDifference;
            }
          }
        }
    
        // Finally save the user's data to the friends array
        friends.push(userData);
    
        // Return a JSON with the user's bestMatch.
        res.json(bestMatch);
    
      });
      

  }