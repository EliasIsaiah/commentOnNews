const routes = require("express").Router();
const db = require("../models");
const axios = require("axios");
const cheerio = require('cheerio');

// Route for getting all Articles from the db
routes.get("/articles", function (req, res) {
  // Grab every document in the Articles collection
  console.log("get articles!");
  db.Article.find({})
    .then((dbArticle) => {
      // If we were able to successfully find Articles, send them back to the client
      // res.json(dbArticle);
      res.json(dbArticle);
    })
    .catch((err) => {
      // If an error occurred, send it to the client
      res.send(err);
      throw err;
    });
});

routes.post("/articles", function (req, res) {
  // Grab every document in the Articles collection
  console.log("body", req.body);

  db.Article.find({})
    .then(function (dbArticle) {
      // If we were able to successfully find Articles, send them back to the client
      res.json(dbArticle);
      res.send("helo api");
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
      throw err;
    });
});

routes.post("/articles/:id", function (req, res) {
  // Create a new comment and pass the req.body to the entry
  db.Comment.create(req.body)
    .then(function (dbComment) {
      // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
      // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return db.Article.findOneAndUpdate({ _id: req.params.id }, { $push: { comments: dbComment._id } }, { new: true });
    })
    .then(function (dbArticle) {
      // If we were able to successfully update an Article, send it back to the client
      res.json(dbArticle);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

routes.get("/articles/:id", function (req, res) {
  // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
  db.Article.findOne({ _id: req.params.id })
    // ..and populate all of the comments associated with it
    .populate({
      path: 'comments',
      model: 'Comment'
    })
    .then(function (dbArticle) {
      // If we were able to successfully find an Article with the given id, send it back to the client
      res.json(dbArticle);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

routes.get("/scrape", function (req, res) {
  // First, we grab the body of the html with axios

  // Now, we grab every h2 within an article tag, and do the following:

  axios.get("https://www.autoblog.com/").then((response) => {

    // console.log(response);
    const $ = cheerio.load(response.data);
    //Go through each <div> with class="record_details"
    $("div.record_details").each((i, element) => {
      let result = {}
      result.headline = $(element).find("h6.record-heading a span").text().trim();
      result.summary = $(element).find("p.subTitle").text().trim();
      result.url = $(element).find("h6.record-heading a").attr("href");
      // const photoURL = $(element).find("a.record_image img").attr("src"); //broken
      console.log("result", result);

      db.Article.create(result)
        .then(function (dbArticle) {
          // View the added result in the console
          console.log(dbArticle);
        })
        .catch(function (err) {
          // If an error occurred, log it
          console.log(err);
        });
    })
  }).catch((error) => { throw error });

  // Create a new Article using the `result` object built from scraping

  // Send a message to the client
  res.send("Scrape Complete");

});

module.exports = routes;