class QueryBuilder implements QueryBuilderInterface {
	/**
	 * The connection options.
	 *
	 * @type {ConnectionOptions}
	 */
	protected connections: ConnectionOptions;

	/**
	 * The field name.
	 *
	 * @type {string}
	 */
	protected name: string;

	/**
	 * The structure options.
	 *
	 * @type {StructureOptions}
	 */
	protected options: StructureOptions;

	public contextRaw: string[];

	/**
	 * Create a new QueryBuilder instance.
	 *
	 * @param  {ConnectionOptions} connections
	 * @return {QueryBuilder}
	 */
	constructor(connections: ConnectionOptions) {
		this.connections = connections;

		this.contextRaw = [];

		this.options = Object.assign({
			type: 'INT',
			size: null,
			extra: false,
			attributes: null,
			nullable: 'NOT NULL',
			index: null,
			primary: null,
			foreign: null
		});
	}

	/**
	 * Build the SQL raw query.
	 *
	 * @param  {string} queryString
	 * @return {string}
	 */
	public raw(queryString: string): this {
		this.contextRaw.push(queryString);

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
	public addColumn(field: string): this {
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

	/**
	 * Set row option give the key and value.
	 *
	 * @param {string} key
	 * @param {any}    value
	 */
	public set(key: string, value: any): void {
		this.options[key] = value;
	}

	/**
	 * Get the row option.
	 *
	 * @param  {string} key
	 * @return {any}
	 */
	public get(key: string): any {
		const value = this.options[key];

		if (typeof value === 'function') {
			return value();
		}

		return value ? value : undefined;
	}

	/**
	 * Set the current row as the primary key.
	 *
	 * @return {QueryBuilder}
	 */
	public primary(): this {
		this.set('primary', this.name);

		return this;
	}

	/**
	 * Set the current row as the auto increment.
	 *
	 * @return {QueryBuilder}
	 */
	public increment(): this {
		this.set('extra', 'AUTO_INCREMENT');

		return this;
	}

	/**
	 * Set the length/value current row.
	 *
	 * @param  {number} value
	 * @return {QueryBuilder}
	 */
	public size(value): this {
		this.set('size', value || null);

		return this;
	}

	/**
	 * Set the current row as the 'INT' type.
	 *
	 * @param  {number} size
	 * @return {QueryBuilder}
	 */
	public integer(size): this {
		this.size(size);

		this.set('type', `INT`);

		return this;
	}

	/**
	 * Set the current row as the 'VARCHAR' type.
	 *
	 * @param  {number} size
	 * @return {QueryBuilder}
	 */
	public string(size): this {
		this.size(size);

		this.set('type', `VARCHAR`);

		return this;
	}

	/**
	 * Set the current row can be 'NULL' value.
	 *
	 * @return {QueryBuilder}
	 */
	public nullable(): this {
		this.set('nullable', 'NULL');

		return this;
	}

	/**
	 * Create field as the 'DATE' type.
	 *
	 * @param  {string} field
	 * @return {void}
	 */
	public timestamp(field?: 'created_at' | 'updated_at'): void {
		//
	}
}

export default module.exports = QueryBuilder;
