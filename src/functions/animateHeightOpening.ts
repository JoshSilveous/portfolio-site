export function animateHeightOpening(
	element: HTMLElement,
	delay: number,
	speed: number = 2
) {
	// get computed height
	const maxHeight = element.scrollHeight
	if (maxHeight !== 0) {
		element.style.height = '0px'
		const delayTimeout = setTimeout(() => {
			// add transition effects
			element.style.transition = `
                height ${speed}s ease
            `
			// after `delay` milliseconds, set the height
			element.style.height = maxHeight + 'px'
			clearTimeout(delayTimeout)
		}, delay)
	}
}
