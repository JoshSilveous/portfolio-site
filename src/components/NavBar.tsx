import { useEffect, useRef, useState } from 'react'
import {
	animateHeightOpening,
	stringToSpanCharArray,
	stringToSpanWordArray,
} from '../functions'
import './NavBar.scss'
import { SPLASH_PARAGRAPH } from './SPLASH_PARAGRAPH'
export function NavBar() {
	const spacer1Ref = useRef<HTMLDivElement>(null)
	const spacer2Ref = useRef<HTMLDivElement>(null)
	const paragraphRef = useRef<HTMLParagraphElement>(null)
	const anchorContainerRef = useRef<HTMLDivElement>(null)
	const splashInfoRef = useRef<HTMLDivElement>(null)
	const navbarRef = useRef<HTMLDivElement>(null)

	const [isFullscreen, setIsFullscreen] = useState(window.scrollY === 0)

	// Toggle isFullscreen depending on where the scroll position is.
	useEffect(() => {
		let currentlyFullscreen = isFullscreen
		function handleFullscreenChange() {
			if (window.scrollY === 0) {
				currentlyFullscreen = true
				setIsFullscreen(true)
			} else if (currentlyFullscreen) {
				currentlyFullscreen = false
				setIsFullscreen(false)
			}
		}
		window.addEventListener('scroll', handleFullscreenChange)
		return () => {
			window.removeEventListener('scroll', handleFullscreenChange)
		}
	}, [])

	// Adjust load animation behavior depending on the user's scroll position upon loading.
	useEffect(() => {
		if (window.scrollY === 0) {
			// Initial load animation if fullscreen
			document.body.style.overflow = 'hidden'

			animateHeightOpening(spacer1Ref.current!, 2500)
			animateHeightOpening(spacer2Ref.current!, 2500)
			animateHeightOpening(paragraphRef.current!, 2500)
			animateHeightOpening(anchorContainerRef.current!, 2500)

			const thisTimeout = setTimeout(() => {
				document.body.style.overflow = ''
				clearTimeout(thisTimeout)
			}, 7100)
		} else {
			// If not loaded fullscreen, shorten the animation delay for the links in the NavBar.
			let animDelay = 1
			anchorContainerRef.current!.childNodes.forEach((childNode) => {
				;(childNode as HTMLDivElement).style.animationDelay =
					animDelay + 's'
				animDelay += 0.2
			})

			/* 	Some browsers set the window.scrollY at 0 initially, even if the
			browser starts at a different position. This causes a visual bug where
			the NavBar plays the 'closing' animation immediately on load.
			This useEffect fixes that. */
			navbarRef.current!.style.transition = 'height 0s'
			const loadHeightFixTimeout = setTimeout(() => {
				navbarRef.current!.style.transition = ''
				clearTimeout(loadHeightFixTimeout)
			}, 50)
		}
	}, [])

	// Handling splashInfo height changes
	useEffect(() => {
		if (window.scrollY !== 0) {
			/* If user is exiting fullscreen, switch the splash-info div's height to 
			a `px` value instead of auto, then quickly change it to `0px`.
			This allows the height animation to play. */
			splashInfoRef.current!.style.height =
				splashInfoRef.current!.scrollHeight + 'px'
			const adjustHeightTimeout = setTimeout(() => {
				splashInfoRef.current!.style.height = '0px'
				clearTimeout(adjustHeightTimeout)
			}, 10)
		} else {
			/* If user is entering fullscreen, switch the splash-info's height to
			it's scrollheight. Then, after the animation finishes, change it to 'auto'
			for responsivity */
			splashInfoRef.current!.style.height =
				splashInfoRef.current!.scrollHeight + 'px'
			const adjustHeightTimeout = setTimeout(() => {
				splashInfoRef.current!.style.height = 'auto'
				clearTimeout(adjustHeightTimeout)
			}, 400)
		}
	}, [isFullscreen])

	return (
		<div
			className='navbar'
			style={{ height: isFullscreen ? '100vh' : '80px' }}
			ref={navbarRef}
		>
			<div className='splash-info' ref={splashInfoRef}>
				<h1>{stringToSpanCharArray('Joshua Silveous', 0.5, 0.05)}</h1>
				<div className='spacer' ref={spacer1Ref} />
				<p ref={paragraphRef}>
					{stringToSpanWordArray(SPLASH_PARAGRAPH, 2.5, 0.015)}
				</p>
				<div className='spacer' ref={spacer2Ref} />
			</div>
			<div className='anchor-container' ref={anchorContainerRef}>
				<div className='anchor-link' style={{ animationDelay: '5.3s' }}>
					Example A
				</div>
				<div className='anchor-link' style={{ animationDelay: '5.5s' }}>
					Example B
				</div>
				<div className='anchor-link' style={{ animationDelay: '5.7s' }}>
					Example C
				</div>
				<div className='anchor-link' style={{ animationDelay: '5.9s' }}>
					Example D
				</div>
				<div className='anchor-link' style={{ animationDelay: '6.1s' }}>
					Example E
				</div>
			</div>
		</div>
	)
}
