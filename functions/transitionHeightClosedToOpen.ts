'use client'
import { setDelay } from '.'

export async function transitionHeightClosedToOpen(
	element: HTMLElement,
	delay: number,
	duration: number
): Promise<void> {
	const computedStyle = window.getComputedStyle(element)
	const computedHeight = computedStyle.height
	const computedPadding = computedStyle.padding

	const initialTransition = element.style.transition
	const initialHeight = element.style.height
	const initialPadding = element.style.padding
	console.log(
		'on node',
		element,
		'\ncomputedHeight',
		computedHeight,
		'\ncomputedPadding',
		computedPadding,
		'\ninitialHeight',
		initialHeight,
		'\ninitialPadding',
		initialPadding
	)

	element.style.transition = 'none'
	element.style.height = '0px'
	element.style.padding = '0px'

	await setDelay(delay * 1000)

	element.style.transition = `height ${duration}s ease, padding ${duration}s ease`
	element.style.height = computedHeight
	element.style.padding = computedPadding

	await setDelay(duration * 1000)

	element.style.height = initialHeight
	element.style.padding = initialPadding
	element.style.transition = initialTransition
	return
}
