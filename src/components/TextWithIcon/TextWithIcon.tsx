import { ReactNode } from 'react'
import './TextWithIcon.scss'

interface TextWithIconProps {
	href?: string
	Icon: React.FC<React.SVGProps<SVGSVGElement>>
	iconStyle?: React.CSSProperties
	children: ReactNode
	inline?: boolean
	newWindow?: boolean
}
export function TextWithIcon({
	href,
	Icon,
	iconStyle,
	children,
	inline = false,
	newWindow = false,
}: TextWithIconProps) {
	console.log(href, Icon, iconStyle)
	if (href === undefined) {
		return (
			<div className={`text-with-icon ${inline ? 'inline' : ''}`}>
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
			>
				<Icon style={iconStyle} />
				{children}
			</a>
		)
	}
}
