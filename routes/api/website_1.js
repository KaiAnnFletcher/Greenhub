/*eslint-env es6*/

const router = require("express").Router();
const website_1Controller = require("../../controllers/website_1controller")
const Items_1 = require("../../models/items_1");
require("./website_1_db");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server

const axios = require("axios");
const cheerio = require("cheerio");

//mainscrape = function()  {
//Now to configure the routes
router.get("/scrape", function(req, res, next) {
//instead of simple res.render, user router.get  
console.log("scraping started...");
//Grab the html body with axios    
axios.get("https://greenheartshop.org/").then(function(response) {
//Load to cheerio and save to $ selector
    console.log("Scraping all greenheartshop mainpage...");
    const $ = cheerio.load(response.data);
    const output = [];
    const promises = [];

//Now we need to grab the title reference for each article
$("article").each(function(i, element) {

//save empty result object
const result = {};
//thumbnail
result.resultThumbnail = $(this)
//greenheartshop
.children("figure.product-item-thumbnail")
.children("a")
.children("div.replaced-image.ratio-1-1")
.children("img")
.attr("src")

console.log(result.resultThumbnail)

//const result = {}
//details
result.resultDetails = $(this)
//greenheartshop
.children("div.product-item-details")
.text()

console.log(result.resultDetails)

//const result = {}
//link
result.resultLink = $(this)
//greenheartshop
.children("figure.product-item-thumbnail")
.children("a")
.attr("href")

console.log(result.resultLink)

//Capture the scraped data and save to database
console.log("Capturing Scrape...")
if(result.resultThumbnail !== '' || result.resultLink !== '') {
    //result.resultLinkId = result.resultLink.match(/\d{4,6}/g)[0];
    const promise = Items_1
    .findOneAndUpdate(result, result, {upsert:true, new:true})
    promises.push(promise)
}
Promise.all(promises)
// Promise.all(promises).then((data) => {
//     res.json(data)
});
});
next()
});


router.get('/scrape', website_1Controller.findAll)

//Start of code for the specific scrape
router.get("/search/:search", function (req, res, next) {
    axios.get("https://greenheartshop.org/search.php?search_query=" + req.params.search).then(function (response) {
        console.log("***** scraping specific page *****"); 
        const $ = cheerio.load(response.data);
        const output = [];
        const promises = [];

        $("article").each(function(i, element) {
            //Save empty result object
            const result = {};

            //thumbnail
            result.resultThumbnail = $(this)
            //greenheartshop
            .children("figure.product-item-thumbnail")
            .children("a")
            .children("div.replaced-image.ratio-1-1")
            .children("img")
            .attr("src")

            console.log(result.resultThumbnail)

            //const result = {};
            //details
            result.resultDetails= $(this)
            //greenheartshop
            .children("div.product-item-details")
            .text()

            console.log(result.resultDetails)

            //const result = {}
            //link
            result.resultLink = $(this)
            //greenheartshop
            .children("figure.product-item-thumbnail")
            .children("a")
            .attr("href")
            
            console.log(result.resultLink)

//Capture the scraped data and save to database
console.log("Capturing Scrape data...")
if(result.resultDetails !== '' && result.resultLink !== '') {
//result.resultLinkId = result.resultLink.match(/\d{4,6}/g)[0];
    const promise = Items_1
    .findOneAndUpdate(result, result, {upsert:true, new:true})
    promises.push(promise);
}
Promise.all(promises)
// Promise.all(promises).then((data) => {
//     res.json(data);
});            
});
next()
});


 router.get('/search', website_1Controller.findAll)

// router.route("/")
//   .get(recipeController.findAll)
//   .post(recipeController.create);

// router
//   .route("/:id")
//   .get(recipeController.findById)
//   .delete(recipeController.remove);

module.exports = router;


