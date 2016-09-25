'use strict';

var url = require('url');


var Ratings = require('./RatingsService');


module.exports.raitingsGET = function raitingsGET (req, res, next) {
  Ratings.raitingsGET(req.swagger.params, res, next);
};

module.exports.ratingDELETE = function ratingDELETE (req, res, next) {
  Ratings.ratingDELETE(req.swagger.params, res, next);
};

module.exports.ratingPOST = function ratingPOST (req, res, next) {
  Ratings.ratingPOST(req.swagger.params, res, next);
};

module.exports.ratingPUT = function ratingPUT (req, res, next) {
  Ratings.ratingPUT(req.swagger.params, res, next);
};
