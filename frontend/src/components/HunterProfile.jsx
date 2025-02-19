import React from 'react';
import './HunterProfile.sass';
import NavbarItems from './Navbar';
import CountrySelector from './CountrySelector';
import LanguageSelector from './LanguageSelector';
import ArtisticFieldSelector from './ArtisticFieldSelector';
import ManImage from '../assets/man.jpg'
import { FaPen, FaCalendarAlt, FaChevronDown } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="profile-container">
      <NavbarItems activePage='profile' />
      <div className="profile-items">
        <div className="profile-page">
          <h2>Informações pessoais</h2>
          <form className="profile-form">
            <div className="profile-picture">
              <img src={ManImage} alt="Profile" />
              <button className="upload-button">Enviar nova imagem</button>
            </div>

            <div className="form-group">
              <div className="form-line">
                <div className="name-field">
                  <label>Nome completo</label>
                  <div className="input-container">
                    <input type="text" placeholder="" />
                    <span className="edit-icon">
                      <FaPen />
                    </span>
                  </div>
                </div>
                <div className="birth-field">
                  <label>Data de nascimento</label>
                  <div className="input-container">
                    <input type="text" placeholder="dd/mm/aaaa" />
                    <span className="calendar-icon">
                      <FaCalendarAlt />
                    </span>
                  </div>
                </div>
                <div className="form-field">
                  <CountrySelector />
                </div>
              </div>

              <div className="form-line">
                <div className="email-field">
                  <label>E-mail</label>
                  <input className='email-input' type="email" value="tyler@hotmail.com" />
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
              <div className='form-line'>
                <div className="form-field">
                  <label>Professional Experience</label>
                  <textarea className='textarea' value="I started as an assistant at Harmony Studio, learning the ropes and contributing to major projects. Later, I became a resident produc.." />
                </div>
                <div className='form-field'>
                  <label>Company/Affiliation</label>
                  <input type='text' placeholder='EchoWave Productions' />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
