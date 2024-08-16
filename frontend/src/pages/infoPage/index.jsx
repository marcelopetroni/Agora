import React from 'react';
import './info.sass';
import NavbarItems from '../../components/Navbar';
import { FaArrowLeft } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa'; 

const InfoPage = () => {
  return (
    <div className="info-container">
      <div className="sidebar">
        <NavbarItems />
      </div>
      <div className="info-content">
        <div className="header">
          <button className="back-button">
            <FaArrowLeft />
          </button>
          <div className="profile-section">
            <img src="path_to_profile_image" alt="Profile" className="profile-pic" />
            <div className="profile-details">
              <div className="profile-name-section">
                <h1 className="profile-name">Joana de Sá</h1>
                <div className="profile-country">
                  <FaFlag className="flag-icon" />
                  <span>Brazil</span>
                </div>
              </div>
              <p className="profile-about-title">About me:</p>
              <p className="profile-about">
                Joana de Sá is a passionate Brazilian singer with a deep love for traditional and contemporary music. She has captivated audiences with her soulful voice and vibrant performances, blending the rich cultural heritage of Brazil with modern influences. Joana's journey in music began at a young age, and she continues to share her art with the world, inspiring others through her songs and storytelling.
              </p>
              <div className="profile-info">
                <div className="info-section">
                  <p className="info-title">Artistic Field</p>
                  <div className="info-tags artistic-field">
                    <span className="tag">Music</span>
                    <span className="tag">Theatre</span>
                  </div>
                </div>
                <div className="info-section">
                  <p className="info-title">Languages Spoken</p>
                  <div className="info-tags languages-spoken">
                    <span className="tag">English</span>
                    <span className="tag">Portuguese</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;