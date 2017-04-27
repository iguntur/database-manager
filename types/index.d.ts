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

interface QueryBuilderInterface {
	raw: (query: string) => this;
	createTable: (table: string) => this;
	alterTable: (table: string) => this;
	addColumn: (type: string, field: string) => this;
	dropColumn: (field: string) => this;
	modifyColumn: (field: string) => this;
}

interface MigrationColumnInterface {
	first: () => this;
	last: () => this;
	after: (column: string) => this;
	before: (column: string) => this;
	default: (value: any) => this;
	nullable: () => this;
	unsigned: () => this;
	comment: (comment: string) => this;
}

interface MigrationBaseInterface {
	primary: (field: string) => this;
	increment: (field: string) => this;
	string: (field: string, size?: number) => this;
	integer: (field: string, size?: number) => this;
	timestamp: (field?: 'created_at' | 'updated_at') => void;
}

interface SchemaInterface {
	create: (table: string, callable: (implement: MigrationBaseInterface) => void) => void;
	drop: (table: string) => void;
	dropIfExist: (table: string) => void;
}

interface SchemaBuilderInterface extends QueryBuilderInterface {}

interface DatabaseManagerInterface {
	setConnection: (options: ConnectionOptions) => void;
	hasConnection: (driver: string) => boolean;
	getConnection: () => ConnectionOptions;
	schema: () => SchemaInterface;
}
