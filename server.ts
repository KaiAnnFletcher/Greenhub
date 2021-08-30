/*eslint-env es6*/

require("dotenv").config();
//import mongoose from "mongoose";
const { MongoClient } = require("mongodb");
import express from "express";
//import * as  express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import passport from "passport";
import logger from "morgan";
//import * as db from "./models";
const routes = require("./routes");
//const app  = express.default()
const app = express();

const PORT = process.env.PORT || 3001;
import path from 'path';
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
app.get('/*', (req: any, res: any) => {
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
      await client.connect({ useUnifiedTopology: true });
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


//temporary fix until I can add import statements to replace require
exports = {}