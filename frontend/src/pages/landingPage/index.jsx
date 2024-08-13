import React, {useState} from 'react';
import './landing.sass';

const LandingPage = () => {
  const [step, setStep] = useState('login'); // Estado inicial na tela de login

  // Função para lidar com a mudança de tela
  const handleSignUpClick = () => {
    setStep('chooseRole');
  };

  const handleRoleClick = (role) => {
    setStep('personalInfo');
  };

  return (
    <div className="landing-page">
      <header className="header">
        <nav className="navbar">
          <img src='./src/assets/landingPage/agoraLogo.svg' alt="Agora Logo" className="logo"/>
          <ul>
            <li>About Us</li>
            <li>Join</li>
            <li>Security</li>
            <li>Feedback</li>
          </ul>
          <div className="auth-buttons">
            <button className="login">Login</button>
            <button className="register">Register</button>
          </div>
        </nav>
      </header>
      
      <div className="content">
        <div className="background-overlay">
          <div className='overview-container'>
            <div className="welcome-text">
              <h1>Welcome to</h1>
              <img src='./src/assets/landingPage/agoraLogoName.svg' alt="Agora Name Logo"/>
              <p>Connecting Talent and Opportunity</p>
            </div>
            <div className="description">
              <p>
                Inspired by the ancient Greek agora, where citizens gathered to exchange ideas and do business, our Agora is a modern platform that connects artists and talent hunters.
                <br/><br/>
                Just as the agora was the center of public and cultural life, our platform is the meeting place where artists' talent meets the right opportunities, powered by advanced matchmaking technology and the security of Hedera Hashgraph.
              </p>
            </div>
          </div>
        
        <div className="solution">
          <h3>Our solution</h3>
          <div className="cards">
            <div className="card">
              <h4>Mission</h4>
              <p>Empower artists and talent hunters by providing an advanced matchmaking platform to connect the right talent and opportunity.</p>
            </div>
            <div className="card">
              <h4>Vision</h4>
              <p>To be the leading platform for discovering and promoting artistic talent, while fostering a vibrant and inclusive artistic ecosystem.</p>
            </div>
            <div className="card">
              <h4>Values</h4>
              <p>Innovation, creativity, and integrity are at the heart of everything we do, ensuring a secure and trusted environment for all our users.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Login */}
      <div className="login-section">
        {step === 'login' && (
          <div className="login-content">
            <div className="signup-info">
              <h2>Join us now and turn your<br></br> talent into opportunity</h2>
              <p>Don't have an account yet? <span className="signup-link" onClick={handleSignUpClick}>Sign up</span></p>
            </div>
            <div className="login-form">
              <h3>Welcome Back</h3>
              <p>We're glad you're here</p>
              <form>
                <label>Email</label>
                <input type="email" />
                <label>Password</label>
                <input type="password" />
                <button type="submit" className="login-button">Login</button>
              </form>
            </div>
          </div>
        )}

        {step === 'chooseRole' && (
          <div className="role-selection-content">
            <div className="signup-info">
              <h2>Join us now and turn your talent into opportunity</h2>
              <p>Already have an account? <span className="signup-link" onClick={() => setStep('login')}>Login</span></p>
            </div>
            <div className="role-selection">
              <h3>Which role fits you best?</h3>
              <p>Choose the option that describes your talent or priorities.</p>
              <button className="role-button artist" onClick={() => handleRoleClick('artist')}>I am an Artist</button>
              <button className="role-button hunter" onClick={() => handleRoleClick('hunter')}>I am an Talent Hunter</button>
            </div>
          </div>
        )}

        {step === 'personalInfo' && (
          <div className="personal-info-content">
            <div className="signup-info">
              <h2>Join us now and turn your talent into opportunity</h2>
              <p>Already have an account? <span className="signup-link" onClick={() => setStep('login')}>Login</span></p>
            </div>
            <div className="personal-info-form">
              <h3>Personal informations</h3>
              <form>
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" />
                <label>Date of Birth</label>
                <input type="date" />
                <label>Country</label>
                <input type="text" placeholder="Enter your country" />
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
                <label>Language Spoken</label>
                <select multiple>
                  <option>English</option>
                  <option>Portuguese</option>
                  {/* Outras línguas */}
                </select>
                <label>Artistic Field</label>
                <select multiple>
                  <option>Music</option>
                  <option>Theater</option>
                  {/* Outras áreas */}
                </select>
                <button type="submit" className="register-button">Register</button>
              </form>
            </div>
          </div>
        )}
      </div>

    {/* Seção Hedera Hashgraph */}
    <div className="hedera-section">
        <div className="hedera-content">
          <div className="hedera-left">
            <h2>Built on</h2>
            <img src='./src/assets/landingPage/hederaLogo.svg' alt="Hedera Logo"/>
          </div>
          <div className="hedera-right">
            <h1>Security and Trust</h1>
            <p>
              At Agora, we embrace Web3 principles to ensure a secure and transparent experience for all users. With Hedera Hashgraph, your information and transactions are safeguarded by one of the most advanced and efficient ledger technologies available.
            </p>
            <p>
              Our use of smart contracts ensures that all agreements are executed transparently and reliably, allowing artists and talent hunters to focus on their creative and business.
            </p>
            <button className="visit-hedera">Visit Hedera</button>
          </div>
        </div>
      </div>
        {/* Seção de Depoimentos */}
        <div className="testimonials-section">
        <h3>What the Specialists Are Saying</h3>
        <div className="testimonials-cards">
          <div className="card">
            <div className="photo-placeholder"></div>
            <h4>Profissão</h4>
            <p>Nome do profissional</p>
            <p>Lorem ipsum dolor sit amet consectetur. Sed eleifend nibh vitae eros consequat sed odio. Orci a posuere fermentum consectetur elementum.</p>
          </div>
          <div className="card highlighted">
            <img src='./src/assets/landingPage/cristinaPhoto.svg' alt="Cristina Amaral" className="specialist-photo"/>
            <h4>Brazilian Singer</h4>
            <p>Cristina Amaral</p>
            <p>Lorem ipsum dolor sit amet consectetur. Sed eleifend nibh vitae eros consequat sed odio. Orci a posuere fermentum consectetur elementum.</p>
          </div>
          <div className="card">
            <div className="photo-placeholder"></div>
            <h4>Profissão</h4>
            <p>Nome do profissional</p>
            <p>Lorem ipsum dolor sit amet consectetur. Sed eleifend nibh vitae eros consequat sed odio. Orci a posuere fermentum consectetur elementum.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className='footer-logo'>
            <img src='./src/assets/landingPage/agoraLogoNameBlack.svg' alt="Agora Footer Logo"/>
            <p>AGORA™. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </footer>
    </div>
  </div>
  );
}

export default LandingPage;
