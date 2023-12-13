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
					<p>
						Adobe Photoshop is a powerful graphics editing software used for image
						manipulation, design, and digital art creation.
					</p>
				</>
			),
		},
		{
			name: 'After Effects',
			icon: <AfterEffectsIcon />,
			description: (
				<>
					<h2>After Effects</h2>
					<p>
						Adobe After Effects is a motion graphics and visual effects software used
						for creating animations, compositing, and video post-production.
					</p>
				</>
			),
		},
		{
			name: 'Illustrator',
			icon: <IllustratorIcon />,
			description: (
				<>
					<h2>Illustrator</h2>
					<p>
						Adobe Illustrator is a vector graphics design software used for creating
						scalable and high-quality illustrations, logos, and graphics.
					</p>
				</>
			),
		},
		{
			name: 'Office',
			icon: <OfficeIcon />,
			description: (
				<>
					<h2>Office</h2>
					<p>
						Microsoft Office is a suite of productivity software, including applications
						like Word, Excel, PowerPoint, and Outlook, widely used for document
						creation, data analysis, and communication.
					</p>
				</>
			),
		},
		{
			name: 'VBA',
			icon: <VBAIcon />,
			description: (
				<>
					<h2>VBA</h2>
					<p>
						VBA is a programming language developed by Microsoft for automating tasks
						within applications like Excel, Word, and Access.
					</p>
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
