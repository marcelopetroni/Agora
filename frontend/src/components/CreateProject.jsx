import React from 'react';
import './CreateProject.sass';

const CreateProject = ({ onBackToProjects }) => {
  return (
    <div className="create-project-container">
      <div className="project-form">
        <h2>Informações do Projeto</h2>
        <div className="form-group">
          <div className="form-field">
            <label>Título do Projeto</label>
            <input type="text" placeholder="" />
          </div>
          <div className="form-field">
            <label>Tipo</label>
            <input type="text" placeholder="" />
          </div>
          <div className='form-line'>
            <div className="form-field">
                <label>Início</label>
                <input type="date" />
            </div>
            <div className="form-field">
                <label>Término</label>
                <input type="date" />
            </div>
            <div className="form-field">
                <label>Meta de Financiamento</label>
                <input type="text" placeholder="" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Descrição do Projeto</label>
          <textarea placeholder=""></textarea>
        </div>
        <button className="submit-button">Enviar</button>
      </div>
    </div>
  );
};

export default CreateProject;
