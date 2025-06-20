import Logo from '../assets/landingPage/AgoraLogo.svg'
import imgLanding from '../assets/landingPage/img_landing1.png'
import imgWoman1 from '../assets/landingPage/woman1.png'
import imgWoman2 from '../assets/landingPage/woman2.png'
import imgMan1 from '../assets/landingPage/man1.png'
import Matchmaking from '../assets/landingPage/MatchmakingIcon.svg'
import IA from '../assets/landingPage/IAIcon.svg'
import Comunidade from '../assets/landingPage/ComunidadeIcon.svg'
import BG from '../assets/landingPage/Fundo.png'
import BG2 from '../assets/landingPage/Fundo2.png'
import LandingCarousel from '../components/LandingCarousel';
import LogoDourada from '../assets/landingPage/LogoDourada.svg'
import Login from './login'
import Register from './register'
import { useState } from 'react';

const LandingPage = () => {
const [activeView, setActiveView] = useState('login');

return (
	<div className='ag-bg-darkpurple ag-font-amiko'>
		{/* Imagem de fundo */}
		<div className='ag-relative ag-p-10 ag-rounded-bl-3xl ag-rounded-br-3xl ag-overflow-hidden'>
			<div
				className='ag-absolute ag-inset-0 ag-bg-no-repeat ag-bg-cover ag-bg-center ag-z-0'
				style={{ backgroundImage: `url(${BG})` }}>
			</div>
			{/* Header */}
			<div className='ag-flex ag-relative ag-items-start ag-w-full ag-justify-between ag-flex-col lg:ag-flex-row lg:ag-justify-between'>  {/* ag-fixed ag-bg-bege ag-pr-20 ag-pl-20 ag-pt-14 ag-pb-16 ag-h-10 ag-top-0 ag-left-0 ag-rounded-xl */}
				<div className='g-transition-transform ag-duration-300 hover:ag-scale-110'>
					<img src={Logo} alt="Logo" />
				</div>
				<div className='ag-flex ag-gap-8 ag-items-center ag-mt-4'>
					<a
						href="#login"
						onClick={() => setActiveView('login')}
						className='ag-flex ag-text-xl ag-text-darkpurple ag-font-bold ag-px-2 ag-rounded-3xl ag-tracking-wide g-transition-transform ag-duration-300 hover:ag-scale-110 md:ag-text-1xl'>
						LOGIN
					</a>
					<a
						href="#register"
						onClick={() => setActiveView('register')}
						className='ag-flex ag-text-lg ag-font-medium ag-border-4 ag-border-darkpurple ag-w-36 ag-justify-center ag-tracking-wide ag-p-1 ag-rounded-3xl ag-bg-darkpurple ag-text-white ag-shadow-xl g-transition-transform ag-duration-300 hover:ag-scale-110 md:ag-text-1xl md:ag-px-6 md:ag-w-auto'>
						Cadastre-se
					</a>
				</div>
			</div>
			{/* Seção 1 Comece agora */}
			<div className='ag-flex ag-relative ag-flex-col ag-justify-between ag-mt-10 md:ag-flex-row md:ag-mt-1'>
				<div className='ag-ml-2 ag-pt-10 ag-w-full lg:ag-ml-24 lg:ag-pt-52 ag-flex ag-flex-col ag-gap-4'>
					<h1 className='ag-text-3xl ag-text-darkpurple md:ag-text-5xl ag-flex ag-flex-col ag-gap-1'>
						<div className='ag-font-bold ag-w-full lg:ag-whitespace-nowrap'>O ponto de encontro digital</div>
						<div>para artistas e suas trajetórias criativas.</div>
					</h1>
					<p className='ag-font-medium ag-text-sm ag-text-darkpurple md:ag-text-xl'>
						Conecte-se a oportunidades, capacitação e tecnologia tudo em um só lugar.
					</p>
					<a href="#login" className='ag-flex ag-text-lg md:ag-text-1xl ag-font-normal ag-border-4 ag-border-darkpurple ag-px-8 ag-py-3 ag-w-fit ag-mt-4 ag-rounded-2xl ag-bg-darkpurple ag-text-white ag-shadow-xl g-transition-transform ag-duration-300 hover:ag-scale-110'>
						Comece agora!
					</a>
				</div>
				<div className='ag-flex ag-flex-row ag-mt-12 md:ag-mt-0'>
					<div className='ag-flex ag-flex-col ag-m-0 ag-items-end'>
						{/* <img src={imgLanding} alt='img' className='ag-flex ag-max-h-[850px] ag-object-cover lg:ag-max-h-[1650px]'/> */}
						<img src={imgWoman1} alt="woman" className='ag-h-32 ag-w-auto ag-ml-20 g-transition-transform ag-duration-300 hover:ag-scale-110 md:ag-h-72 md:ag-ml-44' />
						<img src={imgMan1} alt="man" className='ag-h-44 ag-w-fit g-transition-transform ag-duration-300 hover:ag-scale-110 md:ag-h-1/2' />
					</div>
					<div className='ag-flex'>
						<img src={imgWoman2} alt="woman" className='ag-h-48 ag-w-fit ag-mt-8 g-transition-transform ag-duration-300 hover:ag-scale-110 md:ag-h-1/2 md:ag-mt-24'/>
					</div>
				</div>
			</div>
		</div>
		{/* Seção 2 Nossas Funções */}
		<div className='ag-flex ag-mb-14 ag-justify-center ag-items-center ag-flex-col ag-bg-darkpurple ag-w-full ag-h-800 ag-p-10 ag-rounded-br-3xl ag-rounded-bl-3xl'>
			<div className='ag-flex ag-mt-10 ag-flex-col ag-justify-center ag-items-center'>
				<h1 className='ag-text-white ag-text-center ag-font-semibold ag-text-4xl ag-justify-self-center md:ag-text-7xl ag-tracking-wider'>
					Nossas Funções</h1>
				<p className='ag-mt-5 ag-text-white ag-text-center ag-font-normal ag-text-sm ag-justify-self-center  md:ag-text-xl'>
					Tudo que você precisa pra crescer, se conectar e criar com liberdade.
				</p>
			</div>
			<div className='ag-flex ag-w-full ag-mt-12 ag-justify-center ag-items-center ag-gap-20 ag-flex-col lg:ag-flex-row'>
				<div className='ag-pt-10 ag-pb-10 ag-pl-20 ag-pr-20 ag-bg-lightpurple ag-rounded-xl ag-justify-center ag-items-center g-transition-transform ag-duration-300 hover:ag-scale-110'>
					<p className='ag-font-semibold ag-text-white ag-text-xl ag-justify-self-center md:ag-text-2xl'>
						Matchmaking
					</p>
					<img src={Matchmaking} alt="icon" className='ag-justify-self-center ag-mt-5 ag-h-28 md:ag-h-40' />
					<p className='ag-font-normal ag-text-white ag-text-sm ag-justify-self-center ag-tracking-wider md:ag-text-xl'>
						Match entre talento
					</p>
					<p className='ag-font-normal ag-text-white ag-text-sm ag-justify-self-center ag-tracking-wider md:ag-text-xl'>
						e oportunidade.
					</p>
				</div>
				<div className='ag-pt-10 ag-pb-10 ag-pl-16 ag-pr-16 ag-bg-lightpurple ag-rounded-xl ag-justify-center ag-items-center g-transition-transform ag-duration-300 hover:ag-scale-110'>
					<p className='ag-font-semibold ag-text-white ag-text-xl ag-justify-self-center md:ag-text-2xl'>
						IA para editais
					</p>
					<img src={IA} alt="icon" className='ag-justify-self-center ag-mt-5 ag-h-28 md:ag-h-40' />
					<p className='ag-font-normal ag-text-white ag-text-sm ag-justify-self-center ag-tracking-wider md:ag-text-xl'>
						Encontre e inscreva-se
					</p>
					<p className='ag-font-normal ag-text-white ag-text-sm ag-justify-self-center ag-tracking-wider md:ag-text-xl'>
						em editais com nossa IA.
					</p>
				</div>
				<div className='ag-pt-10 ag-pb-10 ag-pl-20 ag-pr-20 ag-bg-lightpurple ag-rounded-xl ag-justify-center ag-items-center g-transition-transform ag-duration-300 hover:ag-scale-110'>
					<p className='ag-font-semibold ag-text-white ag-text-xl ag-justify-self-center md:ag-text-2xl'>
						Comunidade
					</p>
					<img src={Comunidade} alt="icon" className='ag-justify-self-center ag-mt-5 ag-h-28 md:ag-h-40' />
					<p className='ag-font-normal ag-text-white ag-text-sm ag-justify-self-center ag-tracking-wider md:ag-text-xl'>
						Crie e fortaleça sua
					</p>
					<p className='ag-font-normal ag-text-white ag-text-sm ag-justify-self-center ag-tracking-wider md:ag-text-xl'>
						arte em conjunto.
					</p>
				</div>
			</div>
		</div>
		<div className="ag-bg-[url('/src/assets/landingPage/Fundo.png')] ag-bg-repeat lg:ag-bg-contain ag-bg-cover ag-bg-center">
			{/* Login */}
			{activeView === 'login' ? (
				<div
					id="login"
					style={{ display: activeView === 'login' ? 'block' : 'none' }}
				>
					<Login onSwitch={() => setActiveView('register')} />
				</div>
			) : (
				<div
					id="register"
					style={{ display: activeView === 'register' ? 'block' : 'none' }}
					>
					<Register onSwitch={() => setActiveView('login')} />
				</div>
			)}

			{/* Seção 4 Nosso Propósito */}
			<div className='ag-relative lg:ag-px-20 ag-px-10 ag-py-5 ag-overflow-hidden'>
				<div className='ag-relative ag-flex ag-flex-col ag-justify-center ag-items-center lg:ag-gap-8 ag-mb-12 lg:ag-mb-24 ag-mt-8 lg:ag-mt-16'>
					<h1 className='ag-font-bold ag-text-3xl ag-text-darkpurple md:ag-text-5xl ag-mb-10'>
						Nosso propósito
					</h1>
					<div
						className="ag-flex ag-flex-col lg:ag-py-4 lg:ag-flex-row ag-w-full ag-justify-center ag-items-start ag-py-2"
						style={{ backgroundColor: '#392239', borderRadius: '20px',  boxShadow: '2px 8px 8px rgba(0, 0, 0, 0.2)' }}>
						{/* Missão */}
						<div className="ag-flex ag-flex-col ag-items-center ag-w-full lg:ag-flex-1 sm:ag-gap-4 ag-py-4 sm:ag-py-6">
							<h1
								className="ag-font-bold ag-text-xl md:ag-text-2xl ag-w-full ag-text-center ag-pb-2 lg:ag-border-b"
								style={{ color: '#E7E3E3' }}>
								Missão
							</h1>
							<p
								className="ag-font-light ag-text-sm md:ag-text-base ag-text-center ag-px-5"
								style={{ color: '#E7E3E3' }}>
								Conectar 10.000 usuários no portal Ágora, dando acesso a ferramentas que impulsionam a criatividade e a inovação no mercado global das artes, cultura e entretenimento.
							</p>
						</div>

						{/* Visão */}
						<div className="ag-flex ag-flex-col ag-items-center ag-w-full lg:ag-flex-1 sm:ag-gap-4 ag-py-4 sm:ag-py-6">
							<h1
								className="ag-font-bold ag-text-xl md:ag-text-2xl ag-w-full ag-text-center ag-pb-2 lg:ag-border-b"
								style={{ color: '#E7E3E3' }}>
								Visão
							</h1>
							<p
								className="ag-text-sm md:ag-text-base ag-text-center ag-px-5"
								style={{ color: '#E7E3E3' }}>
								Ser a principal plataforma para descoberta e promoção de talentos artísticos, utilizando tecnologias avançadas para criar um ecossistema inclusivo e inovador.
							</p>
						</div>

						{/* Valores */}
						<div className="ag-flex ag-flex-col ag-items-center ag-w-full lg:ag-flex-1 sm:ag-gap-4 ag-py-4 sm:ag-py-6">
							<h1
								className="ag-font-bold ag-text-xl md:ag-text-2xl ag-w-full ag-text-center ag-pb-2 lg:ag-border-b"
								style={{ color: '#E7E3E3' }}>
								Valores
							</h1>
							<p
								className="ag-text-sm md:ag-text-base ag-text-center ag-px-5"
								style={{ color: '#E7E3E3' }}>
								Inovação, inclusão e colaboração. Fortalecemos a diversidade e o desenvolvimento do mercado artístico mundial.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* Seção 5 Dizem por ai... */}
		<div className='ag-relative ag-p-10 ag-overflow-hidden'>
			<div
				className='ag-absolute ag-inset-0 ag-bg-no-repeat ag-bg-cover ag-bg-center ag-z-0 '
				style={{ backgroundImage: `url(${BG2})` }}>
			</div>
			<div className='ag-flex ag-flex-col ag-relative ag-mb-40'>
				<h1 className='ag-text-amiko ag-mb-5 ag-tracking-widest ag-text-white ag-font-semibold ag-text-4xl md:ag-text-5xl md:ag-m-20'>
				Dizem por aí...
				</h1>
				<LandingCarousel></LandingCarousel>
			</div>
		</div>
		{/* Footer */}
		<div className='ag-flex ag-p-10 ag-bg-lightpurple ag-w-full ag-flex-col md:ag-flex-row md:ag-justify-between'>
			<div className='ag-flex ag-flex-col ag-justify-center ag-items-center ag-gap-2'>
				<img src={LogoDourada} alt="logo" className='ag-w-60' />
				<h1 className='text-extra-small ag-text-white ag-text-sm ag-justify-self-center md:ag-text-md ag-tracking-widest'>
				AGORA™. Todos os direitos reservados.
				</h1>
			</div>
			<div className='ag-flex ag-gap-5 ag-items-end ag-mt-8'>
				<a href="/">
					<h1 className='text-extra-small ag-text-white ag-text-xs md:ag-text-md ag-tracking-widest ag-cursor-pointer'>
						Política de privacidade
					</h1>
				</a>
				<a href="/">
					<h1 className='text-extra-small ag-text-white ag-text-xs md:ag-text-md ag-tracking-widest ag-cursor-pointer'>
						Termos de serviço
					</h1>
				</a>
			</div>
		</div>
	</div>
	)
}

export default LandingPage;
