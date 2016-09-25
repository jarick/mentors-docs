'use strict';

var url = require('url');


var Issues = require('./IssuesService');


module.exports.issuePUT = function issuePUT (req, res, next) {
  Issues.issuePUT(req.swagger.params, res, next);
};

module.exports.issuesGET = function issuesGET (req, res, next) {
  Issues.issuesGET(req.swagger.params, res, next);
};

module.exports.itemDELETE = function itemDELETE (req, res, next) {
  Issues.itemDELETE(req.swagger.params, res, next);
};

module.exports.itemPOST = function itemPOST (req, res, next) {
  Issues.itemPOST(req.swagger.params, res, next);
};
