import { useState } from 'react'

import { SearchInputContainer } from './styles'

interface IProps {
  handleSearch: (query: string) => void
  valueSearch: string
}

export function SearchInput({ handleSearch, valueSearch }: IProps) {
  const [inputValue, setInputValue] = useState<string>(valueSearch)

  return (
    <SearchInputContainer>
      <input
        type="text"
        placeholder="Buscar filme pelo nome"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={() => handleSearch(inputValue)}
      />
      <button onClick={() => handleSearch(inputValue)}>
        <img src="/search-icon.svg" alt="search icon" />
      </button>
    </SearchInputContainer>
  )
}
