import { useEffect, useRef, useState } from 'react'
import {
	setDelay,
	stringToSpanCharArray,
	stringToSpanWordArray,
} from '../../../functions'
import { SPLASH_PARAGRAPH } from '../../SPLASH_PARAGRAPH'
import './Navbar.scss'
import { transitionHeightClosedToOpen } from '../../../functions'

export function Navbar() {
	const [isFullscreen, setIsFullscreen] = useState(window.scrollY === 0)

	const paragraphRef = useRef<HTMLParagraphElement>(null)
	const anchorContainerRef = useRef<HTMLParagraphElement>(null)
	const navbarRef = useRef<HTMLDivElement>(null)

	const NAME = stringToSpanCharArray('Joshua Silveous', 0.5, 0.05)
	const PARAGRAPH = stringToSpanWordArray(SPLASH_PARAGRAPH, 2.5, 0.015)

	// toggle isFullscreen depending on where the scroll position is.
	useEffect(() => {
		function handleFullscreenChange() {
			if (window.scrollY === 0) {
				setIsFullscreen(true)
			} else if (isFullscreen) {
				setIsFullscreen(false)
			}
		}
		window.addEventListener('scroll', handleFullscreenChange)
		return () => {
			window.removeEventListener('scroll', handleFullscreenChange)
		}
	}, [])

	useEffect(() => {
		const pageLoadedInFullscreen = window.scrollY === 0

		const paragraphElem = paragraphRef.current!
		const anchorContainerElem = anchorContainerRef.current!
		const navbarElem = navbarRef.current!

		// height animations
		if (pageLoadedInFullscreen) {
			transitionHeightClosedToOpen(paragraphElem, 2.5, 2)
			transitionHeightClosedToOpen(anchorContainerElem, 4, 2)
		}

		// prevents visual "bug" when page is loaded non-fullscreen
		if (!pageLoadedInFullscreen) {
			navbarElem.style.transition = 'none'
			setDelay(10).then(() => {
				navbarElem.style.transition = ''
			})
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
		<div
			className={`navbar ${isFullscreen ? 'fullscreen' : 'minimized'}`}
			ref={navbarRef}
		>
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
