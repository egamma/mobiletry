
var random = require('../shared/node_modules/random-to');  // need to add an absolute reference 'random-to' doesn't work', modules need to be in the shared folder

exports.post = function(request, response) {
    // Use "request.service" to access features of your mobile service, e.g.:
    //   var tables = request.service.tables;
    //   var push = request.service.push;

    response.send(200, "Hello World");
};

exports.get = function(request, response) {
    // Use "request.service" to access features of your mobile service, e.g.:
    //   var tables = request.service.tables;
    //   var push = request.service.push;
    response.send(200, "Hello World " + random.from0upto(100));
};