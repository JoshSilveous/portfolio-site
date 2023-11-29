import { setDelay } from '.'

export async function transitionHeightClosedToOpen(
	element: HTMLElement,
	delay: number,
	duration: number
) {
	const computedStyle = window.getComputedStyle(element)
	const initialHeight = computedStyle.height
	const initialPadding = computedStyle.padding

	element.style.transition = 'none'
	element.style.height = '0px'
	element.style.padding = '0px'
	console.log('waiting for switch')

	await setDelay(delay * 1000)

	element.style.transition = `height ${duration}s ease, padding ${duration}s ease`
	element.style.height = initialHeight
	element.style.padding = initialPadding

	await setDelay(duration * 1000)
	console.log('waiting for switch 2')

	element.style.height = ''
	element.style.padding = ''
	element.style.transition = ''
}
