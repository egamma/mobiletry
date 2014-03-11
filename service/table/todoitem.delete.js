/*global tables*/
var logger = require('../shared/logger.js');

function del(id, user, request) {
	request.execute({
		success: insertAuditEntry
	});

	function insertAuditEntry() {
		logger.insertLogEntry(request, tables.getTable('Log'), 'deleted', id, user);
	}
}