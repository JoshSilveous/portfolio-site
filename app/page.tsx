import { IconPreload } from '@/components/IconPreload'
import { Navbar } from '@/content/NavBar/Navbar'
import { AboutMe, Skills, Projects, Experience, ContactInfo } from '@/content/sections'
import './page.scss'

export default function Home() {
	return (
		<div className='app'>
			<IconPreload />
			<Navbar />

			<div className='main'>
				<AboutMe />
				<Skills />
				<Projects />
				<Experience />
				<ContactInfo />
			</div>
		</div>
	)
}
