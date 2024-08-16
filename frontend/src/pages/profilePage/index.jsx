import React, {useState} from 'react'
import './profile.sass';
import NavbarItems from '../../components/Navbar';
import CountrySelector from '../../components/CountrySelector';
import LanguageSelector from '../../components/LanguageSelector';
import ArtisticFieldSelector from '../../components/ArtisticFieldSelector';
import UploadModal from '../../components/UploadModal';
import PortfolioSection from '../../components/PortfolioSection';

const Profile = () => {

  const [activeTab, setActiveTab] = useState('Audios');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [files, setFiles] = useState({
    Photos: [],
    Videos: [],
    Audios: [],
    Writing: []
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveFile = (newFile) => {
    setFiles(prevFiles => ({
      ...prevFiles,
      Audios: [...prevFiles.Audios, newFile],
       // Aqui você pode escolher a aba correta (Audios, Photos, etc.)
    }));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Photos':
        return  (
          <div className="content">
            <div className="audio-item">
              <div className="audio-details">
                <div className="content">Photos content goes here.</div>
              </div>
            </div>
            <button className="upload-button">Upload new file</button>
          </div>
        );
      case 'Videos':
        return  (
          <div className="content">
            <div className="audio-item">
              <div className="audio-details">
                <div className="content">Videos content goes here.</div>
              </div>
            </div>
            <button className="upload-button">Upload new file</button>
          </div>
        );
      case 'Audios':
        return (
          <div className="content">
            <div className="audio-item">
              <div className="audio-details">
                <div className="content">Audios content goes here.</div>
              </div>
            </div>
            <button className="upload-button">Upload new file</button>
          </div>
        );
      case 'Writing':
        return (
          <div className="content">
            <div className="audio-item">
              <div className="audio-details">
                <div className="content">Writing content goes here.</div>
              </div>
            </div>
            <button className="upload-button">Upload new file</button>
          </div>
        );
      default:
        return null;
    }
  };


  return (
    <div className="profile-container">
    <NavbarItems />
    <div className="profile-items">
    <div className="profile-page">
      <h2>Personal informations</h2>
      <form className="profile-form">
        <div className="profile-picture">
          <img src=".\src\assets\woman.png" alt="Profile" />
          <button className="upload-button">Upload new picture</button>
        </div>

        <div className="form-group">
          <div className="form-line">
            <div className="email-field">
              <label>Full Name</label>
              <input type="text" value="Joana de Sá" />
            </div>
            <div className="form-field">
              <label>Date of birth</label>
              <input type="date" value="1994-04-25" />
            </div>
            <div className="form-field">
              <CountrySelector />
            </div>
          </div>

          <div className="form-line">
            <div className="email-field">
              <label>E-mail</label>
                <input className='email-input' type="email" value="joana.sa@example.com" />
              </div>
            <div className="form-field">
              <label>Password</label>
              <div className="password-field">
                <input type="password" value="password123" />
                <button className="change-password">Change password</button>
              </div>
            </div>
          </div>

          <div className="form-line">
            <div className="form-field">
              <LanguageSelector />
            </div>
            <div className="form-field">
              <ArtisticFieldSelector />
            </div>
          </div>

          <div className="form-field">
            <label>Professional Experience</label>
            <textarea className='textarea' value="I started as an assistant at Harmony Studio, learning the ropes and contributing to major projects. Later, I became a resident produc.." />
          </div>
        </div>
      </form>
    </div>
    <div className="profile-page">
      <PortfolioSection files={files} />
      <button className='upload-button' onClick={handleOpenModal}>Upload New File</button>
      {isModalOpen && <UploadModal onClose={handleCloseModal} onSave={handleSaveFile} />}
    </div>
    </div>  
  </div>
)
}

export default Profile