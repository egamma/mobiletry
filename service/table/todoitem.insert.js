var validator = require('../shared/validator.js');
var random = require('random-to');
	
function insert(item, user, request) {
    //console.log(item);
//    item.text =  item.text + " -- approved";
    item.text =  item.text + validator.validate() + random.from0upto(10);
    request.execute();
}