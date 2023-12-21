import { ReactNode } from 'react'
import './FoldComponent.scss'
import { FoldIcon } from '../../assets'

/**
 * A component that can be folded open and closed. This component does NOT manage state.
 *
 * **REQUIRED PROPS**
 *
 * `title` *string* - The title of the fold, displayed in the header
 *
 * `folded` *boolean* - Boolean value controlling if the content is hidden or not
 *
 * `handleToggle` *Function* - Function that will be executed whenever the header is clicked.
 * *Should toggle* `folded`
 */
export function FoldComponent({ title, children, folded, handleToggle }: FoldComponentProps) {
	return (
		<div className='fold-component'>
			<div className={`fold-title${folded ? ' folded' : ''}`} onClick={handleToggle}>
				<FoldIcon />
				<h2>{title}</h2>
			</div>
			<div className='fold-content'>{children}</div>
		</div>
	)
}

interface FoldComponentProps {
	/**
	 * The title of the fold, displayed in the header
	 */
	title: string
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
