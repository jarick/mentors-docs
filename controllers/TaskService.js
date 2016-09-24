'use strict';

exports.taskDELETE = function(args, res, next) {
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

exports.taskPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * body (Task)
  **/
    var examples = {};
  examples['application/json'] = {
  "author" : 1.3579000000000001069366817318950779736042022705078125,
  "name" : "aeiou",
  "rating" : 1.3579000000000001069366817318950779736042022705078125,
  "description" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.taskPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * id (BigDecimal)
  * body (Task)
  **/
    var examples = {};
  examples['application/json'] = {
  "author" : 1.3579000000000001069366817318950779736042022705078125,
  "name" : "aeiou",
  "rating" : 1.3579000000000001069366817318950779736042022705078125,
  "description" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.tasksGET = function(args, res, next) {
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
    "author" : 1.3579000000000001069366817318950779736042022705078125,
    "name" : "aeiou",
    "rating" : 1.3579000000000001069366817318950779736042022705078125,
    "description" : "aeiou"
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

