# Tables

<<<<<<< HEAD
The 'table' folder in your repository contains: 
=======
The 'table' folder in your repository contains:
>>>>>>> 9886c884f7f2451b3f8cf8c3b81e9a66e0c8d972

- table scripts that are invoked when requests are made to your backend to read or write data 
- metadata files that determine the permissions that should be applied to operations against the tables.
 
## Table Script

For up-to-date information on the format of table scripts, see the [documentation](http://go.microsoft.com/fwlink/?LinkID=307138&clcid=0x409).

## Table Metadata

To specify permissions for a table, create a `<tablename>.json` file e.g. `todoitem.json`. Here is an example:

	{
	  "routes": {
	    "/": {
	      "insert": { "permission": "application" },
	      "read": { "permission": "public" },
	      "update": { "permission": "user" },
	      "delete": { "permission": "admin" }
	    }
	  }
	}
