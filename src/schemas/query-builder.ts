abstract class QueryBuilder implements QueryBuilderInterface {
	/**
	 * The connection options.
	 *
	 * @type {object}
	 */
	protected abstract connections: ConnectionOptions;

	/**
	 * The querie collections.
	 *
	 * @type {Array<string>}
	 */
	protected abstract queries: Array<string>;

	/**
	 * Create a new QueryBuilder instance.
	 *
	 * @return {void}
	 */
	constructor() {
		const self = this.constructor;

		if (self === QueryBuilder) {
			throw new Error(`Cannot create an instance of the abstract class '${self.name}'.`)
		}
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
		return this.raw(`CREATE TABLE \`${this.connections.database}\`.\`${table}\``);
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
