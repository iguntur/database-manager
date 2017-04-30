import Schema from './schema';

class QueryBuilder implements QueryBuilderInterface {
	/**
	 * The database schema options.
	 *
	 * @type {object}
	 */
	protected schema: SchemaInterface;

	/**
	 * The querie collections.
	 *
	 * @type {Array<string>}
	 */
	protected queries: Array<string>;

	/**
	 * Create a new QueryBuilder instance.
	 *
	 * @return {void}
	 */
	public constructor(schema: Schema) {
		this.schema = schema;
		this.queries = [];
	}

	/**
	 * Get the connection options.
	 *
	 * @return {ConnectionOptions}
	 */
	protected getConnection(): ConnectionOptions {
		return this.schema.database.getConnection();
	}

	/**
	 * Get the database name.
	 *
	 * @return {string}
	 */
	protected getDatabaseName(): string {
		return this.getConnection().database;
	}

	/**
	 * Build the SQL raw query.
	 *
	 * @param  {string} queryString
	 * @return {string}
	 */
	public raw(queryString: string): this {
		this.queries.push(queryString);

		return this;
	}

	/**
	 * Create a new table to database.
	 *
	 * @param  {string}       table
	 * @return {QueryBuilder}
	 */
	public createTable(table: string): this {
		const database = this.getDatabaseName();

		return this.raw(`CREATE TABLE \`${database}\`.\`${table}\``);
	}

	/**
	 * Modify table column.
	 *
	 * @return {QueryBuilder}
	 */
	public alterTable(): this {
		return this.raw(`ALTER TABLE`);
	}

	/**
	 * Add column with associated table.
	 *
	 * @param  {string} field
	 * @return {this}
	 */
	public addColumn(type: string, field: string): this {
		return this;
	}

	/**
	 * Drop column with associated table.
	 *
	 * @param  {string} field
	 * @return {this}
	 */
	public dropColumn(field: string): this {
		return this;
	}

	/**
	 * Modify column with associated table.
	 *
	 * @param  {string} field
	 * @return {this}
	 */
	public modifyColumn(field: string): this {
		return this;
	}
}

export default QueryBuilder;
