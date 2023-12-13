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
					<p>
						Node.js is a server-side JavaScript runtime environment that enables
						building scalable and efficient network applications (APIs).
					</p>
				</>
			),
		},
		{
			name: 'Express.js',
			icon: <ExpressIcon />,
			description: (
				<>
					<h2>Express.js</h2>
					<p>
						Express.js is a web application framework for Node.js, simplifying the
						development of APIs with robust routing and middleware.
					</p>
				</>
			),
		},
		{
			name: 'SQL',
			icon: <SQLIcon />,
			description: (
				<>
					<h2>SQL</h2>
					<p>
						SQL (Structured Query Language) is a domain-specific language for managing
						and querying relational databases.
					</p>
				</>
			),
		},
		{
			name: 'Electron',
			icon: <ElectronIcon />,
			description: (
				<>
					<h2>Electron</h2>
					<p>
						Electron is a framework for building cross-platform desktop applications
						using web technologies and architecture. An Electron application has a
						renderer (front-end) process, built with HTML / CSS / JS, and a main
						(back-end) process, running Node.js.
					</p>
				</>
			),
		},
		{
			name: 'PHP',
			icon: <PHPIcon />,
			description: (
				<>
					<h2>PHP</h2>
					<p>
						PHP is a time-tested server-side scripting language commonly used for web
						development, capable of creating dynamic and interactive web applications.
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
