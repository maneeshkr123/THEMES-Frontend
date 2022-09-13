import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';

function App() {
	return (
		<Router>
			<div className="App">
				<NavBar/>
				<Routes>
					<Route exact path='/home' element={< Home />}></Route>
					<Route exact path='/about' element={< About />}></Route>
					<Route exact path='/contact' element={< Contact />}></Route>
				</Routes>
				
			</div>
		</Router>
	);
}

export default App;
