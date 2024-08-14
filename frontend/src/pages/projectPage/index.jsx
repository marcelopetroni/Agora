import React from 'react'
import './project.sass';
import NavbarItems from '../../components/Navbar';
import HelpTips from "../../components/HelpTips";

const Project = () => {
  return (
    <div className="project-container">
      <NavbarItems />
      <div className="project-items">
        <div className="title-container">conteudo project</div>
      </div>
      <HelpTips/>
    </div>
  )
}

export default Project