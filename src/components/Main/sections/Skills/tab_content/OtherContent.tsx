import { useState } from 'react'
import {
	PhotoshopIcon,
	AfterEffectsIcon,
	IllustratorIcon,
	VBAIcon,
	OfficeIcon,
} from '../../../../../assets'
export function OtherContent() {
	const [currentSectionIndex, setCurrentSectionIndex] = useState(0)

	const sections = [
		{
			name: 'Photoshop',
			icon: <PhotoshopIcon />,
			description:
				'Adobe Photoshop is a powerful graphics editing software used for image manipulation, design, and digital art creation.',
		},
		{
			name: 'After Effects',
			icon: <AfterEffectsIcon />,
			description:
				'Adobe After Effects is a motion graphics and visual effects software used for creating animations, compositing, and video post-production.',
		},
		{
			name: 'Illustrator',
			icon: <IllustratorIcon />,
			description:
				'Adobe Illustrator is a vector graphics design software used for creating scalable and high-quality illustrations, logos, and graphics.',
		},
		{
			name: 'Office',
			icon: <OfficeIcon />,
			description:
				'Microsoft Office is a suite of productivity software, including applications like Word, Excel, PowerPoint, and Outlook, widely used for document creation, data analysis, and communication.',
		},
		{
			name: 'VBA',
			icon: <VBAIcon />,
			description:
				'VBA is a programming language developed by Microsoft for automating tasks within applications like Excel, Word, and Access.',
		},
	]
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
			<div className='description'>
				<h2>{sections[currentSectionIndex].name}</h2>
				<p>{sections[currentSectionIndex].description}</p>
			</div>
		</div>
	)
}
