import Schema from './schemas/schema';
import QueryBuilder from './schemas/query-builder';

class DatabaseManager implements DatabaseManagerInterface {
	/**
	 * Connection collections.
	 *
	 * @type {ConnectionOptions}
	 */
	protected connection: ConnectionOptions;

	/**
	 * Create a new DatabaseManager instance.
	 *
	 * @return {DatabaseManager}
	 */
	constructor() {
		this.connection = Object.create(null);
	}

	/**
	 * Set a new connection associated the driver name.
	 *
	 * @param  {object} options The connection options.
	 * @return {void}
	 *
	 * @throws {Error}
	 */
	public setConnection(options: ConnectionOptions): void {
		options = Object.assign({driver: null}, options);

		if (typeof options.driver !== 'string' || !options.driver) {
			throw new Error('Invalid connection options');
		}

		this.connection = Object.seal(options);
	}

	/**
	 * Check if the driver was bound.
	 *
	 * @param  {string}  driver The driver name.
	 * @return {Boolean}
	 */
	public hasConnection(driver: string): boolean {
		return this.connection.driver === driver;
	}

	/**
	 * Get the connection driver.
	 *
	 * @return {ConnectionOptions}
	 */
	public getConnection(): ConnectionOptions {
		return this.connection;
	}

	/**
	 * Factory schema.
	 *
	 * @returns {Schema}
	 */
	public schema(): SchemaInterface {
		return new Schema(new QueryBuilder(this.connection));
	}
}

export default module.exports = DatabaseManager;
