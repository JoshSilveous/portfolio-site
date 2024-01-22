import { ReactNode } from 'react'
import './TextWithIcon.scss'

interface TextWithIconProps {
	href?: string
	Icon: React.FC<React.SVGProps<SVGSVGElement>>
	iconStyle?: React.CSSProperties
	style?: React.CSSProperties
	children: ReactNode
	inline?: boolean
	newWindow?: boolean
}
export function TextWithIcon({
	href,
	Icon,
	iconStyle,
	style,
	children,
	inline = false,
	newWindow = false,
}: TextWithIconProps) {
	if (href === undefined) {
		return (
			<div className={`text-with-icon ${inline ? 'inline' : ''}`} style={style}>
				<Icon style={iconStyle} />
				{children}
			</div>
		)
	} else {
		return (
			<a
				href={href}
				target={newWindow ? '_blank' : '_self'}
				className={`text-with-icon ${inline ? 'inline' : ''}`}
				style={style}
			>
				<Icon style={iconStyle} />
				{children}
			</a>
		)
	}
}
