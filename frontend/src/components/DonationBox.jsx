import React from "react";
import "./Donation.sass";
import PhotoIndicator from '../assets/photoIndicator';

const DonationBox = ({ onClose }) => {
  return (
    <div className="donation-box-overlay">
      <div className="donation-box-content">
        <div className="left-right-container">
            <div className="left-section">
            <div className="image-placeholder"><PhotoIndicator/></div>
            <div className="info-group">
                <div className="ends-in">Ends in:</div>
                <div className="date">mm/dd/yy</div>
            </div>
            <div className="progress-container">
                <div className="progress-bar">
                <div className="progress-filled"></div>
                </div>
                <div className="progress-values">
                <span>US$150</span>
                <span>US$200</span>
                </div>
            </div>
            </div>
            <div className="right-section">
            <div className="project-name">Project Name</div>
            <div className="project-owner">Sofia Nogueira</div>
            <div className="project-description">
                I'm Sofia Nogueira, a singer and songwriter dedicated to turning emotions into music...
            </div>
            <div className="payment-info">Payment Information</div>
            <div className="amount">Amount</div>
            <div className="input-and-button">
                <input type="text" placeholder="00,00" />
                <button className="connect-wallet">Connect Wallet</button>
            </div>
            </div>
        </div>
        <div className="action-buttons">
          <button className="cancel-button" onClick={onClose}>Cancel</button>
          <button className="donate-button">Donate</button>
        </div>
      </div>
    </div>
  );
};

export default DonationBox;
