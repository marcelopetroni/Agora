import React, { useState } from 'react';
import './LanguageSelector.sass'

const LanguageSelector = () => {
  const allLanguages = ['English', 'Portuguese', 'Spanish', 'French', 'German', 'Italian', 'Mandarin', 'Japanese'];
  const [filteredLanguages, setFilteredLanguages] = useState(allLanguages);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const filtered = allLanguages.filter(language =>
      language.toLowerCase().includes(value.toLowerCase()) &&
      !selectedLanguages.includes(language)
    );
    setFilteredLanguages(filtered);
    setShowDropdown(true);
  };

  const handleAddLanguage = (language) => {
    if (!selectedLanguages.includes(language)) {
      setSelectedLanguages([...selectedLanguages, language]);
      setInputValue('');
      setFilteredLanguages(allLanguages.filter(lang => lang !== language));
    }
  };

  const handleRemoveLanguage = (language) => {
    setSelectedLanguages(selectedLanguages.filter(lang => lang !== language));
    setFilteredLanguages([...filteredLanguages, language]);
  };

  const handleSelectClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="language-selector">
      <label>Languages Spoken</label>
      <div className="language-input">
        <ul className="language-list">
          {selectedLanguages.map((language) => (
            <li key={language} className="language-item">
              {language}
              <button onClick={() => handleRemoveLanguage(language)}>×</button>
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
        {showDropdown && filteredLanguages.length > 0 && (
          <ul className="dropdown">
            {filteredLanguages.map((language) => (
              <li key={language} onClick={() => handleAddLanguage(language)}>
                {language}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
