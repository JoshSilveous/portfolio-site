import { useEffect, useState } from 'react'
import './NavBar.scss'
export function NavBar() {
	const [isFullscreen, setIsFullscreen] = useState(true)

	function stringToSpanArray(string: string) {
		let animationDelay = 0
		const arr = Array.from(string).map((letter, index) => {
			const thisAnimationDelay = animationDelay
			animationDelay += 0.1
			return (
				<span
					key={index}
					style={{ animationDelay: `${thisAnimationDelay}s` }}
				>
					{letter}
				</span>
			)
		})
		return arr
	}

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
				<h1>{stringToSpanArray('Joshua Silveous')}</h1>
				<p>Blah blah blah</p>
			</div>
			<div className='anchor-container'>
				<div className='anchor-link'>Example A</div>
				<div className='anchor-link'>Example B</div>
				<div className='anchor-link'>Example C</div>
				<div className='anchor-link'>Example D</div>
				<div className='anchor-link'>Example E</div>
			</div>
		</div>
	)
}
