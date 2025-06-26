import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import CristinaImg from '../assets/landingPage/cristina.png'
import BrenoImg from '../assets/landingPage/breno.png'

// Setas personalizadas
const CustomLeftArrow = ({ onClick }) => (
	<button
		onClick={onClick}
		className="ag-absolute ag-left-0 ag-top-1/2 -ag-translate-y-1/2 ag-text-amareloag ag-text-6xl hover:ag-text-opacity-50 transition md:ag-flex md:ag-text-9xl"
	>
	‹
	</button>
	)

	const CustomRightArrow = ({ onClick }) => (
	<button
		onClick={onClick}
		className="ag-absolute ag-right-0 ag-top-1/2 -ag-translate-y-1/2 ag-text-amareloag ag-text-6xl hover:ag-text-opacity-50 transition md:ag-flex md:ag-text-9xl"
	>
	›
	</button>
	)

	// Bolas indicativas
	const CustomDot = ({ index, active }) => {
		let dotClass = 'ag-bg-gray-500'

		if (index === 0) {
			dotClass = active ? 'ag-bg-amareloag' : 'ag-bg-gray-500'
		} else {
			dotClass = active ? 'ag-bg-lightpurple' : 'ag-bg-gray-500'
		}

		return (
			<span
				className={`ag-w-4 ag-h-4 ag-rounded-full ag-mx-1 ${dotClass}`}
			/>
		)
	}

	const responsive = {
		all: {
			breakpoint: { max: 3000, min: 0 },
			items: 1
		}
	}

	const LandingCarousel = () => {
		return (
		<div className="ag-relative ag-w-full ag-justify-center md:ag-flex-row">
			<Carousel
				responsive={responsive}
				arrows={true}
				customLeftArrow={<CustomLeftArrow />}
				customRightArrow={<CustomRightArrow />}
				renderDotsOutside={false}
				showDots={false}
				infinite
			>
			{/* CARD 1 - Cristina Amaral */}
			<div className="ag-relative ag-items-center ag-p-6 ag-m-6 ag-rounded-2xl ag-bg-lightpurple ag-shadow-lg ag-min-h-[220px] ag-flex ag-flex-col ag-my-5 ag-gap-4 md:ag-flex-row md:ag-mx-20">
				<div className="ag-absolute ag-flex md:ag-top-6 md:ag-right-10">
				<CustomDot index={0} active={true}/>
				<CustomDot index={1} active={false}/>
				</div>
				<img src={CristinaImg} alt="Cristina Amaral" className="ag-w-44 ag-h-44 ag-rounded-full ag-object-cover ag-mt-10 md:ag-mt-0" />
				<div className="ag-flex ag-flex-col">
				<p className="ag-font-bold ag-font-amiko ag-text-xl ag-text-white">Cristina Amaral</p>
				<p className="ag-text-md ag-font-amiko ag-text-amareloag">Cantora pernambucana</p>
				<p className="ag-mt-2 ag-text-md ag-font-amiko ag-text-white">
					Vejo essa plataforma como uma ferramenta que pode contribuir significativamente para o crescimento artístico e cultural,
					investindo no mercado atual e nas redes sociais. As funcionalidades apresentadas estão alinhadas com o mundo musical e artístico,
					oferecendo oportunidades para exibição e desenvolvimento de ideias artísticas em um espaço virtual. Acredito que seja uma
					plataforma muito útil.
				</p>
				</div>
			</div>

			{/* CARD 2 - Breno Falcão */}
			<div className="ag-relative ag-items-center ag-p-6 ag-m-6 ag-rounded-2xl ag-bg-bege ag-shadow-lg ag-min-h-[220px] ag-flex ag-flex-col ag-my-5 ag-gap-4 md:ag-flex-row md:ag-mx-20">
				<div className="ag-absolute ag-flex md:ag-top-6 md:ag-right-10">
					<CustomDot index={0} active={false}/>
					<CustomDot index={1} active={true}/>
				</div>
				<img src={BrenoImg} alt="Breno Falcão" className="ag-w-44 ag-h-44 ag-rounded-full ag-object-cover ag-mt-10 md:ag-mt-0" />
				<div className="ag-flex ag-flex-col">
					<p className="ag-font-bold ag-font-amiko ag-text-2xl ag-text-darkpurple">Breno Falcão</p>
					<p className="ag-text-lg ag-font-amiko ag-text-lightpurple">Empresário musical</p>
					<p className="ag-mt-2 ag-text-lg ag-font-amiko ag-text-darkpurple">
						A plataforma será de grande utilidade. Há uma enorme demanda nesse setor, e ela dará visibilidade a um grande número de pessoas
						que estão prontas para entrar no mercado. A plataforma é essencial para garantir que artistas e seus trabalhos sejam vistos por
						produtores e empreendedores.
					</p>
				</div>
			</div>
		</Carousel>
	</div>
	)
}

export default LandingCarousel
