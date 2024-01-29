import { ReactNode } from 'react'
import './Code.scss'

export function Code({ children, style }: { children: ReactNode; style?: React.CSSProperties }) {
	return (
		<div className='code-component' style={style ? style : {}}>
			{children}
		</div>
	)
}
