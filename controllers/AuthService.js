'use strict';

exports.authorizationSmsSendPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (MailLogin)
  **/
    var examples = {};
  examples['application/json'] = {
  "mail" : "aeiou",
  "id" : ""
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
  * body (MailVerify)
  **/
    var examples = {};
  examples['application/json'] = {
  "code" : "aeiou",
  "id" : ""
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

