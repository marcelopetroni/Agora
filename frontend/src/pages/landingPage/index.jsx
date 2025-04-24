import React, {useState} from 'react';
import './landing.sass';
import LanguageSelector from '../../components/LanguageSelector';
import ArtisticFieldSelector from '../../components/ArtisticFieldSelector';
import CountrySelector from '../../components/CountrySelector';
import { useNavigate } from 'react-router-dom';
import { userService } from '../../services/userService';

const LandingPage = () => {
	const [step, setStep] = useState('login');
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [birth, setBirthDate] = useState('');
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
			birth,
			password,
			country,
			languages,
			field: searchFields,
			company: "",
			experience: ""
		};

		try {
			const response = await userService.createUser(newUser);

			if (response.success) {
				localStorage.setItem('role', role);

				setName('');
				setEmail('');
				setBirthDate('');
				setPassword('');
				setCountry('');
				setLanguages([]);
				setSearchFields([]);

				navigate(`/home`);
			} else {
				console.error('Failed to create user:', response.error);
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

		const credentials = { email, password };

		try {
			const response = await userService.login(credentials);

			if (response) {
				localStorage.setItem('token', response.token);
				console.log('Login successful');

				navigate('/home');
			} else {
				console.error('Algo deu errado:', response.message || 'Credenciais inválidas');
			}
		} catch (error) {
			console.error('Erro:', error.response?.data?.message || 'Erro ao tentar fazer login');
		}
	};

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
				<li onClick={() => scrollToSection('about')}>Sobre nós</li>
				<li onClick={() => scrollToSection('join')}>Junte-se</li>
				<li onClick={() => scrollToSection('feedback')}>Feedback</li>
			</ul>
			</nav>
			<div className="auth-buttons">
				<a href="#join">
				<button className="login" onClick={handleLoginClick}>Login</button>
				</a>
				<a href="#join">
				<button className="register" onClick={() => (scrollToSection('join'), handleSignUpClick())}>Cadastre-se</button>
				</a>

			</div>
		</header>

		<div className="content">
			<div className="background-overlay">
			<div className='overview-container'>
				<div id='about' className="welcome-text">
				<img src='/agoraLogoName.svg' alt="Agora Name Logo"/>
				<p>Conectando talento e oportunidade</p>
				</div>
				<div className="description">
				<p>
				Inspirada na antiga Ágora grega, onde cidadãos se reuniam para trocar ideias e fazer negócios, a nossa Agora é uma plataforma moderna que conecta artistas e caçadores de talentos.
					<br/><br/>
				Assim como a ágora era o centro da vida pública e cultural, nossa plataforma é o ponto de encontro onde o talento artístico encontra as oportunidades certas, impulsionada por tecnologia avançada de matchmaking.
				</p>
				</div>
			</div>

			<div className="solution">
			<h3>Nossa solução</h3>
			<div className="cards">
				<div className="card">
				<h4>Missão</h4>
				<p>Capacitar artistas e caçadores de talentos, proporcionando conexões autênticas e seguras que impulsionam a criatividade e a inovação no mercado global das artes.</p>
				</div>
				<div className="card">
				<h4>Visão</h4>
				<p>Ser a principal plataforma para descoberta e promoção de talentos artísticos, utilizando tecnologias avançadas para criar um ecossistema artístico inclusivo.</p>
				</div>
				<div className="card">
				<h4>Valores</h4>
				<p>Inovação, segurança, transparência e inclusão são nossos principais valores para fortalecer o mercado artístico mundial.</p>
				</div>
			</div>
			</div>
		</div>

		{/* Login Section */}
		<div id="join" className="login-section">
			{step === 'login' && (
			<div className="login-content">
				<div className="signup-info">
				<h2>Junte-se a nós agora e transforme<br></br>seu talento em oportunidade</h2>
				<p>Ainda não tem uma conta? <span className="signup-link" onClick={handleSignUpClick}>Cadastre-se</span></p>
				</div>
				<div className="login-form">
				<h3>Bem-vindo de volta</h3>
				<p>Ficamos felizes por tê-lo aqui</p>
				<form onSubmit={handleLogin}>
					<label>Email</label>
					<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
					<label>Senha</label>
					<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
					<button type="submit" className="login-button" onClick={handleLogin}>Entrar</button>
				</form>
				</div>
			</div>
			)}

			{step === 'chooseRole' && (
			<div className="role-selection-content">
				<div className="signup-info">
				<h2>Junte-se a nós agora e transforme<br></br>seu talento em oportunidade</h2>
				<p>Já tem uma conta? <span className="signup-link" onClick={() => setStep('login')}>Entre</span></p>
				</div>
				<div className="role-selection">
				<h3>Como você se identifica?</h3>
				<p>Escolha a opção que descreve seu talento ou profissão.</p>
				<button className="role-button artist" onClick={() => handleRoleClick('artist')}>Eu sou <strong>artista</strong></button>
				<button className="role-button hunter" onClick={() => handleRoleClick('talent_hunter')}>Eu sou <strong>caça-talentos</strong></button>
				</div>
			</div>
			)}

			{step === 'personalInfo' && (
			<div className="personal-info-content">
				<div className="signup-info">
				<h2>Junte-se a nós agora e transforme<br></br>seu talento em oportunidade</h2>
				<p>Já tem uma conta? <span className="signup-link" onClick={() => setStep('login')}>Entre</span></p>
				</div>
				<div className="personal-info-form">
				<h3>Informações Pessoais</h3>
				<form>
					<div className='form-line'>
						<div className='name-input'>
							<label>Nome Completo</label>
							<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
						</div>
						<div className='date-input'>
							<label>Data de Nascimento</label>
							<input type="date" value={birth} onChange={(e) => setBirthDate(e.target.value)} />
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
							<label>Senha</label>
							<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
						</div>
					</div>
					<div>
					<div>
						<LanguageSelector setLanguages={setLanguages} />
					</div>
					</div>
					{role === 'artist' && (
			<div>
				<ArtisticFieldSelector setSearchFields={setSearchFields} />
			</div>
			)}
		</form>
				<div>
					<div className='checkbox-section'>
					<input className='checkbox' type="checkbox" />
					<p className='checkbox-label'>Eu concordo com os <a href="#">termos e políticas</a><p> e confirmo que li e os compreendi.</p></p>
					<div className='register-button-div'>
					<button type="submit" className="register-button" onClick={handleRegisterClick}>Cadastre-se</button>
					</div>
					</div>
				</div>
				</div>
			</div>
			)}
		</div>
			{/* Seção de Depoimentos */}
			<div id='feedback' className="testimonials-section">
			<h3>O que os especialistas estão dizendo</h3>
			<div className="testimonials-cards">
			<div className="card">
			<img src='/Saulo.jpg' alt="Saulo" className="photo-placeholder"/>
				<h4>Produtor</h4>
				<p>Saulo Aleixo</p>
				<p>Além de ser útil e relevante, a plataforma facilitará um intercâmbio entre a arte e seu público, tornando o mundo digital cada vez mais valioso. A plataforma chamará a atenção de diversos setores, levando outras empresas a criarem suas próprias plataformas, aumentando a concorrência e oferecendo mais opções para os usuários.</p>
			</div>
			<div className="card highlighted">
			<img src='/cristinaPhoto.svg' alt="Cristina Amaral" className="specialist-photo"/>
				<h4>Cantora</h4>
				<p>Cristina Amaral</p>
				<p>Vejo essa plataforma como uma ferramenta que pode contribuir significativamente para o crescimento artístico e cultural, investindo no mercado atual e nas redes sociais. As funcionalidades apresentadas estão alinhadas com o mundo musical e artístico, oferecendo oportunidades para exibição e desenvolvimento de ideias artísticas em um espaço virtual. Acredito que seja uma plataforma muito útil.</p>
			</div>
			<div className="card">
			<img src='/Breno.png' alt="Breno" className="photo-placeholder"/>
				<h4>Empresário</h4>
				<p>Breno falcão</p>
				<p>A plataforma será de grande utilidade. Há uma enorme demanda nesse setor, e ela dará visibilidade a um grande número de pessoas que estão prontas para entrar no mercado. A plataforma é essencial para garantir que artistas e seus trabalhos sejam vistos por produtores e empreendedores.</p>
			</div>
			</div>
		</div>

		{/* Footer */}
		<footer className="footer">
			<div className="footer-content">
			<div className='footer-logo'>
				<img src='/agoraLogoFooter.svg' alt="Agora Footer Logo"/>
				<p>AGORA™. Todos os direitos reservados.</p>
			</div>
			<div className="footer-links">
				<a href="#">Política de privacidade</a>
				<a href="#">Termos de serviço</a>
				<a href="#">Configurações de cookies</a>
			</div>
			</div>
		</footer>
		</div>
	</div>
	);
}

export default LandingPage;