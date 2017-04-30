class Modifier {
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
}

export default Modifier;
