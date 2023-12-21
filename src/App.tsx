import './App.scss'
import { Navbar } from './content/NavBar/Navbar'
import { AboutMe, ContactInfo, Experience, Projects, Skills } from './content/Main/sections'

function App() {
	return (
		<div className='app'>
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
