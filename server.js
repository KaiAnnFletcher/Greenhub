/*eslint-env es6*/
require("dotenv").config();
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require("passport");
const logger = require("morgan");
const db = require("./models")
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
//Define middleware here
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());

//Passport middleware
//Passport config
require("./config/passport")(passport);


app.use(cors());
app.use(logger("dev"));


//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, '/client/build')));
}

//Add routes, both API and view
app.use(routes);
console.log("routes:",routes);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

//Send every other request to the React app
//Define any API routes before this runs
// -app.get('/', function (req, res) {
// +app.get('/*', function (req, res) {
//    res.sendFile(path.join(__dirname, "/client/build/index.html"));
//  });

// Connect to the Mongo DB 
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/kaibru");
//mongoose.connect(process.env.MONGODB_URI || "mongodb://kaibru_user:kaibru1@ds035488.mlab.com:35488/heroku_tk82nh0f");
const url = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;
const client = new MongoClient(url);

async function run() {
  try {
      await client.connect();
      console.log("Connected correctly to server");
  } catch (err) {
      console.log(err.stack);
  }
  finally {
      await client.close();
  }
}
run().catch(console.dir);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});