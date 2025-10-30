const express = require("express");
const router = express.Router();

// Header роутер
const {
  getHeaderData,
  postHeaderData,
} = require("../controllers/headerDataController");

router.route("/header").get(getHeaderData).post(postHeaderData);

// Hero роутер
const {
  getHeroData,
  postHeroData,
} = require("../controllers/heroDataController");

router.route("/hero ").get(getHeroData).post(postHeroData);

// Brands роутер
const {
  getBrandsData,
  postBrandsData,
} = require("../controllers/brandsDataController");

router.route("/brands").get(getBrandsData).post(postBrandsData);

// WhatIsGpt роутер
const {
  getWhatIsGptData,
  postWhatIsGptData,
} = require("../controllers/whatIsGptDataController");

router.route("/what-is-gpt").get(getWhatIsGptData).post(postWhatIsGptData);

// Future Here роутер
const {
  getFutureHereData,
  postFutureHereData,
} = require("../controllers/futureHereDataController");

router.route("/future-here").get(getFutureHereData).post(postFutureHereData);

// Woman роутер
const {
  getWomanData,
  postWomanData,
} = require("../controllers/womanDataController");

router.route("/woman").get(getWomanData).post(postWomanData);

// Register роутер
const {
  getRegisterData,
  postRegisterData,
} = require("../controllers/registerDataController");

router.route("/register").get(getRegisterData).post(postRegisterData);

// Blog роутер
const {
  getBlogData,
  postBlogData,
} = require("../controllers/blogDataController");

router.route("/blog").get(getBlogData).post(postBlogData);

// Footer роутер
const {
  getFooterData,
  postFooterData,
} = require("../controllers/footerDataController");

router.route("/footer").get(getFooterData).post(postFooterData);

// Rights роутер
const {
  getRightsData,
  postRightsData,
} = require("../controllers/rightsDataController");

router.route("/rights").get(getRightsData).post(postRightsData);

module.exports = router;
