class Schema implements SchemaInterface {
	/**
	 * The query builder instance.
	 *
	 * @type {SchemaBuilderInterface}
	 */
	protected builder: SchemaBuilderInterface;

	/**
	 * Create a new Schema instance.
	 *
	 * @param  {SchemaBuilderInterface} builder
	 * @return {Schema}
	 */
	public constructor(builder: SchemaBuilderInterface) {
		this.builder = builder;
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

		this.builder.createTable(table);

		callable(this.builder);
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

export default Schema;
