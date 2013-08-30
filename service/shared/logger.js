/*global tables*/
exports.insertLogEntry = function(request, log, type, id, user) {
	var audit = {
		record: type,
		recordId: id,
		timestamp: new Date(),
		user: user
	};
	log.insert(audit, {
		success: function() {
			// Write to the response now that all data operations are complete
			request.respond();
		}
	});
}