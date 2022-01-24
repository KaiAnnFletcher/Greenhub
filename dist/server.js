"use strict";
/*eslint-env es6*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
//import mongoose from "mongoose";
const { MongoClient } = require("mongodb");
//import express from "express";
const express = require("express");
//import * as  express from "express";
//import cors from 'cors';
const cors = require('cors');
const body_parser_1 = __importDefault(require("body-parser"));
const passport_1 = __importDefault(require("passport"));
const morgan_1 = __importDefault(require("morgan"));
//import * as db from "./models";
const routes = require("./routes");
const amazonroutes = require("./amazonroutes");
//const amazonsecondaryroutes = require("./amazonroutes/api/amazonsecondaryroutes")
//const app  = express.default()
const app = express();
const PORT = process.env.PORT || 3001;
const path_1 = __importDefault(require("path"));
//Define middleware here
app.use(express.json());
app.use(body_parser_1.default.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport_1.default.initialize());
//Passport middleware
//Passport config
require("./config/passport")(passport_1.default);
//  const corsOptions = {
//   origin: 'http://localhost:3000',
//   methods: 'GET, POST, OPTIONS, HEAD',
//   allowedHeaders: 'Content-Type',
//   credentials: true,
//   preflightContinue: true,
//   optionsSuccessStatus: 204
//  };
//app.options(cors());
app.use(cors());
app.use((0, morgan_1.default)("dev"));
//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path_1.default.join(__dirname, '/client/build')));
}
//Add routes, both API and view
app.use(routes);
app.use(amazonroutes);
//app.use(amazonsecondaryroutes);
console.log("routes:", routes);
console.log("amazonroutes:", amazonroutes);
//console.log("amazonsecondaryroutes", amazonsecondaryroutes);
//The "catchall" handler: for any request that doesn't
//match one above, send back React's index.html file.
app.get('/*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname + '/client/build/index.html'));
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
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect({ useNewUrlParser: true, useUnifiedTopology: true });
            console.log("Connected correctly to server");
        }
        catch (err) {
            console.log(err.stack);
        }
        finally {
            yield client.close();
        }
    });
}
run().catch(console.dir);
app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
//temporary fix until I can add import statements to replace require
exports = {};
//# sourceMappingURL=server.js.map