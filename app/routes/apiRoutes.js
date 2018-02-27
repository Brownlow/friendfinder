var friends = require('../data/friends');

module.exports = function(app){
    app.post('/api/friends', function(req, res){

        friends.push(req.body)

        for(i=0; i<friends.scores.length; i++){
            console.log('hey')
        }

    //    for(i=0; i<friends.length; i++){
         
    //      console.log('-------------------------')
    //      console.log(diff)
    //      for (j=0; j<friends[i].scores.length; j++){
    //         //scoreDiff = parseInt(req.body.scores) - parseInt(friends[i].scores[j]);
    //         var friendScores = (friends[i].scores[j]);
    //         diff.push(friendScores)
    //      }
    //    }

       
       // bestMatch = ??
       // res.json(bestMatch)
        res.json(req.body)
       
       })
}