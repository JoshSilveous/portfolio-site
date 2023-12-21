interface TabConfiguration {
	/**
	 * The display name for the tab
	 */
	name: string
	/**
	 * The content shown when this tab is active
	 */
	content: JSX.Element
}

interface SkillSectionInfo {
	name: string
	icon: JSX.Element
	description: string
	additional_content: JSX.Element
}
