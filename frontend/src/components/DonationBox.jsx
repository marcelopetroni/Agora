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
            <div className="progress-container2">
                <div className="progress-bar2">
                <div className="progress-filled2"></div>
                </div>
                <div className="progress-values2">
                <span>US$150</span>
                <span>US$200</span>
                </div>
            </div>
            </div>
            <div className="right-section">
            <div className="project-name">Project Name</div>
            <div className="project-owner">Sofia Nogueira</div>
            <div className="project-description2">
            I'm Sofia Nogueira, a singer and songwriter dedicated to turning emotions into music. I'm seeking partners and investors to help me launch my debut EP, a project I've been developing with great care and believe has the potential to make a meaningful impact.
            </div>
            <div className="payment-info">Payment Information</div>
            <div className="amount">Amount</div>
            <div className="input-and-button">
                <div className="input-wrapper">
                    <div className="amount-label">US$</div>
                    <input type="text" placeholder="00,00" />
                </div>
                <button className="connect-wallet">Connect Wallet</button>
            </div>
            </div>
        </div>
        <div className="action-buttons">
          <button className="cancel-button" onClick={onClose}>Cancel</button>
          <button className="donate-button2">Donate</button>
        </div>
      </div>
    </div>
  );
};

export default DonationBox;
