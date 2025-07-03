	import { useState } from 'react';
	import { useNavigate } from 'react-router-dom';
	import PropTypes from 'prop-types';
	import Tags from './tags';
	import { LuEye, LuEyeOff } from 'react-icons/lu';

	const HirerProfile = ({ variant = '' }) => {
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const [languages, setLanguages] = useState([]);
	const [workAreas, setWorkAreas] = useState([]);
	const [userType] = useState('hirer');
	const [birthDate, setBirthDate] = useState('');
	const [company, setCompany] = useState('');
	const [country, setCountry] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [number, setNumber] = useState('');

	const handleAddItem = (e, array, setArray) => {
	const value = e.target.value;
	if (value && !array.includes(value)) {
		setArray([...array, value]);
	}
	};

	const handleRemoveItem = (item, array, setArray) => {
	setArray(array.filter(pos => pos !== item));
	};

	const mountRemainingFields = () => {
	const data = {
		languages: languages || null,
		country: country || null,
		type: userType || null,
		born: birthDate || null
	};

	if (userType === 'artist') {
		data.artistic_field = workAreas || null;
	}
	if (userType === 'hirer') {
		data.work_area = workAreas || null;
		data.company = company || null;
	}

	return data;
	};

	const handlePhoneChange = (e) => {
	const digits = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número

	let formatted = digits;
	if (digits.length > 2) {
		formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
	}
	if (digits.length > 7) {
		formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
	}

	setNumber(formatted);
	};

	return (
	<div className='ag-flex ag-flex-col ag-my-10 ag-h-full'>
		<div className='ag-flex ag-border-b ag-pb-10 ag-border-gray-300'>
			<h1 className='ag-font-amiko ag-text-3xl ag-ml-20 ag-font-bold'>Informações pessoais</h1>
		</div>
		<div className='ag-ml-20 ag-flex ag-flex-row ag-pt-20'>
			<div className='ag-pr-20'>
				<img src="https://placehold.co/400" alt="" className='ag-h-fit ag-w-72 ag-rounded-full' />
			</div>
			<div className='ag-flex ag-flex-col ag-gap-4'>

				<div className='ag-grid ag-grid-cols-4 ag-gap-5'>
					{/* Nome */}
					<div className="ag-flex ag-flex-col ag-gap-1 ag-font-semibold ag-col-span-2">
						<label className="text-small ag-ml-1">Nome</label>
						<input
							placeholder="Nome"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="ag-border ag-px-3 ag-py-2 ag-focus:ag-outline-none"
							style={{ borderRadius: '12px', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.05)' }}
						/>
					</div>

					{/* Data de nascimento */}
					<div className="ag-flex ag-flex-col ag-gap-1 ag-w-full ">
						<label className="text-small ag-font-semibold ag-ml-1">Data de Nascimento</label>
						<input
							placeholder="DD/MM/YYYY"
							type="date"
							onChange={(e) => setBirthDate(e.target.value)}
							className="ag-border ag-px-3 ag-py-2 ag-focus:ag-outline-none ag-w-full"
							style={{ borderRadius: '12px', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.05)' }}
						/>
					</div>

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
				</div>

				<div className='ag-grid ag-grid-cols-4 ag-gap-5'>
				{/* Email */}
				<div className="ag-flex ag-flex-col ag-gap-1 ag-font-semibold ag-col-span-2">
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

				{/* Senha */}
				<div className="ag-flex ag-flex-col ag-gap-1 ag-font-semibold ">
					<label className="text-small ag-ml-1">Senha</label>
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
				<div className='ag-flex ag-justify-center ag-items-center ag-self-end'>
					<button className='ag-font-amiko ag-text-white ag-bg-lightpurple ag-p-3 ag-rounded-xl '>Alterar Senha</button>
				</div>
				</div>

				
				<div className='ag-grid ag-grid-cols-3 ag-gap-5'>
					{/* Email */}
					<div className="ag-flex ag-flex-col ag-gap-1 ag-font-semibold">
						<label className="text-small ag-ml-1">Confirmar e-mail</label>
						<input
							placeholder="E-mail"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="ag-border ag-px-3 ag-py-2 ag-focus:ag-outline-none"
							style={{ borderRadius: '12px', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.05)' }}
						/>
					</div>

					{/* Numero */}
					<div className="ag-flex ag-flex-col ag-gap-1 ag-font-semibold">
						<label className="text-small ag-ml-1">Nome</label>
						<input
							placeholder="(00) 00000-0000"
							type="tel"
							value={number}
							onChange={handlePhoneChange}
							className="ag-border ag-px-3 ag-py-2 ag-font-medium ag-focus:ag-outline-none"
							style={{ borderRadius: '12px', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.05)' }}
						/>
					</div>
					
					{/* Whatsapp */}
					<div className="ag-flex ag-flex-col ag-justify-center ag-items-start ag-gap-1 ag-font-semibold">
						<label className="text-small ag-ml-1">Whatsapp?</label>
						<input 
							type="checkbox" 
							className="ag-border ag-rounded-md ag-shadow ag-font-medium ag-h-8 ag-w-8 ag-focus:ag-outline-none"
						/>
					</div>
				</div>

				<div className='ag-grid ag-grid-cols-2 ag-gap-5'>

					{/* Idiomas */}
					<div className="ag-flex ag-flex-col ag-gap-1 ag-w-full">
						<label className="text-small ag-font-semibold ag-ml-1">Idiomas falados</label>
						<select
						onChange={(e) => handleAddItem(e, languages, setLanguages)}
						className="ag-border ag-px-3 ag-py-2 ag-focus:ag-outline-none ag-w-full"
						style={{ borderRadius: '12px', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.05)' }}
						>
						<option value="" hidden>Selecione...</option>
						<option>Português</option>
						<option>Inglês</option>
						<option>Espanhol</option>
						{/* ... */}
						</select>
						<Tags 
						items={languages} 
						onRemove={lang => handleRemoveItem(lang, languages, setLanguages)} 
						/>
					</div>

					{/* Área de atuação */}
					<div className="ag-flex ag-flex-col ag-gap-1 ag-w-full ">
						<label className="text-small ag-font-semibold ag-ml-1">Área de atuação</label>
						<select
							onChange={(e) => handleAddItem(e, workAreas, setWorkAreas)}
							className="ag-border ag-px-3 ag-py-2 ag-focus:ag-outline-none ag-w-full"
							style={{ borderRadius: '12px', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.05)' }}
						>
							<option value="" hidden>Selecione...</option>
							<option>Publicidade</option>
							{/* ... */}
						</select>
						<Tags 
							items={workAreas} 
							onRemove={wa => handleRemoveItem(wa, workAreas, setWorkAreas)} 
						/>
					</div>
				</div>
				<div className='ag-flex ag-flex-row ag-gap-5 ag-justify-end ag-mt-20 ag-mb-10'>
					<button className='ag-bg-gray-200 ag-text-darkpurple ag-py-2 ag-px-5 ag-rounded-lg ag-shadow-lg ag-border ag-border-gray-400 ag-font-amiko ag-font-semibold'>Cancelar</button>
					<button className='ag-bg-darkpurple ag-text-white ag-py-2 ag-px-5 ag-rounded-lg ag-shadow-lg ag-border ag-border-gray-400 ag-font-amiko'>Salvar</button>
					
				</div>
			</div>
		</div>    
	</div>
	);
	};

	HirerProfile.propTypes = {
	variant: PropTypes.string
	};

	export default HirerProfile;
