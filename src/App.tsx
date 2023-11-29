import './App.scss'
import { NavDesktop } from './components/Nav/NavDesktop/NavDesktop'
import { Main } from './components/Main/Main'
import { NavMobile } from './components/Nav/NavMobile/NavMobile'
import { Navbar } from './components/Nav/NewNavbar/Navbar'

function App() {
	return (
		<div className='app'>
			{/* <NavDesktop />
			<NavMobile /> */}
			<Navbar />
			<Main />
		</div>
	)
}

export default App
