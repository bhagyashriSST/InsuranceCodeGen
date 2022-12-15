'use strict';


/**
 * Retrieves a list of quotes.
 *
 * bodylimit Integer The amount of quotes returned (optional)
 * pagelimit Integer The page to return insurance information (optional)
 * returns QuotePost
 **/
exports.quoteGET = function(bodylimit,pagelimit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zipcode" : 27612,
  "premium" : 17023,
  "retroDate" : "08/17/22",
  "laser" : "full",
  "GL" : true,
  "grossRevenues" : 2500000,
  "HNOA" : false,
  "noOfPhysicians" : 1,
  "effectiveDate" : "08/29/22",
  "EBL" : false,
  "retention" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Submits a new quote.
 *
 * body QuotePost 
 * no response value expected for this operation
 **/
exports.quotePOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieves a quote by ID
 *
 * quoteID String The ID of the quote to retrieve
 * returns QuotePost
 **/
exports.quoteQuoteIDGET = function(quoteID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zipcode" : 27612,
  "premium" : 17023,
  "retroDate" : "08/17/22",
  "laser" : "full",
  "GL" : true,
  "grossRevenues" : 2500000,
  "HNOA" : false,
  "noOfPhysicians" : 1,
  "effectiveDate" : "08/29/22",
  "EBL" : false,
  "retention" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

