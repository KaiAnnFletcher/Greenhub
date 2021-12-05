/*eslint-env es6*/

import axios from "axios";
// import sampleData from "./sampleData.json";
// import cheerio from "cheerio";

export default {
    scrapeAll: function() {
        return axios.get("/api/website_1/scrape")
        //             .then(function (response){
        //             console.log(response)
        // })
        //             .catch(function(error) {
        //                 console.log(error);
        //             });
    },

    scrapeBySearch: function(searchString){
        const parsedString = searchString.replace(/ /g, "%20");
        return axios.get("/api/website_1/search/" + parsedString)
                    // .then(function(response) {
                    //     console.log(response)
                    // })
                    // .catch(function(error) {
                    //     console.log(error)
                    // });
    },

    walmartApi: function() {
        return axios.get("/api/walmart/walmartapi")
    },

    amazonsearchapi: function() {
        return axios.get("/amazonsearchapi")
    },

    amazongetapi: function() {
        return axios.get('/api/amazon/amazongetapi1/api_1/second_api/amazongetapi')
    },

    bookmark: function(entryData){
        return axios.post("api/users/bookmark", entryData);
    },

    getBookmarks: function(){
        return axios.get("api/users/allBookmarks");
    },

    checkToken: function () {
        return axios.get("/api/users/checkToken");
    }

};