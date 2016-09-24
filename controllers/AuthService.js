'use strict';

exports.authorizationSmsSendPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (SmsLogin)
  **/
    var examples = {};
  examples['application/json'] = {
  "deviceType" : "aeiou",
  "country" : "aeiou",
  "phone" : "aeiou",
  "name" : "aeiou",
  "avatar" : "aeiou",
  "pushToken" : "aeiou",
  "deviceId" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.authorizationSmsVerifyPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (SmsVerify)
  **/
    var examples = {};
  examples['application/json'] = {
  "code" : "aeiou",
  "id" : {
    "deviceType" : "aeiou",
    "country" : "aeiou",
    "phone" : "aeiou",
    "name" : "aeiou",
    "avatar" : "aeiou",
    "pushToken" : "aeiou",
    "deviceId" : "aeiou"
  }
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

