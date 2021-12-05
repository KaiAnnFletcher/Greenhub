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

 import * as express from "express";
 
//var express = require("express");

const router = express.Router();

const amazonRoutes1 = require("./amazon")

//const amazonRoutes = require("./second_api")

router.use("/amazon", amazonRoutes1)

//router.use("/second_api", amazonRoutes)

module.exports = router;