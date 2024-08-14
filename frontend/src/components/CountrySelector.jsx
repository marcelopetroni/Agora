import React, { useState } from 'react';

const CountrySelector = () => {
  const allCountries = ['United States', 'Brazil', 'Canada', 'France', 'Germany', 'Australia', 'India', 'China', 'Japan', 'United Kingdom']; // Lista de países disponíveis
  const [filteredCountries, setFilteredCountries] = useState(allCountries); // Países filtrados
  const [selectedCountry, setSelectedCountry] = useState(''); // País selecionado
  const [inputValue, setInputValue] = useState(''); // Valor do input
  const [showDropdown, setShowDropdown] = useState(false); // Controla a exibição do dropdown

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const filtered = allCountries.filter(country =>
      country.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCountries(filtered);
    setShowDropdown(true);
  };

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setInputValue(country);
    setShowDropdown(false);
  };

  const handleSelectClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="country-selector">
      <label>Country</label>
      <div className="country-input" onClick={handleSelectClick} >
        {showDropdown && filteredCountries.length > 0 && (
            <ul className="dropdown">
              {filteredCountries.map((country) => (
                <li key={country} onClick={() => handleSelectCountry(country)}>
                  {country}
                </li>
              ))}
            </ul>
          )}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        </div> 
      </div>
  );
};

export default CountrySelector;
