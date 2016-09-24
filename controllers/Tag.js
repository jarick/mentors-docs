'use strict';

var url = require('url');


var Tag = require('./TagService');


module.exports.tagsGET = function tagsGET (req, res, next) {
  Tag.tagsGET(req.swagger.params, res, next);
};

module.exports.tagsPOST = function tagsPOST (req, res, next) {
  Tag.tagsPOST(req.swagger.params, res, next);
};

module.exports.tagsPUT = function tagsPUT (req, res, next) {
  Tag.tagsPUT(req.swagger.params, res, next);
};
