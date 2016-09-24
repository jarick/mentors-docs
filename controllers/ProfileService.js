'use strict';

exports.profileGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "name" : "aeiou",
  "last_name" : "aeiou",
  "second_name" : "aeiou",
  "id" : "",
  "avatar" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.profilePOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * body (Profile)
  **/
    var examples = {};
  examples['application/json'] = {
  "name" : "aeiou",
  "last_name" : "aeiou",
  "second_name" : "aeiou",
  "id" : "",
  "avatar" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

