import './App.css'
import ScrollUpButton from 'react-scroll-up-button'
import AppState from './StateManagement/AppState'
import Alert from './components/Alert'
import Navbar from './components/Navbar'
import Me from './components/Me'
import About from './components/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
	return (
		<div className='App'>
			<AppState>
				<ScrollUpButton />
				<Alert />
				<Navbar />
				<Me />
				<About />
				<Projects />
				<Contact />
				<Footer />
			</AppState>
		</div>
	)
}

export default App
