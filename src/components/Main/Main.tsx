import './Main.scss'
import { AboutMe, ContactInfo, Experience, Projects, Skills } from './sections'
export function Main() {
	let fakecontent: JSX.Element[] = []
	for (let i = 0; i < 100; i++) {
		fakecontent.push(
			<div key={i} className='fakecontent'>
				Fake content! Fake content! Fake content! Fake content! Fake
				content! Fake content!
			</div>
		)
	}
	return (
		<div className='main'>
			<h1>Main!</h1>
			<AboutMe />
			<Skills />
			<Projects />
			<Experience />
			<ContactInfo />
			{fakecontent}
		</div>
	)
}
