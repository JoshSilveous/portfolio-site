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
			name: 'HTML',
			icon: <HTMLIcon />,
			description: (
				<>
					<h2>HTML</h2>
					<p>
						HTML (Hypertext Markup Language) is the foundation of web development, used
						to structure and present content on the internet.
					</p>
				</>
			),
		},
		{
			name: 'CSS',
			icon: <CSSIcon />,
			description: (
				<>
					<h2>CSS</h2>
					<p>
						CSS (Cascading Style Sheets) is responsible for styling web pages,
						controlling layout, and enhancing the visual appeal of websites. CSS goes
						hand-in-hand with HTML to create a page's UI.
					</p>
				</>
			),
		},
		{
			name: 'JavaScript',
			icon: <JavaScriptIcon />,
			description: (
				<>
					<h2>JavaScript</h2>
					<p>
						JavaScript is a versatile programming language that adds interactivity and
						dynamic behavior to web applications. JavaScript can also be used as a
						back-end service (using Node.js), allowing applications, APIs, and server
						programs to be built on JavaScript.
					</p>
				</>
			),
		},
		{
			name: 'TypeScript',
			icon: <TypeScriptIcon />,
			description: (
				<>
					<h2>TypeScript</h2>
					<p>
						TypeScript brings type safety to JavaScript, providing reliable code and
						developer productivity.
					</p>
				</>
			),
		},
		{
			name: 'React',
			icon: <ReactIcon />,
			description: (
				<>
					<h2>React</h2>
					<p>
						React is a popular JavaScript library for building user interfaces, offering
						a component-based architecture and efficient rendering.
					</p>
				</>
			),
		},
		{
			name: 'React Router',
			icon: <ReactRouterIcon />,
			description: (
				<>
					<h2>React Router</h2>
					<p>
						React Router is a routing library for React applications, streamlining
						navigation and URL route handling in a single-page application.
					</p>
				</>
			),
		},
		{
			name: 'Sass',
			icon: <SassIcon />,
			description: (
				<>
					<h2>Sass</h2>
					<p>
						Sass (Syntactically Awesome Style Sheets) is a CSS preprocessor that
						simplifies stylesheet authoring with variables, mixins, nested styles, and
						more.
					</p>
				</>
			),
		},
		{
			name: 'Lottie',
			icon: <LottieIcon />,
			description: (
				<>
					<h2>Lottie</h2>
					<p>
						Lottie is an animation library that allows the integration of high-quality
						animations into web and mobile applications with ease.
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
