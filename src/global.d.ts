interface TabConfiguration {
	/**
	 * The display name for the tab
	 */
	name: string
	/**
	 * Unique ID used within function
	 */
	id: string
	/**
	 * The content shown when this tab is active
	 */
	content: JSX.Element
}
