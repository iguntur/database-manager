import * as vType from 'v-type';
import QueryBuilder from './query-builder';
import Migrator from './migrator';

class Schema implements SchemaInterface {
	/**
	 * The database manager instance;
	 *
	 * @type {DatabaseManager}
	 */
	public database: DatabaseManagerInterface;

	/**
	 * Create a new Schema instance.
	 *
	 * @param  {DatabaseManager} database
	 * @return {Schema}
	 */
	public constructor(database: DatabaseManagerInterface) {
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
		vType(table, String);
		vType(callable, Function);

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
		vType(table, String);
	}

	/**
	 * Drop database table if exists.
	 *
	 * @param  {string} table
	 * @return {void}
	 */
	public dropIfExist(table: string): void {
		vType(table, String);
	}
}

export default Schema;
