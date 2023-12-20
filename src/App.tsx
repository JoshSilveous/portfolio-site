import './App.scss'
import { Navbar } from './components/NavBar/Navbar'
import { AboutMe, ContactInfo, Experience, Projects, Skills } from './components/Main/sections'

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
