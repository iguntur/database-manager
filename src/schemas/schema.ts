class Schema implements SchemaInterface {
	/**
	 * The query builder instance.
	 *
	 * @type {QueryBuilderInterface}
	 */
	protected queryBuilder: QueryBuilderInterface;

	/**
	 * Create a new Schema instance.
	 *
	 * @param  {QueryBuilderInterface} queryBuilder
	 * @return {Schema}
	 */
	constructor(queryBuilder: QueryBuilderInterface) {
		this.queryBuilder = queryBuilder;
	}

	/**
	 * Create a new schema.
	 *
	 * @param  {string}   table
	 * @param  {Function} callable
	 * @return {void}
	 */
	public create(table: string, callable: Function): void {
		if (typeof table !== 'string') {
			throw new TypeError(`Expected 'table' to be of type 'string', got ${typeof table}`);
		}

		this.queryBuilder.createTable(table);

		callable(this.queryBuilder);
	}

	/**
	 * Drop database table.
	 *
	 * @param  {string} table
	 * @return {void}
	 */
	public drop(table: string): void {
		//
	}

	/**
	 * Drop database table if exists.
	 *
	 * @param  {string} table
	 * @return {void}
	 */
	public dropIfExist(table: string): void {
		//
	}
}

export default module.exports = Schema;
