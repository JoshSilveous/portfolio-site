import { stringToSpanWordArray } from '.'
/**
 * Converts a string to an array of `<span>` JSX Elements.
 *
 * **Cuts off each character**, as opposed to {@link stringToSpanWordArray}.
 * @param string The string to be converted.
 * @param delay **(Optional)** The delay, in seconds, before the *first* `<span>`'s animation starts.
 * @param step **(Optional)** The increment, in seconds, to increase each sequential `<span>`'s animation delay.
 * @returns The `<span>` array.
 * @example
 * ```tsx
 * stringToSpanCharArray('cat') === [<span>c</span>,<span>a</span>,<span>t</span>]
 *
 * stringToSpanCharArray('dog', 2, 0.2) === [
 *     <span style={{animationDelay: '2s'}}>d</span>,
 *     <span style={{animationDelay: '2.2s'}}>o</span>,
 *     <span style={{animationDelay: '2.4s'}}>g</span>
 * ]
 * ```
 */
export function stringToSpanCharArray(
	string: string,
	delay: number = 0,
	step: number = 0
) {
	const applyAnimStyle = !(delay === 0 && step === 0)

	return Array.from(string).map((letter, index) => {
		const thisStyle: React.CSSProperties = applyAnimStyle
			? { animationDelay: `${delay}s` }
			: {}

		delay += step

		return (
			<span key={index} style={thisStyle}>
				{letter}
			</span>
		)
	})
}
