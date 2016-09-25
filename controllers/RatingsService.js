'use strict';

exports.raitingsGET = function(args, res, next) {
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
    "id" : 1.3579000000000001069366817318950779736042022705078125,
    "tag" : 1.3579000000000001069366817318950779736042022705078125,
    "user" : 1.3579000000000001069366817318950779736042022705078125,
    "value" : 1.3579000000000001069366817318950779736042022705078125
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

exports.ratingDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
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

exports.ratingPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Rating)
  **/
    var examples = {};
  examples['application/json'] = {
  "id" : 1.3579000000000001069366817318950779736042022705078125,
  "tag" : 1.3579000000000001069366817318950779736042022705078125,
  "user" : 1.3579000000000001069366817318950779736042022705078125,
  "value" : 1.3579000000000001069366817318950779736042022705078125
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.ratingPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (BigDecimal)
  * body (Rating)
  **/
    var examples = {};
  examples['application/json'] = {
  "id" : 1.3579000000000001069366817318950779736042022705078125,
  "tag" : 1.3579000000000001069366817318950779736042022705078125,
  "user" : 1.3579000000000001069366817318950779736042022705078125,
  "value" : 1.3579000000000001069366817318950779736042022705078125
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

