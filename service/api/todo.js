// service https://eg-mobile-try.azure-mobile.net/api/todo

exports.get = function(request, response) {
	var tables = request.service.tables;
	var todoItemTable = tables.getTable('TodoItem');
	todoItemTable.where({
		complete: false
	}).read({
		success: handleResult
	});
	function handleResult(items) {
		response.send(200, JSON.stringify(items));
	}
}