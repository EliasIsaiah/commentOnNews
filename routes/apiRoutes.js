// var db = require("../models");
let routes = require("express").Router();

routes.get("/", (req, res) => {
    // db.character
    //     .findAll({
    //         include: [db.armor, db.weapon, db.race, db.classes]
    //     })
    //     .then(data => {
    //         res.json(data);
    //     })
    //     .catch(err => {
    //         res.status(500).send("server error");
    //         console.log("err", err);
    //         throw err;
    //     });
    res.send("api route")
});

module.exports = routes;