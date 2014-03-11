var util = require("util"); // demonstrate node.js intellisense

exports.insertLogEntry = function(request, log, type, id, user) {
	//util.inspect(request);
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