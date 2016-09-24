'use strict';

var url = require('url');


var Rating = require('./RatingService');


module.exports.raitingsGET = function raitingsGET (req, res, next) {
  Rating.raitingsGET(req.swagger.params, res, next);
};

module.exports.ratingDELETE = function ratingDELETE (req, res, next) {
  Rating.ratingDELETE(req.swagger.params, res, next);
};

module.exports.ratingPOST = function ratingPOST (req, res, next) {
  Rating.ratingPOST(req.swagger.params, res, next);
};

module.exports.ratingPUT = function ratingPUT (req, res, next) {
  Rating.ratingPUT(req.swagger.params, res, next);
};
