import { useState } from 'react'
import './useTabSwitcher.scss'

export function useTabSwitcher(tabs: TabConfiguration[], defaultTab?: string) {
	let firstTab: string
	if (defaultTab === undefined) {
		firstTab = tabs[0].id
	} else {
		firstTab = defaultTab
	}

	const [activeTabID, setActiveTabID] = useState(firstTab)

	function handleTabClick(e: React.MouseEvent) {
		setActiveTabID((e.target as HTMLDivElement).dataset.tabname!)
	}

	const tabsDisplay = tabs.map((tab) => {
		return (
			<div
				className={`tab ${activeTabID === tab.id ? 'active' : ''}`}
				data-tabname={tab.id}
				onClick={handleTabClick}
			>
				{tab.name}
			</div>
		)
	})

	const activeTab = tabs.find((tab) => tab.id === activeTabID)

	if (activeTab === undefined) {
		throw new Error(`Tab ID "${activeTabID}" not found.`)
	}

	return (
		<div className='tab-switcher-component'>
			<div className='tab-switch-container'>{tabsDisplay}</div>
			<div className='tab-content-container'>{activeTab.content}</div>
		</div>
	)
}
