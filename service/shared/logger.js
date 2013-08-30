/*global tables*/
exports.insertLogEntry = function(request, log, type, id, user) {
	var audit = {
		record: type,
		recordId: id,
		timestamp: new Date(),
		user: JSON.stringify(user)
	};
	log.insert(audit, {
		success: function() {
			request.respond();
		}
	});
}