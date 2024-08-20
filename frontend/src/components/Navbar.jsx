import PropTypes from "prop-types";
import "./Navbar.sass";
import HomeIcon2 from "../assets/homeIconBlack";
import HomeIcon from "../assets/homeIconGray";
import UserIcon from "../assets/userIconGray";
import UserIcon2 from "../assets/userIconBlack";
import SocialIcon from "../assets/socialIcon";
import SocialIcon2 from "../assets/socialIconBlack";
import LogOutIcon from "../assets/logOutIcon";
import LogoIcon from "../assets/logoIcon";
import WomanImage from '../assets/woman.png';
import ManImage from '../assets/man.jpg'
import { Link, useNavigate } from "react-router-dom";

const NavbarItems = ({ className = "", activePage = "home" }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); 
  };
  return (
    <div className="line-group">
      <div className={`navbar-items ${className}`}>
        <div className="navbar-items-child" />
        <div className="navbar-items-inner">
          <div className="camada-9-3-group">
            <LogoIcon />
          </div>
          <div className="circle-container">
            <img src={WomanImage} alt="Profile" className="profile-image" />
          </div>
        </div>
        <div className="frame-parent14">
          <Link to="/home" className={`teenyiconshome-solid-group ${activePage === "home" ? "active" : ""}`} style={{ textDecoration: 'none' }}>
            {activePage === "home" ? <HomeIcon2 /> : <HomeIcon />} 
            <div className="homepage1">Homepage</div>
          </Link>
          <Link to="/profile" className={`iconamoonprofile-fill-group ${activePage === "profile" ? "active" : ""}`} style={{ textDecoration: 'none' }}>
            {activePage === "profile" ? <UserIcon2 /> : <UserIcon />}
            <div className="profile1">Profile</div>
          </Link>
          <Link to="/social" className={`material-symbolssocial-distan-group ${activePage === "social" ? "active" : ""}`} style={{ textDecoration: 'none' }}>
            {activePage === "social" ? <SocialIcon2 /> : <SocialIcon />}
            <div className="social1">Social</div>
          </Link>
        </div>
        <div className="rilogout-circle-r-line-group" onClick={handleLogout}>
          <LogOutIcon />
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
  activePage: PropTypes.string,
};

export default NavbarItems;
