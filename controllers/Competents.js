'use strict';

var url = require('url');


var Competents = require('./CompetentsService');


module.exports.competentsPUT = function competentsPUT (req, res, next) {
  Competents.competentsPUT(req.swagger.params, res, next);
};
