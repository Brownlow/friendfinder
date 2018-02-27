var friends = require('../data/friends');

module.exports = function(app){
    app.post('/api/friends', function(req, res){

      // Add new friend to friends array
      

      var scoreDiff = [];

      for (i=0; i<friends.length; i++){
        console.log(friends[i].scores)
        
        for (j=0; j<friends[i].scores.length; j++){
          var diff = friends[i].scores[j] - parseInt(req.body.scores[j]);

          scoreDiff.push(diff)
          
        }
      }
      console.log('=====================');
      console.log(scoreDiff)
      console.log('=====================');
      console.log(req.body.scores);

      friends.push(req.body)
       // bestMatch = ??
       // res.json(bestMatch)
        res.json(req.body)
       
       })
}