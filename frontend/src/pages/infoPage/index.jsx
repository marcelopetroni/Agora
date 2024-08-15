import React from 'react'
import './info.sass';
import NavbarItems from '../../components/Navbar';
import HelpTips from "../../components/HelpTips";

const Info = () => {
  return (
    <div className="info-container">
      <NavbarItems />
      <div className="info-items">
        <div className="title-container">conteudo info</div>
      </div>
      <HelpTips />
    </div>
  )
}

export default Info