import { useState } from 'react'
import { NodeIcon, ExpressIcon, SQLIcon, ElectronIcon, PHPIcon } from '../../../../../assets'
export function BackEndContent() {
	const [currentSectionIndex, setCurrentSectionIndex] = useState(0)

	const sections = [
		{
			name: 'Node.js',
			icon: <NodeIcon />,
			description:
				'Node.js is a server-side JavaScript runtime environment that enables building scalable and efficient network applications (APIs).',
		},
		{
			name: 'Express.js',
			icon: <ExpressIcon />,
			description:
				'Express.js is a web application framework for Node.js, simplifying the development of APIs with robust routing and middleware.',
		},
		{
			name: 'SQL',
			icon: <SQLIcon />,
			description:
				'SQL (Structured Query Language) is a domain-specific language for managing and querying relational databases.',
		},
		{
			name: 'Electron',
			icon: <ElectronIcon />,
			description:
				'Electron is a framework for building cross-platform desktop applications using web technologies and architecture. An Electron application has a renderer (front-end) process, built with HTML / CSS / JS, and a main (back-end) process, running Node.js.',
		},
		{
			name: 'PHP',
			icon: <PHPIcon />,
			description:
				'PHP is a time-tested server-side scripting language commonly used for web development, capable of creating dynamic and interactive web applications.',
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
