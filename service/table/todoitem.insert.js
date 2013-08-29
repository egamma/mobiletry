var date = require('../shared/date.js');
var random = require('../shared/node_modules/random-to');  // need to add an absolute reference 'random-to' doesn't work', modules need to be in the shared folder
	
function insert(item, user, request) {
    //console.log(item);
    item.text =  item.text + date.now() + "by " + random.from0upto(100);
    request.execute();
}