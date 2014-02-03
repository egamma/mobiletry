
exports.insertLogEntry = function(request, log, type, id, user) {
	var entry = {
		record: type,
		recordId: id,
		timestamp: new Date(),
		user: JSON.stringify(user)
	};
	log.insert(entry, {
		success: function() {
			request.respond();
		}
	});
}