/*eslint-env es6*/
//Search Items

require('./api.js');

var express = require('express');

const router = express.Router();

var ProductAdvertisingAPIv1 = require('paapi5-nodejs-sdk');

var defaultClient = ProductAdvertisingAPIv1.ApiClient.instance;
 
// Specify your credentials here. These are used to create and sign the request.
defaultClient.accessKey = 'AKIAINXLTJNAZHBE753Q';
defaultClient.secretKey = '2TVWkJOO1ost5oCglZsO9';

/**
 * PAAPI Host and Region to which you want to send request.
 * For more details refer: https://webservices.amazon.com/paapi5/documentation/common-request-parameters.html#host-and-region
 */
defaultClient.host = 'webservices.amazon.com';
defaultClient.region = 'us-east-1';

var api = new ProductAdvertisingAPIv1.DefaultApi();

// Request Initialization

var searchItemsRequest = new ProductAdvertisingAPIv1.SearchItemsRequest();

/** Enter your partner tag (store/tracking id) and partner type */
searchItemsRequest['PartnerTag'] = 'kaibru01-20';
searchItemsRequest['PartnerType'] = 'Associates';

/** Specify Keywords */
searchItemsRequest['Keywords'] = 'Sustainable';

/**
 * Specify the category in which search request is to be made
 * For more details, refer: https://webservices.amazon.com/paapi5/documentation/use-cases/organization-of-items-on-amazon/search-index.html
 */
searchItemsRequest['SearchIndex'] = 'HomeAndKitchen';

/** Specify item count to be returned in search result */
searchItemsRequest['ItemCount'] = 10;

/**
 * Choose resources you want from SearchItemsResource enum
 * For more details, refer: https://webservices.amazon.com/paapi5/documentation/search-items.html#resources-parameter
 */
searchItemsRequest['Resources'] = ['Images.Primary.Medium', 'ItemInfo.Title', 'Offers.Listings.Price'];

router.get("/amazonsearchapi", function(req, res, next) {
  function onSuccess(data) {
  console.log('API called successfully.');
  var searchItemsResponse = ProductAdvertisingAPIv1.SearchItemsResponse.constructFromObject(data);
  console.log('Complete Response: \n' + JSON.stringify(searchItemsResponse, null, 1));
  if (searchItemsResponse['SearchResult'] !== undefined) {
    console.log('Printing First Item Information in SearchResult:');
    var item_0 = searchItemsResponse['SearchResult']['Items'][0];
    if (item_0 !== undefined) {
      if (item_0['ASIN'] !== undefined) {
        console.log('ASIN: ' + item_0['ASIN']);
      }
      if (item_0['DetailPageURL'] !== undefined) {
        console.log('DetailPageURL: ' + item_0['DetailPageURL']);
      }
      if (
        item_0['ItemInfo'] !== undefined &&
        item_0['ItemInfo']['Title'] !== undefined &&
        item_0['ItemInfo']['Title']['DisplayValue'] !== undefined
      ) {
        console.log('Title: ' + item_0['ItemInfo']['Title']['DisplayValue']);
      }
      if (
        item_0['Offers'] !== undefined &&
        item_0['Offers']['Listings'] !== undefined &&
        item_0['Offers']['Listings'][0]['Price'] !== undefined &&
        item_0['Offers']['Listings'][0]['Price']['DisplayAmount'] !== undefined
      ) {
        console.log('Buying Price: ' + item_0['Offers']['Listings'][0]['Price']['DisplayAmount']);
      }
    }
  }
  if (searchItemsResponse['Errors'] !== undefined) {
    console.log('Errors:');
    console.log('Complete Error Response: ' + JSON.stringify(searchItemsResponse['Errors'], null, 1));
    console.log('Printing 1st Error:');
    var error_0 = searchItemsResponse['Errors'][0];
    console.log('Error Code: ' + error_0['Code']);
    console.log('Error Message: ' + error_0['Message']);
  }
}

function onError(error) {
  console.log('Error calling PA-API 5.0!');
  console.log('Printing Full Error Object:\n' + JSON.stringify(error, null, 1));
  console.log('Status Code: ' + error['status']);
  if (error['response'] !== undefined && error['response']['text'] !== undefined) {
    console.log('Error Object: ' + JSON.stringify(error['response']['text'], null, 1));
  }
}

api.searchItems(searchItemsRequest).then(
  function(data) {
    onSuccess(data);
  },
  function(error) {
    onError(error);
  }
);

});

//Get Items

var ProductAdvertisingAPIv1 = require('paapi5-nodejs-sdk');

var defaultClient = ProductAdvertisingAPIv1.ApiClient.instance;

// Specify your credentials here. These are used to create and sign the request.
defaultClient.accessKey = 'AKIAINXLTJNAZHBE753Q';
defaultClient.secretKey = '2TVWkJOO1ost5oCglZsO9';

/**
 * PAAPI Host and Region to which you want to send request.
 * For more details refer: https://webservices.amazon.com/paapi5/documentation/common-request-parameters.html#host-and-region
 */
defaultClient.host = 'webservices.amazon.com';
defaultClient.region = 'us-east-1';

var api = new ProductAdvertisingAPIv1.DefaultApi();

// Request Initialization
router.get("/amazongetapi1", function() {

  /**
       * @param {module:model/GetItemsRequest} getItemsRequest GetItemsRequest
       * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetItemsResponse}
       */
 this.getItems = function(getItemsRequest) {
  return this.getItemsWithHttpInfo(getItemsRequest)
    .then(function(response_and_data) {
      return response_and_data.data;
    });
}

var getItemsRequest = new ProductAdvertisingAPIv1.GetItemsRequest();
var api = new ProductAdvertisingAPIv1.DefaultApi();

/** Enter your partner tag (store/tracking id) and partner type */
getItemsRequest['PartnerTag'] = 'kaibru01-20';
getItemsRequest['PartnerType'] = 'Associates';

/** Enter the Item IDs for which item information is desired */
getItemsRequest['ItemIds'] = ['059035342X', 'B00X4WHP5E', 'B00ZV9RDKK', 'B0199980K4'];

getItemsRequest['Condition'] = 'New';

/**
 * Choose resources you want from GetItemsResource enum
 * For more details, refer: https://webservices.amazon.com/paapi5/documentation/get-items.html#resources-parameter
 */
getItemsRequest['Resources'] = ['Images.Primary.Medium', 'ItemInfo.Title', 'Offers.Listings.Price'];

/**
 * Function to parse GetItemsResponse into an object with key as ASIN
 */
function parseResponse(itemsResponseList) {
  var mappedResponse = {};
  for (var i in itemsResponseList) {
    if (itemsResponseList.hasOwnProperty(i)) {
      mappedResponse[itemsResponseList[i]['ASIN']] = itemsResponseList[i];
    }
  }
  return mappedResponse.JSON;
}

var callback = function (error, data, response) {
  if (error) {
    console.log('Error calling PA-API 5.0!');
    console.log('Printing Full Error Object:\n' + JSON.stringify(error, null, 1));
    console.log('Status Code: ' + error['status']);
    if (error['response'] !== undefined && error['response']['text'] !== undefined) {
      console.log('Error Object: ' + JSON.stringify(error['response']['text'], null, 1));
    }
  } else {

//function onSuccess(data) {
  console.log('API called successfully.');
  var getItemsResponse = ProductAdvertisingAPIv1.GetItemsResponse.constructFromObject(data);
  console.log('Complete Response: \n' + JSON.stringify(getItemsResponse, null, 1));
  if (getItemsResponse['ItemsResult'] !== undefined) {
    console.log('Printing All Item Information in ItemsResult:');
    var response_list = parseResponse(getItemsResponse['ItemsResult']['Items']);
    for (var i in getItemsRequest['ItemIds']) {
      if (getItemsRequest['ItemIds'].hasOwnProperty(i)) {
        var itemId = getItemsRequest['ItemIds'][i];
        console.log('\nPrinting information about the Item with Id: ' + itemId);
        if (itemId in response_list) {
          var item = response_list[itemId];
          if (item !== undefined) {
            if (item['ASIN'] !== undefined) {
              console.log('ASIN: ' + item['ASIN']);
            }
            if (item['DetailPageURL'] !== undefined) {
              console.log('DetailPageURL: ' + item['DetailPageURL']);
            }
            if (
              item['ItemInfo'] !== undefined &&
              item['ItemInfo']['Title'] !== undefined &&
              item['ItemInfo']['Title']['DisplayValue'] !== undefined
            ) {
              console.log('Title: ' + item['ItemInfo']['Title']['DisplayValue']);
            }
            if (
              item['Offers'] !== undefined &&
              item['Offers']['Listings'] !== undefined &&
              item['Offers']['Listings'][0]['Price'] !== undefined &&
              item['Offers']['Listings'][0]['Price']['DisplayAmount'] !== undefined
            ) {
              console.log('Buying Price: ' + item['Offers']['Listings'][0]['Price']['DisplayAmount']);
            }
          }
        } else {
          console.log('Item not found, check errors');
        }
      }
    }
  }

  if (getItemsResponse['Errors'] !== undefined) {
    console.log('\nErrors:');
    console.log('Complete Error Response: ' + JSON.stringify(getItemsResponse['Errors'], null, 1));
    console.log('Printing 1st Error:');
    var error_0 = getItemsResponse['Errors'][0];
    console.log('Error Code: ' + error_0['Code']);
    console.log('Error Message: ' + error_0['Message']);
  }
};

// function onError(error) {
//   console.log('Error calling PA-API 5.0!');
//   console.log('Printing Full Error Object:\n' + JSON.stringify(error, null, 1));
//   console.log('Status Code: ' + error['status']);
//   if (error['response'] !== undefined && error['response']['text'] !== undefined) {
//     console.log('Error Object: ' + JSON.stringify(error['response']['text'], null, 1));
//   }
// }

// try {
// //function needs to be defined in index first
// api.getItems(getItemsRequest, callback);
// return data
// } catch (ex) {
//   console.log("Exception: " + ex);
//   return response.status(500).send(error);
// };
//return response.send(response);
//return res.json({msg: "Your request has been sent"});

// return api.getItems(getItemsRequest).then(
//   function(data) {
//     onSuccess(data);
//   },
//   function(error) {
//     onError(error);
//   }
// ).catch((err) => err);
// return api.getItems(getItemsRequest);
//return res.json({msg: "Your request has been sent"})

const getItemsRequest = async () => {
  try {
    const resp = await axios.api.getItems()
    console.log(resp.data)
    return resp.data
  }
  catch (err) {
    console.error(err)
  }
};
this.getItemsRequest()
};
});

module.exports=router