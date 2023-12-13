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
			description: `HTML (Hypertext Markup Language) is the foundation of web development, used
				to structure and present content on the internet.`,
		},
		{
			name: 'CSS',
			icon: <CSSIcon />,
			description: `CSS (Cascading Style Sheets) is responsible for styling web pages,
				controlling layout, and enhancing the visual appeal of websites. CSS goes
				hand-in-hand with HTML to create a page's UI.`,
		},
		{
			name: 'JavaScript',
			icon: <JavaScriptIcon />,
			description: `JavaScript is a versatile programming language that adds interactivity 
				and dynamic behavior to web applications. JavaScript can also be used as a back-end 
				service (using Node.js), allowing applications, APIs, and server programs to be 
				built on JavaScript.`,
		},
		{
			name: 'TypeScript',
			icon: <TypeScriptIcon />,
			description: `TypeScript brings type safety to JavaScript, providing reliable code and 
				developer productivity.`,
		},
		{
			name: 'React',
			icon: <ReactIcon />,
			description: `React is a popular JavaScript library for building user interfaces, 
				offering a component-based architecture and efficient rendering.`,
		},
		{
			name: 'React Router',
			icon: <ReactRouterIcon />,
			description: `React Router is a routing library for React applications, streamlining 
				navigation and URL route handling in a single-page application.`,
		},
		{
			name: 'Sass',
			icon: <SassIcon />,
			description: `Sass (Syntactically Awesome Style Sheets) is a CSS preprocessor that 
				simplifies stylesheet authoring with variables, mixins, nested styles, and more.`,
		},
		{
			name: 'Lottie',
			icon: <LottieIcon />,
			description: `Lottie is an animation library that allows the integration of high-quality 
				animations into web and mobile applications with ease.`,
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
