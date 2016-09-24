'use strict';

exports.chatMessagesPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * body (Message)
  **/
    var examples = {};
  examples['application/json'] = {
  "id" : 1.3579000000000001069366817318950779736042022705078125,
  "body" : "aeiou",
  "room" : {
    "members" : [ {
      "name" : "aeiou",
      "last_name" : "aeiou",
      "second_name" : "aeiou",
      "avatar" : "aeiou"
    } ],
    "name" : "aeiou",
    "active" : true,
    "type" : "aeiou"
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

exports.chatRoomsGET = function(args, res, next) {
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
    "members" : [ {
      "name" : "aeiou",
      "last_name" : "aeiou",
      "second_name" : "aeiou",
      "avatar" : "aeiou"
    } ],
    "name" : "aeiou",
    "active" : true,
    "type" : "aeiou"
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

exports.chatRoomsIdDELETE = function(args, res, next) {
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

exports.chatRoomsIdPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * id (BigDecimal)
  * body (Room)
  **/
    var examples = {};
  examples['application/json'] = {
  "members" : [ {
    "name" : "aeiou",
    "last_name" : "aeiou",
    "second_name" : "aeiou",
    "avatar" : "aeiou"
  } ],
  "name" : "aeiou",
  "active" : true,
  "type" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.chatRoomsPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * body (Room)
  **/
    var examples = {};
  examples['application/json'] = {
  "members" : [ {
    "name" : "aeiou",
    "last_name" : "aeiou",
    "second_name" : "aeiou",
    "avatar" : "aeiou"
  } ],
  "name" : "aeiou",
  "active" : true,
  "type" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

