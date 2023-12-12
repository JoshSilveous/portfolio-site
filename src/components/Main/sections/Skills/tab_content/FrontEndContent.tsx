import { useState } from 'react'
import {
	CSSIcon,
	HTMLIcon,
	JavaScriptIcon,
	ReactRouterIcon,
	ReactIcon,
	SassIcon,
	TypeScriptIcon,
	LottieIcon,
} from '../../../../../assets'

export function FrontEndContent() {
	const [currentSectionIndex, setCurrentSectionIndex] = useState(0)

	const sections = [
		{
			name: 'CSS',
			icon: <CSSIcon />,
			description: (
				<>
					<h2>CSS</h2>
					<p>CSS Description!</p>
				</>
			),
		},
		{
			name: 'HTML',
			icon: <HTMLIcon />,
			description: (
				<>
					<h2>HTML</h2>
					<p>HTML Description!</p>
				</>
			),
		},
		{
			name: 'JavaScript',
			icon: <JavaScriptIcon />,
			description: (
				<>
					<h2>JavaScript</h2>
					<p>JavaScript Description!</p>
				</>
			),
		},
		{
			name: 'React Router',
			icon: <ReactRouterIcon />,
			description: (
				<>
					<h2>React Router</h2>
					<p>React Router Description!</p>
				</>
			),
		},
		{
			name: 'React',
			icon: <ReactIcon />,
			description: (
				<>
					<h2>React</h2>
					<p>React Description!</p>
				</>
			),
		},
		{
			name: 'Sass',
			icon: <SassIcon />,
			description: (
				<>
					<h2>Sass</h2>
					<p>Sass Description!</p>
				</>
			),
		},
		{
			name: 'TypeScript',
			icon: <TypeScriptIcon />,
			description: (
				<>
					<h2>TypeScript</h2>
					<p>TypeScript Description!</p>
				</>
			),
		},
		{
			name: 'Lottie',
			icon: <LottieIcon />,
			description: (
				<>
					<h2>Lottie</h2>
					<p>Lottie Description!</p>
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
