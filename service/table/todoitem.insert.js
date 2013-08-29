/*global tables*/
var date = require('../shared/date.js');
var random = require('../shared/node_modules/random-to');  // need to add an absolute reference 'random-to' doesn't work', modules need to be in the shared folder
	
function insert(item, user, request) {
    //console.log(item);
	
    item.text =  item.text + " (" + date.now() + ")" + " P" + random.from0upto(3);
	item.created = new Date();
	request.execute({ success: insertAuditEntry });

    function insertAuditEntry() {
        var auditTable = tables.getTable('Log');
        var audit = {
            record: 'inserted',
            recordId: item.id,
            timestamp: new Date(),
            user: JSON.stringify(user)
        };
        auditTable.insert(audit, {
            success: function() {
                // Write to the response now that all data operations are complete
                request.respond();
            }
        });
    }
}