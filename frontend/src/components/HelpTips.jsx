import React from 'react'
import "./HelpTips.sass";
import { IoMdSearch } from "react-icons/io";
import Arrow from '../assets/arrow';
import Man from '../assets/man.png';
import Man2 from '../assets/man2.png';

const HelpTips = () => {
  return (
    <div className="help-container">
        <div className="help-title">
            <div className='text-title'>Help and tips</div>
        </div>
        <div className="search-container">
            <input className="search" type="text" id="search" placeholder='Search'/>
            <IoMdSearch
            className='lupa'
            size={20}
            color="rgba(155, 114, 67, 0.66)"
            />
            <div className="arrow-icon">
            <Arrow/>
            </div>
        </div>
        <div className="info-boxes">
          <div className="info-box">
            <div className="info-title">Creating a Project</div>
            <div className="info-text">
              Click here to learn everything about creating a project to raise funds on our platform now.
            </div>
          </div>
          <div className="info-box">
            <div className="info-title">How to make a good profile</div>
            <div className="info-text">
              Click here to see tips about creating a good profile to make you stand out.
            </div>
          </div>
          <div className="info-box">
            <div className="info-title">Tips to sign a smart contract</div>
            <div className="info-text">
              Click here to see tips to sign a smart contract that is good for you.
            </div>
          </div>
        </div>
        <div className="notifications-box">
          <div className="notifications-title">Notifications</div>
          <div className="notification">
            <div className="notification-photo">
                <img src={Man} alt="Profile" className="profile-image" />
            </div>
            <div className="notification-texts">
              <div className="notification-name">Dan Houston</div>
              <div className="notification-message">Sent you a message</div>
            </div>
          </div>
          <div className="line-help"></div>
          <div className="notification">
            <div className="notification-photo">
                <img src={Man2} alt="Profile" className="profile-image" />
            </div>
            <div className="notification-texts">
              <div className="notification-name">Chris Dunphy</div>
              <div className="notification-message">Sent you a message</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HelpTips
