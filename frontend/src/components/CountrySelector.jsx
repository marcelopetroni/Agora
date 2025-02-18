import React, { useState } from 'react';
import './CountrySelector.sass';

const countries = [
    "Afeganistão", "Albânia", "Argélia", "Andorra", "Angola", "Antígua e Barbuda", "Argentina", "Armênia", "Austrália",
    "Áustria", "Azerbaijão", "Bahamas", "Bahrein", "Bangladesh", "Barbados", "Bielorrússia", "Bélgica", "Belize", "Benim",
    "Butão", "Bolívia", "Bósnia e Herzegovina", "Botsuana", "Brasil", "Brunei", "Bulgária", "Burkina Faso", "Burundi",
    "Cabo Verde", "Camboja", "Camarões", "Canadá", "República Centro-Africana", "Chade", "Chile", "China", "Colômbia",
    "Comores", "Congo, República Democrática do", "Congo, República do", "Costa Rica", "Costa do Marfim", "Croácia",
    "Cuba", "Chipre", "República Tcheca", "Dinamarca", "Djibuti", "Dominica", "República Dominicana", "Timor-Leste", "Equador",
    "Egito", "El Salvador", "Guiné Equatorial", "Eritreia", "Estônia", "Eswatini", "Etiópia", "Fiji", "Finlândia", "França",
    "Gabão", "Gâmbia", "Geórgia", "Alemanha", "Gana", "Grécia", "Granada", "Guatemala", "Guiné", "Guiné-Bissau", "Guiana",
    "Haiti", "Honduras", "Hungria", "Islândia", "Índia", "Indonésia", "Irã", "Iraque", "Irlanda", "Israel", "Itália", "Jamaica",
    "Japão", "Jordânia", "Cazaquistão", "Quênia", "Kiribati", "Coreia do Norte", "Coreia do Sul", "Kosovo", "Kuwait", "Quirguistão",
    "Laos", "Letônia", "Líbano", "Lesoto", "Libéria", "Líbia", "Liechtenstein", "Lituânia", "Luxemburgo", "Madagascar",
    "Malaui", "Malásia", "Maldivas", "Mali", "Malta", "Ilhas Marshall", "Mauritânia", "Maurício", "México", "Micronésia",
    "Moldávia", "Mônaco", "Mongólia", "Montenegro", "Marrocos", "Moçambique", "Mianmar", "Namíbia", "Nauru", "Nepal",
    "Países Baixos", "Nova Zelândia", "Nicarágua", "Níger", "Nigéria", "Macedônia do Norte", "Noruega", "Omã", "Paquistão", "Palau",
    "Panamá", "Papua-Nova Guiné", "Paraguai", "Peru", "Filipinas", "Polônia", "Portugal", "Catar", "Romênia", "Rússia",
    "Ruanda", "São Cristóvão e Névis", "Santa Lúcia", "São Vicente e Granadinas", "Samoa", "San Marino", "São Tomé e Príncipe",
    "Arábia Saudita", "Senegal", "Sérvia", "Seicheles", "Serra Leoa", "Singapura", "Eslováquia", "Eslovênia", "Ilhas Salomão",
    "Somália", "África do Sul", "Sudão do Sul", "Espanha", "Sri Lanka", "Sudão", "Suriname", "Suécia", "Suíça", "Síria",
    "Taiwan", "Tadjiquistão", "Tanzânia", "Tailândia", "Togo", "Tonga", "Trinidad e Tobago", "Tunísia", "Turquia", "Turcomenistão",
    "Tuvalu", "Uganda", "Ucrânia", "Emirados Árabes Unidos", "Reino Unido", "Estados Unidos", "Uruguai", "Uzbequistão", "Vanuatu",
    "Cidade do Vaticano", "Venezuela", "Vietnã", "Iêmen", "Zâmbia", "Zimbábue"
];

export default function CountrySelector({ setCountry }) {
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const [inputValue, setInputValue] = useState('');
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        setDropdownVisible(true);
        setFilteredCountries(
            countries.filter((country) =>
                country.toLowerCase().startsWith(value.toLowerCase())
            )
        );
    };

    const handleCountrySelect = (country) => {
        setInputValue(country);
        setCountry(country);  
        setDropdownVisible(false);
    };

    return (
        <div className="country-selector-container">
            <label className="country-selector-label">País</label>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={() => setDropdownVisible(true)}
                className="country-selector-input"
            />
            {isDropdownVisible && (
                <ul className="country-selector-dropdown">
                    {filteredCountries.map((country, index) => (
                        <li
                            key={index}
                            onClick={() => handleCountrySelect(country)}
                            className="country-selector-item"
                        >
                            {country}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
