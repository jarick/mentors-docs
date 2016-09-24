'use strict';

var url = require('url');


var Item = require('./ItemService');


module.exports.itemDELETE = function itemDELETE (req, res, next) {
  Item.itemDELETE(req.swagger.params, res, next);
};

module.exports.itemPOST = function itemPOST (req, res, next) {
  Item.itemPOST(req.swagger.params, res, next);
};

module.exports.itemPUT = function itemPUT (req, res, next) {
  Item.itemPUT(req.swagger.params, res, next);
};

module.exports.itemsGET = function itemsGET (req, res, next) {
  Item.itemsGET(req.swagger.params, res, next);
};
