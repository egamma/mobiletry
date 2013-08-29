/*global tables*/
function del(id, user, request) {
	request.execute({ success: insertAuditEntry });

    function insertAuditEntry() {
        var auditTable = tables.getTable('Log');
        var audit = {
            record: 'deleted',
            recordId: id,
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