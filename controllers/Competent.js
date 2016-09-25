'use strict';

var url = require('url');


var Competent = require('./CompetentService');


module.exports.competentsDELETE = function competentsDELETE (req, res, next) {
  Competent.competentsDELETE(req.swagger.params, res, next);
};

module.exports.competentsGET = function competentsGET (req, res, next) {
  Competent.competentsGET(req.swagger.params, res, next);
};

module.exports.competentsPOST = function competentsPOST (req, res, next) {
  Competent.competentsPOST(req.swagger.params, res, next);
};
