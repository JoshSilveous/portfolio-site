import { useEffect, useRef, useState } from 'react'
import { stringToSpanCharArray, stringToSpanWordArray } from '../functions'
import './NavBar.scss'
export function NavBar() {
	const [isFullscreen, setIsFullscreen] = useState(true)

	useEffect(() => {
		function handleFullscreenChange() {
			if (window.scrollY === 0) {
				setIsFullscreen(true)
			} else {
				setIsFullscreen(false)
			}
		}
		window.addEventListener('scroll', handleFullscreenChange)
		return () => {
			window.removeEventListener('scroll', handleFullscreenChange)
		}
	}, [])
	// need to fix height of paragraphs when scrolling down.
	// maybe make a function that can calculate the client height of an element?
	const splashParagraph =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ' +
		'do eiusmod tempor incididunt ut labore et dolore magna ' +
		'aliqua. Ullamcorper morbi tincidunt ornare massa eget ' +
		'egestas purus viverra. Ante in nibh mauris cursus mattis ' +
		'molestie a. Faucibus turpis in eu mi. Eu feugiat pretium ' +
		'nibh ipsum consequat. Rhoncus mattis rhoncus urna neque ' +
		'viverra justo nec. Velit dignissim sodales ut eu sem integer ' +
		'vitae justo eget. Facilisi etiam dignissim diam quis enim. ' +
		'Rhoncus dolor purus non enim praesent elementum facilisis ' +
		'leo. In pellentesque massa placerat duis ultricies lacus ' +
		'sed. Mus mauris vitae ultricies leo. Aliquam faucibus purus ' +
		'in massa tempor nec. Fermentum et sollicitudin ac orci ' +
		'phasellus egestas tellus. Nisl tincidunt eget nullam non ' +
		'nisi est sit amet facilisis.'
	const testRef = useRef<HTMLParagraphElement>(null)
	useEffect(() => {
		const timeoutID = setTimeout(() => {
			testRef.current!.classList.add('height-animation-triggered')
			clearTimeout(timeoutID)
		}, 2000)
	}, [])

	console.log(stringToSpanWordArray(splashParagraph))
	return (
		<div className={`navbar ${isFullscreen ? 'fullscreen' : ''}`}>
			<div className='splash-info'>
				<h1>{stringToSpanCharArray('Joshua Silveous', 0, 0.05)}</h1>
				<p ref={testRef}>
					{stringToSpanWordArray(splashParagraph, 2, 0.015)}
				</p>
			</div>
			<div className='anchor-container'>
				<div className='anchor-link' style={{ animationDelay: '4.8s' }}>
					Example A
				</div>
				<div className='anchor-link' style={{ animationDelay: '4.6s' }}>
					Example B
				</div>
				<div className='anchor-link' style={{ animationDelay: '4.4s' }}>
					Example C
				</div>
				<div className='anchor-link' style={{ animationDelay: '4.6s' }}>
					Example D
				</div>
				<div className='anchor-link' style={{ animationDelay: '4.8s' }}>
					Example E
				</div>
			</div>
		</div>
	)
}
