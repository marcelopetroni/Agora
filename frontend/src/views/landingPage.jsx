import React from 'react'
import Logo from '../assets/AgoraLogo.svg'
import imgLanding from '../assets/img_landing1.png'
import imgWoman1 from '../assets/woman1.png'
import imgWoman2 from '../assets/woman2.png'
import imgMan1 from '../assets/man1.png'
import Matchmaking from '../assets/MatchmakingIcon.svg'
import IA from '../assets/IAIcon.svg'
import Comunidade from '../assets/ComunidadeIcon.svg'
import BG from '../assets/Fundo.png'
import BG2 from '../assets/Fundo2.png'
import LandingCarousel from '../components/LandingCarousel'
import LogoDourada from '../assets/LogoDourada.svg'

const landingPage = () => {

  return (
  <div className='ag-bg-darkpurple'>
    {/* Imagem de fundo */}
      <div className='ag-relative ag-p-10 ag-rounded-bl-3xl ag-rounded-br-3xl ag-overflow-hidden'>
        <div
          className='ag-absolute ag-inset-0 ag-bg-no-repeat ag-bg-cover ag-bg-center ag-z-0'
          style={{ backgroundImage: `url(${BG})` }}
        ></div>
    {/* Header */}
        <div className='ag-flex ag-relative ag-items-center ag-w-full ag-flex-col lg:ag-flex-row lg:ag-justify-between'>  {/* ag-fixed ag-bg-bege ag-pr-20 ag-pl-20 ag-pt-14 ag-pb-16 ag-h-10 ag-top-0 ag-left-0 ag-rounded-xl */}
          <div className='g-transition-transform ag-duration-300 hover:ag-scale-110'>
            <img src={Logo} alt="Logo" />
          </div>
          <div className='ag-flex ag-gap-4 ag-items-center ag-mt-4'>
            <a href="/login" className='ag-flex ag-text-xl ag-text-darkpurple ag-font-bold ag-font-amiko ag-px-10 ag-rounded-3xl ag-tracking-wide g-transition-transform ag-duration-300 hover:ag-scale-110 md:ag-text-2xl'>LOGIN</a>
            <a href="/login" className='ag-flex ag-text-lg ag-font-medium ag-font-amiko ag-border-4 ag-border-darkpurple ag-w-36 ag-justify-center ag-tracking-wide ag-p-1 ag-rounded-3xl ag-bg-darkpurple ag-text-white ag-shadow-xl g-transition-transform ag-duration-300 hover:ag-scale-110 md:ag-text-2xl md:ag-px-6 md:ag-w-auto'>Cadastre-se</a>
          </div>
        </div>
      {/* Seção 1 Comece agora */}
        <div className='ag-flex ag-relative ag-flex-col ag-justify-between ag-mt-10 md:ag-flex-row md:ag-mt-1'>
          <div className='ag-ml-2 ag-pt-14 ag-w-full lg:ag-ml-24 lg:ag-pt-52'>
            <h1 className='ag-font-amiko ag-font-bold ag-text-3xl ag-text-darkpurple md:ag-text-5xl'>O ponto de encontro digital</h1>
            <h2 className='ag-font-amiko ag-font-medium ag-text-3xl ag-text-darkpurple md:ag-text-5xl'>para artistas e suas</h2>
            <h2 className='ag-font-amiko ag-font-medium ag-text-3xl ag-text-darkpurple md:ag-text-5xl'>trajetórias criativas.</h2>
            <p className='ag-font-amiko ag-font-medium ag-text-sm ag-text-darkpurple md:ag-text-xl'>Conecte-se a oportunidades, capacitação</p>
            <p className='ag-font-amiko ag-font-medium ag-text-sm ag-text-darkpurple md:ag-text-xl'>e tecnologia tudo em um só lugar.</p>
            <a href="/login" className='ag-flex ag-text-lg md:ag-text-2xl ag-font-normal ag-font-amiko ag-border-4 ag-border-darkpurple ag-px-8 ag-py-3 ag-w-fit ag-mt-6 ag-rounded-2xl ag-bg-darkpurple ag-text-white ag-shadow-xl g-transition-transform ag-duration-300 hover:ag-scale-110'>Comece agora!</a>
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
        <h1 className='ag-text-amiko ag-text-white ag-font-semibold ag-text-4xl ag-justify-self-center md:ag-text-8xl ag-tracking-wider'>Nossas Funções</h1>
        <p className='ag-text-amiko ag-mt-5 ag-text-white ag-font-normal ag-text-sm ag-justify-self-center  md:ag-text-xl'>Tudo que você precisa pra crescer, se conectar</p>
        <p className='ag-text-amiko ag-text-white ag-font-normal ag-text-sm ag-justify-self-center md:ag-text-xl'>e criar com liberdade.</p>
      </div>
      <div className='ag-flex ag-w-full ag-mt-12 ag-justify-center ag-items-center ag-gap-20 ag-flex-col lg:ag-flex-row'>
        <div className='ag-pt-10 ag-pb-10 ag-pl-20 ag-pr-20 ag-bg-lightpurple ag-rounded-xl ag-justify-center ag-items-center g-transition-transform ag-duration-300 hover:ag-scale-110'>
          <p className='ag-text-amiko ag-font-semibold ag-text-white ag-text-xl ag-justify-self-center md:ag-text-2xl'>Matchmaking</p>
          <img src={Matchmaking} alt="icon" className='ag-justify-self-center ag-mt-5 ag-h-28 md:ag-h-40' />
          <p className='ag-text-amiko ag-font-normal ag-text-white ag-text-sm ag-justify-self-center ag-tracking-wider md:ag-text-xl'>Match entre talento</p>
          <p className='ag-text-amiko ag-font-normal ag-text-white ag-text-sm ag-justify-self-center ag-tracking-wider md:ag-text-xl'>e oportunidade.</p>
        </div>
        <div className='ag-pt-10 ag-pb-10 ag-pl-16 ag-pr-16 ag-bg-lightpurple ag-rounded-xl ag-justify-center ag-items-center g-transition-transform ag-duration-300 hover:ag-scale-110'>
          <p className='ag-text-amiko ag-font-semibold ag-text-white ag-text-xl ag-justify-self-center md:ag-text-2xl'>IA para editais</p>
          <img src={IA} alt="icon" className='ag-justify-self-center ag-mt-5 ag-h-28 md:ag-h-40' />
          <p className='ag-text-amiko ag-font-normal ag-text-white ag-text-sm ag-justify-self-center ag-tracking-wider md:ag-text-xl'>Encontre e inscreva-se</p>
          <p className='ag-text-amiko ag-font-normal ag-text-white ag-text-sm ag-justify-self-center ag-tracking-wider md:ag-text-xl'>em editais com nossa IA.</p>
        </div>
        <div className='ag-pt-10 ag-pb-10 ag-pl-20 ag-pr-20 ag-bg-lightpurple ag-rounded-xl ag-justify-center ag-items-center g-transition-transform ag-duration-300 hover:ag-scale-110'>
          <p className='ag-text-amiko ag-font-semibold ag-text-white ag-text-xl ag-justify-self-center md:ag-text-2xl'>Comunidade</p>
          <img src={Comunidade} alt="icon" className='ag-justify-self-center ag-mt-5 ag-h-28 md:ag-h-40' />
          <p className='ag-text-amiko ag-font-normal ag-text-white ag-text-sm ag-justify-self-center ag-tracking-wider md:ag-text-xl'>Crie e fortaleça sua</p>
          <p className='ag-text-amiko ag-font-normal ag-text-white ag-text-sm ag-justify-self-center ag-tracking-wider md:ag-text-xl'>arte em conjunto.</p>
        </div>
      </div>
    </div>
  {/* Seção 3 Login */}
    <div className='ag-relative ag-p-10 ag-overflow-hidden'>
        <div
          className='ag-absolute ag-inset-0 ag-bg-no-repeat ag-bg-cover ag-bg-center ag-z-0'
          style={{ backgroundImage: `url(${BG})` }}
        ></div>
        {/* Continuar por aqui */}
    </div>
  {/* Seção 4 Nosso Propósito */}
    <div className='ag-relative ag-p-10 ag-overflow-hidden'>
      <div
        className='ag-absolute ag-inset-0 ag-bg-no-repeat ag-bg-cover ag-bg-center ag-z-0'
        style={{ transform: 'scaleX(-1)', backgroundImage: `url(${BG})` }}
      ></div>
      <div className='ag-relative ag-flex ag-flex-col ag-justify-center ag-items-center ag-mb-24 ag-mt-16'>
        <h1 className='ag-font-amiko ag-font-bold ag-text-3xl ag-text-darkpurple md:ag-text-5xl'>Nosso propósito</h1>
        <div className='ag-pt-10 ag-mt-10 ag-pb-10 ag-bg-lightpurple ag-rounded-xl ag-shadow-2xl ag-justify-center ag-items-center'>
          <div className='ag-flex ag-flex-col lg:ag-flex-row'>
            <div className='ag-flex ag-flex-col ag-items-center'>
              <h1 className='ag-text-amiko ag-font-bold ag-text-white ag-text-xl ag-justify-self-center md:ag-text-2xl'>Missão</h1>
              <div className='ag-mt-5 ag-pl-52 ag-pr-52 ag-w-full lg:ag-border-t'></div>
              <p className='ag-text-amiko ag-font-normal ag-text-white ag-text-sm ag-justify-self-center md:ag-text-xl ag-tracking-wider ag-mt-5'>Conectar 10.000 usuários no portal</p>
              <p className='ag-text-amiko ag-font-normal ag-text-white ag-text-sm ag-justify-self-center md:ag-text-xl ag-tracking-wider'>Ágora dando acesso a ferramentas</p>
              <p className='ag-text-amiko ag-font-normal ag-text-white ag-text-sm ag-justify-self-center md:ag-text-xl ag-tracking-wider'>que impulsionam a criatividade e a</p>
              <p className='ag-text-amiko ag-font-normal ag-text-white ag-text-sm ag-justify-self-center md:ag-text-xl ag-tracking-wider'>inovação no mercado global das</p>
              <p className='ag-text-amiko ag-font-normal ag-text-white ag-text-sm ag-justify-self-center md:ag-text-xl ag-tracking-wider'>artes, cultura e entretenimento.</p>
            </div>
            <div className='ag-flex ag-flex-col ag-items-center ag-mt-10 lg:ag-mt-0'>
              <h1 className='ag-text-amiko ag-font-bold ag-text-white ag-text-xl ag-justify-self-center md:ag-text-2xl'>Visão</h1>
              <div className='ag-mt-5 ag-pl-52 ag-pr-52 ag-w-full lg:ag-border-t'></div>
              <p className='ag-text-amiko ag-font-normal ag-text-white ag-text-sm ag-justify-self-center md:ag-text-xl ag-tracking-wider ag-mt-5'>Ser a principal plataforma para descoberta</p>
              <p className='ag-text-amiko ag-font-normal ag-text-white ag-text-sm ag-justify-self-center md:ag-text-xl ag-tracking-wider'>e promoção de talentos artísticos,</p>
              <p className='ag-text-amiko ag-font-normal ag-text-white ag-text-sm ag-justify-self-center md:ag-text-xl ag-tracking-wider'>utilizando tecnologias avançadas para</p>
              <p className='ag-text-amiko ag-font-normal ag-text-white ag-text-sm ag-justify-self-center md:ag-text-xl ag-tracking-wider'>criar um ecossistema artístico inclusivo.</p>
            </div>
            <div className='ag-flex ag-flex-col ag-items-center ag-mt-10 lg:ag-mt-0'>
              <h1 className='ag-text-amiko ag-font-bold ag-text-white ag-text-xl ag-justify-self-center md:ag-text-2xl'>Valores</h1>
              <div className='ag-mt-5 ag-pl-52 ag-pr-52 ag-w-full lg:ag-border-t'></div>
              <p className='ag-text-amiko ag-font-normal ag-text-white ag-text-sm ag-justify-self-center md:ag-text-xl ag-tracking-wider ag-mt-5'>Inovação e inclusão são nossos</p>
              <p className='ag-text-amiko ag-font-normal ag-text-white ag-text-sm ag-justify-self-center md:ag-text-xl ag-tracking-wider'>principais valores para fortalecer</p>
              <p className='ag-text-amiko ag-font-normal ag-text-white ag-text-sm ag-justify-self-center md:ag-text-xl ag-tracking-wider'>o mercado artístico mundial.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Seção 5 Dizem por ai... */}
    <div className='ag-relative ag-p-10 ag-overflow-hidden'>
      <div
        className='ag-absolute ag-inset-0 ag-bg-no-repeat ag-bg-cover ag-bg-center ag-z-0 '
        style={{ backgroundImage: `url(${BG2})` }}
      ></div>
      <div className='ag-flex ag-flex-col ag-relative ag-mb-40'>
        <h1 className='ag-text-amiko ag-mb-5 ag-tracking-widest ag-text-white ag-font-semibold ag-text-4xl md:ag-text-7xl md:ag-m-20'>
          Dizem por aí...
          </h1>
        <LandingCarousel></LandingCarousel>
      </div>
    </div>
    {/* Footer */}
    <div className='ag-flex ag-p-10 ag-bg-lightpurple ag-w-full ag-flex-col md:ag-flex-row md:ag-justify-between'>
      <div className='ag-flex ag-flex-col ag-justify-center ag-items-center'>
        <img src={LogoDourada} alt="logo" className='ag-w-60' />
        <h1 className='ag-text-amiko ag-font-normal ag-text-white ag-text-sm ag-justify-self-center md:ag-text-md ag-tracking-widest'>
          AGORA™. Todos os direitos reservados.
        </h1>
      </div>
      <div className='ag-flex ag-gap-5 ag-items-end ag-mt-8'>
        <a href="/">
        <h1 className='ag-text-amiko ag-font-normal ag-text-white ag-text-xs md:ag-text-md ag-tracking-widest ag-cursor-pointer'>
          Política de privacidade
        </h1></a>
        <a href="/">
          <h1 className='ag-text-amiko ag-font-normal ag-text-white ag-text-xs md:ag-text-md ag-tracking-widest ag-cursor-pointer'>
          Termos de serviço
        </h1>
        </a>
      </div>
    </div>
  </div>
  )
}

export default landingPage