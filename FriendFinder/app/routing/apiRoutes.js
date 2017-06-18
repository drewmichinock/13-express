var friends = require("../data/friends");

module.exports = function (app) {

    // A GET route with the url /api/friends. 
    // used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {

        res.json(friends);

    });

    // A POST route with the URL /api/friends. 
    // used to handle incoming survey results.
    // also will handle the compatibility logic.
    app.post("/api/friends", function (req, res) {

        var newFriend = req.body;

        console.log(newFriend);

        friends.push(newFriend);

        res.json(newFriend);

        for (i = 0; i < friends.length; i++) {

            parseInt(friends[i].scores);

            var userScores = newFriend.abs(.scores)

            var friendScores = friend

            userScores # 

    });

}; // end module.exports

