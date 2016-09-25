'use strict';

exports.competentsPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * id (BigDecimal)
  * body (Competent)
  **/
    var examples = {};
  examples['application/json'] = {
  "image" : 1.3579000000000001069366817318950779736042022705078125,
  "name" : "aeiou",
  "description" : "aeiou",
  "id" : 1.3579000000000001069366817318950779736042022705078125
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

