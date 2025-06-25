import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './views/landingPage'
import Login from './views/login';
import Register from './views/register';
import Home from './views/home';
import Perfil from './views/perfil'

function App() {
return (
	<Router>
	<Routes>
		<Route path="/" element={<LandingPage />} />
		<Route path="/home" element={<Home />} />
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />
		<Route path="/perfil" element={<Perfil />} />
	</Routes>
	</Router>
);
}

export default App;
