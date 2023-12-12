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
			description: (
				<>
					<h2>Photoshop</h2>
					<p>Photoshop Description!</p>
				</>
			),
		},
		{
			name: 'After Effects',
			icon: <AfterEffectsIcon />,
			description: (
				<>
					<h2>After Effects</h2>
					<p>After Effects Description!</p>
				</>
			),
		},
		{
			name: 'Illustrator',
			icon: <IllustratorIcon />,
			description: (
				<>
					<h2>Illustrator</h2>
					<p>Illustrator Description!</p>
				</>
			),
		},
		{
			name: 'VBA',
			icon: <VBAIcon />,
			description: (
				<>
					<h2>VBA</h2>
					<p>VBA Description!</p>
				</>
			),
		},
		{
			name: 'Office',
			icon: <OfficeIcon />,
			description: (
				<>
					<h2>Office</h2>
					<p>Office Description!</p>
				</>
			),
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
			<div className='description'>{sections[currentSectionIndex].description}</div>
		</div>
	)
}
