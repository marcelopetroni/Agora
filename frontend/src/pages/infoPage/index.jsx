import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './info.sass';
import NavbarItems from '../../components/Navbar';
import { FaArrowLeft } from 'react-icons/fa';
import { FaPaperPlane, FaFlag } from 'react-icons/fa';
import Arrow2 from "../../assets/arrow2";

const InfoPage = () => {
  const [activeTab, setActiveTab] = useState('Audios');
  const [message, setMessage] = useState(''); 

  const handleInputChange = (event) => {
    setMessage(event.target.value); 
  };

  const handleSendClick = () => {
    setMessage(''); 
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Photos':
        return <div className="content">Photos content goes here.</div>;
      case 'Videos':
        return <div className="content">Videos content goes here.</div>;
      case 'Audios':
        return (
          <div className="content">
            <div className="audio-item">
              <div className="audio-icon">🎵</div>
              <div className="audio-details">
                <p><strong>Audio name:</strong> Moonlight</p>
                <p><strong>Date:</strong> 08-03-23</p>
                <p><strong>Type:</strong> Song</p>
                <p><strong>Description:</strong> This is a song I wrote about a night when I fell asleep looking at the moon...</p>
              </div>
            </div>
          </div>
        );
      case 'Writing':
        return <div className="content">Writing content goes here.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="info-container">
      <NavbarItems />
      <div className='info-items'>
        <div className="info-page">
        <Link 
          to="/home" 
          style={{ textDecoration: 'none' }}
        >
          <button className="back-button">
            <FaArrowLeft />
          </button>
        </Link>
          <div className="profile-section">
            <div className="profile-picture">
              <img src=".\src\assets\woman.png" alt="Profile" />
            </div>
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

          {/* My Works Section */}
          <div className="my-works">
            <h3>My works</h3>
            <div className="portfolio-tabs">
              <button
                className={`tab ${activeTab === 'Photos' ? 'active' : ''}`}
                onClick={() => setActiveTab('Photos')}
              >
                Photos
              </button>
              <button
                className={`tab ${activeTab === 'Videos' ? 'active' : ''}`}
                onClick={() => setActiveTab('Videos')}
              >
                Videos
              </button>
              <button
                className={`tab ${activeTab === 'Audios' ? 'active' : ''}`}
                onClick={() => setActiveTab('Audios')}
              >
                Audios
              </button>
              <button
                className={`tab ${activeTab === 'Writing' ? 'active' : ''}`}
                onClick={() => setActiveTab('Writing')}
              >
                Writing
              </button>
            </div>
            <div className="portfolio-content">
              {renderContent()}
            </div>
          </div>

          {/* Send Message Section */}
          <div className="send-message">
            <h4>Send a message</h4>
            <div className="message-input-container">
            <input
              type="text"
              placeholder="Write here a message to let the artist know you're interested in their work."
              value={message} 
              onChange={handleInputChange}
            />
              <button className="send-button" onClick={handleSendClick}>
                <Arrow2 />
              </button>
          </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
