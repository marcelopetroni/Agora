import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userService } from '../services/userService';

const LandingPage = () => {
	const [userType, setUserType] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		window.onSignIn = async (googleUser) => {
			try {
				if (!userType) {
					alert('Por favor, selecione um tipo de usuário primeiro');
					return;
				}

				const idToken = googleUser.credential;

				const result = await userService.loginGoogle({
					idToken,
					type: userType
				});

				if (result.success) {
					localStorage.setItem('token', result.data.token);
					localStorage.setItem('user', JSON.stringify(result.data.user));
					// AQUI ADICIONAR ARQUIVO QUE VAI NAVEGAR APÓS LOGIN COM SUCESSO navigate('/dashboard');
				}
			} catch (error) {
				console.error('Erro no login:', error);
				alert('Erro ao fazer login com Google');
			}
		};

		return () => {
			window.onSignIn = null;
		};
	}, [userType, navigate]);

	return (
		<div className='ag-flex ag-flex-col ag-items-center ag-justify-center ag-w-full ag-p-4'>
			{!userType ? (
				<div className='ag-flex ag-gap-4 ag-mb-4'>
					<button
						onClick={() => setUserType('artist')}
						className='ag-px-4 ag-py-2 ag-bg-blue-500 ag-text-white ag-rounded'
					>
						Sou Artista
					</button>
					<button
						onClick={() => setUserType('hirer')}
						className='ag-px-4 ag-py-2 ag-bg-green-500 ag-text-white ag-rounded'
					>
						Sou Contratante
					</button>
				</div>
			) : (
				<div
					className="g-signin2"
					data-onsuccess="onSignIn"
					data-theme="dark"
					data-width="250"
					data-height="50"
				></div>
			)}
		</div>
	);
};

export default LandingPage;
