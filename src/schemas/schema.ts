import DatabaseManager from '../';
import QueryBuilder from './query-builder';
import Migrator from './migrator';

class Schema implements SchemaInterface {
	/**
	 * The database manager instance;
	 *
	 * @type {DatabaseManager}
	 */
	public database: DatabaseManager;

	/**
	 * Create a new Schema instance.
	 *
	 * @param  {DatabaseManager} database
	 * @return {Schema}
	 */
	public constructor(database: DatabaseManager) {
		if (! (database instanceof DatabaseManager)) {
			throw new TypeError('class Schema require DatabaseManager interface');
		}

		this.database = database;
	}

	/**
	 * Create a new schema.
	 *
	 * @param  {string}   table
	 * @param  {Function} callable
	 * @return {void}
	 */
	public create(table: string, callable: (implement: Migrator) => void): void {
		if (typeof table !== 'string') {
			throw new TypeError(`Expected 'table' to of type 'string', got ${typeof table}`);
		}

		if (typeof callable !== 'function') {
			throw new TypeError(`Expected 'callable' to of type 'function', got ${typeof callable}`);
		}

		const queryBuilder = new QueryBuilder(this);

		queryBuilder.createTable(table);

		return callable(new Migrator(queryBuilder));
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
