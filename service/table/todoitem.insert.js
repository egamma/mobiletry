var validator = require('../shared/validator.js');
	
function insert(item, user, request) {
    //console.log(item);
//    item.text =  item.text + " -- approved";
    item.text =  item.text + validator.validate();
    request.execute();
}