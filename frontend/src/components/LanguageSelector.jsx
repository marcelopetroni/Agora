import React, { useState } from 'react';
import './LanguageSelector.sass'

const LanguageSelector = ({ setLanguages }) => {
  const allLanguages = [
    "Chinês Mandarim", "Espanhol", "Inglês", "Hindi", "Árabe", "Bengali", "Português", "Russo", "Japonês", "Punjabi Ocidental",
    "Marathi", "Telugu", "Chinês Wu", "Turco", "Coreano", "Francês", "Alemão", "Vietnamita", "Tâmil", "Urdu", "Javanês",
    "Italiano", "Árabe Egípcio", "Gujarati", "Persa Iraniano", "Bhojpuri", "Min do Sul", "Chinês Hakka", "Chinês Jin",
    "Hauçá", "Canarês", "Indonésio", "Polonês", "Iorubá", "Chinês Xiang", "Malaiala", "Odia", "Maithili", "Birmanês",
    "Punjabi Oriental", "Sundanês", "Árabe Sudanês", "Árabe Argelino", "Árabe Marroquino", "Ucraniano", "Igbo", "Usbeque do Norte",
    "Sindi", "Árabe do Levante Norte", "Romeno", "Tagalo", "Holandês", "Árabe Saídi", "Chinês Gan", "Amárico", "Pachto do Norte",
    "Magahi", "Tailandês", "Saraiki", "Khmer", "Chhattisgarhi", "Somali", "Malgaxe", "Cebuano", "Nepalês", "Árabe Mesopotâmico",
    "Assamês", "Cingalês", "Curdo do Norte", "Árabe Hejazi", "Fulfulde Nigeriano", "Bávaro", "Azerbaijano do Sul",
    "Grego", "Chittagonian", "Cazaque", "Deccan", "Húngaro", "Quiniaruanda", "Zulu", "Árabe do Levante Sul", "Árabe Tunisiano",
    "Árabe Sanaani Falado", "Chinês Min Bei", "Chinês Min Dong", "Curdo do Sul", "Tcheco", "Uigur", "Silheti", "Zulu",
    "Crioulo Haitiano", "Bielorrusso", "Balochi", "Mandinga", "Shona", "Kirundi", "Sueco", "Hmong", "Catalão", "Mossi", "Xhosa",
    "Africâner", "Lituano", "Servo-Croata", "Eslovaco", "Lombardo", "Shan", "Tachelhit", "Quíchua", "Armênio", "Azeri",
    "Fijiano", "Finlandês", "Georgiano", "Hebraico", "Khasi", "Lao", "Letão", "Luxemburguês", "Maltês", "Maori", "Marshalês",
    "Mongol", "Navajo", "Samoano", "Sardo", "Crioulo Seichelense", "Tonganês", "Turcomeno", "Galês", "Zulu"
    ];
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
      const updatedLanguages = [...selectedLanguages, language];
      setSelectedLanguages(updatedLanguages);
      setLanguages(updatedLanguages);
      setInputValue('');
      setFilteredLanguages(allLanguages.filter(lang => lang !== language));
    }
  };

  const handleRemoveLanguage = (language) => {
    const updatedLanguages = selectedLanguages.filter(lang => lang !== language);
    setSelectedLanguages(updatedLanguages);
    setLanguages(updatedLanguages); 
    setFilteredLanguages([...filteredLanguages, language]);
  };

  const handleSelectClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="language-selector">
      <label>Idiomas falados</label>
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
        <img src='/DownArrow.svg' className="dropdown-icon" onClick={handleSelectClick} />
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
