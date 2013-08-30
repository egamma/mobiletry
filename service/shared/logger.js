/*global tables*/
exports.insertLogEntry = function(request, type, id, user) {
	var auditTable = tables.getTable('Log');
	var audit = {
		record: type,
		recordId: id,
		timestamp: new Date(),
		user: user
	};
	auditTable.insert(audit, {
		success: function() {
			// Write to the response now that all data operations are complete
			request.respond();
		}
	});
}