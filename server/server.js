require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;

// Connect to the Mongo DB
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0-otea6.mongodb.net/comment_on_news?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true } );


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client','build','index.html'));
});

app.use("/api", require("../routes/apiRoutes"));

// Turn on that server!
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});