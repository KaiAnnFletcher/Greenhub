/**
 * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

 /**
 * ProductAdvertisingAPI
 * https://webservices.amazon.com/paapi5/documentation/index.html
 *
 */

/*eslint-env es6*/
/*global define*/
/*global module*/
/*global require*/
/*eslint no-undef: "error"*/

//For variables called in amazon.js
(function(factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define(['../../client/src/utils/ApiClient', '../../client/src/model/Availability', '../../client/src/model/BrowseNode', '../../client/src/model/BrowseNodeAncestor', '../../client/src/model/BrowseNodeChild', '../../client/src/model/BrowseNodeInfo', '../../client/src/model/BrowseNodesResult', '../../client/src/model/ByLineInfo', '../../client/src/model/Classifications', '../../client/src/model/Condition', '../../client/src/model/ContentInfo', '../../client/src/model/ContentRating', '../../client/src/model/Contributor', '../../client/src/model/CustomerReviews', '../../client/src/model/DeliveryFlag', '../../client/src/model/DimensionBasedAttribute', '../../client/src/model/DurationPrice', '../../client/src/model/ErrorData', '../../client/src/model/ExternalIds', '../../client/src/model/GetBrowseNodesRequest', '../../client/src/model/GetBrowseNodesResource', '../../client/src/model/GetBrowseNodesResponse', '../../client/src/model/GetItemsRequest', '../../client/src/model/GetItemsResource', '../../client/src/model/GetItemsResponse', '../../client/src/model/GetVariationsRequest', '../../client/src/model/GetVariationsResource', '../../client/src/model/GetVariationsResponse', '../../client/src/model/ImageSize', '../../client/src/model/ImageType', '../../client/src/model/Images', '../../client/src/model/Item', '../../client/src/model/ItemIdType', '../../client/src/model/ItemInfo', '../../client/src/model/ItemsResult', '../../client/src/model/LanguageType', '../../client/src/model/Languages', '../../client/src/model/ManufactureInfo', '../../client/src/model/MaxPrice', '../../client/src/model/Merchant', '../../client/src/model/MinPrice', '../../client/src/model/MinReviewsRating', '../../client/src/model/MinSavingPercent', '../../client/src/model/MultiValuedAttribute', '../../client/src/model/OfferAvailability', '../../client/src/model/OfferCondition', '../../client/src/model/OfferConditionNote', '../../client/src/model/OfferCount', '../../client/src/model/OfferDeliveryInfo', '../../client/src/model/OfferListing', '../../client/src/model/OfferLoyaltyPoints', '../../client/src/model/OfferMerchantInfo', '../../client/src/model/OfferPrice', '../../client/src/model/OfferProgramEligibility', '../../client/src/model/OfferPromotion', '../../client/src/model/OfferSavings', '../../client/src/model/OfferShippingCharge', '../../client/src/model/OfferSubCondition', '../../client/src/model/OfferSummary', '../../client/src/model/Offers', '../../client/src/model/PartnerType', '../../client/src/model/Price', '../../client/src/model/ProductAdvertisingAPIClientException', '../../client/src/model/ProductAdvertisingAPIServiceException', '../../client/src/model/ProductInfo', '../../client/src/model/Properties', '../../client/src/model/Rating', '../../client/src/model/Refinement', '../../client/src/model/RefinementBin', '../../client/src/model/RentalOfferListing', '../../client/src/model/RentalOffers', '../../client/src/model/SearchItemsRequest', '../../client/src/model/SearchItemsResource', '../../client/src/model/SearchItemsResponse', '../../client/src/model/SearchRefinements', '../../client/src/model/SearchResult', '../../client/src/model/SingleBooleanValuedAttribute', '../../client/src/model/SingleIntegerValuedAttribute', '../../client/src/model/SingleStringValuedAttribute', '../../client/src/model/SortBy', '../../client/src/model/TechnicalInfo', '../../client/src/model/TradeInInfo', '../../client/src/model/TradeInPrice', '../../client/src/model/UnitBasedAttribute', '../../client/src/model/VariationAttribute', '../../client/src/model/VariationDimension', '../../client/src/model/VariationSummary', '../../client/src/model/VariationsResult', '../../client/src/model/WebsiteSalesRank', '../../client/src/utils/DefaultApi'], factory);
    } else if (typeof module === 'object' && module.exports) {
      // CommonJS-like environments that support module.exports, like Node.
      module.exports = factory(require('../../client/src/utils/ApiClient'), require('../../client/src/model/Availability'), require('../../client/src/model/BrowseNode'), require('../../client/src/model/BrowseNodeAncestor'), require('../../client/src/model/BrowseNodeChild'), require('../../client/src/model/BrowseNodeInfo'), require('../../client/src/model/BrowseNodesResult'), require('../../client/src/model/ByLineInfo'), require('../../client/src/model/Classifications'), require('../../client/src/model/Condition'), require('../../client/src/model/ContentInfo'), require('../../client/src/model/ContentRating'), require('../../client/src/model/Contributor'), require('../../client/src/model/CustomerReviews'), require('../../client/src/model/DeliveryFlag'), require('../../client/src/model/DimensionBasedAttribute'), require('../../client/src/model/DurationPrice'), require('../../client/src/model/ErrorData'), require('../../client/src/model/ExternalIds'), require('../../client/src/model/GetBrowseNodesRequest'), require('../../client/src/model/GetBrowseNodesResource'), require('../../client/src/model/GetBrowseNodesResponse'), require('../../client/src/model/GetItemsRequest'), require('../../client/src/model/GetItemsResource'), require('../../client/src/model/GetItemsResponse'), require('../../client/src/model/GetVariationsRequest'), require('../../client/src/model/GetVariationsResource'), require('../../client/src/model/GetVariationsResponse'), require('../../client/src/model/ImageSize'), require('../../client/src/model/ImageType'), require('../../client/src/model/Images'), require('../../client/src/model/Item'), require('../../client/src/model/ItemIdType'), require('../../client/src/model/ItemInfo'), require('../../client/src/model/ItemsResult'), require('../../client/src/model/LanguageType'), require('../../client/src/model/Languages'), require('../../client/src/model/ManufactureInfo'), require('../../client/src/model/MaxPrice'), require('../../client/src/model/Merchant'), require('../../client/src/model/MinPrice'), require('../../client/src/model/MinReviewsRating'), require('../../client/src/model/MinSavingPercent'), require('../../client/src/model/MultiValuedAttribute'), require('../../client/src/model/OfferAvailability'), require('../../client/src/model/OfferCondition'), require('../../client/src/model/OfferConditionNote'), require('../../client/src/model/OfferCount'), require('../../client/src/model/OfferDeliveryInfo'), require('../../client/src/model/OfferListing'), require('../../client/src/model/OfferLoyaltyPoints'), require('../../client/src/model/OfferMerchantInfo'), require('../../client/src/model/OfferPrice'), require('../../client/src/model/OfferProgramEligibility'), require('../../client/src/model/OfferPromotion'), require('../../client/src/model/OfferSavings'), require('../../client/src/model/OfferShippingCharge'), require('../../client/src/model/OfferSubCondition'), require('../../client/src/model/OfferSummary'), require('../../client/src/model/Offers'), require('../../client/src/model/PartnerType'), require('../../client/src/model/Price'), require('../../client/src/model/ProductAdvertisingAPIClientException'), require('../../client/src/model/ProductAdvertisingAPIServiceException'), require('../../client/src/model/ProductInfo'), require('../../client/src/model/Properties'), require('../../client/src/model/Rating'), require('../../client/src/model/Refinement'), require('../../client/src/model/RefinementBin'), require('../../client/src/model/RentalOfferListing'), require('../../client/src/model/RentalOffers'), require('../../client/src/model/SearchItemsRequest'), require('../../client/src/model/SearchItemsResource'), require('../../client/src/model/SearchItemsResponse'), require('../../client/src/model/SearchRefinements'), require('../../client/src/model/SearchResult'), require('../../client/src/model/SingleBooleanValuedAttribute'), require('../../client/src/model/SingleIntegerValuedAttribute'), require('../../client/src/model/SingleStringValuedAttribute'), require('../../client/src/model/SortBy'), require('../../client/src/model/TechnicalInfo'), require('../../client/src/model/TradeInInfo'), require('../../client/src/model/TradeInPrice'), require('../../client/src/model/UnitBasedAttribute'), require('../../client/src/model/VariationAttribute'), require('../../client/src/model/VariationDimension'), require('../../client/src/model/VariationSummary'), require('../../client/src/model/VariationsResult'), require('../../client/src/model/WebsiteSalesRank'), require('../../client/src/utils/DefaultApi'));
    }
  }(function(ApiClient, Availability, BrowseNode, BrowseNodeAncestor, BrowseNodeChild, BrowseNodeInfo, BrowseNodesResult, ByLineInfo, Classifications, Condition, ContentInfo, ContentRating, Contributor, CustomerReviews, DeliveryFlag, DimensionBasedAttribute, DurationPrice, ErrorData, ExternalIds, GetBrowseNodesRequest, GetBrowseNodesResource, GetBrowseNodesResponse, GetItemsRequest, GetItemsResource, GetItemsResponse, GetVariationsRequest, GetVariationsResource, GetVariationsResponse, ImageSize, ImageType, Images, Item, ItemIdType, ItemInfo, ItemsResult, LanguageType, Languages, ManufactureInfo, MaxPrice, Merchant, MinPrice, MinReviewsRating, MinSavingPercent, MultiValuedAttribute, OfferAvailability, OfferCondition, OfferConditionNote, OfferCount, OfferDeliveryInfo, OfferListing, OfferLoyaltyPoints, OfferMerchantInfo, OfferPrice, OfferProgramEligibility, OfferPromotion, OfferSavings, OfferShippingCharge, OfferSubCondition, OfferSummary, Offers, PartnerType, Price, ProductAdvertisingAPIClientException, ProductAdvertisingAPIServiceException, ProductInfo, Properties, Rating, Refinement, RefinementBin, RentalOfferListing, RentalOffers, SearchItemsRequest, SearchItemsResource, SearchItemsResponse, SearchRefinements, SearchResult, SingleBooleanValuedAttribute, SingleIntegerValuedAttribute, SingleStringValuedAttribute, SortBy, TechnicalInfo, TradeInInfo, TradeInPrice, UnitBasedAttribute, VariationAttribute, VariationDimension, VariationSummary, VariationsResult, WebsiteSalesRank, DefaultApi) {
    'use strict';
  
    /**
     * ProductAdvertisingAPI 5.0 NodeJS SDK.<br>
     * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
     * <p>
     * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
     * <pre>
     * var ProductAdvertisingAPIv1 = require('index'); // See note below*.
     * var xxxSvc = new ProductAdvertisingAPIv1.XxxApi(); // Allocate the API class we're going to use.
     * var yyyModel = new ProductAdvertisingAPIv1.Yyy(); // Construct a model instance.
     * yyyModel.someProperty = 'someValue';
     * ...
     * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
     * ...
     * </pre>
     * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
     * and put the application logic within the callback function.</em>
     * </p>
     * <p>
     * A non-AMD browser application (discouraged) might do something like this:
     * <pre>
     * var xxxSvc = new ProductAdvertisingAPIv1.XxxApi(); // Allocate the API class we're going to use.
     * var yyy = new ProductAdvertisingAPIv1.Yyy(); // Construct a model instance.
     * yyyModel.someProperty = 'someValue';
     * ...
     * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
     * ...
     * </pre>
     * </p>
     * @module index
     * @version 1.0.0
     */
    var exports = {
      /**
       * The ApiClient constructor.
       * @property {module:utils/ApiClient}
       */
      ApiClient: ApiClient,
      /**
       * The Availability model constructor.
       * @property {module:model/Availability}
       */
      Availability: Availability,
      /**
       * The BrowseNode model constructor.
       * @property {module:model/BrowseNode}
       */
      BrowseNode: BrowseNode,
      /**
       * The BrowseNodeAncestor model constructor.
       * @property {module:model/BrowseNodeAncestor}
       */
      BrowseNodeAncestor: BrowseNodeAncestor,
      /**
       * The BrowseNodeChild model constructor.
       * @property {module:model/BrowseNodeChild}
       */
      BrowseNodeChild: BrowseNodeChild,
      /**
       * The BrowseNodeInfo model constructor.
       * @property {module:model/BrowseNodeInfo}
       */
      BrowseNodeInfo: BrowseNodeInfo,
      /**
       * The BrowseNodesResult model constructor.
       * @property {module:model/BrowseNodesResult}
       */
      BrowseNodesResult: BrowseNodesResult,
      /**
       * The ByLineInfo model constructor.
       * @property {module:model/ByLineInfo}
       */
      ByLineInfo: ByLineInfo,
      /**
       * The Classifications model constructor.
       * @property {module:model/Classifications}
       */
      Classifications: Classifications,
      /**
       * The Condition model constructor.
       * @property {module:model/Condition}
       */
      Condition: Condition,
      /**
       * The ContentInfo model constructor.
       * @property {module:model/ContentInfo}
       */
      ContentInfo: ContentInfo,
      /**
       * The ContentRating model constructor.
       * @property {module:model/ContentRating}
       */
      ContentRating: ContentRating,
      /**
       * The Contributor model constructor.
       * @property {module:model/Contributor}
       */
      Contributor: Contributor,
      /**
       * The CustomerReviews model constructor.
       * @property {module:model/CustomerReviews}
       */
      CustomerReviews: CustomerReviews,
      /**
       * The DeliveryFlag model constructor.
       * @property {module:model/DeliveryFlag}
       */
      DeliveryFlag: DeliveryFlag,
      /**
       * The DimensionBasedAttribute model constructor.
       * @property {module:model/DimensionBasedAttribute}
       */
      DimensionBasedAttribute: DimensionBasedAttribute,
      /**
       * The DurationPrice model constructor.
       * @property {module:model/DurationPrice}
       */
      DurationPrice: DurationPrice,
      /**
       * The ErrorData model constructor.
       * @property {module:model/ErrorData}
       */
      ErrorData: ErrorData,
      /**
       * The ExternalIds model constructor.
       * @property {module:model/ExternalIds}
       */
      ExternalIds: ExternalIds,
      /**
       * The GetBrowseNodesRequest model constructor.
       * @property {module:model/GetBrowseNodesRequest}
       */
      GetBrowseNodesRequest: GetBrowseNodesRequest,
      /**
       * The GetBrowseNodesResource model constructor.
       * @property {module:model/GetBrowseNodesResource}
       */
      GetBrowseNodesResource: GetBrowseNodesResource,
      /**
       * The GetBrowseNodesResponse model constructor.
       * @property {module:model/GetBrowseNodesResponse}
       */
      GetBrowseNodesResponse: GetBrowseNodesResponse,
      /**
       * The GetItemsRequest model constructor.
       * @property {module:model/GetItemsRequest}
       */
      GetItemsRequest: GetItemsRequest,
      /**
       * The GetItemsResource model constructor.
       * @property {module:model/GetItemsResource}
       */
      GetItemsResource: GetItemsResource,
      /**
       * The GetItemsResponse model constructor.
       * @property {module:model/GetItemsResponse}
       */
      GetItemsResponse: GetItemsResponse,
      /**
       * The GetVariationsRequest model constructor.
       * @property {module:model/GetVariationsRequest}
       */
      GetVariationsRequest: GetVariationsRequest,
      /**
       * The GetVariationsResource model constructor.
       * @property {module:model/GetVariationsResource}
       */
      GetVariationsResource: GetVariationsResource,
      /**
       * The GetVariationsResponse model constructor.
       * @property {module:model/GetVariationsResponse}
       */
      GetVariationsResponse: GetVariationsResponse,
      /**
       * The ImageSize model constructor.
       * @property {module:model/ImageSize}
       */
      ImageSize: ImageSize,
      /**
       * The ImageType model constructor.
       * @property {module:model/ImageType}
       */
      ImageType: ImageType,
      /**
       * The Images model constructor.
       * @property {module:model/Images}
       */
      Images: Images,
      /**
       * The Item model constructor.
       * @property {module:model/Item}
       */
      Item: Item,
      /**
       * The ItemIdType model constructor.
       * @property {module:model/ItemIdType}
       */
      ItemIdType: ItemIdType,
      /**
       * The ItemInfo model constructor.
       * @property {module:model/ItemInfo}
       */
      ItemInfo: ItemInfo,
      /**
       * The ItemsResult model constructor.
       * @property {module:model/ItemsResult}
       */
      ItemsResult: ItemsResult,
      /**
       * The LanguageType model constructor.
       * @property {module:model/LanguageType}
       */
      LanguageType: LanguageType,
      /**
       * The Languages model constructor.
       * @property {module:model/Languages}
       */
      Languages: Languages,
      /**
       * The ManufactureInfo model constructor.
       * @property {module:model/ManufactureInfo}
       */
      ManufactureInfo: ManufactureInfo,
      /**
       * The MaxPrice model constructor.
       * @property {module:model/MaxPrice}
       */
      MaxPrice: MaxPrice,
      /**
       * The Merchant model constructor.
       * @property {module:model/Merchant}
       */
      Merchant: Merchant,
      /**
       * The MinPrice model constructor.
       * @property {module:model/MinPrice}
       */
      MinPrice: MinPrice,
      /**
       * The MinReviewsRating model constructor.
       * @property {module:model/MinReviewsRating}
       */
      MinReviewsRating: MinReviewsRating,
      /**
       * The MinSavingPercent model constructor.
       * @property {module:model/MinSavingPercent}
       */
      MinSavingPercent: MinSavingPercent,
      /**
       * The MultiValuedAttribute model constructor.
       * @property {module:model/MultiValuedAttribute}
       */
      MultiValuedAttribute: MultiValuedAttribute,
      /**
       * The OfferAvailability model constructor.
       * @property {module:model/OfferAvailability}
       */
      OfferAvailability: OfferAvailability,
      /**
       * The OfferCondition model constructor.
       * @property {module:model/OfferCondition}
       */
      OfferCondition: OfferCondition,
      /**
       * The OfferConditionNote model constructor.
       * @property {module:model/OfferConditionNote}
       */
      OfferConditionNote: OfferConditionNote,
      /**
       * The OfferCount model constructor.
       * @property {module:model/OfferCount}
       */
      OfferCount: OfferCount,
      /**
       * The OfferDeliveryInfo model constructor.
       * @property {module:model/OfferDeliveryInfo}
       */
      OfferDeliveryInfo: OfferDeliveryInfo,
      /**
       * The OfferListing model constructor.
       * @property {module:model/OfferListing}
       */
      OfferListing: OfferListing,
      /**
       * The OfferLoyaltyPoints model constructor.
       * @property {module:model/OfferLoyaltyPoints}
       */
      OfferLoyaltyPoints: OfferLoyaltyPoints,
      /**
       * The OfferMerchantInfo model constructor.
       * @property {module:model/OfferMerchantInfo}
       */
      OfferMerchantInfo: OfferMerchantInfo,
      /**
       * The OfferPrice model constructor.
       * @property {module:model/OfferPrice}
       */
      OfferPrice: OfferPrice,
      /**
       * The OfferProgramEligibility model constructor.
       * @property {module:model/OfferProgramEligibility}
       */
      OfferProgramEligibility: OfferProgramEligibility,
      /**
       * The OfferPromotion model constructor.
       * @property {module:model/OfferPromotion}
       */
      OfferPromotion: OfferPromotion,
      /**
       * The OfferSavings model constructor.
       * @property {module:model/OfferSavings}
       */
      OfferSavings: OfferSavings,
      /**
       * The OfferShippingCharge model constructor.
       * @property {module:model/OfferShippingCharge}
       */
      OfferShippingCharge: OfferShippingCharge,
      /**
       * The OfferSubCondition model constructor.
       * @property {module:model/OfferSubCondition}
       */
      OfferSubCondition: OfferSubCondition,
      /**
       * The OfferSummary model constructor.
       * @property {module:model/OfferSummary}
       */
      OfferSummary: OfferSummary,
      /**
       * The Offers model constructor.
       * @property {module:model/Offers}
       */
      Offers: Offers,
      /**
       * The PartnerType model constructor.
       * @property {module:model/PartnerType}
       */
      PartnerType: PartnerType,
      /**
       * The Price model constructor.
       * @property {module:model/Price}
       */
      Price: Price,
      /**
       * The ProductAdvertisingAPIClientException model constructor.
       * @property {module:model/ProductAdvertisingAPIClientException}
       */
      ProductAdvertisingAPIClientException: ProductAdvertisingAPIClientException,
      /**
       * The ProductAdvertisingAPIServiceException model constructor.
       * @property {module:model/ProductAdvertisingAPIServiceException}
       */
      ProductAdvertisingAPIServiceException: ProductAdvertisingAPIServiceException,
      /**
       * The ProductInfo model constructor.
       * @property {module:model/ProductInfo}
       */
      ProductInfo: ProductInfo,
      /**
       * The Properties model constructor.
       * @property {module:model/Properties}
       */
      Properties: Properties,
      /**
       * The Rating model constructor.
       * @property {module:model/Rating}
       */
      Rating: Rating,
      /**
       * The Refinement model constructor.
       * @property {module:model/Refinement}
       */
      Refinement: Refinement,
      /**
       * The RefinementBin model constructor.
       * @property {module:model/RefinementBin}
       */
      RefinementBin: RefinementBin,
      /**
       * The RentalOfferListing model constructor.
       * @property {module:model/RentalOfferListing}
       */
      RentalOfferListing: RentalOfferListing,
      /**
       * The RentalOffers model constructor.
       * @property {module:model/RentalOffers}
       */
      RentalOffers: RentalOffers,
      /**
       * The SearchItemsRequest model constructor.
       * @property {module:model/SearchItemsRequest}
       */
      SearchItemsRequest: SearchItemsRequest,
      /**
       * The SearchItemsResource model constructor.
       * @property {module:model/SearchItemsResource}
       */
      SearchItemsResource: SearchItemsResource,
      /**
       * The SearchItemsResponse model constructor.
       * @property {module:model/SearchItemsResponse}
       */
      SearchItemsResponse: SearchItemsResponse,
      /**
       * The SearchRefinements model constructor.
       * @property {module:model/SearchRefinements}
       */
      SearchRefinements: SearchRefinements,
      /**
       * The SearchResult model constructor.
       * @property {module:model/SearchResult}
       */
      SearchResult: SearchResult,
      /**
       * The SingleBooleanValuedAttribute model constructor.
       * @property {module:model/SingleBooleanValuedAttribute}
       */
      SingleBooleanValuedAttribute: SingleBooleanValuedAttribute,
      /**
       * The SingleIntegerValuedAttribute model constructor.
       * @property {module:model/SingleIntegerValuedAttribute}
       */
      SingleIntegerValuedAttribute: SingleIntegerValuedAttribute,
      /**
       * The SingleStringValuedAttribute model constructor.
       * @property {module:model/SingleStringValuedAttribute}
       */
      SingleStringValuedAttribute: SingleStringValuedAttribute,
      /**
       * The SortBy model constructor.
       * @property {module:model/SortBy}
       */
      SortBy: SortBy,
      /**
       * The TechnicalInfo model constructor.
       * @property {module:model/TechnicalInfo}
       */
      TechnicalInfo: TechnicalInfo,
      /**
       * The TradeInInfo model constructor.
       * @property {module:model/TradeInInfo}
       */
      TradeInInfo: TradeInInfo,
      /**
       * The TradeInPrice model constructor.
       * @property {module:model/TradeInPrice}
       */
      TradeInPrice: TradeInPrice,
      /**
       * The UnitBasedAttribute model constructor.
       * @property {module:model/UnitBasedAttribute}
       */
      UnitBasedAttribute: UnitBasedAttribute,
      /**
       * The VariationAttribute model constructor.
       * @property {module:model/VariationAttribute}
       */
      VariationAttribute: VariationAttribute,
      /**
       * The VariationDimension model constructor.
       * @property {module:model/VariationDimension}
       */
      VariationDimension: VariationDimension,
      /**
       * The VariationSummary model constructor.
       * @property {module:model/VariationSummary}
       */
      VariationSummary: VariationSummary,
      /**
       * The VariationsResult model constructor.
       * @property {module:model/VariationsResult}
       */
      VariationsResult: VariationsResult,
      /**
       * The WebsiteSalesRank model constructor.
       * @property {module:model/WebsiteSalesRank}
       */
      WebsiteSalesRank: WebsiteSalesRank,
      /**
       * The DefaultApi service constructor.
       * @property {module:utils/DefaultApi}
       */
      DefaultApi: DefaultApi
    };
  
    return exports
  
}));