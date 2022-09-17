import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Home from './modules/frontend/index/Home';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import LogIn from './modules/frontend/login/Login';

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route exact path='/login' element={< LogIn />}></Route>
					<Route exact path='/home' element={< Home />}></Route>
					<Route exact path='/about' element={< About />}></Route>
					<Route exact path='/contact' element={< Contact />}></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
