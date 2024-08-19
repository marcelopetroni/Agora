import React, { useState } from 'react';
import './UploadModal.sass';

const UploadModal = ({ onClose, onSave }) => {
  const [file, setFile] = useState(null);
  const [audioName, setAudioName] = useState('');
  const [date, setDate] = useState('');
  const [audioType, setAudioType] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSave = () => {
    const newFile = {
      file,
      audioName,
      date,
      audioType,
      description,
    };
    onSave(newFile);
    onClose();
  };

  return (
    <div className="upload-modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Upload new file</h2>
          <button onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <div className="upload-section">
            <label htmlFor="file-upload" className="file-upload-label">
              {file ? file.name : 'Upload new file'}
            </label>
            <input
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </div>
          <div className="form-group">
            <label>Audio name</label>
            <input
              type="text"
              value={audioName}
              onChange={(e) => setAudioName(e.target.value)}
            />
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <label>Audio type</label>
            <input
              type="text"
              value={audioType}
              onChange={(e) => setAudioType(e.target.value)}
            />
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={onClose} className="cancel-button">Cancel</button>
          <button onClick={handleSave} className="save-button">Upload</button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
