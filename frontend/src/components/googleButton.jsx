import { useGoogleLogin } from '../utils/googleAuth';
import { FcGoogle } from 'react-icons/fc';
import PropTypes from 'prop-types';

const GoogleLoginButton = ({ userType, changeStep }) => {
	const { login } = useGoogleLogin({
		userType,
		changeStep
	});

	return (
		<button
			type="button"
			onClick={() => login()}
			style={{
				width: '165px',
				height: '38px',
				boxShadow: '0 6px 8px rgba(0, 0, 0, 0.12)'
			}}
			className="
				ag-flex ag-items-center ag-gap-2
				ag-justify-center
				ag-border ag-border-gray-300
				ag-rounded-lg
				ag-bg-white
				ag-text-black
				ag-cursor-pointer
				text-medium
				hover:ag-bg-gray-100
				active:ag-bg-gray-200
				ag-transition
			"
		>
			<FcGoogle className="ag-w-5 ag-h-5" />
			Entrar
		</button>
    );
};

GoogleLoginButton.propTypes = {
	userType: PropTypes.string,
	changeStep: PropTypes.func,
};

export default GoogleLoginButton;
