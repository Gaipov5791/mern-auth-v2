import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Signin from '../src/pages/Signin';
import Signup from '../src/pages/Signup';
import Profile from '../src/pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
	return (
		<BrowserRouter>
		<Header/>
		<Routes>
			<Route path='/' element={<Home/>}/>
			<Route path='/about' element={<About/>}/>
			<Route path='/sign-in' element={<Signin/>}/>
			<Route path='/sign-up' element={<Signup/>}/>
			<Route element={<PrivateRoute/>}>
				<Route path='/profile' element={<Profile/>}/>	
			</Route>
		</Routes>
		</BrowserRouter>
	)
}

export default App;