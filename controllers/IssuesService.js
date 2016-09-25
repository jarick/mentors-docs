'use strict';

exports.issuePUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * id (BigDecimal)
  * body (Issue)
  **/
    var examples = {};
  examples['application/json'] = {
  "name" : "aeiou",
  "description" : "aeiou",
  "time" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.issuesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
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
    "name" : "aeiou",
    "description" : "aeiou",
    "time" : "aeiou"
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

exports.itemDELETE = function(args, res, next) {
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

exports.itemPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * body (Issue)
  **/
    var examples = {};
  examples['application/json'] = {
  "name" : "aeiou",
  "description" : "aeiou",
  "time" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

