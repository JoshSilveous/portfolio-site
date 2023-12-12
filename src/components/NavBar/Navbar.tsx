import { useEffect, useRef, useState } from 'react'
import { setDelay, stringToSpanCharArray, stringToSpanWordArray } from '../../functions'
import { SPLASH_PARAGRAPH } from '../SPLASH_PARAGRAPH'
import './Navbar.scss'
import { transitionHeightClosedToOpen } from '../../functions'
import {
	AboutMeIcon,
	ContactInfoIcon,
	ExperienceIcon,
	ProjectsIcon,
	SkillsIcon,
} from '../../assets'

export function Navbar() {
	const [isFullscreen, setIsFullscreen] = useState(window.scrollY === 0)

	const paragraphRef = useRef<HTMLParagraphElement>(null)
	const anchorContainerRef = useRef<HTMLParagraphElement>(null)
	const navbarRef = useRef<HTMLDivElement>(null)

	const FIRST_NAME = stringToSpanCharArray('Joshua', 0.5, 0.05)
	const LAST_NAME = stringToSpanCharArray('Silveous', 0.8, 0.05)
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
			if (node instanceof HTMLAnchorElement) {
				node.style.animationDelay = anchorContainerAnimDelay + 's'
				anchorContainerAnimDelay += 0.2
			}
		})
	}, [])

	return (
		<div className={`navbar ${isFullscreen ? 'fullscreen' : 'minimized'}`} ref={navbarRef}>
			<div className='wrapper'>
				<div className='splash-info'>
					<h1 className='name'>
						<div className='first-name'>{FIRST_NAME}</div>
						<div className='last-name'>{LAST_NAME}</div>
					</h1>
					<p className='text' ref={paragraphRef}>
						{PARAGRAPH}
					</p>
				</div>
				<div className='anchor-container' ref={anchorContainerRef}>
					<a className='anchor-link' href='#about-me'>
						<div className='text'>About Me</div>
						<div className='icon'>
							<AboutMeIcon />
						</div>
					</a>
					<a className='anchor-link' href='#skills'>
						<div className='text'>Skills</div>
						<div className='icon'>
							<SkillsIcon />
						</div>
					</a>
					<a className='anchor-link' href='#projects'>
						<div className='text'>Projects</div>
						<div className='icon'>
							<ProjectsIcon />
						</div>
					</a>
					<a className='anchor-link' href='#experience'>
						<div className='text'>Experience</div>
						<div className='icon'>
							<ExperienceIcon />
						</div>
					</a>
					<a className='anchor-link' href='#contact-info'>
						<div className='text'>Contact Info</div>
						<div className='icon'>
							<ContactInfoIcon />
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}
