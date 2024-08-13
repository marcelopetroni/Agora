import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import ProfilePage from './pages/profilePage';
import SocialPage from './pages/socialPage';
import LandingPage from './pages/landingPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/social" element={<SocialPage />} />
      </Routes>
    </Router>
  );
}

export default App;
