'use strict';

var url = require('url');


var Profile = require('./ProfileService');


module.exports.profileGET = function profileGET (req, res, next) {
  Profile.profileGET(req.swagger.params, res, next);
};

module.exports.profilePOST = function profilePOST (req, res, next) {
  Profile.profilePOST(req.swagger.params, res, next);
};
