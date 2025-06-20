import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLoginButton from '../components/GoogleButton';
import { userService } from '../services/userService';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import Tags from '../components/Tags';
import CompleteProfile from '../components/completeProfile';
import PropTypes from 'prop-types';

const Login = ({ onSwitch }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [step, setStep] = useState('login');

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
			alert('E-mail ou senha inválidos');
		}
	};

	return (
		<div
			className="ag-flex ag-w-full ag-items-center ag-justify-center ag-px-5 ag-py-10 lg:ag-gap-20 lg:ag-p-0 ag-flex-col lg:ag-flex-row ag-text-amiko lg:ag-min-h-[525px]">
			<div className="ag-hidden ag-flex-col ag-gap-2 lg:ag-mr-20 lg:ag-flex">
				<h1 className="ag-flex ag-gap-2 ag-font-bold ag-leading-snug ag-text-2xl lg:ag-text-[45px] ag-text-center lg:ag-text-start" style={{ color: '#3C233C'}}>
					Junte-se a nós agora <br /> e conecte-se com <br /> quem você procura
				</h1>
				<p className="text-small" style={{ color: '#3C233C' }}>
					Ainda não tem uma conta?{' '}
					<span onClick={onSwitch} className="ag-font-bold ag-cursor-pointer ag-underline">
						Cadastre-se
					</span>
				</p>
			</div>

			{step === 'login' ? (
				<div className="ag-flex ag-flex-col ag-gap-4 lg:ag-w-[450px] ag-w-[350px]">
					<form onSubmit={handleSubmit} id="login-form" className="ag-flex ag-flex-col ag-gap-3 ag-w-full lg:ag-w-[350px]">
						<div
							className="ag-text-lg ag-font-bold text-medium ag-text-center"
							style={{ color: '#3C233C', fontSize: '26px' }}
						>
							Login
						</div>

						<div className="ag-flex ag-flex-col ag-gap-1 ag-font-semibold">
							<label className="text-small ag-ml-1">E-mail</label>
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
							<label className="text-small ag-ml-1">Senha</label>
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
						<div className="ag-flex ag-flex-row ag-w-[350px] ag-w-full ag-items-center ag-justify-between ag-w-full ag-mt-2">
							<GoogleLoginButton changeStep={() => setStep('completeProfile')}/>

							<button type="submit" className="default-button-purple" style={{ width: '165px' }}>
								Login
							</button>
						</div>
					</form>

				</div>
			) : (
				<CompleteProfile variant={'login'} userType={null}/>
			)}
		</div>
	);
};

Login.propTypes = {
	onSwitch: PropTypes.func
};

export default Login;
