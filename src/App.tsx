import './App.scss'
import { NavDesktop } from './components/Nav/NavDesktop/NavDesktop'
import { Main } from './components/Main/Main'
import { NavMobile } from './components/Nav/NavMobile/NavMobile'

function App() {
	return (
		<div className='app'>
			<NavDesktop />
			<NavMobile />
			<Main />
		</div>
	)
}

export default App
