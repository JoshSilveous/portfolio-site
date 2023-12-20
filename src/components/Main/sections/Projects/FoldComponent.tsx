import { ReactNode, useState } from 'react'

interface FoldComponentProps {
	title: string
	children?: ReactNode
}
export function FoldComponent({ title, children }: FoldComponentProps) {
	return (
		<div className='fold-component'>
			<h2 className='fold-title'>{title}</h2>
			<div className='fold-content'>{children}</div>
		</div>
	)
}
