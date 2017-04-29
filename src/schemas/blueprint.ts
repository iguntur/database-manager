import QueryBuilder from './query-builder';

class Blueprint extends QueryBuilder implements MigrationBaseInterface, MigrationColumnInterface {
	/**
	 * The connection options.
	 *
	 * @type {object}
	 */
	protected connections: ConnectionOptions;

	/**
	 * The querie collections.
	 *
	 * @type {Array<string>}
	 */
	protected queries: Array<string>;

	/**
	 * Create a new Blueprint instance.
	 *
	 * @param {object} connections
	 */
	public constructor(connections: ConnectionOptions) {
		super();
		this.connections = connections;
		this.queries = [];
	}

	/**
	 * Set the current field / columns as the 'first' type.
	 *
	 * @return {this}
	 */
	public first(): this {
		return this;
	}

	/**
	 * Set the current field / columns as the 'last' type.
	 *
	 * @return {this}
	 */
	public last(): this {
		return this;
	}

	/**
	 * Set the current field / columns as the 'after' type.
	 *
	 * @param  {string} column
	 * @return {this}
	 */
	public after(column: string): this {
		return this;
	}

	/**
	 * Set the current field / columns as the 'before' type.
	 *
	 * @param  {string} column
	 * @return {this}
	 */
	public before(column: string): this {
		return this;
	}

	/**
	 * Set the current field / columns as the 'default' type.
	 *
	 * @param  {any}  value
	 * @return {this}
	 */
	public default(value: any): this {
		return this;
	}

	/**
	 * Set the current field / columns as the 'nullable' type.
	 *
	 * @return {this}
	 */
	public nullable(): this {
		return this;
	}

	/**
	 * Set the current field / columns as the 'unsigned' type.
	 *
	 * @return {this}
	 */
	public unsigned(): this {
		return this;
	}

	/**
	 * Set the current field / columns as the 'comment' type.
	 *
	 * @param  {string} comment
	 * @return {this}
	 */
	public comment(comment: string): this {
		return this;
	}

	/**
	 * Set the current row as the primary key.
	 *
	 * @return {QueryBuilder}
	 */
	public primary(field: string): this {
		return this.addColumn('INT', field);
	}

	/**
	 * Set the current row as the auto increment.
	 *
	 * @return {QueryBuilder}
	 */
	public increment(field): this {
		return this.addColumn('INT', field);
	}

	/**
	 * Set the current row as the 'INT' type.
	 *
	 * @param  {string}       field
	 * @return {QueryBuilder}
	 */
	public integer(field): this {
		return this.addColumn('INT', field);
	}

	/**
	 * Set the current row as the 'VARCHAR' type.
	 *
	 * @param  {number} size
	 * @return {QueryBuilder}
	 */
	public string(field: string, size?: number): this {
		size = size || 255;
		return this.addColumn(`VARCHAR(${size})`, field);
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

export default Blueprint;
