import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tags from './tags';
import { userService } from '../services/userService';
import { IoIosArrowBack } from "react-icons/io";

const CompleteProfile = ({ variant, userType, setStep }) => {
	const navigate = useNavigate();
	const [languages, setLanguages] = useState([]);
	const [workAreas, setWorkAreas] = useState([]);
	const [type, setUserType] = useState(userType);
	const [birthDate, setBirthDate] = useState('');
	const [company, setCompany] = useState('');
	const [country, setCountry] = useState('');

	const handleCompleteProfile = async () => {
		const pending = JSON.parse(localStorage.getItem('pendingGoogleUser'));

		if (!pending) {
			alert('Dados não encontrados.');
			navigate('/login');
			return;
		}

		const { userInfo } = pending;

		const updatedUserInfo = {
			...userInfo,
			...mountRemainingFields()
		};

		try {
			const result = await userService.loginGoogle(updatedUserInfo);

			if (result.success) {
				localStorage.setItem('token', result.data.token);
				localStorage.setItem('user', JSON.stringify(result.data.user));
				localStorage.removeItem('pendingGoogleUser');

				navigate('/home');
			}
			if (!result.success) {
				alert(result.message || 'Erro ao finalizar login com Google');
			}
		} catch (error) {
			console.error('Erro ao finalizar login com Google:', error);
			alert('Erro inesperado ao finalizar login');
		}
	};

	const mountRemainingFields = () => {
		const data = {
			languages: languages  || null,
			country: country  || null,
			type: type  || null,
			born: birthDate || null
		}

		if (userType === 'artist') {
			data.artistic_field = workAreas || null;
		}

		if (userType === 'hirer') {
			data.work_area = workAreas || null;
			data.company = company || null;
		}

		return data;
	}

	const handleAddItem = (e, array, setArray) => {
		const value = e.target.value;

		if (value && !array.includes(value)) {
			setArray([...array, value]);
		}
	};

	const handleRemoveItem = (item, array, setArray) => {
		setArray(array.filter(position => position !== item));
	};

	return (
	<div className="ag-flex ag-flex-col lg:ag-w-[450px] ag-w-[350px]">
		<div className='ag-flex ag-flex-row ag-py-2 ag-items-center ag-justify-start ag-gap-8 lg:ag-gap-0 lg:ag-justify-between ag-w-full lg:ag-w-[350px] ag-mb-8'>
			<span
				onClick={() => setStep()}
				className="ag-cursor-pointer ag-flex ag-items-center"
				style={{ color: '#3C233C' }}
			>
				<IoIosArrowBack size={20} />
			</span>

			<div
				className="ag-text-lg ag-font-bold text-medium ag-text-center"
				style={{ color: '#3C233C', fontSize: '26px' }}>
				Complete seu perfil
			</div>
		</div>

		<div className="ag-grid ag-grid-cols-2 ag-gap-4">
			{!userType && (
			<div className="ag-flex ag-flex-col ag-gap-1 ag-w-full">
				<label className="text-small ag-font-semibold ag-ml-1">
				Como se identifica? <span style={{ color: 'red' }}>*</span>
				</label>
				<select
				value={type}
				onChange={(e) => setUserType(e.target.value)}
				className="ag-border ag-px-3 ag-py-2 ag-focus:ag-outline-none ag-w-full"
				style={{ borderRadius: '12px', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.05)' }}
				>
				<option value="" hidden>Selecione...</option>
				<option value="artist">Sou um artista</option>
				<option value="hirer">Procuro um artista</option>
				</select>
			</div>
			)}

			{/* País */}
			<div className="ag-flex ag-flex-col ag-gap-1 ag-w-full">
			<label className="text-small ag-font-semibold ag-ml-1">País</label>
			<select
				value={country}
				onChange={(e) => setCountry(e.target.value)}
				className="ag-border ag-px-3 ag-py-2 ag-focus:ag-outline-none ag-w-full"
				style={{ borderRadius: '12px', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.05)' }}
			>
				<option value="" hidden>Selecione...</option>
				<option value="Brasil">Brasil</option>
				<option value="Argentina">Argentina</option>
				<option value="México">México</option>
				<option value="Canadá">Canadá</option>
				<option value="Estados Unidos">Estados Unidos</option>
				<option value="Inglaterra">Inglaterra</option>
				<option value="Espanha">Espanha</option>
				<option value="França">França</option>
				<option value="Alemanha">Alemanha</option>
				<option value="Itália">Itália</option>
				<option value="Portugal">Portugal</option>
				<option value="Outro">Outro</option>
			</select>
			</div>

			{/* Data de nascimento */}
			<div className="ag-flex ag-flex-col ag-gap-1 ag-w-full">
			<label className="text-small ag-font-semibold ag-ml-1">Data de Nascimento</label>
			<input
				placeholder="DD/MM/YYYY"
				type="date"
				onChange={(e) => setBirthDate(e.target.value)}
				className="ag-border ag-px-3 ag-py-2 ag-focus:ag-outline-none ag-w-full"
				style={{ borderRadius: '12px', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.05)' }}
			/>
			</div>

			{/* Idiomas */}
			<div className="ag-flex ag-flex-col ag-gap-1 ag-w-full ag-min-h-[100px]">
				<label className="text-small ag-font-semibold ag-ml-1">Idiomas falados</label>
				<select
					value="languages"
					onChange={(e) => handleAddItem(e, languages, setLanguages)}
					className="ag-border ag-px-3 ag-py-2 ag-focus:ag-outline-none ag-w-full"
					style={{ borderRadius: '12px', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.05)' }}
				>
					<option value="">Selecione...</option>
					<option value="Português">Português</option>
					<option value="Inglês">Inglês</option>
					<option value="Espanhol">Espanhol</option>
					<option value="Alemão">Alemão</option>
					<option value="Francês">Francês</option>
				</select>

				<Tags items={languages} onRemove={language => handleRemoveItem(language, languages, setLanguages)} />
			</div>

			{/* Área de atuação */}
			{variant !== 'login' && (
				userType === 'artist' ? (
					<>
						<div className="ag-flex ag-flex-col ag-gap-1 ag-w-full ag-min-h-[100px]">
							<label className="text-small ag-font-semibold ag-ml-1">Ramo artístico</label>
							<select
								value="workAreas"
								onChange={(e) => handleAddItem(e, workAreas, setWorkAreas)}
								className="ag-border ag-px-3 ag-py-2 ag-focus:ag-outline-none ag-w-full"
								style={{ borderRadius: '12px', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.05)' }}
							>
								<option value="">Selecione...</option>
								<option value="">Área de atuação</option>
								<option value="Artes visuais">Artes visuais</option>
								<option value="Música">Música</option>
								<option value="Dança">Dança</option>
								<option value="Teatro">Teatro</option>
								<option value="Literatura">Literatura</option>
								<option value="Audiovisual">Audiovisual</option>
								<option value="Moda">Moda</option>
								<option value="Design">Design</option>
							</select>

							<Tags items={workAreas} onRemove={workArea => handleRemoveItem(workArea, workAreas, setWorkAreas)} />
						</div>
						<div></div>
					</>
				) : (
					<>
					<div className="ag-flex ag-flex-col ag-gap-1 ag-w-full ag-min-h-[100px]">
						<label className="text-small ag-font-semibold ag-ml-1">Área de atuação</label>
						<select
							value="workAreas"
							onChange={(e) => handleAddItem(e, workAreas, setWorkAreas)}
							className="ag-border ag-px-3 ag-py-2 ag-focus:ag-outline-none ag-w-full"
							style={{ borderRadius: '12px', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.05)' }}
						>
							<option value="">Selecione...</option>
							<option value="Publicidade">Publicidade</option>
							<option value="Eventos">Eventos</option>
							<option value="Música e Shows">Música e Shows</option>
							<option value="Empresário">Empresário</option>
							<option value="Culturao">Cultura</option>
							<option value="Marketing">Marketing</option>
							<option value="Outro">Outro</option>
						</select>

						<Tags items={workAreas} onRemove={workArea => handleRemoveItem(workArea, workAreas, setWorkAreas)} />
					</div>
					</>
				)
			)}
		</div>
		<div className='ag-flex ag-flex-col ag-gap-6'>
			{userType === 'hirer' && (
				<div className="ag-flex ag-flex-col ag-gap-1 ag-font-semibold ag-w-full">
					<label className="text-small ag-ml-1">Empresa</label>
					<input
						placeholder="Empresa"
						type="text"
						value={company}
						onChange={(e) => setCompany(e.target.value)}
						className="ag-border ag-px-3 ag-py-2 ag-focus:ag-outline-none ag-w-full"
						style={{ borderRadius: '12px', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.05)' }}
					/>
				</div>
			)}

			{/* Botões */}
			<div
				className="ag-w-full ag-flex ag-items-end ag-mb-1 ag-justify-end ag-gap-4">

				{variant !== 'login' && (
					<button className="default-button" onClick={handleCompleteProfile}>
						Pular
					</button>
				)}
				<button
					className="default-button-purple"
					type='submit'
					style={{
						width: '100px',
						opacity: !type ? 0.5 : 1,
						cursor: type ? 'pointer' : 'not-allowed',
					}}
					onClick={handleCompleteProfile}
					disabled={!type}>
					Entrar
				</button>
			</div>
		</div>
	</div>
	);

};

CompleteProfile.propTypes = {
	userType: PropTypes.string,
	variant: PropTypes.string,
	setStep: PropTypes.func
};

export default CompleteProfile;
