import React, { useState } from 'react';
import './ArtisticFieldSelector.sass'

const ArtisticFieldSelector = ({ setSearchFields }) => {
  const allFields = ['Music', 'Theater', 'Dance', 'Painting', 'Sculpture', 'Photography', 'Film', 'Literature'];
  const [filteredFields, setFilteredFields] = useState(allFields);
  const [selectedFields, setSelectedFields] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const filtered = allFields.filter(field =>
      field.toLowerCase().includes(value.toLowerCase()) &&
      !selectedFields.includes(field)
    );
    setFilteredFields(filtered);
    setShowDropdown(true);
  };

  const handleAddField = (field) => {
    if (!selectedFields.includes(field)) {
      const updatedFields = [...selectedFields, field];
      setSelectedFields(updatedFields);
      setSearchFields(updatedFields);
      setInputValue(''); 
      setFilteredFields(allFields.filter(fld => fld !== field));
    }
  };
  

  const handleRemoveField = (field) => {
    const updatedFields = selectedFields.filter(f => f !== field);
    setSelectedFields(updatedFields);
    setSearchFields(updatedFields);  
    setFilteredFields([...filteredFields, field]);
  };

  const handleSelectClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="field-selector">
      <label>Artistic Field</label>
      <div className="field-input">
        <ul className="field-list">
          {selectedFields.map((field) => (
            <li key={field} className="field-item">
              {field}
              <button onClick={() => handleRemoveField(field)}>×</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setShowDropdown(true)}
        />
        <img src='./src/assets/DownArrow.svg' className="dropdown-icon" onClick={handleSelectClick} />
        {showDropdown && filteredFields.length > 0 && (
          <ul className="dropdown">
            {filteredFields.map((field) => (
              <li key={field} onClick={() => handleAddField(field)}>
                {field}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ArtisticFieldSelector;
