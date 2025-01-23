'use client'
import { stringToSpanCharArray, stringToSpanWordArray } from '../../functions'

export function FirstName() {
	return <>{stringToSpanCharArray('Joshua', 0.5, 0.05)}</>
}
export function LastName() {
	return <>{stringToSpanCharArray('Silveous', 0.8, 0.05)}</>
}

export function Splash() {
	return (
		<>
			{stringToSpanWordArray('Welcome to my portfolio website!', 2.5, 0.03)}
			<div style={{ height: '10px' }} />
			{stringToSpanWordArray(
				'This is essentially a fancy resume, with a bit more depth and personality.',
				3.5,
				0.03
			)}
			<br />
			{stringToSpanWordArray(
				'I built this entire site with Next, React, TypeScript, and Sass. Take a look around! Or,',
				4,
				0.03
			)}
		</>
	)
}
