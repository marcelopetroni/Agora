import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage'
import Home from './pages/homePage';
import Profile from './pages/profilePage';
import Social from './pages/socialPage';
import Project from './pages/projectPage';
import Info from './pages/infoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/social" element={<Social />} />
      </Routes>
    </Router>
  );
}

export default App;
