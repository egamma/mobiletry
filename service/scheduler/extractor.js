/*global tables*/

function extractor() {
	var warehouse = tables.getTable('Warehouse');
	var todoItemTable = tables.getTable('TodoItem');
	todoItemTable.where({
		complete: false
	}).read({
		success: handleResult
	});

	function handleResult(items) {
		var warehouse = tables.getTable('Warehouse');
		var entry = {
			timestamp: new Date(),
			openCount: items.length
		};
		warehouse.insert(entry, {
			success: function() {
			}
		});
	}
}