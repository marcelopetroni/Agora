import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLoginButton from '../components/googleButton';
import { userService } from '../services/userService';
import { IoIosArrowBack } from "react-icons/io";
import { LuEye, LuEyeOff } from 'react-icons/lu';
import PropTypes from 'prop-types';

const Register = ({ onSwitch }) => {
	const [step, setStep] = useState('selectType');
	const [userType, setUserType] = useState(null);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const result = await userService.createUser({ name, email, password, type: userType, });

			if (result.success) {
				alert('Usuário cadastrado com sucesso!');
				navigate('/home');
			}

		} catch (error) {
			console.error('Erro no cadastro:', error);
			alert('Erro inesperado ao cadastrar');
		}
	};

	return (
		<div
			className="ag-flex ag-w-full ag-items-center ag-justify-center ag-p-5"
			style={{ height: '552px' }}
		>
			<div className="ag-flex ag-flex-col ag-gap-2" style={{ marginRight: '200px' }}>
				<h1 className="ag-font-bold" style={{ color: '#3C233C', fontFamily: 'Amiko', fontSize: '40px' }}>
					Junte-se a nós agora <br /> e conecte-se com <br /> quem você procura
				</h1>
				<p className="text-small" style={{ color: '#3C233C' }}>
					Já tem uma conta?{' '}
					<span
						onClick={onSwitch}
						className="ag-font-bold ag-cursor-pointer ag-underline"
					>
						Entre aqui
					</span>
				</p>
			</div>

			{step === 'selectType' && (
				<div className="ag-flex ag-flex-col ag-items-center" style={{ width: '338px' }}>
					<div className='ag-flex ag-flex-col ag-gap-1 ag-mb-3'>
						<div className="text-medium ag-w-full ag-font-bold" style={{ fontSize: '24px' }}>
							Como você se identifica?
						</div>
						<p className="text-small ag-font-semibold" style={{letterSpacing: '2px'}}>Escolha a opção que descreve seu talento ou profissão.</p>
					</div>

					<div className='ag-flex ag-flex-col ag-gap-4'>
						<button
							onClick={() => {
								setUserType('artist');
								setStep('register');
							}}
							className="default-button-purple-light"
							style={{ width: '342px', height: '73px', borderRadius: '18px' }}
						>
							<span className='ag-font-semibold'>
								Eu sou artista
							</span>
						</button>
						<button
							onClick={() => {
								setUserType('hirer');
								setStep('register');
							}}
							className="default-button" style={{ width: '342px', height: '73px', borderRadius: '18px' }}
						>
							<span className='ag-font-semibold'>
								Procuro um artista
							</span>
						</button>
					</div>
				</div>
			)}

			{step === 'register' && (
				<div className='ag-flex ag-flex-col ag-gap-3'>
					<form onSubmit={handleSubmit} id="login-form" className="ag-flex ag-flex-col ag-gap-3 ag-w-full">
						<div className="ag-flex ag-flex-row ag-items-center ag-justify-between ag-w-full">
							<span
								onClick={() => setStep('selectType')}
								className="ag-cursor-pointer ag-flex ag-items-center"
								style={{ color: '#3C233C' }}
							>
								<IoIosArrowBack size={20} />
							</span>

							<div
								className="ag-flex-1 ag-font-bold text-medium ag-text-center"
								style={{ color: '#3C233C', fontSize: '26px' }}
							>
								Cadastre-se
							</div>
						</div>


						<div className="ag-flex ag-flex-col ag-gap-1 ag-font-semibold">
							<label className="text-small">Nome</label>
							<input
								placeholder="Nome"
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="ag-border ag-px-3 ag-py-2 ag-focus:ag-outline-none"
								style={{ borderRadius: '12px', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.05)' }}
							/>
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
									type={showPassword ? 'text' : 'password'}
									value={password}
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

						<div className="text-small ag-cursor-pointer ag-w-full">
							<span>Esqueceu a senha? </span>
							<span className="ag-font-bold ag-underline">Clique aqui</span>
						</div>
					</form>
					<div className="ag-flex ag-flex-row ag-gap-2 ag-items-center ag-justify-center ag-w-full ag-mt-2">
						<GoogleLoginButton userType={userType} />

						<button type="submit" className="default-button-purple" style={{ width: '165px' }} form="login-form">
							Login
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

Register.propTypes = {
	onSwitch: PropTypes.func.isRequired,
};

export default Register;
