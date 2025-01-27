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
import { delay } from '@/components/TestFinanceTrackerImport/utils'

export function Navbar() {
	console.log("Well well, someone's curious 😉")
	// looking back, this code kinda sucks.
	// I'll get around to cleaning this up eventually, for now I'm focused on my finance-tracker project

	const paragraphRef = useRef<HTMLParagraphElement>(null)
	const splashContainerRef = useRef<HTMLParagraphElement>(null)
	const anchorContainerRef = useRef<HTMLParagraphElement>(null)
	const navbarRef = useRef<HTMLDivElement>(null)
	const proudestWorkContainerRef = useRef<HTMLDivElement>(null)

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
			const proudestContainerNode = navbarRef.current!.childNodes[0]
				.childNodes[2] as HTMLDivElement
			const anchorContainerNode = navbarRef.current!.childNodes[0]
				.childNodes[3] as HTMLDivElement

			transitionHeightClosedToOpen(splashContainerNode, 2.5, 2)

			transitionHeightClosedToOpen(anchorContainerNode, 5, 2).then(() => {
				// unlock scrolling
				document.body.style.overflow = ''
			})

			transitionHeightClosedToOpen(proudestContainerNode, 5, 2)
			proudestContainerNode.style.animation = '1s ease-out 5.5s fadeDown forwards'
		} else {
			const proudestContainerNode = navbarRef.current!.childNodes[0]
				.childNodes[2] as HTMLDivElement
			proudestContainerNode.classList.add('skip-animation')
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
				<div className='splash-info' ref={splashContainerRef}>
					<h1 className='name'>
						<div className='first-name'>
							<FirstName />
						</div>
						<div className='last-name'>
							<LastName />
						</div>
					</h1>
					<div className='text' ref={paragraphRef}>
						<Splash />
					</div>
				</div>
				<div
					className='proudest-work-container'
					ref={proudestWorkContainerRef}
					style={{ height: '34px' }}
				>
					<div className='proudest-work'>
						<a href='#projects/finance-tracker'>
							Jump straight to my proudest work
						</a>
					</div>
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
