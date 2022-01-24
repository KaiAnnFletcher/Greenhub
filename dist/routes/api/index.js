"use strict";
/*eslint-env es6*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const router = express.Router();
//require("./website_1");
require("./walmart");
//const website_1Routes = require("./website_1");
const walmartRoutes = require("./walmart");
const users = require("./users");
//Website_1 routes
//http://localhost:3000/api/website_1_function_call/scrape
//authRouter.use(require('./authenticate').basic(usersdb))
//router.use("/website_1_function_call", website_1Routes);
//experimental use
router.use("/users", users);
console.log("users routes hit in routes/api/index.js");
//router.use("/website_1", website_1Routes);
router.use("/walmart", walmartRoutes);
console.log("walmart routes hit in routes/api/index.js");
//router.use("/user", userRoutes); 
module.exports = router;
// (function(factory) {
//     let define: {
//         (arg0: string[], arg1: (ApiClient: any, Availability: any, BrowseNode: any, BrowseNodeAncestor: any, BrowseNodeChild: any, BrowseNodeInfo: any, BrowseNodesResult: any, ByLineInfo: any, Classifications: any, Condition: any, ContentInfo: any, ContentRating: any, Contributor: any, CustomerReviews: any, DeliveryFlag: any, DimensionBasedAttribute //authRouter.use(require('./authenticate').basic(usersdb))
//             : any, DurationPrice: any, ErrorData: any, ExternalIds: any //router.use("/website_1_function_call", website_1Routes);
//             //experimental use
//             , GetBrowseNodesRequest: any, GetBrowseNodesResource: any,
//             //experimental use
//             GetBrowseNodesResponse: any, GetItemsRequest: any, GetItemsResource: any, GetItemsResponse: any, GetVariationsRequest: any, GetVariationsResource: any, GetVariationsResponse: any, ImageSize: any, ImageType: any, Images: any, Item: any, ItemIdType: any, ItemInfo: any, ItemsResult: any, LanguageType: any, Languages: any, ManufactureInfo: any, MaxPrice: any, Merchant: any, MinPrice: any
//             // AMD. Register as an anonymous module.
//             , // AMD. Register as an anonymous module.
//             MinReviewsRating: any, MinSavingPercent: any, MultiValuedAttribute: any, OfferAvailability: any, OfferCondition: any, OfferConditionNote: any, OfferCount: any, OfferDeliveryInfo: any, OfferListing: any, OfferLoyaltyPoints: any, OfferMerchantInfo: any, OfferPrice: any, OfferProgramEligibility: any, OfferPromotion: any, OfferSavings: any, OfferShippingCharge: any, OfferSubCondition: any, OfferSummary: any, Offers: any, PartnerType: any, Price: any, ProductAdvertisingAPIClientException: any, ProductAdvertisingAPIServiceException: any, ProductInfo: any, Properties: any, Rating: any, Refinement: any, RefinementBin: any, RentalOfferListing: any, RentalOffers: any, SearchItemsRequest: any, SearchItemsResource: any, SearchItemsResponse: any, SearchRefinements: any, SearchResult: any, SingleBooleanValuedAttribute: any, SingleIntegerValuedAttribute: any, SingleStringValuedAttribute: any, SortBy: any, TechnicalInfo: any, TradeInInfo: any, TradeInPrice: any, UnitBasedAttribute: any, VariationAttribute: any, VariationDimension: any, VariationSummary: any, VariationsResult: any, WebsiteSalesRank: any, DefaultApi: any) => {
//                 /**
//                  * The ApiClient constructor.
//                  * @property {module:ApiClient}
//                  */
//                 ApiClient: any;
//                 /**
//                  * The Availability model constructor.
//                  * @property {module:model/Availability}
//                  */
//                 Availability: any;
//                 /**
//                  * The BrowseNode model constructor.
//                  * @property {module:model/BrowseNode}
//                  */
//                 BrowseNode: any;
//                 /**
//                  * The BrowseNodeAncestor model constructor.
//                  * @property {module:model/BrowseNodeAncestor}
//                  */
//                 BrowseNodeAncestor: any;
//                 /**
//                  * The BrowseNodeChild model constructor.
//                  * @property {module:model/BrowseNodeChild}
//                  */
//                 BrowseNodeChild: any;
//                 /**
//                  * The BrowseNodeInfo model constructor.
//                  * @property {module:model/BrowseNodeInfo}
//                  */
//                 BrowseNodeInfo: any;
//                 /**
//                  * The BrowseNodesResult model constructor.
//                  * @property {module:model/BrowseNodesResult}
//                  */
//                 BrowseNodesResult: any;
//                 /**
//                  * The ByLineInfo model constructor.
//                  * @property {module:model/ByLineInfo}
//                  */
//                 ByLineInfo: any;
//                 /**
//                  * The Classifications model constructor.
//                  * @property {module:model/Classifications}
//                  */
//                 Classifications: any;
//                 /**
//                  * The Condition model constructor.
//                  * @property {module:model/Condition}
//                  */
//                 Condition: any;
//                 /**
//                  * The ContentInfo model constructor.
//                  * @property {module:model/ContentInfo}
//                  */
//                 ContentInfo: any;
//                 /**
//                  * The ContentRating model constructor.
//                  * @property {module:model/ContentRating}
//                  */
//                 ContentRating: any;
//                 /**
//                  * The Contributor model constructor.
//                  * @property {module:model/Contributor}
//                  */
//                 Contributor: any;
//                 /**
//                  * The CustomerReviews model constructor.
//                  * @property {module:model/CustomerReviews}
//                  */
//                 CustomerReviews: any;
//                 /**
//                  * The DeliveryFlag model constructor.
//                  * @property {module:model/DeliveryFlag}
//                  */
//                 DeliveryFlag: any;
//                 /**
//                  * The DimensionBasedAttribute model constructor.
//                  * @property {module:model/DimensionBasedAttribute}
//                  */
//                 DimensionBasedAttribute: any;
//                 /**
//                  * The DurationPrice model constructor.
//                  * @property {module:model/DurationPrice}
//                  */
//                 DurationPrice: any;
//                 /**
//                  * The ErrorData model constructor.
//                  * @property {module:model/ErrorData}
//                  */
//                 ErrorData: any;
//                 /**
//                  * The ExternalIds model constructor.
//                  * @property {module:model/ExternalIds}
//                  */
//                 ExternalIds: any;
//                 /**
//                  * The GetBrowseNodesRequest model constructor.
//                  * @property {module:model/GetBrowseNodesRequest}
//                  */
//                 GetBrowseNodesRequest: any;
//                 /**
//                  * The GetBrowseNodesResource model constructor.
//                  * @property {module:model/GetBrowseNodesResource}
//                  */
//                 GetBrowseNodesResource: any;
//                 /**
//                  * The GetBrowseNodesResponse model constructor.
//                  * @property {module:model/GetBrowseNodesResponse}
//                  */
//                 GetBrowseNodesResponse: any;
//                 /**
//                  * The GetItemsRequest model constructor.
//                  * @property {module:model/GetItemsRequest}
//                  */
//                 GetItemsRequest: any;
//                 /**
//                  * The GetItemsResource model constructor.
//                  * @property {module:model/GetItemsResource}
//                  */
//                 GetItemsResource: any;
//                 /**
//                  * The GetItemsResponse model constructor.
//                  * @property {module:model/GetItemsResponse}
//                  */
//                 GetItemsResponse: any;
//                 /**
//                  * The GetVariationsRequest model constructor.
//                  * @property {module:model/GetVariationsRequest}
//                  */
//                 GetVariationsRequest: any;
//                 /**
//                  * The GetVariationsResource model constructor.
//                  * @property {module:model/GetVariationsResource}
//                  */
//                 GetVariationsResource: any;
//                 /**
//                  * The GetVariationsResponse model constructor.
//                  * @property {module:model/GetVariationsResponse}
//                  */
//                 GetVariationsResponse: any;
//                 /**
//                  * The ImageSize model constructor.
//                  * @property {module:model/ImageSize}
//                  */
//                 ImageSize: any;
//                 /**
//                  * The ImageType model constructor.
//                  * @property {module:model/ImageType}
//                  */
//                 ImageType: any;
//                 /**
//                  * The Images model constructor.
//                  * @property {module:model/Images}
//                  */
//                 Images: any;
//                 /**
//                  * The Item model constructor.
//                  * @property {module:model/Item}
//                  */
//                 Item: any;
//                 /**
//                  * The ItemIdType model constructor.
//                  * @property {module:model/ItemIdType}
//                  */
//                 ItemIdType: any;
//                 /**
//                  * The ItemInfo model constructor.
//                  * @property {module:model/ItemInfo}
//                  */
//                 ItemInfo: any;
//                 /**
//                  * The ItemsResult model constructor.
//                  * @property {module:model/ItemsResult}
//                  */
//                 ItemsResult: any;
//                 /**
//                  * The LanguageType model constructor.
//                  * @property {module:model/LanguageType}
//                  */
//                 LanguageType: any;
//                 /**
//                  * The Languages model constructor.
//                  * @property {module:model/Languages}
//                  */
//                 Languages: any;
//                 /**
//                  * The ManufactureInfo model constructor.
//                  * @property {module:model/ManufactureInfo}
//                  */
//                 ManufactureInfo: any;
//                 /**
//                  * The MaxPrice model constructor.
//                  * @property {module:model/MaxPrice}
//                  */
//                 MaxPrice: any;
//                 /**
//                  * The Merchant model constructor.
//                  * @property {module:model/Merchant}
//                  */
//                 Merchant: any;
//                 /**
//                  * The MinPrice model constructor.
//                  * @property {module:model/MinPrice}
//                  */
//                 MinPrice: any;
//                 /**
//                  * The MinReviewsRating model constructor.
//                  * @property {module:model/MinReviewsRating}
//                  */
//                 MinReviewsRating: any;
//                 /**
//                  * The MinSavingPercent model constructor.
//                  * @property {module:model/MinSavingPercent}
//                  */
//                 MinSavingPercent: any;
//                 /**
//                  * The MultiValuedAttribute model constructor.
//                  * @property {module:model/MultiValuedAttribute}
//                  */
//                 MultiValuedAttribute: any;
//                 /**
//                  * The OfferAvailability model constructor.
//                  * @property {module:model/OfferAvailability}
//                  */
//                 OfferAvailability: any;
//                 /**
//                  * The OfferCondition model constructor.
//                  * @property {module:model/OfferCondition}
//                  */
//                 OfferCondition: any;
//                 /**
//                  * The OfferConditionNote model constructor.
//                  * @property {module:model/OfferConditionNote}
//                  */
//                 OfferConditionNote: any;
//                 /**
//                  * The OfferCount model constructor.
//                  * @property {module:model/OfferCount}
//                  */
//                 OfferCount: any;
//                 /**
//                  * The OfferDeliveryInfo model constructor.
//                  * @property {module:model/OfferDeliveryInfo}
//                  */
//                 OfferDeliveryInfo: any;
//                 /**
//                  * The OfferListing model constructor.
//                  * @property {module:model/OfferListing}
//                  */
//                 OfferListing: any;
//                 /**
//                  * The OfferLoyaltyPoints model constructor.
//                  * @property {module:model/OfferLoyaltyPoints}
//                  */
//                 OfferLoyaltyPoints: any;
//                 /**
//                  * The OfferMerchantInfo model constructor.
//                  * @property {module:model/OfferMerchantInfo}
//                  */
//                 OfferMerchantInfo: any;
//                 /**
//                  * The OfferPrice model constructor.
//                  * @property {module:model/OfferPrice}
//                  */
//                 OfferPrice: any;
//                 /**
//                  * The OfferProgramEligibility model constructor.
//                  * @property {module:model/OfferProgramEligibility}
//                  */
//                 OfferProgramEligibility: any;
//                 /**
//                  * The OfferPromotion model constructor.
//                  * @property {module:model/OfferPromotion}
//                  */
//                 OfferPromotion: any;
//                 /**
//                  * The OfferSavings model constructor.
//                  * @property {module:model/OfferSavings}
//                  */
//                 OfferSavings: any;
//                 /**
//                  * The OfferShippingCharge model constructor.
//                  * @property {module:model/OfferShippingCharge}
//                  */
//                 OfferShippingCharge: any;
//                 /**
//                  * The OfferSubCondition model constructor.
//                  * @property {module:model/OfferSubCondition}
//                  */
//                 OfferSubCondition: any;
//                 /**
//                  * The OfferSummary model constructor.
//                  * @property {module:model/OfferSummary}
//                  */
//                 OfferSummary: any;
//                 /**
//                  * The Offers model constructor.
//                  * @property {module:model/Offers}
//                  */
//                 Offers: any;
//                 /**
//                  * The PartnerType model constructor.
//                  * @property {module:model/PartnerType}
//                  */
//                 PartnerType: any;
//                 /**
//                  * The Price model constructor.
//                  * @property {module:model/Price}
//                  */
//                 Price: any;
//                 /**
//                  * The ProductAdvertisingAPIClientException model constructor.
//                  * @property {module:model/ProductAdvertisingAPIClientException}
//                  */
//                 ProductAdvertisingAPIClientException: any;
//                 /**
//                  * The ProductAdvertisingAPIServiceException model constructor.
//                  * @property {module:model/ProductAdvertisingAPIServiceException}
//                  */
//                 ProductAdvertisingAPIServiceException: any;
//                 /**
//                  * The ProductInfo model constructor.
//                  * @property {module:model/ProductInfo}
//                  */
//                 ProductInfo: any;
//                 /**
//                  * The Properties model constructor.
//                  * @property {module:model/Properties}
//                  */
//                 Properties: any;
//                 /**
//                  * The Rating model constructor.
//                  * @property {module:model/Rating}
//                  */
//                 Rating: any;
//                 /**
//                  * The Refinement model constructor.
//                  * @property {module:model/Refinement}
//                  */
//                 Refinement: any;
//                 /**
//                  * The RefinementBin model constructor.
//                  * @property {module:model/RefinementBin}
//                  */
//                 RefinementBin: any;
//                 /**
//                  * The RentalOfferListing model constructor.
//                  * @property {module:model/RentalOfferListing}
//                  */
//                 RentalOfferListing: any;
//                 /**
//                  * The RentalOffers model constructor.
//                  * @property {module:model/RentalOffers}
//                  */
//                 RentalOffers: any;
//                 /**
//                  * The SearchItemsRequest model constructor.
//                  * @property {module:model/SearchItemsRequest}
//                  */
//                 SearchItemsRequest: any;
//                 /**
//                  * The SearchItemsResource model constructor.
//                  * @property {module:model/SearchItemsResource}
//                  */
//                 SearchItemsResource: any;
//                 /**
//                  * The SearchItemsResponse model constructor.
//                  * @property {module:model/SearchItemsResponse}
//                  */
//                 SearchItemsResponse: any;
//                 /**
//                  * The SearchRefinements model constructor.
//                  * @property {module:model/SearchRefinements}
//                  */
//                 SearchRefinements: any;
//                 /**
//                  * The SearchResult model constructor.
//                  * @property {module:model/SearchResult}
//                  */
//                 SearchResult: any;
//                 /**
//                  * The SingleBooleanValuedAttribute model constructor.
//                  * @property {module:model/SingleBooleanValuedAttribute}
//                  */
//                 SingleBooleanValuedAttribute: any;
//                 /**
//                  * The SingleIntegerValuedAttribute model constructor.
//                  * @property {module:model/SingleIntegerValuedAttribute}
//                  */
//                 SingleIntegerValuedAttribute: any;
//                 /**
//                  * The SingleStringValuedAttribute model constructor.
//                  * @property {module:model/SingleStringValuedAttribute}
//                  */
//                 SingleStringValuedAttribute: any;
//                 /**
//                  * The SortBy model constructor.
//                  * @property {module:model/SortBy}
//                  */
//                 SortBy: any;
//                 /**
//                  * The TechnicalInfo model constructor.
//                  * @property {module:model/TechnicalInfo}
//                  */
//                 TechnicalInfo: any;
//                 /**
//                  * The TradeInInfo model constructor.
//                  * @property {module:model/TradeInInfo}
//                  */
//                 TradeInInfo: any;
//                 /**
//                  * The TradeInPrice model constructor.
//                  * @property {module:model/TradeInPrice}
//                  */
//                 TradeInPrice: any;
//                 /**
//                  * The UnitBasedAttribute model constructor.
//                  * @property {module:model/UnitBasedAttribute}
//                  */
//                 UnitBasedAttribute: any;
//                 /**
//                  * The VariationAttribute model constructor.
//                  * @property {module:model/VariationAttribute}
//                  */
//                 VariationAttribute: any;
//                 /**
//                  * The VariationDimension model constructor.
//                  * @property {module:model/VariationDimension}
//                  */
//                 VariationDimension: any;
//                 /**
//                  * The VariationSummary model constructor.
//                  * @property {module:model/VariationSummary}
//                  */
//                 VariationSummary: any;
//                 /**
//                  * The VariationsResult model constructor.
//                  * @property {module:model/VariationsResult}
//                  */
//                 VariationsResult: any;
//                 /**
//                  * The WebsiteSalesRank model constructor.
//                  * @property {module:model/WebsiteSalesRank}
//                  */
//                 WebsiteSalesRank: any;
//                 /**
//                  * The DefaultApi service constructor.
//                  * @property {module:api/DefaultApi}
//                  */
//                 DefaultApi: any;
//             }): void; amd: any;
//         }
//     if (typeof define === 'function' && define.amd) {
//       // AMD. Register as an anonymous module.
//       define(['src/utils/ApiClient', 'model/Availability', 'model/BrowseNode', 'model/BrowseNodeAncestor', 'model/BrowseNodeChild', 'model/BrowseNodeInfo', 'model/BrowseNodesResult', 'model/ByLineInfo', 'model/Classifications', 'model/Condition', 'model/ContentInfo', 'model/ContentRating', 'model/Contributor', 'model/CustomerReviews', 'model/DeliveryFlag', 'model/DimensionBasedAttribute', 'model/DurationPrice', 'model/ErrorData', 'model/ExternalIds', 'model/GetBrowseNodesRequest', 'models/GetBrowseNodesResource', 'model/GetBrowseNodesResponse', 'model/GetItemsRequest', 'model/GetItemsResource', 'model/GetItemsResponse', 'model/GetVariationsRequest', 'model/GetVariationsResource', 'model/GetVariationsResponse', 'model/ImageSize', 'model/ImageType', 'model/Images', 'model/Item', 'model/ItemIdType', 'model/ItemInfo', 'model/ItemsResult', 'model/LanguageType', 'model/Languages', 'model/ManufactureInfo', 'model/MaxPrice', 'model/Merchant', 'model/MinPrice', 'model/MinReviewsRating', 'model/MinSavingPercent', 'model/MultiValuedAttribute', 'model/OfferAvailability', 'model/OfferCondition', 'model/OfferConditionNote', 'model/OfferCount', 'model/OfferDeliveryInfo', 'model/OfferListing', 'model/OfferLoyaltyPoints', 'model/OfferMerchantInfo', 'model/OfferPrice', 'model/OfferProgramEligibility', 'model/OfferPromotion', 'model/OfferSavings', 'model/OfferShippingCharge', 'model/OfferSubCondition', 'model/OfferSummary', 'model/Offers', 'model/PartnerType', 'model/Price', 'model/ProductAdvertisingAPIClientException', 'model/ProductAdvertisingAPIServiceException', 'model/ProductInfo', 'model/Properties', 'model/Rating', 'model/Refinement', 'model/RefinementBin', 'model/RentalOfferListing', 'model/RentalOffers', 'model/SearchItemsRequest', 'model/SearchItemsResource', 'model/SearchItemsResponse', 'model/SearchRefinements', 'model/SearchResult', 'model/SingleBooleanValuedAttribute', 'model/SingleIntegerValuedAttribute', 'model/SingleStringValuedAttribute', 'model/SortBy', 'model/TechnicalInfo', 'model/TradeInInfo', 'model/TradeInPrice', 'model/UnitBasedAttribute', 'model/VariationAttribute', 'model/VariationDimension', 'model/VariationSummary', 'model/VariationsResult', 'model/WebsiteSalesRank', 'src/utils/DefaultApi'], factory);
//     } else if (typeof module === 'object' && module.exports) {
//       // CommonJS-like environments that support module.exports, like Node.
//       module.exports = factory(require('../../src/utils/ApiClient'), require('../../model/Availability'), require('../../model/BrowseNode'), require('../../model/BrowseNodeAncestor'), require('../../model/BrowseNodeChild'), require('../../model/BrowseNodeInfo'), require('../../model/BrowseNodesResult'), require('../../model/ByLineInfo'), require('../../model/Classifications'), require('../../model/Condition'), require('../../model/ContentInfo'), require('../../model/ContentRating'), require('../../model/Contributor'), require('../../model/CustomerReviews'), require('../../model/DeliveryFlag'), require('../../model/DimensionBasedAttribute'), require('../../model/DurationPrice'), require('../../model/ErrorData'), require('../../model/ExternalIds'), require('../../model/GetBrowseNodesRequest'), require('../../model/GetBrowseNodesResource'), require('../../model/GetBrowseNodesResponse'), require('../../model/GetItemsRequest'), require('../../model/GetItemsResource'), require('../../model/GetItemsResponse'), require('../../model/GetVariationsRequest'), require('../../model/GetVariationsResource'), require('../../model/GetVariationsResponse'), require('../../model/ImageSize'), require('../../model/ImageType'), require('../../model/Images'), require('../../model/Item'), require('../../model/ItemIdType'), require('../../models/ItemInfo'), require('../../model/ItemsResult'), require('../../model/LanguageType'), require('../../model/Languages'), require('../../model/ManufactureInfo'), require('../../model/MaxPrice'), require('../../model/Merchant'), require('../../model/MinPrice'), require('../../model/MinReviewsRating'), require('../../model/MinSavingPercent'), require('../../model/MultiValuedAttribute'), require('../../model/OfferAvailability'), require('../../model/OfferCondition'), require('../../model/OfferConditionNote'), require('../../model/OfferCount'), require('../../model/OfferDeliveryInfo'), require('../../model/OfferListing'), require('../../model/OfferLoyaltyPoints'), require('../../model/OfferMerchantInfo'), require('../../model/OfferPrice'), require('../../model/OfferProgramEligibility'), require('../../model/OfferPromotion'), require('../../model/OfferSavings'), require('../../model/OfferShippingCharge'), require('../../model/OfferSubCondition'), require('../../model/OfferSummary'), require('../../model/Offers'), require('../../model/PartnerType'), require('../../model/Price'), require('../../model/ProductAdvertisingAPIClientException'), require('../../model/ProductAdvertisingAPIServiceException'), require('../../model/ProductInfo'), require('../../model/Properties'), require('../../model/Rating'), require('../../model/Refinement'), require('../../model/RefinementBin'), require('../../model/RentalOfferListing'), require('../../model/RentalOffers'), require('../../model/SearchItemsRequest'), require('../../model/SearchItemsResource'), require('../../model/SearchItemsResponse'), require('../../model/SearchRefinements'), require('../../model/SearchResult'), require('../../model/SingleBooleanValuedAttribute'), require('../../model/SingleIntegerValuedAttribute'), require('../../model/SingleStringValuedAttribute'), require('../../model/SortBy'), require('../../model/TechnicalInfo'), require('../../model/TradeInInfo'), require('../../model/TradeInPrice'), require('../../model/UnitBasedAttribute'), require('../../model/VariationAttribute'), require('../../model/VariationDimension'), require('../../model/VariationSummary'), require('../../model/VariationsResult'), require('../../model/WebsiteSalesRank'), require('../../src/utils/DefaultApi'));
//     }
//   }(function(ApiClient, Availability, BrowseNode, BrowseNodeAncestor, BrowseNodeChild, BrowseNodeInfo, BrowseNodesResult, ByLineInfo, Classifications, Condition, ContentInfo, ContentRating, Contributor, CustomerReviews, DeliveryFlag, DimensionBasedAttribute, DurationPrice, ErrorData, ExternalIds, GetBrowseNodesRequest, GetBrowseNodesResource, GetBrowseNodesResponse, GetItemsRequest, GetItemsResource, GetItemsResponse, GetVariationsRequest, GetVariationsResource, GetVariationsResponse, ImageSize, ImageType, Images, Item, ItemIdType, ItemInfo, ItemsResult, LanguageType, Languages, ManufactureInfo, MaxPrice, Merchant, MinPrice, MinReviewsRating, MinSavingPercent, MultiValuedAttribute, OfferAvailability, OfferCondition, OfferConditionNote, OfferCount, OfferDeliveryInfo, OfferListing, OfferLoyaltyPoints, OfferMerchantInfo, OfferPrice, OfferProgramEligibility, OfferPromotion, OfferSavings, OfferShippingCharge, OfferSubCondition, OfferSummary, Offers, PartnerType, Price, ProductAdvertisingAPIClientException, ProductAdvertisingAPIServiceException, ProductInfo, Properties, Rating, Refinement, RefinementBin, RentalOfferListing, RentalOffers, SearchItemsRequest, SearchItemsResource, SearchItemsResponse, SearchRefinements, SearchResult, SingleBooleanValuedAttribute, SingleIntegerValuedAttribute, SingleStringValuedAttribute, SortBy, TechnicalInfo, TradeInInfo, TradeInPrice, UnitBasedAttribute, VariationAttribute, VariationDimension, VariationSummary, VariationsResult, WebsiteSalesRank, DefaultApi) {
//     'use strict';
//     /**
//      * ProductAdvertisingAPI 5.0 NodeJS SDK.<br>
//      * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
//      * <p>
//      * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
//      * <pre>
//      * var ProductAdvertisingAPIv1 = require('index'); // See note below*.
//      * var xxxSvc = new ProductAdvertisingAPIv1.XxxApi(); // Allocate the API class we're going to use.
//      * var yyyModel = new ProductAdvertisingAPIv1.Yyy(); // Construct a model instance.
//      * yyyModel.someProperty = 'someValue';
//      * ...
//      * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
//      * ...
//      * </pre>
//      * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
//      * and put the application logic within the callback function.</em>
//      * </p>
//      * <p>
//      * A non-AMD browser application (discouraged) might do something like this:
//      * <pre>
//      * var xxxSvc = new ProductAdvertisingAPIv1.XxxApi(); // Allocate the API class we're going to use.
//      * var yyy = new ProductAdvertisingAPIv1.Yyy(); // Construct a model instance.
//      * yyyModel.someProperty = 'someValue';
//      * ...
//      * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
//      * ...
//      * </pre>
//      * </p>
//      * @module index
//      * @version 1.0.0
//      */
//     var exports = {
//       /**
//        * The ApiClient constructor.
//        * @property {module:ApiClient}
//        */
//       ApiClient: ApiClient,
//       /**
//        * The Availability model constructor.
//        * @property {module:model/Availability}
//        */
//       Availability: Availability,
//       /**
//        * The BrowseNode model constructor.
//        * @property {module:model/BrowseNode}
//        */
//       BrowseNode: BrowseNode,
//       /**
//        * The BrowseNodeAncestor model constructor.
//        * @property {module:model/BrowseNodeAncestor}
//        */
//       BrowseNodeAncestor: BrowseNodeAncestor,
//       /**
//        * The BrowseNodeChild model constructor.
//        * @property {module:model/BrowseNodeChild}
//        */
//       BrowseNodeChild: BrowseNodeChild,
//       /**
//        * The BrowseNodeInfo model constructor.
//        * @property {module:model/BrowseNodeInfo}
//        */
//       BrowseNodeInfo: BrowseNodeInfo,
//       /**
//        * The BrowseNodesResult model constructor.
//        * @property {module:model/BrowseNodesResult}
//        */
//       BrowseNodesResult: BrowseNodesResult,
//       /**
//        * The ByLineInfo model constructor.
//        * @property {module:model/ByLineInfo}
//        */
//       ByLineInfo: ByLineInfo,
//       /**
//        * The Classifications model constructor.
//        * @property {module:model/Classifications}
//        */
//       Classifications: Classifications,
//       /**
//        * The Condition model constructor.
//        * @property {module:model/Condition}
//        */
//       Condition: Condition,
//       /**
//        * The ContentInfo model constructor.
//        * @property {module:model/ContentInfo}
//        */
//       ContentInfo: ContentInfo,
//       /**
//        * The ContentRating model constructor.
//        * @property {module:model/ContentRating}
//        */
//       ContentRating: ContentRating,
//       /**
//        * The Contributor model constructor.
//        * @property {module:model/Contributor}
//        */
//       Contributor: Contributor,
//       /**
//        * The CustomerReviews model constructor.
//        * @property {module:model/CustomerReviews}
//        */
//       CustomerReviews: CustomerReviews,
//       /**
//        * The DeliveryFlag model constructor.
//        * @property {module:model/DeliveryFlag}
//        */
//       DeliveryFlag: DeliveryFlag,
//       /**
//        * The DimensionBasedAttribute model constructor.
//        * @property {module:model/DimensionBasedAttribute}
//        */
//       DimensionBasedAttribute: DimensionBasedAttribute,
//       /**
//        * The DurationPrice model constructor.
//        * @property {module:model/DurationPrice}
//        */
//       DurationPrice: DurationPrice,
//       /**
//        * The ErrorData model constructor.
//        * @property {module:model/ErrorData}
//        */
//       ErrorData: ErrorData,
//       /**
//        * The ExternalIds model constructor.
//        * @property {module:model/ExternalIds}
//        */
//       ExternalIds: ExternalIds,
//       /**
//        * The GetBrowseNodesRequest model constructor.
//        * @property {module:model/GetBrowseNodesRequest}
//        */
//       GetBrowseNodesRequest: GetBrowseNodesRequest,
//       /**
//        * The GetBrowseNodesResource model constructor.
//        * @property {module:model/GetBrowseNodesResource}
//        */
//       GetBrowseNodesResource: GetBrowseNodesResource,
//       /**
//        * The GetBrowseNodesResponse model constructor.
//        * @property {module:model/GetBrowseNodesResponse}
//        */
//       GetBrowseNodesResponse: GetBrowseNodesResponse,
//       /**
//        * The GetItemsRequest model constructor.
//        * @property {module:model/GetItemsRequest}
//        */
//       GetItemsRequest: GetItemsRequest,
//       /**
//        * The GetItemsResource model constructor.
//        * @property {module:model/GetItemsResource}
//        */
//       GetItemsResource: GetItemsResource,
//       /**
//        * The GetItemsResponse model constructor.
//        * @property {module:model/GetItemsResponse}
//        */
//       GetItemsResponse: GetItemsResponse,
//       /**
//        * The GetVariationsRequest model constructor.
//        * @property {module:model/GetVariationsRequest}
//        */
//       GetVariationsRequest: GetVariationsRequest,
//       /**
//        * The GetVariationsResource model constructor.
//        * @property {module:model/GetVariationsResource}
//        */
//       GetVariationsResource: GetVariationsResource,
//       /**
//        * The GetVariationsResponse model constructor.
//        * @property {module:model/GetVariationsResponse}
//        */
//       GetVariationsResponse: GetVariationsResponse,
//       /**
//        * The ImageSize model constructor.
//        * @property {module:model/ImageSize}
//        */
//       ImageSize: ImageSize,
//       /**
//        * The ImageType model constructor.
//        * @property {module:model/ImageType}
//        */
//       ImageType: ImageType,
//       /**
//        * The Images model constructor.
//        * @property {module:model/Images}
//        */
//       Images: Images,
//       /**
//        * The Item model constructor.
//        * @property {module:model/Item}
//        */
//       Item: Item,
//       /**
//        * The ItemIdType model constructor.
//        * @property {module:model/ItemIdType}
//        */
//       ItemIdType: ItemIdType,
//       /**
//        * The ItemInfo model constructor.
//        * @property {module:model/ItemInfo}
//        */
//       ItemInfo: ItemInfo,
//       /**
//        * The ItemsResult model constructor.
//        * @property {module:model/ItemsResult}
//        */
//       ItemsResult: ItemsResult,
//       /**
//        * The LanguageType model constructor.
//        * @property {module:model/LanguageType}
//        */
//       LanguageType: LanguageType,
//       /**
//        * The Languages model constructor.
//        * @property {module:model/Languages}
//        */
//       Languages: Languages,
//       /**
//        * The ManufactureInfo model constructor.
//        * @property {module:model/ManufactureInfo}
//        */
//       ManufactureInfo: ManufactureInfo,
//       /**
//        * The MaxPrice model constructor.
//        * @property {module:model/MaxPrice}
//        */
//       MaxPrice: MaxPrice,
//       /**
//        * The Merchant model constructor.
//        * @property {module:model/Merchant}
//        */
//       Merchant: Merchant,
//       /**
//        * The MinPrice model constructor.
//        * @property {module:model/MinPrice}
//        */
//       MinPrice: MinPrice,
//       /**
//        * The MinReviewsRating model constructor.
//        * @property {module:model/MinReviewsRating}
//        */
//       MinReviewsRating: MinReviewsRating,
//       /**
//        * The MinSavingPercent model constructor.
//        * @property {module:model/MinSavingPercent}
//        */
//       MinSavingPercent: MinSavingPercent,
//       /**
//        * The MultiValuedAttribute model constructor.
//        * @property {module:model/MultiValuedAttribute}
//        */
//       MultiValuedAttribute: MultiValuedAttribute,
//       /**
//        * The OfferAvailability model constructor.
//        * @property {module:model/OfferAvailability}
//        */
//       OfferAvailability: OfferAvailability,
//       /**
//        * The OfferCondition model constructor.
//        * @property {module:model/OfferCondition}
//        */
//       OfferCondition: OfferCondition,
//       /**
//        * The OfferConditionNote model constructor.
//        * @property {module:model/OfferConditionNote}
//        */
//       OfferConditionNote: OfferConditionNote,
//       /**
//        * The OfferCount model constructor.
//        * @property {module:model/OfferCount}
//        */
//       OfferCount: OfferCount,
//       /**
//        * The OfferDeliveryInfo model constructor.
//        * @property {module:model/OfferDeliveryInfo}
//        */
//       OfferDeliveryInfo: OfferDeliveryInfo,
//       /**
//        * The OfferListing model constructor.
//        * @property {module:model/OfferListing}
//        */
//       OfferListing: OfferListing,
//       /**
//        * The OfferLoyaltyPoints model constructor.
//        * @property {module:model/OfferLoyaltyPoints}
//        */
//       OfferLoyaltyPoints: OfferLoyaltyPoints,
//       /**
//        * The OfferMerchantInfo model constructor.
//        * @property {module:model/OfferMerchantInfo}
//        */
//       OfferMerchantInfo: OfferMerchantInfo,
//       /**
//        * The OfferPrice model constructor.
//        * @property {module:model/OfferPrice}
//        */
//       OfferPrice: OfferPrice,
//       /**
//        * The OfferProgramEligibility model constructor.
//        * @property {module:model/OfferProgramEligibility}
//        */
//       OfferProgramEligibility: OfferProgramEligibility,
//       /**
//        * The OfferPromotion model constructor.
//        * @property {module:model/OfferPromotion}
//        */
//       OfferPromotion: OfferPromotion,
//       /**
//        * The OfferSavings model constructor.
//        * @property {module:model/OfferSavings}
//        */
//       OfferSavings: OfferSavings,
//       /**
//        * The OfferShippingCharge model constructor.
//        * @property {module:model/OfferShippingCharge}
//        */
//       OfferShippingCharge: OfferShippingCharge,
//       /**
//        * The OfferSubCondition model constructor.
//        * @property {module:model/OfferSubCondition}
//        */
//       OfferSubCondition: OfferSubCondition,
//       /**
//        * The OfferSummary model constructor.
//        * @property {module:model/OfferSummary}
//        */
//       OfferSummary: OfferSummary,
//       /**
//        * The Offers model constructor.
//        * @property {module:model/Offers}
//        */
//       Offers: Offers,
//       /**
//        * The PartnerType model constructor.
//        * @property {module:model/PartnerType}
//        */
//       PartnerType: PartnerType,
//       /**
//        * The Price model constructor.
//        * @property {module:model/Price}
//        */
//       Price: Price,
//       /**
//        * The ProductAdvertisingAPIClientException model constructor.
//        * @property {module:model/ProductAdvertisingAPIClientException}
//        */
//       ProductAdvertisingAPIClientException: ProductAdvertisingAPIClientException,
//       /**
//        * The ProductAdvertisingAPIServiceException model constructor.
//        * @property {module:model/ProductAdvertisingAPIServiceException}
//        */
//       ProductAdvertisingAPIServiceException: ProductAdvertisingAPIServiceException,
//       /**
//        * The ProductInfo model constructor.
//        * @property {module:model/ProductInfo}
//        */
//       ProductInfo: ProductInfo,
//       /**
//        * The Properties model constructor.
//        * @property {module:model/Properties}
//        */
//       Properties: Properties,
//       /**
//        * The Rating model constructor.
//        * @property {module:model/Rating}
//        */
//       Rating: Rating,
//       /**
//        * The Refinement model constructor.
//        * @property {module:model/Refinement}
//        */
//       Refinement: Refinement,
//       /**
//        * The RefinementBin model constructor.
//        * @property {module:model/RefinementBin}
//        */
//       RefinementBin: RefinementBin,
//       /**
//        * The RentalOfferListing model constructor.
//        * @property {module:model/RentalOfferListing}
//        */
//       RentalOfferListing: RentalOfferListing,
//       /**
//        * The RentalOffers model constructor.
//        * @property {module:model/RentalOffers}
//        */
//       RentalOffers: RentalOffers,
//       /**
//        * The SearchItemsRequest model constructor.
//        * @property {module:model/SearchItemsRequest}
//        */
//       SearchItemsRequest: SearchItemsRequest,
//       /**
//        * The SearchItemsResource model constructor.
//        * @property {module:model/SearchItemsResource}
//        */
//       SearchItemsResource: SearchItemsResource,
//       /**
//        * The SearchItemsResponse model constructor.
//        * @property {module:model/SearchItemsResponse}
//        */
//       SearchItemsResponse: SearchItemsResponse,
//       /**
//        * The SearchRefinements model constructor.
//        * @property {module:model/SearchRefinements}
//        */
//       SearchRefinements: SearchRefinements,
//       /**
//        * The SearchResult model constructor.
//        * @property {module:model/SearchResult}
//        */
//       SearchResult: SearchResult,
//       /**
//        * The SingleBooleanValuedAttribute model constructor.
//        * @property {module:model/SingleBooleanValuedAttribute}
//        */
//       SingleBooleanValuedAttribute: SingleBooleanValuedAttribute,
//       /**
//        * The SingleIntegerValuedAttribute model constructor.
//        * @property {module:model/SingleIntegerValuedAttribute}
//        */
//       SingleIntegerValuedAttribute: SingleIntegerValuedAttribute,
//       /**
//        * The SingleStringValuedAttribute model constructor.
//        * @property {module:model/SingleStringValuedAttribute}
//        */
//       SingleStringValuedAttribute: SingleStringValuedAttribute,
//       /**
//        * The SortBy model constructor.
//        * @property {module:model/SortBy}
//        */
//       SortBy: SortBy,
//       /**
//        * The TechnicalInfo model constructor.
//        * @property {module:model/TechnicalInfo}
//        */
//       TechnicalInfo: TechnicalInfo,
//       /**
//        * The TradeInInfo model constructor.
//        * @property {module:model/TradeInInfo}
//        */
//       TradeInInfo: TradeInInfo,
//       /**
//        * The TradeInPrice model constructor.
//        * @property {module:model/TradeInPrice}
//        */
//       TradeInPrice: TradeInPrice,
//       /**
//        * The UnitBasedAttribute model constructor.
//        * @property {module:model/UnitBasedAttribute}
//        */
//       UnitBasedAttribute: UnitBasedAttribute,
//       /**
//        * The VariationAttribute model constructor.
//        * @property {module:model/VariationAttribute}
//        */
//       VariationAttribute: VariationAttribute,
//       /**
//        * The VariationDimension model constructor.
//        * @property {module:model/VariationDimension}
//        */
//       VariationDimension: VariationDimension,
//       /**
//        * The VariationSummary model constructor.
//        * @property {module:model/VariationSummary}
//        */
//       VariationSummary: VariationSummary,
//       /**
//        * The VariationsResult model constructor.
//        * @property {module:model/VariationsResult}
//        */
//       VariationsResult: VariationsResult,
//       /**
//        * The WebsiteSalesRank model constructor.
//        * @property {module:model/WebsiteSalesRank}
//        */
//       WebsiteSalesRank: WebsiteSalesRank,
//       /**
//        * The DefaultApi service constructor.
//        * @property {module:api/DefaultApi}
//        */
//       DefaultApi: DefaultApi
//     };
//     return exports;
//   }));
//# sourceMappingURL=index.js.map