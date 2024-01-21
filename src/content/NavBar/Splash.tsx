import { stringToSpanWordArray } from '../../functions'

export const text =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Ante in nibh mauris cursus mattis molestie a. Faucibus turpis in eu mi. Eu feugiat pretium nibh ipsum consequat. Rhoncus mattis rhoncus urna neque viverra justo nec. Velit dignissim sodales ut eu sem integer vitae justo eget. Facilisi etiam dignissim diam quis enim. '

export function Splash() {
	return (
		<>
			{/* {stringToSpanWordArray(text, 2.5, 0.015)} */}
			{stringToSpanWordArray('Welcome to my portfolio website!', 2.5, 0.015)}
			<br />
			<br />
			{stringToSpanWordArray(
				'This is essentially a fancy resume, with a bit more depth and personality.',
				2.5,
				0.015
			)}
			<br />
			{stringToSpanWordArray(
				'I built this entire site with React, TypeScript, and Sass. Take a look around!',
				2.5,
				0.015
			)}
		</>
	)
}
