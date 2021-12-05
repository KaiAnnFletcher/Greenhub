/*eslint-env es6*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const amazonSchema = new Schema({
    ImagesPrimaryMedium: String,
    ItemInfoTitle: String,
    OffersListingsPrice: String
});

const Amazon_items = mongoose.model("amazon_items", amazonSchema);

module.exports = Amazon_items;