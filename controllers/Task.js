'use strict';

var url = require('url');


var Task = require('./TaskService');


module.exports.taskDELETE = function taskDELETE (req, res, next) {
  Task.taskDELETE(req.swagger.params, res, next);
};

module.exports.taskPOST = function taskPOST (req, res, next) {
  Task.taskPOST(req.swagger.params, res, next);
};

module.exports.taskPUT = function taskPUT (req, res, next) {
  Task.taskPUT(req.swagger.params, res, next);
};

module.exports.tasksGET = function tasksGET (req, res, next) {
  Task.tasksGET(req.swagger.params, res, next);
};
