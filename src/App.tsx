import { useState } from 'react'
import './App.scss'
import { NavBar } from './components/NavBar'

function App() {
	let fakecontent: JSX.Element[] = []
	for (let i = 0; i < 100; i++) {
		fakecontent.push(
			<div className='fakecontent'>
				Fake content! Fake content! Fake content! Fake content! Fake
				content! Fake content!
			</div>
		)
	}

	return (
		<>
			<NavBar />
			{fakecontent}
		</>
	)
}

export default App
