import { userService } from '../services/userService';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin as useGoogleOAuth } from '@react-oauth/google';

export const useGoogleLogin = ({ userType, onMissingType } = {}) => {
	const navigate = useNavigate();

	const handleSuccess = async tokenResponse => {
		try {
			const accessToken = tokenResponse.access_token;

			const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});

			const userInfo = await res.json();

			const isRegistered = await userService.countUserByEmail(userInfo.email);

			if (!userType && !isRegistered) {
				localStorage.setItem('pendingGoogleUser', JSON.stringify({ userInfo }));
				onMissingType();

				return;
			}

			userInfo.type = userType;

			const result = await userService.loginGoogle(userInfo);

			if (result.success) {
				localStorage.setItem('token', result.data.token);
				localStorage.setItem('user', JSON.stringify(result.data.user));
				navigate('/home');
			} else {
				alert(result.message || 'Erro ao fazer login com Google');
			}

		} catch (error) {
			console.error('Erro no login com Google:', error);
			alert('Erro ao fazer login com Google');
		}
	};

	const handleError = () => {
		console.log('Falha no login com o Google');
		alert('Falha ao fazer login com o Google');
	};

	const login = useGoogleOAuth({
		onSuccess: handleSuccess,
		onError: handleError,
		scope: 'openid profile email',
		flow: 'implicit',
	});

	return {
		login
	};
};
