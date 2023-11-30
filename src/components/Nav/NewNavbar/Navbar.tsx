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

	// Toggle isFullscreen depending on where the scroll position is.
	useEffect(() => {
		let currentlyFullscreen = isFullscreen
		function handleFullscreenChange() {
			if (window.scrollY === 0) {
				setIsFullscreen(true)
			} else if (currentlyFullscreen) {
				setIsFullscreen(false)
			}
		}
		window.addEventListener('scroll', handleFullscreenChange)
		return () => {
			window.removeEventListener('scroll', handleFullscreenChange)
		}
	}, [])

	// loading animation
	useEffect(() => {
		const pageLoadedInFullscreen = window.scrollY === 0

		const paragraphElem = paragraphRef.current!
		const anchorContainerElem = anchorContainerRef.current!

		if (pageLoadedInFullscreen) {
			transitionHeightClosedToOpen(paragraphElem, 2.5, 2)
			transitionHeightClosedToOpen(anchorContainerElem, 4, 2)
		}

		let anchorContainerAnimDelay: number
		if (pageLoadedInFullscreen) {
			anchorContainerAnimDelay = 5.3
		} else {
			anchorContainerAnimDelay = 1
		}
		anchorContainerElem.childNodes.forEach((node) => {
			if (node instanceof HTMLDivElement) {
				node.style.animationDelay = anchorContainerAnimDelay + 's'
				anchorContainerAnimDelay += 0.2
			}
		})
	}, [])

	return (
		<div className={`navbar ${isFullscreen ? 'fullscreen' : 'minimized'}`}>
			<div className='wrapper'>
				<div className='splash-info'>
					<h1 className='name'>{NAME}</h1>
					<p className='text' ref={paragraphRef}>
						{PARAGRAPH}
					</p>
				</div>
				<div className='anchor-container' ref={anchorContainerRef}>
					<div className='anchor-link'>About Me</div>
					<div className='anchor-link'>Skills</div>
					<div className='anchor-link'>Projects</div>
					<div className='anchor-link'>Experience</div>
					<div className='anchor-link'>Contact Info</div>
				</div>
			</div>
		</div>
	)
}
