import { useEffect, useState } from 'react'
import './NavBar.scss'
export function NavBar() {
	const [isFullscreen, setIsFullscreen] = useState(false)

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

	return (
		<div className={`navbar ${isFullscreen ? 'fullscreen' : ''}`}>
			<div className='splash-info'>
				<h1>Joshua Silveous</h1>
				<p>Blah blah blah</p>
			</div>
			<div className='anchor-container'>
				<div>Example A</div>
				<div>Example B</div>
				<div>Example C</div>
				<div>Example D</div>
				<div>Example E</div>
			</div>
		</div>
	)
}
