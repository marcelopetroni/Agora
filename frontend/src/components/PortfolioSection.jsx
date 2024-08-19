import React, { useState } from 'react';
import './PortfolioSection.sass';

const PortfolioSection = ({ files }) => {
  const [activeTab, setActiveTab] = useState('Audios');

  const renderContent = () => {
    const activeFiles = files[activeTab];
    return (
      <div className="content">
        {activeFiles.map((file, index) => (
          <div key={index} className="file-item">
            <div className="file-name">{file.audioName || file.file.name}</div>
            <div className="file-description">{file.description}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="portfolio-section">
      <h3>Portfólio</h3>
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
  );
};

export default PortfolioSection;
