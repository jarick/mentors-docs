'use strict';

exports.statusDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * id (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.statusGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "pagination" : {
    "pageCount" : "",
    "pageSize" : "",
    "rowCount" : "",
    "page" : ""
  },
  "items" : [ {
    "item" : 1.3579000000000001069366817318950779736042022705078125,
    "check" : true,
    "time" : "aeiou",
    "user" : 1.3579000000000001069366817318950779736042022705078125
  } ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.statusPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * body (Status)
  **/
    var examples = {};
  examples['application/json'] = {
  "item" : 1.3579000000000001069366817318950779736042022705078125,
  "check" : true,
  "time" : "aeiou",
  "user" : 1.3579000000000001069366817318950779736042022705078125
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.statusPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * id (BigDecimal)
  * body (Status)
  **/
    var examples = {};
  examples['application/json'] = {
  "item" : 1.3579000000000001069366817318950779736042022705078125,
  "check" : true,
  "time" : "aeiou",
  "user" : 1.3579000000000001069366817318950779736042022705078125
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

