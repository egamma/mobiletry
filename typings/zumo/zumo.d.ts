interface IUser {
	level: string; // "admin", "anonymous", "authenticated"  -> zumo should define an object with these values
	userId: string;
}

interface IResultOptions {
	success?: (result) => void;
	error?: (error) => void;
}

interface IRequest {
	execute(options?:IResultOptions);
	respond(err?:Error);
	respond(statusCode:statusCodes, body:string);  
}

declare enum statusCodes {
	OK,
	CREATED,
	ACCEPTED,
	NO_CONTENT,
	BAD_REQUEST,
	UNAUTHORIZED,
	FORBIDDEN,
	NOT_FOUND,
	CONFLICT, 
	INTERNAL_SERVER_ERROR
}

interface IQuery {
	orderBy(...args:any[]):IQuery;
	orderByDescending(...args:any[]):IQuery;
	read(options:IResultOptions);
	where(filter);
	select(...args:any[]):IQuery;
	skip(count:number):IQuery;
	take(count:number):IQuery;
}

interface ITable {
	insert();
	read(options:IResultOptions);
	select(query:string):IQuery;
	skip(recordCount:number):IQuery;
	select(string):IQuery;
	select(projection:()=>void):IQuery;
}
/**
 * Tables accessor
 */
interface ITables {
	/**
	 * Get a table with the given name
	 */
	getTables(tableName:string):ITable;
}

interface IWindowsNotificationServices {
	sendTileSquareBlock(channel:string, payload, options?, callback?:(err:Error, result) => void);
	//...
}

interface IPush {
	wns: IWindowsNotificationServices;
}

interface IMSSQL {
	query(sql:string, params, options:IResultOptions);
}

declare var tables:ITables;
declare var push:IPush;
declare var mssql:IMSSQL;
