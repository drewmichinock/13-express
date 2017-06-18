// requiring dependencies
var path = require("path");

module.exports = function (app) {

    // GET route to /survey which displays survey page.
    app.get("/survey", function (req, res) {

        res.sendFile(path.join(__dirname, "/../public/survey.html"));

    });

    // route that  which displays the home page
    app.get("/", function (req, res) {

        res.sendFile(path.join(__dirname, "/../public/home.html"));

    });

    // If no matching route is found default to home
    app.use(function (req, res) {

        res.sendFile(path.join(__dirname, "/../public/home.html"));

    });

};