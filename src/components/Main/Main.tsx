import './Main.scss'
import { AboutMe, ContactInfo, Experience, Projects, Skills } from './sections'
export function Main() {
	return (
		<div className='main'>
			<AboutMe />
			<Skills />
			<Projects />
			<Experience />
			<ContactInfo />
		</div>
	)
}
