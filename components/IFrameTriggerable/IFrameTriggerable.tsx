'use client'
import { DetailedHTMLProps, HTMLAttributes, IframeHTMLAttributes, useState } from 'react'
import s from './IFrameTriggerable.module.scss'

export function IFrameTriggerable({
	children,
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) {
	const [loaded, setLoaded] = useState(false)
	return (
		<div {...props} className={`${s.container} ${className}`}>
			{loaded ? (
				children
			) : (
				<div className={s.button_container}>
					<button onClick={() => setLoaded(true)}>Load IFrame</button>
				</div>
			)}
		</div>
	)
}
