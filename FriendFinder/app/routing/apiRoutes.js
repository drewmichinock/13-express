module.exports = function (app) {
    
    // A GET route with the url /api/friends. 
    // used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {

        res.sendFile(path.join(__dirname, "friends.js"));

    });

    // A POST route with the URL /api/friends. 
    // used to handle incoming survey results.
    // also will handle the compatibility logic.
    app.post("/api/friends", function (req, res) {

        var newFriend = req.body;

        console.log(newFriend);

        friendsArray.push(newFriend);

        res.json(newFriend);

    });

};