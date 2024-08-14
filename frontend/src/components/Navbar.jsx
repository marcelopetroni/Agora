import PropTypes from "prop-types";
import "./Navbar.sass";
import HomeIcon from "../assets/homeIcon";
import UserIcon from "../assets/userIcon";
import SocialIcon from "../assets/socialIcon";
import LogOutIcon from "../assets/logOutIcon";
import LogoIcon from "../assets/logoIcon";
import WomanImage from '../assets/woman.png';

const NavbarItems = ({ className = "" }) => {
  return (
    <div className="line-group">
    <div className={`navbar-items ${className}`}>
      <div className="navbar-items-child" />
      <div className="navbar-items-inner">
        <div className="camada-9-3-group">
          <LogoIcon/>
        </div>
        <div className="circle-container">
          <img src={WomanImage} alt="Profile" className="profile-image" />
        </div>
      </div>
      <div className="frame-parent14">
          <div className="teenyiconshome-solid-group">
            <HomeIcon/>
            <div className="homepage1">Homepage</div>
          </div>
          <div className="iconamoonprofile-fill-group">
            <UserIcon/>
            <div className="profile1" >Profile</div>
          </div>
   
        <div className="material-symbolssocial-distan-group">
          <SocialIcon/>
          <div className="social1">Social</div>
        </div>
      </div>
      <div className="rilogout-circle-r-line-group">
        <LogOutIcon/>
        <div className="log-out-container">
          <div className="log-out1">Log Out</div>
        </div>
      </div>
    </div>
    </div>
  );
};

NavbarItems.propTypes = {
  className: PropTypes.string,
};

export default NavbarItems;
