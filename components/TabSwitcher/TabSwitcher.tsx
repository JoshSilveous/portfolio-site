'use client'
import { ReactNode, useState } from 'react'
import './TabSwitcher.scss'

interface TabSwitcherProps {
	tabs: TabSwitcherContent[]
	defaultTabIndex?: number
}
export function TabSwitcher({ tabs, defaultTabIndex }: TabSwitcherProps) {
	const [activeTabIndex, setActiveTabIndex] = useState(
		defaultTabIndex !== undefined ? defaultTabIndex : 0
	)

	// check to make sure specified defaultTabIndex actually exists in provided array
	if (defaultTabIndex !== undefined && defaultTabIndex >= tabs.length) {
		throw new Error(
			`defaultTabIndex "${defaultTabIndex} specified, but array indexes only go up to '${
				tabs.length - 1
			}!`
		)
	}

	return (
		<div className='tab-switcher-component'>
			<div className='tab-switch-container'>
				{tabs.map((tab, index) => {
					return (
						<div
							className={`tab ${index === activeTabIndex ? 'active' : ''}`}
							onClick={() => setActiveTabIndex(index)}
							key={index}
						>
							{tab.name}
						</div>
					)
				})}
			</div>
			{tabs.map((tab, index) => {
				return (
					<div
						className='tab-content-container'
						hidden={index !== activeTabIndex}
						key={index}
					>
						{tab.content}
					</div>
				)
			})}
		</div>
	)
}

declare global {
	interface TabSwitcherContent {
		/**
		 * The display name for the tab
		 */
		name: string
		/**
		 * The content shown when this tab is active
		 */
		content: ReactNode
	}
}
