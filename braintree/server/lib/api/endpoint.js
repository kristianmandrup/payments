//api/endpoint.js
var parse = require('co-body');

//api/endpoint.js
module.exports.show = function*() {
  this.body = "Hello, World";
}

module.exports.create = function*() {
  var object = yield parse(this);
  object.created_at = new Date;
  // TODO: save to DB
  this.status = 201;
  this.body = object;
}
