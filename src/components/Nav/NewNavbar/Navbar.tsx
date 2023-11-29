import { useEffect, useRef, useState } from 'react'
import {
	stringToSpanCharArray,
	stringToSpanWordArray,
} from '../../../functions'
import { SPLASH_PARAGRAPH } from '../../SPLASH_PARAGRAPH'
import './Navbar.scss'

export function Navbar() {
	const [isFullscreen, setIsFullscreen] = useState(true)
	const testRef = useRef<HTMLParagraphElement>(null)

	const NAME = stringToSpanCharArray('Joshua Silveous', 0.5, 0.05)
	const PARAGRAPH = stringToSpanWordArray(SPLASH_PARAGRAPH, 2.5, 0.015)

	useEffect(() => {
		const elem = testRef.current!
		const defaultHeight = elem.scrollHeight
		console.log('offsetHeight:', elem.offsetHeight)
		console.log('scrollHeight:', elem.scrollHeight)
		console.log('clientHeight:', elem.clientHeight)
		console.log('style.height:', elem.style.height)
		console.log('style.maxHeight:', elem.style.maxHeight)
		console.log('style.minHeight:', elem.style.minHeight)
		console.log('style.lineHeight:', elem.style.lineHeight)
	}, [])

	return (
		<div className={`navbar ${isFullscreen ? 'fullscreen' : 'minimized'}`}>
			<div className='splash-info'>
				<h1 className='name'>{NAME}</h1>
				<p className='text' ref={testRef}>
					{PARAGRAPH}
				</p>
			</div>
			<div className='anchor-container'>
				<div className='anchor-link' style={{ animationDelay: '5.3s' }}>
					About Me
				</div>
				<div className='anchor-link' style={{ animationDelay: '5.5s' }}>
					Skills
				</div>
				<div className='anchor-link' style={{ animationDelay: '5.7s' }}>
					Projects
				</div>
				<div className='anchor-link' style={{ animationDelay: '5.9s' }}>
					Experience
				</div>
				<div className='anchor-link' style={{ animationDelay: '6.1s' }}>
					Contact Info
				</div>
			</div>
		</div>
	)
}
