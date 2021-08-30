// //const Promise = require('bluebird');
// const rp = require('request-promise');
// const qs = require('querystring');

// const WALMART_CONSUMER_ID = process.env.WALMART_CONSUMER_ID;
// const WALMART_VERSION = process.env.WALMART_VERSION;
// const WALMART_TIMESTAMP = process.env.WALMART_TIMESTAMP;
// const WALMART_PUBLIC_KEY = process.env.WALMART_PUBLIC_KEY

// //Additional Headers needed for the Affiliate API request
// // export interface RequestHeaders {
// //     PrivateKeyVersion?: string;
// //     ConsumerId?: string;
// //     TimeStamp?: string;
// //     GeneratedSignature?: string
// // }

// //Essential Properties of the API request
// interface RequestParams {
//     /**
//    * The full URL of the Walmart API resource. Do not include query paramaters.
//    *
//    * @example 'https://developer.api.walmart.com/api-proxy/service/affil/product/v2/taxonomy'
//    */
//     BaseUrl?: string;
//     Query: RequestQuery;
//     Method?: string;
//     Body?: string
// }

// interface RequestQuery {
//     createdStartDate?: string;
//     createdEndDate?: string;
//     limit?: number;
// }

// /**
//  * Execute the request. Authentication headers are compiled using
//  * `wmt-marketplace-auth` and added to the request. Before calling `execute()`, be
//  * sure to set `WMT.Request.Credentials` and prepare a `RequestParams` object.
//  *
//  * @param request The prepared RequestParams object.
//  *
//  * @throws {Error} If credentials aren't set before calling the `execute()` method.
//  *
//  * @return {Promise} Returns the response received from the Walmart Marketplace API.
//  */

// export function execute(request: RequestParams): Promise<any> {
//     if(!WALMART_CONSUMER_ID) {
//     throw new Error('Must set Request with Consumer ID before making a request');
// };

// const reqHeaders = {
//     'WALMART_CONSUMER_ID': WALMART_CONSUMER_ID,
//     'WALMART_VERSION': WALMART_VERSION,
//     'WALMART_TIMESTAMP': WALMART_TIMESTAMP,
//     'WALMART_PUBLIC_KEY': WALMART_PUBLIC_KEY
// };

// let requestUrl: string = request.BaseUrl
// + ((request.Query) ? '?' : '')
// + qs.(request.Query, null, null, { encodeURIComponent: (uri: string) => uri });

// return rp({
//     method: request.Method.toUpperCase(),
//     uri: requestUrl,
//     headers: reqHeaders,
//     body: request.Body,
//     timeout: 120000
//   })
//     .catch((error: any) => {
//       throw new Error('Unauthorized. Failed to authorize with the access token.');
//     })
// }