import './NavMobile.scss'
import { ReactComponent as MenuIcon } from '../../../assets/menu.svg'
export function NavMobile() {
	return (
		<div className='navbar-mobile'>
			<div className='menu-icon-container'>
				<MenuIcon />
			</div>
		</div>
	)
}
