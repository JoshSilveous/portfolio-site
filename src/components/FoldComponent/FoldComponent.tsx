import { ReactNode, useState } from 'react'
import './FoldComponent.scss'
import { FoldIcon } from '../../assets'

interface FoldComponentProps {
	title: string
	children?: ReactNode
}
export function FoldComponent({ title, children }: FoldComponentProps) {
	const [isFolded, setIsFolded] = useState(true)
	return (
		<div className='fold-component'>
			<div
				className={`fold-title${isFolded ? ' folded' : ''}`}
				onClick={() => setIsFolded((p) => !p)}
			>
				<FoldIcon />
				<h2>{title}</h2>
			</div>
			<div className='fold-content'>{children}</div>
		</div>
	)
}
