'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.quoteGET = function quoteGET (req, res, next, bodylimit, pagelimit) {
  Default.quoteGET(bodylimit, pagelimit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.quotePOST = function quotePOST (req, res, next, body) {
  Default.quotePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.quoteQuoteIDGET = function quoteQuoteIDGET (req, res, next, quoteID) {
  Default.quoteQuoteIDGET(quoteID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
