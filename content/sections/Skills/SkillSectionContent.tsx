'use client'
import { useState } from 'react'

export function SkillSectionContent({ sections }: { sections: SkillSectionInfo[] }) {
	const [currentSectionIndex, setCurrentSectionIndex] = useState(0)

	return (
		<div className='content'>
			<div className='icon-row'>
				{sections.map((section, index) => {
					return (
						<div
							className={`icon-container ${
								index === currentSectionIndex ? 'active' : ''
							}`}
							onClick={() => setCurrentSectionIndex(index)}
							key={index}
						>
							{section.icon}
							<div className='label'>{section.name}</div>
						</div>
					)
				})}
			</div>
			{sections.map((section, index) => {
				return (
					<div className='description' hidden={index !== currentSectionIndex} key={index}>
						<h2>{section.name}</h2>
						<p>{section.description}</p>
						<div>{section.additional_content}</div>
					</div>
				)
			})}
		</div>
	)
}

declare global {
	interface SkillSectionInfo {
		name: string
		icon: JSX.Element
		description: string
		additional_content: JSX.Element
	}
}
