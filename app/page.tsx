import { IconPreload } from '@/components/IconPreload'
import { Navbar } from '@/content/NavBar/Navbar'
import { AboutMe, Skills, Projects, Experience, ContactInfo } from '@/content/sections'
import './page.scss'
import { TestFinanceTrackerImport } from '@/components'

export default function Home() {
	return (
		<div className='app'>
			<IconPreload />
			<Navbar />

			<div className='main'>
				<AboutMe />
				<TestFinanceTrackerImport />
				<Skills />
				<Projects />
				<Experience />
				<ContactInfo />
			</div>
		</div>
	)
}
