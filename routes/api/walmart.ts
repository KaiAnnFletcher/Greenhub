/*eslint-env es6*/
import * as express from "express";
const {
    generateKeyPairSync,
    createSign,
    createVerify
  } = require('crypto');

const router = express.Router();
const axios = require("axios");
const fs = require('fs');
const path = require('path');

require('dotenv').config();

export interface SecurityHeaders {
    [index: string]: string;
    'WM_SEC.KEY_VERSION': string;
    'WM_CONSUMER.ID': string;
    'WM_CONSUMER.INTIMESTAMP': string;
    'WM_SEC.AUTH_SIGNATURE'?: string;
}

//const date = process.env.WM_CONSUMERINTIMESTAMP

// const WM_KEY_PRIVATE =  {
//     PRIVATE_KEY: "-----BEGIN RSA PRIVATE KEY-----kxTDYdGssmsP+e41oDw3jKQl8k/snnL0+Je3gIg2NcWwrCaA5uk6t4y9v97rVjNB3qxJXPhGtq5tY7vA8FcGUppv+n5zrasz0QVkg3PbOo8icMUPm2BNa51XC4jGhnYwF12oE+wXzZUlV0OJhooxL/md2p0S5g1TBhjV3+OtPWW5al4jiJ7XVoQftsNcZigyxAb7NcoweZyCOX7h9aqPxVWJ/qCtn0inrgl9V425ENHmmLFeOW0bUg8NIkZbM/20+ToeMhFDYcsMGgkXDBw73MkVtPiZsuhr3HxYWeg0MNb5besGmvI70eyuq46eCarPDxECclw1fjMf32IBQONFYReyQ0Kx0qBRqSEWtB6jh+ES+OHK0ob9CS+h444VnadL+U06/i0Ftwul0nujsCPp4Jvh453v8imnhTj+aYbhW7c3gy/uajJ/A4VKEszXxPmIIK50To+SGKlDu+50NAU6GFHgTgUmcXLFQsEaJAb+SMQ4hDgHMWV6T6zKLYrLrXQ2GbKYRAg74Wc/GDIIG60EXuudtPFRjGJSMFNRU78lL2aRZD914TcGbQvRwYZH1lk4i07ZypNBbB5WEvwHWXFpG1Dh7eYlWIDkBglDFmjrQ0PCUlRbBZuqdAD9vbAlQru4ilsQ+uhPqqufrSsKOQ4hS2qoz0WoEdhYaYP360m+evjy8x9TaUVH1x8JuMksl+gNmAYmYQGYJu9sSaWV/rvZ80+FclPnCe0BbCT+RVALaaI1dGIWBCwdJuXFEhyRT/iSmf5iC2/4QUNFI/zHaLDBWodTyVAJm1dvTw7QCkBjroYc1T65XSEWTjflYgRwxMwnxabAqTabLXc8PeKL2/HiLDOimu1W6rIvKcbV27kPzEoxkNI6Ikt+kjw2y4DbZhC/0WSzLIvXV8L++ChzYXJqPIZ3+bPXkj9EW2PvnwyGRxN6wHxQNXbzyXBx6TSEY74xCJjtquNhKi9PkGulLSv5MYZwJ4/fl20aFiA9cPjxGN/ra727qBe4wMD3Ls2WbtuBjYMbq6ph76+7VSk6Y7GoCsp/dQTBShP0aE1jjod8m7toTjIvRlu/a2+rLeujbpb5OEps9RBbnhsUKfZ/7YJAdaqBtsaxVGG5a51CP4i8lDtEqlqMYnxX7SWNd8B+qGk6Yhk82P4oFHyY+Mmcnj9J3OhWlQ5xJtZreFxHxQYH3L2tdNU1LJS6Otk83R/4oqyRra9dfIxKbq2eNTUXB7H/C2sTWPz4+UyhT2+6W2iCq9VirxcgMi2pTJjzxhBh72I3cAwi3LUH5yy8Knw6s/xc0/X4AZUSD8SQuDdpTJw0yHtBgRgjABM8lanDHKbOfKg4TxqRlbJKbLkE6TNkPt1yDWb2PdWlc6Yvz9oVius6FAsT60AobkZfdywqRpnZrqoPqn6z1hdu/IiQ36barmLT9Ybh72ovdxZBu/vBbN29LGykSJM1FnUPl1kYtvrOTz560Vml+TSCa/iRJY4K9Rco58PcoiAJumJDAPfKcIo7Pf8e+vM/d/G3uZhiWmUa93nMkw2U/yX0M/bQHLGyhUjIPBcA/PYCZ8gE5oOVqSttdnCIoa34efMupdD/tBi/TI6u-----END RSA PRIVATE KEY-----" };

const WM_KEY_PRIVATE =  {
  key: fs.readFileSync(path.resolve('private1.pem'), 'utf8')
};  

const CONSUMER_ID = process.env.WM_CONSUMERID;
const KEY_VERSION = process.env.WM_SECKEY_VERSION;
//const WM_KEY_PRIVATE = Buffer.from(process.env.WM_KEY_PRIVATE, 'base64');
const PUBLIC_KEY = process.env.PUBLIC_KEY.toString();


async function generateSecurityHeaders() {
    if(!CONSUMER_ID || !KEY_VERSION || !PUBLIC_KEY || !WM_KEY_PRIVATE) {
        throw new Error(`Couldn't create security headers. Missing environment configuration.`);
    }

const reqHeaders: SecurityHeaders = {
'WM_CONSUMER.ID': CONSUMER_ID,
'WM_SEC.KEY_VERSION': KEY_VERSION,
'WM_CONSUMER.INTIMESTAMP': Date.now().toString()
     };

reqHeaders['WM_SEC.AUTH_SIGNATURE'] = createSignature(reqHeaders)
console.log("reqHeaders:", createSignature(reqHeaders))
return reqHeaders
    }
    
function createSignature(reqHeaders: SecurityHeaders) {
const signer = createSign('RSA-SHA256');

const payload = generateSignatureMap(reqHeaders);

console.log("payload:", payload);
signer.update(payload);
signer.end();

return signer.sign(WM_KEY_PRIVATE, 'base64');
}

//Can be used to double-check signature
function verifySignature(signature: string, reqHeaders: SecurityHeaders) {
    const verifier = createVerify('RSA-SHA256');

    const payload = generateSignatureMap(reqHeaders);

    verifier.update(payload);

    return verifier.verify(PUBLIC_KEY, signature, 'base64');
}

function generateSignatureMap(reqHeaders: SecurityHeaders) {
    // let keys: string[] = Object.keys(reqHeaders).sort();
    // let vals: string[] = [];

    // for(let k of keys) {
    //     vals.push(reqHeaders[k].toString().trim());
    // }
    // return vals.join('\n') + '\n';
     let keys = reqHeaders.toString()
     return keys
};


const API_URL = 'https://developer.api.walmart.com/api-proxy/service/affil/product/v2/paginated/items'
const WM_SEC_AUTH_SIGNATURE = generateSecurityHeaders()
const headers = {
    'WM_SEC.KEY_VERSION': KEY_VERSION,
    "WM_SEC.TIMESTAMP": Date.now().toString(),
    "WM_SEC.AUTH_SIGNATURE":WM_SEC_AUTH_SIGNATURE,
    "WM_CONSUMER.ID":CONSUMER_ID,
  }
router.get("/walmartapi", async function(req, res, next) {
    console.log("Starting Walmart API call...");
axios.get(API_URL, { 'headers': headers
} ) 
.then((data: any) => {
    res.json(data)
    console.log(data);
})
.catch(function (error: any) {
    //handle error
    console.log(error)
})
});

// const walmart = require('walmart')(process.env.WALMART_CONSUMER_ID);
// const router = require("express").Router()

// const axios = require("axios");

// router.get("/walmartapicall", function(req, res, next) {
// console.log("api call started...")
// walmart.search("sustainable").then(function(response) {
// console.log(response.product.productAttributes.productName)
// });
// });

const {
    getHashes,
  } = require('crypto');
  
  console.log(getHashes());

 module.exports = router;