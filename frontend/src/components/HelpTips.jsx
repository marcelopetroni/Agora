import React from 'react'
import "./HelpTips.sass";
import { IoMdSearch } from "react-icons/io";
import Arrow from '../assets/arrow';
import Man from '../assets/man.png';
import Man2 from '../assets/man2.png';

const HelpTips = () => {
  return (
    <div className="help-container">
        <div className="help-title">
            <div className='text-title'>Ajuda e dicas</div>
        </div>
        <div className="search-container">
            <input className="search" type="text" id="search" placeholder='Pesquisar'/>
            <IoMdSearch
            className='lupa'
            size={20}
            color="#533753"
            />
            <div className="arrow-icon">
            <Arrow/>
            </div>
        </div>
        <div className="info-boxes">
          <div className="info-box">
            <div className="info-title">Como criar um projeto</div>
            <div className="info-text">
            Clique aqui para aprender tudo sobre criar um projeto para arrecadar fundos em nossa plataforma.
            </div>
          </div>
          <div className="info-box">
            <div className="info-title">Como fazer um bom perfil</div>
            <div className="info-text">
            Clique aqui para ver dicas sobre como criar um perfil de destaque.
            </div>
          </div>
          <div className="info-box">
            <div className="info-title">Dicas para assinar um contrato inteligente</div>
            <div className="info-text">
            Clique aqui para ver 10 dicas para assinar um contrato inteligente que seja benéfico para você.
            </div>
          </div>
        </div>
        <div className="notifications-box">
          <div className="notifications-title">Notificações</div>
          <div className="no-notifications">
              Você ainda não tem nenhuma notificação.
          </div>
        </div>
    </div>
  )
}

export default HelpTips
