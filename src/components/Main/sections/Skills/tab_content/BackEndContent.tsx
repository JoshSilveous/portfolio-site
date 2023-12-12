import { useState } from 'react'
import { NodeIcon, ExpressIcon, SQLIcon, ElectronIcon, PHPIcon } from '../../../../../assets'
export function BackEndContent() {
	const [currentSectionIndex, setCurrentSectionIndex] = useState(0)

	const sections = [
		{
			name: 'Node.js',
			icon: <NodeIcon />,
			description: (
				<>
					<h2>Node.js</h2>
					<p>Node.js Description!</p>
				</>
			),
		},
		{
			name: 'Express.js',
			icon: <ExpressIcon />,
			description: (
				<>
					<h2>Express.js</h2>
					<p>Express.js Description!</p>
				</>
			),
		},
		{
			name: 'SQL',
			icon: <SQLIcon />,
			description: (
				<>
					<h2>SQL</h2>
					<p>SQL Description!</p>
				</>
			),
		},
		{
			name: 'Electron',
			icon: <ElectronIcon />,
			description: (
				<>
					<h2>Electron</h2>
					<p>Electron Description!</p>
				</>
			),
		},
		{
			name: 'PHP',
			icon: <PHPIcon />,
			description: (
				<>
					<h2>PHP</h2>
					<p>PHP Description!</p>
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
