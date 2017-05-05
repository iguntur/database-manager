class Migrator implements MigrationBaseInterface {
	/**
	 * The query builder instance.
	 *
	 * @type {QueryBuilder}
	 */
	protected query: QueryBuilderInterface;

	/**
	 * Create a new Migrator instance.
	 *
	 * @param {object} query
	 */
	public constructor(query: QueryBuilderInterface) {
		this.query = query;
	}

	/**
	 * Set the current row as the primary key.
	 *
	 * @return {QueryBuilder}
	 */
	public primary(field: string): this {
		this.query.addColumn('INT', field);

		return this;
	}

	/**
	 * Set the current row as the auto increment.
	 *
	 * @return {QueryBuilder}
	 */
	public increment(field): this {
		return this;
	}

	/**
	 * Set the current row as the 'INT' type.
	 *
	 * @param  {string}       field
	 * @return {QueryBuilder}
	 */
	public integer(field): this {
		return this;
	}

	/**
	 * Set the current row as the 'VARCHAR' type.
	 *
	 * @param  {number} size
	 * @return {QueryBuilder}
	 */
	public string(field: string, size?: number): this {
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

export default Migrator;
