import { useState } from 'react'
import './sections.scss'
import { useTabSwitcher } from '../../../functions/useTabSwitcher'
export function Skills() {
	const tabSwitcher = useTabSwitcher([
		{
			name: 'Front End',
			id: 'front-end',
			content: <div>Front end!</div>,
		},
		{
			name: 'Back End',
			id: 'back-end',
			content: <div>Back end!</div>,
		},
		{
			name: 'Other',
			id: 'other',
			content: <div>Other!</div>,
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
