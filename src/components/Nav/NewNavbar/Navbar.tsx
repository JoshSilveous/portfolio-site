import { useEffect, useRef, useState } from 'react'
import {
	stringToSpanCharArray,
	stringToSpanWordArray,
} from '../../../functions'
import { SPLASH_PARAGRAPH } from '../../SPLASH_PARAGRAPH'
import './Navbar.scss'
import { transitionHeightClosedToOpen } from '../../../functions'

export function Navbar() {
	const [isFullscreen, setIsFullscreen] = useState(true)
	const paragraphRef = useRef<HTMLParagraphElement>(null)
	const anchorContainerRef = useRef<HTMLParagraphElement>(null)

	const NAME = stringToSpanCharArray('Joshua Silveous', 0.5, 0.05)
	const PARAGRAPH = stringToSpanWordArray(SPLASH_PARAGRAPH, 2.5, 0.015)

	useEffect(() => {
		const paragraphElem = paragraphRef.current!
		const anchorContainerElem = anchorContainerRef.current!

		transitionHeightClosedToOpen(paragraphElem, 2.5, 2)
		transitionHeightClosedToOpen(anchorContainerElem, 4, 2)
	}, [])

	return (
		<div className={`navbar ${isFullscreen ? 'fullscreen' : 'minimized'}`}>
			<div className='splash-info'>
				<h1 className='name'>{NAME}</h1>
				<p className='text' ref={paragraphRef}>
					{PARAGRAPH}
				</p>
			</div>
			<div className='anchor-container' ref={anchorContainerRef}>
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
