'use strict';

var url = require('url');


var Chat = require('./ChatService');


module.exports.chatMessagesPOST = function chatMessagesPOST (req, res, next) {
  Chat.chatMessagesPOST(req.swagger.params, res, next);
};

module.exports.chatRoomsGET = function chatRoomsGET (req, res, next) {
  Chat.chatRoomsGET(req.swagger.params, res, next);
};

module.exports.chatRoomsIdDELETE = function chatRoomsIdDELETE (req, res, next) {
  Chat.chatRoomsIdDELETE(req.swagger.params, res, next);
};

module.exports.chatRoomsIdPUT = function chatRoomsIdPUT (req, res, next) {
  Chat.chatRoomsIdPUT(req.swagger.params, res, next);
};

module.exports.chatRoomsPOST = function chatRoomsPOST (req, res, next) {
  Chat.chatRoomsPOST(req.swagger.params, res, next);
};
