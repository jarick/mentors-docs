'use strict';

var url = require('url');


var Auth = require('./AuthService');


module.exports.authorizationSmsSendPOST = function authorizationSmsSendPOST (req, res, next) {
  Auth.authorizationSmsSendPOST(req.swagger.params, res, next);
};

module.exports.authorizationSmsVerifyPOST = function authorizationSmsVerifyPOST (req, res, next) {
  Auth.authorizationSmsVerifyPOST(req.swagger.params, res, next);
};
