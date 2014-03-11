
var random = require('../shared/node_modules/random-to');  // need to add an absolute reference 'random-to' doesn't work', modules need to be in the shared folder
var logger = require('../shared/logger');
// changed in portal

function insert(item, user, request) {
    console.log(item);
    //tables.getTables('log');
    item.text =  item.text + " FOO" + random.from0upto(3);
	item.created = new Date();
	request.execute({ success: insertAuditEntry });

    function insertAuditEntry() {
		logger.insertLogEntry(request, tables.getTable('Log'), 'inserted', item.id, user);
    }
}