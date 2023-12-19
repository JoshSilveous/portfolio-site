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
						>
							{section.icon}
							<div className='label'>{section.name}</div>
						</div>
					)
				})}
			</div>
			{sections.map((section, index) => {
				return (
					<div className='description' hidden={index !== currentSectionIndex}>
						<h2>{section.name}</h2>
						<p>{section.description}</p>
						<p>{section.paragraph}</p>
					</div>
				)
			})}
		</div>
	)
}
