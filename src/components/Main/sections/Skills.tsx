import { useState } from 'react'
import './sections.scss'
import { useTabSwitcher } from '../../../functions/useTabSwitcher'
export function Skills() {
	const tabSwitcher = useTabSwitcher([
		{
			name: 'Front End',
			id: 'front-end',
			content: (
				<div className='content'>
					HTML, CSS, JS, TypeScript, React, SASS/SCSS, React Router, Lottie
				</div>
			),
		},
		{
			name: 'Back End',
			id: 'back-end',
			content: <div className='content'>Node.JS, Express.js, SQL, Electron</div>,
		},
		{
			name: 'Other',
			id: 'other',
			content: <div className='content'>Photoshop, After Effects, Illustrator, Lottie</div>,
		},
	])

	return (
		<div className='section skills'>
			<a className='anchor' id='skills' />
			<h1>Skills</h1>
			{tabSwitcher}
			<p>
				Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
				Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
				Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
				Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
				Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
				Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
				Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
				Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
				Blah Blah Blah Blah Blah Blah Blah
			</p>
		</div>
	)
}
