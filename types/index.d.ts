type ConnectionOptions = {
	driver: string;
	host: string;
	database: string;
	username: string;
	password: string;
	charset: string;
	collation: string;
	prefix: string;
}

type StructureOptions = {
	type: string;
	size?: number;
	extra?: any;
	attributes?: any;
	nullable?: any;
	index?: any;
	primary?: any;
	foreign?: any;
}

type TableOptions = {
	engine?: string;
	charset?: string;
	collate?: string;
}

interface SchemaInterface {
	create: (table: string, callable: Function) => void;
	drop: (table: string) => void;
	dropIfExist: (table: string) => void;
}

interface QueryBuilderInterface {
	raw: (query: string) => QueryBuilderInterface;
	createTable: (table: string) => QueryBuilderInterface;
	alterTable: () => QueryBuilderInterface;
	addColumn: (field: string) => QueryBuilderInterface;
	dropColumn: (field: string) => QueryBuilderInterface;
	modifyColumn: (field: string) => QueryBuilderInterface;
	increment: (field: string) => QueryBuilderInterface;
	string: (field: string, size?: number) => QueryBuilderInterface;
	integer: (field: string, size?: number) => QueryBuilderInterface;
	timestamp: (field?: 'created_at' | 'updated_at') => void;
}

interface DatabaseManagerInterface {
	setConnection: (options: ConnectionOptions) => void;
	hasConnection: (driver: string) => boolean;
	getConnection: () => ConnectionOptions;
	schema: () => SchemaInterface;
}
