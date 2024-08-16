import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import ArtistProfilePage from './pages/profilePage';
import SocialPage from './pages/socialPage';
import LandingPage from './pages/landingPage'
import Home from './pages/homePage';
import Profile from './pages/profilePage';
import Social from './pages/socialPage';
import Project from './pages/projectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/profile" element={<HomePage />} />
        <Route path="/profile" element={<LandingPage />} />
        <Route path="/social" element={<SocialPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/social" element={<Social />} />
      </Routes>
    </Router>
  );
}

export default App;
