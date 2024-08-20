import React, { useState } from 'react';
import './LanguageSelector.sass'

const LanguageSelector = ({ setLanguages }) => {
  const allLanguages = [
    "Mandarin Chinese", "Spanish", "English", "Hindi", "Arabic", "Bengali", "Portuguese", "Russian", "Japanese", "Western Punjabi",
    "Marathi", "Telugu", "Wu Chinese", "Turkish", "Korean", "French", "German", "Vietnamese", "Tamil", "Urdu", "Javanese",
    "Italian", "Egyptian Arabic", "Gujarati", "Iranian Persian", "Bhojpuri", "Southern Min", "Hakka Chinese", "Jin Chinese",
    "Hausa", "Kannada", "Indonesian", "Polish", "Yoruba", "Xiang Chinese", "Malayalam", "Odia", "Maithili", "Burmese",
    "Eastern Punjabi", "Sunda", "Sudanese Arabic", "Algerian Arabic", "Moroccan Arabic", "Ukrainian", "Igbo", "Northern Uzbek",
    "Sindhi", "North Levantine Arabic", "Romanian", "Tagalog", "Dutch", "Saʽidi Arabic", "Gan Chinese", "Amharic", "Northern Pashto",
    "Magahi", "Thai", "Saraiki", "Khmer", "Chhattisgarhi", "Somali", "Malagasy", "Cebuano", "Nepali", "Mesopotamian Arabic",
    "Assamese", "Sinhalese", "Northern Kurdish", "Hejazi Arabic", "Nigerian Fulfulde", "Bavarian", "South Azerbaijani",
    "Greek", "Chittagonian", "Kazakh", "Deccan", "Hungarian", "Kinyarwanda", "Zulu", "South Levantine Arabic", "Tunisian Arabic",
    "Sanaani Spoken Arabic", "Min Bei Chinese", "Min Dong Chinese", "Southern Kurdish", "Czech", "Uyghur", "Sylheti", "Zulu",
    "Haitian Creole", "Belarusian", "Balochi", "Mandinka", "Shona", "Kirundi", "Swedish", "Hmong", "Catalan", "Mossi", "Xhosa",
    "Afrikaans", "Lithuanian", "Serbo-Croatian", "Slovak", "Lombard", "Shan", "Tachelhit", "Quechua", "Armenian", "Azerbaijani",
    "Fijian", "Finnish", "Georgian", "Hebrew", "Khasi", "Lao", "Latvian", "Luxembourgish", "Maltese", "Māori", "Marshallese",
    "Mongolian", "Navajo", "Samoan", "Sardinian", "Seychellois Creole", "Tongan", "Turkmen", "Welsh", "Zulu"
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
