import React from 'react';
import './CreateProject.sass';

const CreateProject = ({ onBackToProjects }) => {
  return (
    <div className="create-project-container">
      <div className="project-form">
        <h2>Project informations</h2>
        <div className="form-group">
          <div className="form-field">
            <label>Project Title</label>
            <input type="text" placeholder="Enter project title" />
          </div>
          <div className="form-field">
            <label>Type</label>
            <input type="text" placeholder="Enter project type" />
          </div>
          <div className='form-line'>
            <div className="form-field">
                <label>Starts</label>
                <input type="date" />
            </div>
            <div className="form-field">
                <label>Ends</label>
                <input type="date" />
            </div>
            <div className="form-field">
                <label>Funding Goal</label>
                <input type="text" placeholder="Enter funding goal" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Project Description</label>
          <textarea placeholder="Describe your project..."></textarea>
        </div>
        <button className="submit-button">Send</button>
      </div>
    </div>
  );
};

export default CreateProject;
