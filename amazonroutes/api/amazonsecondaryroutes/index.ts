import * as express from "express";

const path = require("path");
const router = express.Router();
const apiRoutes1 = require("./api_1");

//API Routes
//authRouter.use(require('./authenticate').basic(usersdb))
//router.use("/api", apiRoutes);
console.log("Hitting API routes...")
router.use("/api_1", apiRoutes1);
console.log("Amazon API Routes1 hit")

//If no API routes are hit, send the React app
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
//     });
 
 module.exports = router;