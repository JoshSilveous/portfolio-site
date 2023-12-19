import { useState } from 'react'
import './useTabSwitcher.scss'

export function useTabSwitcher(tabs: TabConfiguration[], defaultTabIndex?: number) {
	const [activeTabIndex, setActiveTabIndex] = useState<number>(
		defaultTabIndex !== undefined ? defaultTabIndex : 0
	)

	return (
		<div className='tab-switcher-component'>
			<div className='tab-switch-container'>
				{tabs.map((tab, index) => {
					return (
						<div
							className={`tab ${index === activeTabIndex ? 'active' : ''}`}
							onClick={() => setActiveTabIndex(index)}
						>
							{tab.name}
						</div>
					)
				})}
			</div>
			{tabs.map((tab, index) => {
				return (
					<div className='tab-content-container' hidden={index !== activeTabIndex}>
						{tab.content}
					</div>
				)
			})}
		</div>
	)
}
