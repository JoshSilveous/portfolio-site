'use client'
import { ReactNode, useEffect, useRef } from 'react'
import './FoldComponent.scss'
import { FoldIcon } from '@/assets'
import { setDelay } from '../../functions'

/**
 * A component that can be folded open and closed. This component does NOT manage state.
 *
 * **REQUIRED PROPS**
 *
 * `title` `string | ReactNode` - The title of the fold, displayed in the header
 *
 * `folded` `boolean` - Boolean value controlling if the content is hidden or not
 *
 * `handleToggle` `Function` - Function that will be executed whenever the header is clicked.
 * *Should toggle* `folded`
 */
export function FoldComponent({ title, children, folded, handleToggle }: FoldComponentProps) {
	const foldRef = useRef<HTMLDivElement>(null)
	const contentRef = useRef<HTMLDivElement>(null)

	const ANIMATION_TIME = 1

	useEffect(() => {
		const contentNode = contentRef.current!
		if (folded) {
			// set height to full px value instead of 'auto'
			contentNode.style.height = contentNode.scrollHeight + 'px'

			// short delay so above line can render
			setDelay(10).then(() => {
				contentNode.style.height = '0px'
			})
		} else {
			// set height to px value of full height instead of '0px'
			contentNode.style.height = contentNode.scrollHeight + 'px'

			setDelay(ANIMATION_TIME * 1000).then(() => {
				// conditional to make sure the animation wasn't interrupted
				if (contentNode.style.height !== '0px') {
					// remove height px value after animation finishes
					// allows height to be 'auto', making height responsive to display size changes
					contentNode.style.height = ''
				}
			})
		}
	}, [folded])

	useEffect(() => {
		// wait to add the transition effect until after fold-content is at it's proper height
		// prevents folding/unfolding animation on initial component load
		setDelay(50).then(() => {
			contentRef.current!.style.transition = `height ${ANIMATION_TIME}s ease`
		})
	}, [])

	return (
		<div className={`fold-component${folded ? ' folded' : ''}`} ref={foldRef}>
			<div className='fold-title' onClick={handleToggle}>
				<FoldIcon
					className='arrow'
					style={{ transition: `rotate ${ANIMATION_TIME}s ease` }}
				/>
				{typeof title === 'string' ? <h2 className='default'>{title}</h2> : title}
			</div>
			<div className='fold-content' ref={contentRef}>
				{children}
			</div>
		</div>
	)
}

interface FoldComponentProps {
	/**
	 * The title of the fold, displayed in the header
	 */
	title: string | ReactNode
	/**
	 * The content hidden by the fold
	 */
	children?: ReactNode
	/**
	 * Boolean value controlling if the content is hidden or not
	 */
	folded: boolean
	/**
	 * Function that will be executed whenever the header is clicked.
	 *
	 * *Should toggle* `folded`
	 */
	handleToggle: () => void
}
