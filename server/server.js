require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
var mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;

// Connect to the Mongo DB
mongoose.connect("mongodb+srv://admin:admin@cluster0-otea6.mongodb.net/articles?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true } );

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client','build','index.html'));
});

app.use("/api", require("../routes/apiRoutes"));

// Turn on that server!
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});