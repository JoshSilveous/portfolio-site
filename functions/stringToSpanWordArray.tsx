import React from 'react'
export function stringToSpanWordArray(
	string: string,
	delay: number = 0,
	step: number = 0
) {
	const applyAnimStyle = !(delay === 0 && step === 0)

	return string.split(' ').map((word, index) => {
		const thisStyle: React.CSSProperties = applyAnimStyle
			? { animationDelay: `${delay}s` }
			: {}

		delay += step
		if (index === 0) {
			return (
				<span key={index} style={thisStyle}>
					{word}
				</span>
			)
		} else {
			return (
				<React.Fragment key={index}>
					<span style={thisStyle} className='char-space'>
						{' '}
					</span>
					<span style={thisStyle}>{word}</span>
				</React.Fragment>
			)
		}
	})
}
