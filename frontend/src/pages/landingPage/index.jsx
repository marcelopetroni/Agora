import React, {useState} from 'react';
import './landing.sass';
import LanguageSelector from '../../components/LanguageSelector';
import ArtisticFieldSelector from '../../components/ArtisticFieldSelector';
import CountrySelector from '../../components/CountrySelector';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [step, setStep] = useState('login');
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [languages, setLanguages] = useState([]);
  const [role, setRole] = useState();
  
  const [searchFields, setSearchFields] = useState([]);
 
  const handleRegisterClick = async (e) => {
    e.preventDefault();
  
    const newUser = {
      name,
      email,
      birthDate,
      password,
      country,
      type: role,
      languages: JSON.stringify(languages),
      searchFields: JSON.stringify(searchFields),
      private_key: null,
      hedera_account_id: null,
    };    
  
    try {
      const response = await fetch('https://agorahacka.onrender.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('User created:', data);
  
        setName('');
        setEmail('');
        setBirthDate('');
        setPassword('');
        setCountry('');
        setLanguages([]);       
        setSearchFields([]); 
  
      } else {
        console.error('Failed to create user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  
  const handleSignUpClick = () => {
    setStep('chooseRole');
  };

  const handleRoleClick = (role) => {
    setRole(role)
    setStep('personalInfo');
  };

  const handleLoginClick = () => {
    setStep('login');
  };

  const handleLogin = async (e) => {
    e.preventDefault();

  // Anchors
    const credentials = { email, password };

    try {
      const response = await fetch('https://agorahacka.onrender.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        console.log('Login successful');

        // go to "/home" if it's authenticated
        navigate('/home');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Anchors
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-page">
      <header className="header">
        <nav className="navbar">
          <img src='/agoraLogo.svg' alt="Agora Logo" className="logo"/>
          <ul>
            <li onClick={() => scrollToSection('about')}>About Us</li>
            <li onClick={() => scrollToSection('join')}>Join</li>
            <li onClick={() => scrollToSection('security')}>Security</li>
            <li onClick={() => scrollToSection('feedback')}>Feedback</li>
          </ul>
          <div className="auth-buttons">
            <a href="#login-section">
              <button className="login" onClick={handleLoginClick}>Login</button>
            </a>
            <a href="#login-section">
              <button className="register" onClick={() => (scrollToSection('join'), handleSignUpClick())}>Register</button>
            </a>
            
          </div>
        </nav>
      </header>
      
      <div className="content">
        <div className="background-overlay">
          <div className='overview-container'>
            <div id='about' className="welcome-text">
              <h1>Welcome to</h1>
              <img src='/agoraLogoName.svg' alt="Agora Name Logo"/>
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

      {/* Login Section */}
      <div id="login-section" className="login-section">
        {step === 'login' && (
          <div className="login-content">
            <div className="signup-info">
              <h2>Join us now and turn your<br></br> talent into opportunity</h2>
              <p>Don't have an account yet? <span className="signup-link" onClick={handleSignUpClick}>Sign up</span></p>
            </div>
            <div className="login-form">
              <h3>Welcome Back</h3>
              <p>We're glad you're here</p>
              <form onSubmit={handleLogin}>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="login-button" onClick={handleLogin}>Login</button>
              </form>
            </div>
          </div>
        )}

        {step === 'chooseRole' && (
          <div className="role-selection-content">
            <div className="signup-info">
              <h2>Join us now and turn your<br></br> talent into opportunity</h2>
              <p>Already have an account? <span className="signup-link" onClick={() => setStep('login')}>Login</span></p>
            </div>
            <div className="role-selection">
              <h3>Which role fits you best?</h3>
              <p>Choose the option that describes your talent or priorities.</p>
              <button className="role-button artist" onClick={() => handleRoleClick('artist')}>I am an <strong>Artist</strong></button>
              <button className="role-button hunter" onClick={() => handleRoleClick('talent_hunter')}>I am an <strong>Talent Hunter</strong></button>
            </div>
          </div>
        )}

        {step === 'personalInfo' && (
          <div className="personal-info-content">
            <div className="signup-info">
              <h2>Join us now and turn your<br></br> talent into opportunity</h2>
              <p>Already have an account? <span className="signup-link" onClick={() => setStep('login')}>Login</span></p>
            </div>
            <div className="personal-info-form">
              <h3>Personal informations</h3>
              <form>
                <div className='form-line'>
                  <div className='name-input'>
                    <label>Full Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className='date-input'>
                    <label>Date of Birth</label>
                    <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
                  </div>
                  <div>
                    <CountrySelector setCountry={setCountry} />
                  </div>
                </div>
                <div className='form-line'>
                  <div>
                    <label>E-mail</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </div>
                <div>
                <div>
                  <LanguageSelector setLanguages={setLanguages} />
                </div>
                </div>
                <div>
                  <ArtisticFieldSelector setSearchFields={setSearchFields} />
                </div>
              </form>
              <div className='checkbox-section'>
                <input className='checkbox' type="checkbox" />
                <p className='checkbox-label'>I agree to the <a href="#">terms and policies</a><p>and confirm that I have read and understood them.</p></p>
                <button type="submit" className="register-button" onClick={handleRegisterClick}>Register</button>
              </div>
            </div>
          </div>
        )}
      </div>

    {/* Hedera Hashgraph Section */}
    <div className="hedera-section">
        <div className="hedera-content">
          <div className="hedera-left">
            <h2>Built on</h2>
            <img src='/hederaLogo.svg' alt="Hedera Logo"/>
          </div>
          <div className="hedera-right">
            <h1>Security and Trust</h1>
            <p>
              At Agora, we embrace Web3 principles to ensure a secure and transparent experience for all users. With Hedera Hashgraph, your information and transactions are safeguarded by one of the most advanced and efficient ledger technologies available.
            </p>
            <p>
              Our use of smart contracts ensures that all agreements are executed transparently and reliably, allowing artists and talent hunters to focus on their creative and business.
            </p>
            <a href='https://hedera.com/'>
              <button className="visit-hedera">Visit Hedera</button>
            </a>
          </div>
        </div>
      </div>
        {/* Seção de Depoimentos */}
        <div id='feedback' className="testimonials-section">
        <h3>What the Specialists Are Saying</h3>
        <div className="testimonials-cards">
          <div className="card">
            <div className="photo-placeholder"></div>
            <h4>Profissão</h4>
            <p>Nome do profissional</p>
            <p>Lorem ipsum dolor sit amet consectetur. Sed eleifend nibh vitae eros consequat sed odio. Orci a posuere fermentum consectetur elementum.</p>
          </div>
          <div className="card highlighted">
            <img src='/cristinaPhoto.svg' alt="Cristina Amaral" className="specialist-photo"/>
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
            <img src='/agoraLogoNameBlack.svg' alt="Agora Footer Logo"/>
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