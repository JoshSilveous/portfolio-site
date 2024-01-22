'use client'
import { useEffect, useRef, useState } from 'react'
import { setDelay } from '../../functions'
import { FirstName, LastName, Splash } from './Navbar_Content'
import './Navbar.scss'
import { transitionHeightClosedToOpen } from '../../functions'
import {
	AboutMeIcon,
	ContactInfoIcon,
	ExperienceIcon,
	LoadingAnim,
	ProjectsIcon,
	SkillsIcon,
} from '@/assets'

export function Navbar() {
	const paragraphRef = useRef<HTMLParagraphElement>(null)
	const anchorContainerRef = useRef<HTMLParagraphElement>(null)
	const navbarRef = useRef<HTMLDivElement>(null)

	// determine initial navbar state
	useEffect(() => {
		navbarRef.current!.classList.remove('loading')
		if (window.scrollY === 0) {
			navbarRef.current!.classList.add('fullscreen')
		}
	}, [])

	// add animations (after height is already determined)
	useEffect(() => {
		setDelay(10).then(() => {
			navbarRef.current!.style.transition = 'height 0.4s ease'
			navbarRef.current!.style.animation =
				'backgroundGradientLoad 4s ease-in-out 0s 1, backgroundGradientIdle 10s ease-in-out 4s infinite'
		})
	}, [])

	// add listener for toggling NavBar
	useEffect(() => {
		function handleScrollY() {
			if (window.scrollY === 0) {
				navbarRef.current!.classList.add('fullscreen')
			} else {
				navbarRef.current!.classList.remove('fullscreen')
			}
		}
		window.addEventListener('scroll', handleScrollY)
		return () => {
			window.removeEventListener('scroll', handleScrollY)
		}
	}, [])

	// animations
	useEffect(() => {
		// if loaded in fullscreen
		if (window.scrollY === 0) {
			// lock scrolling
			document.body.style.overflow = 'hidden'

			// add `loaded-in-fullscreen` class to NavBar
			// * makes name + splash animations play *
			navbarRef.current!.classList.add('loaded-in-fullscreen')

			const splashContainerNode = navbarRef.current!.childNodes[0].childNodes[1]
				.childNodes[1] as HTMLDivElement
			const anchorContainerNode = navbarRef.current!.childNodes[0]
				.childNodes[2] as HTMLDivElement

			console.log('splashContainerNode', splashContainerNode)
			console.log('anchorContainerNode', anchorContainerNode)

			transitionHeightClosedToOpen(splashContainerNode, 2.5, 2)

			transitionHeightClosedToOpen(anchorContainerNode, 5.5, 2).then(() => {
				// unlock scrolling
				document.body.style.overflow = ''
			})
		}

		// set delays for Anchor Bar based on if page loaded in fullscreen
		let anchorContainerAnimDelay = 6
		if (window.scrollY !== 0) {
			anchorContainerAnimDelay = 1
		}

		anchorContainerRef.current!.childNodes.forEach((node) => {
			if (node instanceof HTMLAnchorElement) {
				node.style.animationDelay = anchorContainerAnimDelay + 's'
				anchorContainerAnimDelay += 0.2
			}
		})
	})

	return (
		<div className='navbar loading' ref={navbarRef}>
			<div className='wrapper'>
				<div className='loading-icon'>
					<LoadingAnim style={{ height: '150px' }} />
				</div>
				<div className='splash-info'>
					<h1 className='name'>
						<div className='first-name'>
							<FirstName />
						</div>
						<div className='last-name'>
							<LastName />
						</div>
					</h1>
					<p className='text' ref={paragraphRef}>
						<Splash />
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
