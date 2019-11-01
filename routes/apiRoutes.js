var db = require("../models");
let routes = require("express").Router();

// Route for getting all Articles from the db
routes.get("/articles", function(req, res) {
    // Grab every document in the Articles collection
    db.Article.find({})
      .then(function(dbArticle) {
        // If we were able to successfully find Articles, send them back to the client
        // res.json(dbArticle);
        res.send("helo api");
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
        throw err;
      });
  });

module.exports = routes;