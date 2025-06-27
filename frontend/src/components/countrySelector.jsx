// src/components/CountrySelect.jsx
import React, { useMemo } from 'react';
import Select from 'react-select';
import countries from 'i18n-iso-countries';
import ptBr from 'i18n-iso-countries/langs/pt.json';

// registra nomenclatura em português
countries.registerLocale(ptBr);

const CountrySelect = ({ value, onChange, placeholder = '' }) => {
  // monta lista [{ value: 'BR', label: 'Brasil' }, …]
  const options = useMemo(() => {
    const names = countries.getNames('pt', { select: 'official' });
    return Object.entries(names).map(([code, name]) => ({
      value: code,
      label: name,
    }));
  }, []);

  // encontra a opção atualmente selecionada
  const selectedOption = options.find(opt => opt.value === value) || null;

  return (
    <Select
      options={options}
      value={selectedOption}
      onChange={opt => onChange(opt?.value)}
      placeholder={placeholder}
      isSearchable

      // mensagens em português
      noOptionsMessage={() => 'Nenhum país encontrado'}
      loadingMessage={() => 'Carregando países...'}

      // aplica suas classes Tailwind-like
      className=""
      classNames={{
        control: () =>
          'ag-px-5 ag-pb-1 ag-rounded-xl ag-border ag-border-gray-200 ag-shadow-none ag-max-w-[200px] ag-min-w-[200px]',
        valueContainer: () =>
          'ag-overflow-hidden ag-whitespace-nowrap ag-text-ellipsis',
        input: () => 'ag-m-0 ag-p-0',
        placeholder: () => 'ag-text-gray-400',
        menu: () =>
          'ag-rounded-lg ag-overflow-hidden ag-border ag-border-gray-200',
        menuList: () => 'ag-p-0',
        option: ({ isFocused, isSelected }) =>
          `ag-px-4 ag-py-2 ag-cursor-pointer ${
            isSelected
              ? 'ag-bg-gray-300 ag-text-gray-800'
              : isFocused
              ? 'ag-bg-gray-200 ag-text-black'
              : 'ag-text-gray-700'
          }`,
        singleValue: () => 'ag-text-gray-800 ag-truncate ',
        dropdownIndicator: () =>
          'ag-text-gray-500 hover:ag-text-gray-700',
        clearIndicator: () => 'ag-text-gray-500 hover:ag-text-gray-700',
      }}

      // sobrescreve as cores padrão do React-Select
      theme={theme => ({
        ...theme,
        borderRadius: 15,
        colors: {
          ...theme.colors,
          primary25: '#F3F4F6', // cinza claro no hover
          primary:   '#9CA3AF', // cinza médio na borda em foco
        },
      })}
    />
  );
};

export default CountrySelect;
