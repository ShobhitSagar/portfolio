import './App.css'
import Navbar from './components/Navbar'
import Me from './components/Me'
import About from './components/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
	return (
		<div className="App">
			<Navbar />
			<Me />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
