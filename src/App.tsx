import './App.scss'
import { Navbar } from './content/NavBar/Navbar'
import { AboutMe, ContactInfo, Experience, Projects, Skills } from './content/Main/sections'
import { IconPreload } from './IconPreload'

function App() {
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

export default App
