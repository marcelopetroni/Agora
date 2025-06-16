import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLoginButton from '../components/googleButton';
import { userService } from '../services/userService';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import Tags from '../components/tags';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [showCompleteProfile, setShowCompleteProfile] = useState(false);
	const [languages, setLanguages] = useState([]);
	const [countries, setCountries] = useState([]);

	const [userType, setUserType] = useState('');

	const navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const result = await userService.login({ email, password });

			if (result.success) {
				alert('Usuário autenticado com sucesso!');
				navigate('/home');
			}
		} catch (error) {
			console.error('Erro no cadastro:', error);
			alert('Erro inesperado ao cadastrar');
		}
	};

	const handleCompleteProfile = async () => {
		const pending = JSON.parse(localStorage.getItem('pendingGoogleUser'));

		if (!pending) {
			alert('Erro! Dados pendentes não encontrados.');
			navigate('/login');
			return;
		}

		const { userInfo } = pending;

		userInfo.type = userType;

		try {
			const result = await userService.loginGoogle(userInfo);

			if (result.success) {
				localStorage.setItem('token', result.data.token);
				localStorage.setItem('user', JSON.stringify(result.data.user));
				localStorage.removeItem('pendingGoogleUser');

				navigate('/home');
			} else {
				alert(result.message || 'Erro ao fazer login com Google');
			}
		} catch (error) {
			console.error('Erro ao finalizar login com Google:', error);
			alert('Erro inesperado ao finalizar login');
		}
	};

	const handleAddLanguage = (e) => {
		const value = e.target.value;
		if (value && !languages.includes(value)) {
			setLanguages([...languages, value]);
		}
	};

	const handleRemoveLanguage = (lang) => {
		setLanguages(languages.filter((l) => l !== lang));
	};

	const handleAddCountry = (e) => {
		const value = e.target.value;
		if (value && !countries.includes(value)) {
			setCountries([...countries, value]);
		}
	};

	const handleRemoveCountry = (country) => {
		setCountries(countries.filter((c) => c !== country));
	};


	return (
		<div
			className="ag-flex ag-w-full ag-items-center ag-justify-center ag-p-5"
			style={{ height: '552px', backgroundColor: '#F0EED8' }}
		>
			<div className="ag-flex ag-flex-col ag-gap-2" style={{ marginRight: '200px' }}>
				<h1 className="ag-font-bold" style={{ color: '#3C233C', fontFamily: 'Amiko', fontSize: '40px' }}>
					Junte-se a nós agora <br /> e conecte-se com <br /> quem você procura
				</h1>
				<p className="text-small" style={{ color: '#3C233C' }}>
					Ainda não tem uma conta?{' '}
					<span
						onClick={() => navigate('/register')}
						className="ag-font-bold ag-cursor-pointer ag-underline"
					>
						Cadastre-se
					</span>
				</p>
			</div>

			{!showCompleteProfile ? (
				<div className="ag-flex ag-flex-col ag-gap-3">
					<form onSubmit={handleSubmit} id="login-form" className="ag-flex ag-flex-col ag-gap-3 ag-w-full">
						<div
							className="ag-text-lg ag-font-bold text-medium ag-text-center"
							style={{ color: '#3C233C', fontSize: '26px' }}
						>
							Login
						</div>

						<div className="ag-flex ag-flex-col ag-gap-1 ag-font-semibold">
							<label className="text-small">E-mail</label>
							<input
								placeholder="E-mail"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="ag-border ag-px-3 ag-py-2 ag-focus:ag-outline-none"
								style={{ borderRadius: '12px', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.05)' }}
							/>
						</div>

						<div className="ag-flex ag-flex-col ag-gap-1 ag-font-semibold">
							<label className="text-small">Senha</label>
							<div className="ag-relative">
								<input
									placeholder="Senha"
									value={password}
									type={showPassword ? 'text' : 'password'}
									onChange={(e) => setPassword(e.target.value)}
									className="ag-border ag-px-3 ag-py-2 ag-w-full ag-focus:ag-outline-none"
									style={{ borderRadius: '12px', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.05)' }}
								/>
								<span
									onClick={() => setShowPassword(!showPassword)}
									className="ag-absolute ag-right-3 ag-top-1/2 ag--translate-y-1/2 ag-cursor-pointer"
								>
									{showPassword ? <LuEye /> : <LuEyeOff />}
								</span>
							</div>
						</div>

						<div className="text-small ag-w-full" style={{ userSelect: 'none' }}>
							<span>Esqueceu a senha? </span>
							<span className="ag-font-bold ag-underline ag-cursor-pointer">Clique aqui</span>
						</div>
					</form>

					<div className="ag-flex ag-flex-row ag-gap-2 ag-items-center ag-justify-center ag-w-full ag-mt-2">
						<GoogleLoginButton
							onMissingType={() => setShowCompleteProfile(true)}
						/>
						<button
							type="submit"
							className="default-button-purple"
							style={{ width: '165px' }}
							form="login-form"
						>
							Login
						</button>
					</div>
				</div>
			) : (
				<div className="ag-flex ag-flex-col ag-gap-4" style={{ width: '450px' }}>
					<div
						className="ag-text-lg ag-font-bold text-medium ag-text-center ag-mb-3"
						style={{ color: '#3C233C', fontSize: '26px' }}
					>
						Complete seu perfil
					</div>

					<div className='ag-flex ag-flex-row ag-gap-4 ag-items-center ag-justify-center'>
						<div className="ag-flex ag-flex-col ag-gap-1 ag-w-full">
							<label className="text-small ag-font-semibold">
								Como você se identifica? <span style={{ color: 'red' }}>*</span>
							</label>
							<select
								value={userType}
								onChange={(e) => setUserType(e.target.value)}
								className="ag-border ag-px-3 ag-py-2 ag-focus:ag-outline-none ag-w-full"
								style={{ borderRadius: '12px', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.05)' }}
							>
								<option value="" hidden >Selecione...</option>
								<option value="artist">Sou um artista</option>
								<option value="hirer">Procuro um artista</option>
							</select>
						</div>

						<div className="ag-flex ag-flex-col ag-gap-1 ag-w-full">
							<label className="text-small ag-font-semibold">Data de Nascimento</label>
							<input
								placeholder="DD/MM/YYYY"
								type="date"
								className="ag-border ag-px-3 ag-py-2 ag-focus:ag-outline-none ag-w-full"
								style={{ borderRadius: '12px', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.05)' }}
							/>
						</div>
					</div>
					<div className="ag-flex ag-flex-row ag-gap-4 ag-w-full" style={{ minHeight: '100px' }}>
						<div className="ag-flex ag-flex-col ag-gap-1 ag-w-full">
							<label className="text-small ag-font-semibold">Idiomas falados</label>
							<select
								value=""
								onChange={handleAddLanguage}
								className="ag-border ag-px-3 ag-py-2 ag-focus:ag-outline-none ag-w-full"
								style={{
									borderRadius: '12px',
									boxShadow: '0 6px 8px rgba(0, 0, 0, 0.05)',
								}}
							>
								<option value="">Selecione...</option>
								<option value="Português">Português</option>
								<option value="Inglês">Inglês</option>
								<option value="Espanhol">Espanhol</option>
								<option value="Alemão">Alemão</option>
								<option value="Francês">Francês</option>
							</select>

							<Tags items={languages} onRemove={handleRemoveLanguage} />
						</div>

						<div className="ag-flex ag-flex-col ag-gap-1 ag-w-full">
							<label className="text-small ag-font-semibold">País</label>
							<select
								value=""
								onChange={handleAddCountry}
								className="ag-border ag-px-3 ag-py-2 ag-focus:ag-outline-none ag-w-full"
								style={{
									borderRadius: '12px',
									boxShadow: '0 6px 8px rgba(0, 0, 0, 0.05)',
								}}
							>
								<option value="">País</option>
								<option value="Brasil">Brasil</option>
								<option value="Alemanha">Alemanha</option>
								<option value="Estados Unidos">Estados Unidos</option>
								<option value="Portugal">Portugal</option>
								<option value="Argentina">Argentina</option>
							</select>

							<Tags items={countries} onRemove={handleRemoveCountry} />
						</div>
					</div>
					<div className='ag-w-full ag-flex ag-items-center ag-justify-end'>
						<button
							className="default-button-purple"
							style={{
								width: '100px',
								opacity: !userType ? 0.5 : 1,
								cursor: userType ? 'pointer' : 'not-allowed',
							}}
							onClick={handleCompleteProfile}
							disabled={!userType}
						>
							Entrar
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Login;
