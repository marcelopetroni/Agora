import React from 'react'
import './profile.sass';
import NavbarItems from '../../components/Navbar';

const Profile = () => {
  return (
    <div className="profile-container">
      <NavbarItems activePage="profile" />
      <div className="profile-items">
        <div className="title-container">conteudo profile</div>
      </div>
    </div>
  )
}

export default Profile;
