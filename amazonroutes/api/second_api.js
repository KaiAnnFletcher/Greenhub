/*eslint-env es6*/

var express = require('express');
const router = express.Router();

const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);

const amazoncontroller = require("../../controllers/amazoncontroller")
const Amazon_items = require("../../models/amazon");

//require('./index');
const Api = require('../../client/src/utils/index')
const Config = require('../../client/src/lib/config')
const condition = require('../../client/src/lib/options').Condition
const searchIndex = require('../../client/src/lib/options').SearchIndex
const resources = require('../../client/src/lib/options').Resources
const myConfig = new Config()

const promises = []

/**
 * Add your Credentials Here
 */
 myConfig.accessKey = 'AKIAINXLTJNAZHBE' // accessKey
 myConfig.secretKey = '2TVWkJOO1ost5oCglZsO9' // secretKey
 myConfig.partnerTag = 'getaheadphone-20' // partnerTag

/**
 * Initialize the api client
 */
//function Api(myConfig){}

const api = new Api(myConfig);


 /**
 * testGetItemById
 */
  
  //router.get("/amazongetapi", function(req, res, next) {
  
  const testGetItemById = () => {
  console.log(' ===== find by Item ids =====')

  let resourceList = resources.getItemInfo
  resourceList = resourceList
    .concat(resources.getImagesPrimary)

  console.log("Retrieving items from Amazon...")

  router.get("/amazongetapi", function(req, res, next) {
  api.getItemById(['059035342X'], {
    parameters: resourceList,
    condition: condition.Any
  }).then((response) => {
    console.log('data', response.data)
  }, (error) => {
    console.log('Error: ', error)
  })
  next()
  })
}
//})
  //Capture the api data and save to database
// console.log("Capturing data for the database...")
// if(resources.getItemInfo !== undefined) {
// //result.resultLinkId = result.resultLink.match(/\d{4,6}/g)[0];
//     const promise = Amazon_items
//     .findOneAndUpdate(resourceList, {upsert:true, new:true})
//     promises.push(promise);
// }
// Promise.all(promises)
// }
// next()
//});
//router.get('/amazongetapi', amazoncontroller.findAll)

/**
 * testGetBrowserNode
 */
const testGetBrowserNode = function () {
  console.log(' ===== search result =====')
  const resourceList = resources.getBrowserNodes

  api.getBrowseNodes(['284507'], {
    parameters: resourceList
  }).then((response) => {
    console.log('data', response.data)
  }, (error) => {
    console.log('Error: ', error)
  })
}

/**
 * testGetVariations
 */
const testGetVariations = () => {
  console.log(' ===== getVariations =====')
  const resourceList = resources.getVariationSummary

  api.getVariations("B07QXKW89P", {
    parameters: resourceList,
    condition: condition.Any
  }).then((response) => {
    console.log('data', response.data)
  }, (error) => {
    console.log('Error: ', error)
  })
}

/**
 * testSearch
 */
const testSearch = () => {
  console.log(' ===== search result =====')

  let resourceList = resources.getItemInfo
  resourceList = resourceList
    .concat(resources.getImagesPrimary)

  api.search("Cowin E8", {
    parameters: resourceList,
    searchIndex: searchIndex.Electronics
  }).then((response) => {
    console.log('data', response.data)
  }, (error) => {
    console.log('Error: ', error)
  })
}

//PLEASE UNCOMMENT THE FUNCTIONS BELLOW TO TEST THE DEMO.
testGetItemById()
testSearch()
testGetBrowserNode()
testGetVariations()

module.exports = router