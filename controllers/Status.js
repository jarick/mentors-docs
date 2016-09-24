'use strict';

var url = require('url');


var Status = require('./StatusService');


module.exports.statusDELETE = function statusDELETE (req, res, next) {
  Status.statusDELETE(req.swagger.params, res, next);
};

module.exports.statusGET = function statusGET (req, res, next) {
  Status.statusGET(req.swagger.params, res, next);
};

module.exports.statusPOST = function statusPOST (req, res, next) {
  Status.statusPOST(req.swagger.params, res, next);
};

module.exports.statusPUT = function statusPUT (req, res, next) {
  Status.statusPUT(req.swagger.params, res, next);
};
