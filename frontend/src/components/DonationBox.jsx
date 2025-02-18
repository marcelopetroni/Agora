import React, {useState, useEffect} from "react";
import "./Donation.sass";
import PhotoIndicator from '../assets/photoIndicator';

const DonationBox = ({ onClose, onClose2 }) => {

  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
      if (window.ethereum) {
          try {
              const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
              setWalletAddress(accounts[0]);
          } catch (error) {
              console.error('Error connecting to MetaMask:', error);
          }
      } else {
          alert('MetaMask is not installed. Please install it to use this app.');
      }
  };

  useEffect(() => {
      if (window.ethereum) {
          window.ethereum.on('accountsChanged', (accounts) => {
              setWalletAddress(accounts[0]);
          });

          window.ethereum.on('chainChanged', () => {
              window.location.reload();
          });
      }
  }, []);


  return (
    <div className="donation-box-overlay">
      <div className="donation-box-content">
        <div className="left-right-container">
            <div className="left-section">
            <div className="image-placeholder"><PhotoIndicator/></div>
            <div className="info-group">
                <div className="ends-in">Acaba em:</div>
                <div className="date">dd/mm/aa</div>
            </div>
            <div className="progress-container2">
                <div className="progress-bar2">
                <div className="progress-filled2"></div>
                </div>
                <div className="progress-values2">
                <span>R$150</span>
                <span>R$200</span>
                </div>
            </div>
            </div>
            <div className="right-section">
            <div className="project-name">Nome do projeto</div>
            <div className="project-owner">Sofia Nogueira</div>
            <div className="project-description2">
            Sou Sofia Nogueira, cantora e compositora dedicada a transformar emoções em música. Estou em busca de parceiros e investidores para me ajudar a lançar meu EP de estreia, um projeto que venho desenvolvendo com muito carinho e que acredito ter o potencial de causar um impacto significativo.
            </div>
            <div className="payment-info">Informações de pagamento</div>
            <div className="amount">Valor</div>
            <div className="input-and-button">
                <div className="input-wrapper">
                    <div className="amount-label">R$</div>
                    <input type="text" placeholder="00,00" />
                  <div>
                    {walletAddress ? (
                        <p>Connected</p>
                    ) : (
                        <button className="connect-wallet" onClick={connectWallet}>Cadastrar cartão</button>
                    )}
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="action-buttons">
          <button className="cancel-button" onClick={onClose}>Cancelar</button>
          <button className="donate-button2" onClick={onClose2}>Doar</button>
        </div>
      </div>
    </div>
  );
};

export default DonationBox;
